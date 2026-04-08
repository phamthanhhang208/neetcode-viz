import { cn } from '@/lib/utils';
import type { ProblemStatus } from '@/data/types';
import { Check, Circle } from 'lucide-react';

const styles: Record<ProblemStatus, string> = {
  todo: 'border-editor-border text-editor-border hover:border-text-muted',
  'in-progress': 'border-status-progress text-status-progress bg-status-progress/20',
  done: 'border-status-done text-status-done bg-status-done/20',
};

const CYCLE: ProblemStatus[] = ['todo', 'in-progress', 'done'];

interface Props {
  status: ProblemStatus;
  onClick?: (nextStatus: ProblemStatus) => void;
}

export default function StatusDot({ status, onClick }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    if (!onClick) return;
    e.stopPropagation();
    e.preventDefault();
    const nextIdx = (CYCLE.indexOf(status) + 1) % CYCLE.length;
    onClick(CYCLE[nextIdx]);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
        styles[status],
        onClick && 'cursor-pointer',
      )}
    >
      {status === 'done' && <Check size={10} strokeWidth={3} />}
      {status === 'in-progress' && <Circle size={6} fill="currentColor" />}
    </div>
  );
}
