import type { Difficulty } from '@/data/types';

/** Merge class names, filtering out falsy values. */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Returns a Tailwind text color class for the given difficulty. */
export function difficultyColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-diff-easy';
    case 'Medium':
      return 'text-diff-medium';
    case 'Hard':
      return 'text-diff-hard';
  }
}

/** Returns Tailwind bg + text color classes for a difficulty badge. */
export function difficultyBgColor(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'Easy':
      return 'bg-diff-easy/20 text-diff-easy';
    case 'Medium':
      return 'bg-diff-medium/20 text-diff-medium';
    case 'Hard':
      return 'bg-diff-hard/20 text-diff-hard';
  }
}
