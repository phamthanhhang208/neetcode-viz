import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import type { ProblemStatus } from '@/data/types';

interface ProgressState {
  statuses: Record<string, ProblemStatus>;
  lastVisited: string | null;
  loaded: boolean;
  setStatus: (problemId: string, status: ProblemStatus) => void;
  getStatus: (problemId: string) => ProblemStatus;
  getCompletedCount: (problemIds?: string[]) => number;
  setLastVisited: (problemId: string) => void;
  fetchProgress: () => Promise<void>;
}

export const useProgress = create<ProgressState>((set, get) => ({
  statuses: {},
  lastVisited: null,
  loaded: false,

  fetchProgress: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      // Not logged in — fall back to localStorage
      try {
        const stored = localStorage.getItem('neetcode-progress');
        if (stored) {
          const parsed = JSON.parse(stored);
          set({ statuses: parsed.state?.statuses ?? {}, lastVisited: parsed.state?.lastVisited ?? null, loaded: true });
          return;
        }
      } catch { /* ignore */ }
      set({ loaded: true });
      return;
    }

    const { data } = await supabase
      .from('problem_progress')
      .select('problem_id, status')
      .eq('user_id', user.id);

    if (data) {
      const statuses: Record<string, ProblemStatus> = {};
      for (const row of data) {
        statuses[row.problem_id] = row.status as ProblemStatus;
      }
      set({ statuses, loaded: true });
    } else {
      set({ loaded: true });
    }
  },

  setStatus: (problemId, status) => {
    // Update local state immediately
    set((state) => ({
      statuses: { ...state.statuses, [problemId]: status },
    }));

    // Persist to Supabase (fire and forget)
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        // Not logged in — save to localStorage as fallback
        const { statuses, lastVisited } = get();
        localStorage.setItem('neetcode-progress', JSON.stringify({ state: { statuses, lastVisited } }));
        return;
      }

      await supabase
        .from('problem_progress')
        .upsert(
          { user_id: user.id, problem_id: problemId, status },
          { onConflict: 'user_id,problem_id' },
        );
    })();
  },

  getStatus: (problemId) => {
    return get().statuses[problemId] ?? 'todo';
  },

  getCompletedCount: (problemIds?) => {
    const { statuses } = get();
    if (problemIds) {
      return problemIds.filter((id) => statuses[id] === 'done').length;
    }
    return Object.values(statuses).filter((s) => s === 'done').length;
  },

  setLastVisited: (problemId) => {
    set({ lastVisited: problemId });
  },
}));
