import { cn } from '@/lib/utils';
import type { ProblemStatus } from '@/data/types';
import { Check, Circle } from 'lucide-react';

const styles: Record<ProblemStatus, string> = {
  todo: 'border-editor-border text-editor-border',
  'in-progress': 'border-status-progress text-status-progress bg-status-progress/20',
  done: 'border-status-done text-status-done bg-status-done/20',
};

export default function StatusDot({ status }: { status: ProblemStatus }) {
  return (
    <div className={cn('w-5 h-5 rounded-full border-2 flex items-center justify-center', styles[status])}>
      {status === 'done' && <Check size={10} strokeWidth={3} />}
      {status === 'in-progress' && <Circle size={6} fill="currentColor" />}
    </div>
  );
}
