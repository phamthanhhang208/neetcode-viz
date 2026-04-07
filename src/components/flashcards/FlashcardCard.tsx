import { motion } from 'framer-motion';
import MarkdownRenderer from './MarkdownRenderer';

interface Props {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function FlashcardCard({ front, back, isFlipped, onFlip }: Props) {
  return (
    <div
      className="w-full max-w-2xl mx-auto cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={onFlip}
    >
      <motion.div
        className="relative w-full min-h-[300px]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-editor-sidebar border border-editor-border rounded-xl p-8 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-[10px] uppercase tracking-wider text-text-muted mb-4">Question</span>
          <div className="text-center">
            <MarkdownRenderer content={front} className="text-lg" />
          </div>
          <span className="text-[10px] text-text-muted mt-6">Click to reveal answer</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-editor-sidebar border border-accent-blue/30 rounded-xl p-8 flex flex-col overflow-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-[10px] uppercase tracking-wider text-accent-blue mb-4">Answer</span>
          <MarkdownRenderer content={back} />
        </div>
      </motion.div>
    </div>
  );
}
