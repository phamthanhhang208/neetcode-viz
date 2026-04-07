import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { BinarySearchVizState, ArrayVizState } from '@/data/types';

interface Props {
  data: BinarySearchVizState;
  array?: ArrayVizState;
}

export default function BinarySearchViz({ data, array }: Props) {
  const { lo, hi, mid, target, eliminated } = data;
  const values = array?.values ?? [];

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Binary Search</h4>
      <div className="mb-3 text-xs font-mono text-text-secondary">
        Target: <span className="text-accent-yellow font-bold">{target}</span>
      </div>
      <div className="flex flex-wrap gap-1 items-end">
        {values.map((val, i) => {
          const isLo = i === lo;
          const isHi = i === hi;
          const isMid = i === mid;
          const inRange = i >= lo && i <= hi;
          const isEliminated = !inRange;

          return (
            <motion.div
              key={i}
              layout
              className="flex flex-col items-center"
              animate={{ opacity: isEliminated ? 0.3 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Markers above */}
              <div className="h-5 flex items-center justify-center">
                {isMid && (
                  <motion.span
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-[10px] font-mono text-accent-yellow font-bold"
                  >
                    mid
                  </motion.span>
                )}
              </div>
              <div
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded font-mono text-sm font-medium border transition-all duration-300',
                  isMid && 'border-accent-yellow bg-accent-yellow/20 text-accent-yellow shadow-[0_0_10px_rgba(220,220,170,0.2)]',
                  !isMid && inRange && 'border-accent-blue/50 bg-accent-blue/10 text-text-primary',
                  isEliminated && 'border-editor-border bg-editor-bg text-text-muted',
                )}
              >
                {val}
              </div>
              <span className="text-[10px] text-text-muted mt-1 font-mono">{i}</span>
              <div className="h-4 flex items-center">
                {isLo && <span className="text-[10px] font-mono text-accent-green font-bold">lo</span>}
                {isHi && <span className="text-[10px] font-mono text-accent-red font-bold">hi</span>}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
