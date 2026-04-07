import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { HashMapVizState } from '@/data/types';

interface Props {
  data: HashMapVizState;
}

export default function HashMapViz({ data }: Props) {
  const { entries, highlighted, justAdded, justRemoved } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">HashMap</h4>
      {entries.length === 0 ? (
        <div className="border-2 border-dashed border-editor-border rounded-lg p-6 text-center text-text-muted text-xs">
          Empty Map
        </div>
      ) : (
        <div className="space-y-1">
          <AnimatePresence>
            {entries.map(([key, value]) => {
              const isHighlighted = highlighted === key;
              const isJustAdded = justAdded === key;

              return (
                <motion.div
                  key={key}
                  layout
                  initial={isJustAdded ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    'flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs border transition-all duration-200',
                    isHighlighted
                      ? 'border-accent-yellow bg-accent-yellow/10'
                      : isJustAdded
                        ? 'border-accent-green bg-accent-green/10'
                        : 'border-editor-border bg-editor-active',
                  )}
                >
                  <span className="text-accent-orange">{key}</span>
                  <span className="text-text-muted">&rarr;</span>
                  <span className="text-accent-light-blue">{JSON.stringify(value)}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
