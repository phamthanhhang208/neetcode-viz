import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StepMessageProps {
  label: string;
  message: string;
  isKeyMoment?: boolean;
}

export default function StepMessage({ label, message, isKeyMoment }: StepMessageProps) {
  return (
    <div className={cn(
      'px-4 py-3 border-t border-editor-border bg-editor-sidebar',
      isKeyMoment && 'border-l-2 border-l-accent-green',
    )}>
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="flex items-start gap-2"
        >
          {isKeyMoment && <span className="flex-shrink-0 mt-0.5">&#10024;</span>}
          <div>
            <span className={cn(
              'inline-block px-1.5 py-0.5 rounded text-[10px] font-medium mr-2',
              isKeyMoment ? 'bg-accent-green/20 text-accent-green' : 'bg-editor-active text-text-secondary',
            )}>
              {label}
            </span>
            <span className="text-sm text-text-primary">{message}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
