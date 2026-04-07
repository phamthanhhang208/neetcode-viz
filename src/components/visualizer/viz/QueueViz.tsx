import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QueueVizState } from '@/data/types';

interface Props {
  data: QueueVizState;
}

export default function QueueViz({ data }: Props) {
  const { values, enqueueing, dequeueing } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Queue</h4>
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-text-muted mr-1">front &rarr;</span>
        <AnimatePresence>
          {values.map((val, i) => {
            const isFirst = i === 0;
            const isLast = i === values.length - 1;
            return (
              <motion.div
                key={`${i}-${val}`}
                layout
                initial={isLast && enqueueing !== undefined ? { opacity: 0, x: 20 } : { opacity: 1 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded font-mono text-sm border',
                  isFirst && dequeueing ? 'border-accent-red bg-accent-red/10' : 'border-editor-border bg-editor-active text-text-primary',
                )}
              >
                {String(val)}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <span className="text-[10px] text-text-muted ml-1">&larr; back</span>
      </div>
    </div>
  );
}
