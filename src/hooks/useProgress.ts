import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProblemStatus } from '@/data/types';

interface ProgressState {
  statuses: Record<string, ProblemStatus>;
  lastVisited: string | null;
  setStatus: (problemId: string, status: ProblemStatus) => void;
  getStatus: (problemId: string) => ProblemStatus;
  getCompletedCount: (problemIds?: string[]) => number;
  setLastVisited: (problemId: string) => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      statuses: {},
      lastVisited: null,

      setStatus: (problemId: string, status: ProblemStatus) => {
        set((state) => ({
          statuses: {
            ...state.statuses,
            [problemId]: status,
          },
        }));
      },

      getStatus: (problemId: string): ProblemStatus => {
        return get().statuses[problemId] ?? 'todo';
      },

      getCompletedCount: (problemIds?: string[]): number => {
        const { statuses } = get();

        if (problemIds) {
          return problemIds.filter((id) => statuses[id] === 'done').length;
        }

        return Object.values(statuses).filter((s) => s === 'done').length;
      },

      setLastVisited: (problemId: string) => {
        set({ lastVisited: problemId });
      },
    }),
    { name: 'neetcode-progress' },
  ),
);
