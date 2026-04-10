import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

interface CustomList {
  id: string;
  user_id: string;
  name: string;
  description: string;
  color: string;
  created_at: string;
}

interface FavoritesState {
  favorites: string[];
  lists: CustomList[];
  listItems: Record<string, string[]>;
  loaded: boolean;

  fetchFavorites: () => Promise<void>;
  toggleFavorite: (problemId: string) => Promise<void>;
  isFavorited: (problemId: string) => boolean;

  fetchLists: () => Promise<void>;
  createList: (name: string, description?: string, color?: string) => Promise<string | null>;
  deleteList: (listId: string) => Promise<void>;

  fetchListItems: (listId: string) => Promise<void>;
  addToList: (listId: string, problemId: string) => Promise<void>;
  removeFromList: (listId: string, problemId: string) => Promise<void>;
  isInList: (listId: string, problemId: string) => boolean;
}

export const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: [],
  lists: [],
  listItems: {},
  loaded: false,

  fetchFavorites: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      try {
        const stored = localStorage.getItem('neetcode-favorites');
        if (stored) set({ favorites: JSON.parse(stored), loaded: true });
        else set({ loaded: true });
      } catch { set({ loaded: true }); }
      return;
    }
    const { data } = await supabase
      .from('favorite_problems')
      .select('problem_id')
      .eq('user_id', user.id);
    set({ favorites: data?.map((r) => r.problem_id) ?? [], loaded: true });
  },

  toggleFavorite: async (problemId) => {
    const { favorites } = get();
    const isFav = favorites.includes(problemId);
    const next = isFav ? favorites.filter((id) => id !== problemId) : [...favorites, problemId];
    set({ favorites: next });

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      localStorage.setItem('neetcode-favorites', JSON.stringify(next));
      return;
    }
    if (isFav) {
      await supabase.from('favorite_problems').delete().eq('user_id', user.id).eq('problem_id', problemId);
    } else {
      await supabase.from('favorite_problems').insert({ user_id: user.id, problem_id: problemId });
    }
  },

  isFavorited: (problemId) => get().favorites.includes(problemId),

  fetchLists: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { data } = await supabase
      .from('custom_lists')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true });
    set({ lists: data ?? [] });
  },

  createList: async (name, description = '', color = '#569cd6') => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    const { data } = await supabase
      .from('custom_lists')
      .insert({ user_id: user.id, name, description, color })
      .select()
      .single();
    if (data) set((s) => ({ lists: [...s.lists, data] }));
    return data?.id ?? null;
  },

  deleteList: async (listId) => {
    await supabase.from('custom_lists').delete().eq('id', listId);
    set((s) => ({
      lists: s.lists.filter((l) => l.id !== listId),
      listItems: { ...s.listItems, [listId]: undefined } as any,
    }));
  },

  fetchListItems: async (listId) => {
    const { data } = await supabase
      .from('list_items')
      .select('problem_id')
      .eq('list_id', listId)
      .order('added_at', { ascending: true });
    set((s) => ({ listItems: { ...s.listItems, [listId]: data?.map((r) => r.problem_id) ?? [] } }));
  },

  addToList: async (listId, problemId) => {
    const items = get().listItems[listId] ?? [];
    if (items.includes(problemId)) return;
    set((s) => ({ listItems: { ...s.listItems, [listId]: [...items, problemId] } }));
    await supabase.from('list_items').insert({ list_id: listId, problem_id: problemId });
  },

  removeFromList: async (listId, problemId) => {
    set((s) => ({
      listItems: { ...s.listItems, [listId]: (s.listItems[listId] ?? []).filter((id) => id !== problemId) },
    }));
    await supabase.from('list_items').delete().eq('list_id', listId).eq('problem_id', problemId);
  },

  isInList: (listId, problemId) => (get().listItems[listId] ?? []).includes(problemId),
}));
