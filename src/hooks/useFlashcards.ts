import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { Flashcard, FlashcardStack, ReviewRating } from '@/data/flashcard-types';
import { SEED_STACK, SEED_CARDS } from '@/data/seed-flashcards';

interface FlashcardsState {
  stacks: FlashcardStack[];
  cards: Record<string, Flashcard[]>; // stackId → cards
  loading: boolean;
  seeded: boolean;

  fetchStacks: () => Promise<void>;
  fetchCards: (stackId: string) => Promise<void>;
  addStack: (name: string, color: string) => Promise<string | null>;
  deleteStack: (id: string) => Promise<void>;
  addCard: (stackId: string, front: string, back: string) => Promise<void>;
  updateCard: (id: string, updates: { front?: string; back?: string }) => Promise<void>;
  deleteCard: (id: string, stackId: string) => Promise<void>;
  importCards: (cards: { front: string; back: string; stackId: string }[]) => Promise<void>;
  reviewCard: (cardId: string, stackId: string, rating: ReviewRating) => Promise<void>;
  getDueCards: (stackId: string) => Flashcard[];
  getStackStats: (stackId: string) => { total: number; due: number };
  seedIfEmpty: (userId: string) => Promise<void>;
}

function computeSM2(card: Flashcard, rating: ReviewRating) {
  let { interval_days, ease_factor, repetitions } = card;

  switch (rating) {
    case 'again':
      repetitions = 0;
      interval_days = 0.0007; // ~1 minute
      ease_factor = Math.max(1.3, ease_factor - 0.2);
      break;
    case 'hard':
      interval_days = Math.max(0.01, interval_days * 1.2);
      ease_factor = Math.max(1.3, ease_factor - 0.15);
      break;
    case 'easy':
      repetitions += 1;
      if (repetitions === 1) {
        interval_days = 1;
      } else if (repetitions === 2) {
        interval_days = 3;
      } else {
        interval_days = interval_days * ease_factor;
      }
      ease_factor += 0.1;
      break;
  }

  const next_review = new Date(Date.now() + interval_days * 86400000).toISOString();
  return { interval_days, ease_factor, repetitions, next_review };
}

export const useFlashcards = create<FlashcardsState>((set, get) => ({
  stacks: [],
  cards: {},
  loading: false,
  seeded: false,

  fetchStacks: async () => {
    set({ loading: true });
    const { data } = await supabase
      .from('flashcard_stacks')
      .select('*')
      .order('created_at', { ascending: true });
    set({ stacks: data ?? [], loading: false });
  },

  fetchCards: async (stackId) => {
    const { data } = await supabase
      .from('flashcards')
      .select('*')
      .eq('stack_id', stackId)
      .order('created_at', { ascending: true });
    set((s) => ({ cards: { ...s.cards, [stackId]: data ?? [] } }));
  },

  addStack: async (name, color) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data, error } = await supabase
      .from('flashcard_stacks')
      .insert({ name, color, user_id: user.id })
      .select()
      .single();
    if (data && !error) {
      set((s) => ({ stacks: [...s.stacks, data] }));
      return data.id;
    }
    return null;
  },

  deleteStack: async (id) => {
    await supabase.from('flashcard_stacks').delete().eq('id', id);
    set((s) => ({
      stacks: s.stacks.filter((st) => st.id !== id),
      cards: { ...s.cards, [id]: undefined } as any,
    }));
  },

  addCard: async (stackId, front, back) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase
      .from('flashcards')
      .insert({ stack_id: stackId, front, back, user_id: user.id })
      .select()
      .single();
    if (data) {
      set((s) => ({
        cards: { ...s.cards, [stackId]: [...(s.cards[stackId] ?? []), data] },
      }));
    }
  },

  updateCard: async (id, updates) => {
    const { data } = await supabase
      .from('flashcards')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (data) {
      set((s) => ({
        cards: Object.fromEntries(
          Object.entries(s.cards).map(([sid, cards]) => [
            sid,
            cards?.map((c) => (c.id === id ? data : c)),
          ]),
        ),
      }));
    }
  },

  deleteCard: async (id, stackId) => {
    await supabase.from('flashcards').delete().eq('id', id);
    set((s) => ({
      cards: { ...s.cards, [stackId]: s.cards[stackId]?.filter((c) => c.id !== id) ?? [] },
    }));
  },

  importCards: async (cards) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const rows = cards.map((c) => ({
      stack_id: c.stackId,
      front: c.front,
      back: c.back,
      user_id: user.id,
    }));
    await supabase.from('flashcards').insert(rows);
    // Refresh all affected stacks
    const stackIds = [...new Set(cards.map((c) => c.stackId))];
    for (const sid of stackIds) {
      await get().fetchCards(sid);
    }
  },

  reviewCard: async (cardId, stackId, rating) => {
    const cards = get().cards[stackId] ?? [];
    const card = cards.find((c) => c.id === cardId);
    if (!card) return;

    const updates = computeSM2(card, rating);
    const { data } = await supabase
      .from('flashcards')
      .update(updates)
      .eq('id', cardId)
      .select()
      .single();

    if (data) {
      set((s) => ({
        cards: {
          ...s.cards,
          [stackId]: s.cards[stackId]?.map((c) => (c.id === cardId ? data : c)) ?? [],
        },
      }));
    }
  },

  getDueCards: (stackId) => {
    const cards = get().cards[stackId] ?? [];
    const now = new Date().toISOString();
    return cards.filter((c) => c.next_review <= now);
  },

  getStackStats: (stackId) => {
    const cards = get().cards[stackId] ?? [];
    const now = new Date().toISOString();
    return {
      total: cards.length,
      due: cards.filter((c) => c.next_review <= now).length,
    };
  },

  seedIfEmpty: async (userId) => {
    if (get().seeded) return;
    set({ seeded: true });

    const { data: existing } = await supabase
      .from('flashcard_stacks')
      .select('id')
      .eq('user_id', userId)
      .limit(1);

    if (existing && existing.length > 0) return;

    const { data: stack } = await supabase
      .from('flashcard_stacks')
      .insert({ name: SEED_STACK.name, color: SEED_STACK.color, user_id: userId })
      .select()
      .single();

    if (stack) {
      const rows = SEED_CARDS.map((c) => ({
        stack_id: stack.id,
        front: c.front,
        back: c.back,
        user_id: userId,
      }));
      await supabase.from('flashcards').insert(rows);
      await get().fetchStacks();
    }
  },
}));
