import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ArrayVizState } from '@/data/types';

interface Props {
  data: ArrayVizState;
  pointers?: Record<string, number>;
}

export default function ArrayViz({ data, pointers }: Props) {
  const { values, highlights = [], found = [], comparing = [], swapping, sorted = [], labels = {} } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Array</h4>
      <div className="flex flex-wrap gap-1 items-end">
        {values.map((val, i) => {
          const isHighlighted = highlights.includes(i);
          const isFound = found.includes(i);
          const isComparing = comparing.includes(i);
          const isSorted = sorted.includes(i);
          const isSwapping = swapping && (swapping[0] === i || swapping[1] === i);

          return (
            <motion.div
              key={i}
              layout
              layoutId={`array-${i}`}
              className="flex flex-col items-center"
              animate={isSwapping ? { y: [0, -20, 0] } : {}}
              transition={{ duration: 0.3 }}
            >
              {/* Pointer labels above */}
              {pointers && (
                <div className="h-5 flex flex-col items-center">
                  {Object.entries(pointers)
                    .filter(([, idx]) => idx === i)
                    .map(([name]) => (
                      <span key={name} className="text-[10px] font-mono text-accent-blue font-bold">
                        {name}
                      </span>
                    ))}
                </div>
              )}
              <div
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded font-mono text-sm font-medium border transition-all duration-200',
                  isFound && 'border-accent-green bg-accent-green/20 text-accent-green',
                  isHighlighted && !isFound && 'border-accent-yellow bg-accent-yellow/10 text-accent-yellow',
                  isComparing && !isFound && !isHighlighted && 'border-accent-blue bg-accent-blue/10 text-accent-blue',
                  isSorted && !isFound && !isHighlighted && !isComparing && 'border-accent-green/30 bg-accent-green/5 text-text-secondary',
                  !isFound && !isHighlighted && !isComparing && !isSorted && 'border-editor-border bg-editor-active text-text-primary',
                )}
              >
                {val}
              </div>
              <span className="text-[10px] text-text-muted mt-1 font-mono">{i}</span>
              {labels[i] && (
                <span className="text-[10px] font-mono text-accent-cyan font-bold">{labels[i]}</span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
