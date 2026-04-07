import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LinkedListVizState } from '@/data/types';

interface Props {
  data: LinkedListVizState;
}

export default function LinkedListViz({ data }: Props) {
  const { nodes, pointers = {}, highlighted = [], newNode, removingNode } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Linked List</h4>
      <div className="flex items-center gap-1 flex-wrap">
        <AnimatePresence>
          {nodes.map((node, i) => {
            const isHighlighted = highlighted.includes(node.id);
            const isNew = newNode === node.id;
            const isRemoving = removingNode === node.id;
            const nodePointers = Object.entries(pointers).filter(([, id]) => id === node.id);

            return (
              <motion.div
                key={node.id}
                layout
                initial={isNew ? { opacity: 0, scale: 0.5 } : { opacity: 1 }}
                animate={{ opacity: isRemoving ? 0.3 : 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-1"
              >
                <div className="flex flex-col items-center">
                  {nodePointers.length > 0 && (
                    <div className="text-[10px] font-mono text-accent-blue mb-1">
                      {nodePointers.map(([name]) => name).join(', ')}
                    </div>
                  )}
                  <div className={cn(
                    'w-10 h-10 flex items-center justify-center rounded font-mono text-sm border transition-all duration-200',
                    isHighlighted ? 'border-accent-yellow bg-accent-yellow/10' : 'border-editor-border bg-editor-active',
                    isNew && 'border-accent-green bg-accent-green/10',
                  )}>
                    {node.value}
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <span className="text-text-muted text-xs">&rarr;</span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
        <span className="text-text-muted text-xs ml-1">null</span>
      </div>
    </div>
  );
}
