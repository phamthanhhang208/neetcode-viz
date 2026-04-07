import { cn, difficultyBgColor } from '@/lib/utils';
import type { Difficulty } from '@/data/types';

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className={cn('px-2 py-0.5 rounded text-xs font-medium', difficultyBgColor(difficulty))}>
      {difficulty}
    </span>
  );
}
