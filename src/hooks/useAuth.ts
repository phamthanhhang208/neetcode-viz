import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  initialized: boolean;
  init: () => void;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  error: null,
  initialized: false,

  init: () => {
    if (get().initialized) return;
    set({ initialized: true });

    supabase.auth.getSession().then(({ data: { session } }) => {
      set({ user: session?.user ?? null, loading: false });
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null, loading: false });
    });
  },

  signUp: async (email, password) => {
    set({ loading: true, error: null });
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      set({ error: error.message, loading: false });
    } else {
      set({ loading: false });
    }
  },

  signIn: async (email, password) => {
    set({ loading: true, error: null });
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      set({ error: error.message, loading: false });
    } else {
      set({ loading: false });
    }
  },

  signInWithGoogle: async () => {
    set({ loading: true, error: null });
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/flashcards` },
    });
    if (error) {
      set({ error: error.message, loading: false });
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  clearError: () => set({ error: null }),
}));
