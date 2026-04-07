import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { IntervalsVizState } from '@/data/types';

interface Props {
  data: IntervalsVizState;
}

export default function IntervalsViz({ data }: Props) {
  const { items, highlighted, merged } = data;
  const allVals = [...items.flat(), ...(merged ?? []).flat()];
  const minVal = Math.min(...allVals);
  const maxVal = Math.max(...allVals);
  const range = maxVal - minVal || 1;

  const toPercent = (v: number) => ((v - minVal) / range) * 100;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Intervals</h4>
      <div className="space-y-2 relative">
        {items.map(([start, end], i) => (
          <motion.div key={i} layout className="relative h-6">
            <div
              className={cn(
                'absolute h-full rounded border transition-all duration-200',
                highlighted === i
                  ? 'border-accent-yellow bg-accent-yellow/30'
                  : 'border-accent-blue/50 bg-accent-blue/20',
              )}
              style={{ left: `${toPercent(start)}%`, width: `${toPercent(end) - toPercent(start)}%`, minWidth: 20 }}
            >
              <span className="text-[10px] font-mono text-text-primary px-1">
                [{start},{end}]
              </span>
            </div>
          </motion.div>
        ))}
        {merged && merged.length > 0 && (
          <>
            <div className="text-[10px] text-accent-green mt-2 mb-1">Merged:</div>
            {merged.map(([start, end], i) => (
              <div key={`m-${i}`} className="relative h-6">
                <div
                  className="absolute h-full rounded border border-accent-green/50 bg-accent-green/20"
                  style={{ left: `${toPercent(start)}%`, width: `${toPercent(end) - toPercent(start)}%`, minWidth: 20 }}
                >
                  <span className="text-[10px] font-mono text-accent-green px-1">
                    [{start},{end}]
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
