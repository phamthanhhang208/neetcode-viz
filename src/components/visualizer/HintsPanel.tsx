import { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HintsPanelProps {
  hints: string[];
}

export default function HintsPanel({ hints }: HintsPanelProps) {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(0);

  if (hints.length === 0) return null;

  return (
    <div className="border-t border-editor-border bg-editor-sidebar">
      <button
        onClick={() => { setOpen(!open); if (!open && revealed === 0) setRevealed(1); }}
        className="w-full flex items-center gap-2 px-4 py-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        <Lightbulb size={12} />
        <span>Hints ({hints.length})</span>
        <ChevronDown size={12} className={cn('ml-auto transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 pb-3 space-y-2">
          {hints.slice(0, revealed).map((hint, i) => (
            <p key={i} className="text-xs text-text-secondary pl-4 border-l-2 border-accent-yellow/30">
              {hint}
            </p>
          ))}
          {revealed < hints.length && (
            <button
              onClick={() => setRevealed(revealed + 1)}
              className="text-[10px] text-accent-blue hover:underline"
            >
              Reveal next hint
            </button>
          )}
        </div>
      )}
    </div>
  );
}
