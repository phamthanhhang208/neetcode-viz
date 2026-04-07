import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { StackVizState } from '@/data/types';

interface Props {
  data: StackVizState;
}

export default function StackViz({ data }: Props) {
  const { values, pushing, popping, peeking } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Stack</h4>
      <div className="inline-flex flex-col-reverse items-stretch gap-1 min-w-[100px]">
        <AnimatePresence>
          {values.map((val, i) => {
            const isTop = i === values.length - 1;
            const isPushing = isTop && pushing !== undefined;
            const isPopping = isTop && popping;
            const isPeeking = isTop && peeking;

            return (
              <motion.div
                key={`${i}-${val}`}
                layout
                initial={isPushing ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  'flex items-center justify-center px-4 py-2 rounded font-mono text-sm border transition-all duration-200',
                  isPeeking && 'border-accent-yellow bg-accent-yellow/10 shadow-[0_0_12px_rgba(220,220,170,0.2)]',
                  isPopping && 'border-accent-red bg-accent-red/10',
                  isPushing && 'border-accent-green bg-accent-green/10',
                  !isPeeking && !isPopping && !isPushing && 'border-editor-border bg-editor-active text-text-primary',
                )}
              >
                <span className="flex-1 text-center">{String(val)}</span>
                {isTop && (
                  <span className="text-[10px] text-accent-cyan ml-3 font-bold">&#8592; TOP</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {values.length === 0 && (
          <div className="border-2 border-dashed border-editor-border rounded px-4 py-3 text-center text-text-muted text-xs">
            Empty Stack
          </div>
        )}
      </div>
      <div className="text-[10px] text-text-muted mt-2 font-mono">
        size: {values.length}
      </div>
    </div>
  );
}
