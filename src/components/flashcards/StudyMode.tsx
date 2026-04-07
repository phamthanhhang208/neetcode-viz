import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFlashcards } from '@/hooks/useFlashcards';
import FlashcardCard from './FlashcardCard';
import { cn } from '@/lib/utils';
import { ArrowLeft, Trophy, RotateCcw } from 'lucide-react';
import type { Flashcard, ReviewRating } from '@/data/flashcard-types';

export default function StudyMode() {
  const { stackId } = useParams<{ stackId: string }>();
  const navigate = useNavigate();
  const { cards, fetchCards, reviewCard, getDueCards, stacks } = useFlashcards();
  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const stack = stacks.find((s) => s.id === stackId);

  useEffect(() => {
    if (stackId) {
      fetchCards(stackId);
    }
  }, [stackId, fetchCards]);

  useEffect(() => {
    if (stackId && cards[stackId] && !initialized) {
      const due = getDueCards(stackId);
      // Shuffle
      const shuffled = [...due].sort(() => Math.random() - 0.5);
      setQueue(shuffled);
      setInitialized(true);
    }
  }, [stackId, cards, getDueCards, initialized]);

  const currentCard = queue[currentIdx];
  const isComplete = initialized && currentIdx >= queue.length;

  const handleRate = useCallback(async (rating: ReviewRating) => {
    if (!currentCard || !stackId) return;
    await reviewCard(currentCard.id, stackId, rating);
    setReviewed((r) => r + 1);
    setIsFlipped(false);
    setTimeout(() => setCurrentIdx((i) => i + 1), 200);
  }, [currentCard, stackId, reviewCard]);

  if (isComplete) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Trophy size={48} className="mx-auto text-accent-yellow mb-4" />
          <h2 className="text-xl font-bold text-text-bright mb-2">Session Complete!</h2>
          <p className="text-text-secondary mb-1">
            You reviewed <span className="text-accent-green font-bold">{reviewed}</span> cards
          </p>
          <p className="text-xs text-text-muted mb-6">
            {queue.length === 0 ? 'No cards were due for review.' : 'Great job! Come back later for more.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate(`/flashcards/${stackId}`)}
              className="flex items-center gap-2 px-4 py-2 rounded text-sm bg-editor-active border border-editor-border text-text-primary hover:border-accent-blue/50 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Stack
            </button>
            <button
              onClick={() => { setInitialized(false); setCurrentIdx(0); setReviewed(0); }}
              className="flex items-center gap-2 px-4 py-2 rounded text-sm bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
            >
              <RotateCcw size={14} />
              Study Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-text-muted">Loading cards...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(`/flashcards/${stackId}`)}
          className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft size={12} />
          {stack?.name ?? 'Back'}
        </button>
        <span className="text-xs text-text-secondary font-mono">
          {currentIdx + 1} / {queue.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-editor-border rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-accent-blue rounded-full transition-all duration-300"
          style={{ width: `${queue.length > 0 ? (currentIdx / queue.length) * 100 : 0}%` }}
        />
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center">
        <FlashcardCard
          front={currentCard.front}
          back={currentCard.back}
          isFlipped={isFlipped}
          onFlip={() => setIsFlipped(!isFlipped)}
        />
      </div>

      {/* Rating buttons */}
      {isFlipped && (
        <div className="flex justify-center gap-3 mt-8 mb-4">
          <RatingButton rating="again" label="Again" color="red" onClick={handleRate} />
          <RatingButton rating="hard" label="Hard" color="orange" onClick={handleRate} />
          <RatingButton rating="easy" label="Easy" color="green" onClick={handleRate} />
        </div>
      )}

      {!isFlipped && (
        <p className="text-center text-xs text-text-muted mt-8 mb-4">
          Click the card or press Space to reveal the answer
        </p>
      )}
    </div>
  );
}

function RatingButton({ rating, label, color, onClick }: {
  rating: ReviewRating;
  label: string;
  color: 'red' | 'orange' | 'green';
  onClick: (r: ReviewRating) => void;
}) {
  const colorMap = {
    red: 'bg-accent-red/20 text-accent-red hover:bg-accent-red/30 border-accent-red/30',
    orange: 'bg-accent-orange/20 text-accent-orange hover:bg-accent-orange/30 border-accent-orange/30',
    green: 'bg-accent-green/20 text-accent-green hover:bg-accent-green/30 border-accent-green/30',
  };

  return (
    <button
      onClick={() => onClick(rating)}
      className={cn('px-6 py-2.5 rounded-lg text-sm font-medium border transition-colors', colorMap[color])}
    >
      {label}
    </button>
  );
}
