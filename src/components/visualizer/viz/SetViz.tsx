import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { SetVizState } from '@/data/types';

interface Props {
  data: SetVizState;
}

export default function SetViz({ data }: Props) {
  const { values, highlighted, justAdded, checking } = data;

  if (values.length === 0) {
    return (
      <div className="p-4">
        <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Set</h4>
        <div className="text-xs text-text-muted">&#8709; Empty Set</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Set</h4>
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {values.map((val) => {
            const isHighlighted = highlighted === val;
            const isJustAdded = justAdded === val;
            const isChecking = checking === val;

            return (
              <motion.span
                key={String(val)}
                layout
                initial={isJustAdded ? { scale: 0 } : { scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200',
                  isHighlighted && 'border-accent-green bg-accent-green/20 text-accent-green shadow-[0_0_8px_rgba(106,153,85,0.3)]',
                  isChecking && !isHighlighted && 'border-accent-yellow bg-accent-yellow/10 text-accent-yellow',
                  !isHighlighted && !isChecking && 'border-editor-border bg-editor-active text-text-primary',
                )}
              >
                {String(val)}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
