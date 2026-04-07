import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFlashcards } from '@/hooks/useFlashcards';
import { cn } from '@/lib/utils';
import { ArrowLeft, Plus, BookOpen, Trash2, Edit3, Upload } from 'lucide-react';
import CreateCardModal from './CreateCardModal';
import ImportCards from './ImportCards';
import MarkdownRenderer from './MarkdownRenderer';
import type { Flashcard } from '@/data/flashcard-types';

export default function StackView() {
  const { stackId } = useParams<{ stackId: string }>();
  const navigate = useNavigate();
  const { stacks, cards, fetchCards, addCard, updateCard, deleteCard, getStackStats } = useFlashcards();
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const stack = stacks.find((s) => s.id === stackId);
  const stackCards = stackId ? cards[stackId] ?? [] : [];
  const stats = stackId ? getStackStats(stackId) : { total: 0, due: 0 };

  useEffect(() => {
    if (stackId) fetchCards(stackId);
  }, [stackId, fetchCards]);

  if (!stack) {
    return (
      <div className="p-6 text-center">
        <p className="text-text-muted">Stack not found</p>
        <button onClick={() => navigate('/flashcards')} className="text-accent-blue text-sm mt-2 hover:underline">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <button
        onClick={() => navigate('/flashcards')}
        className="flex items-center gap-1 text-xs text-text-muted hover:text-text-primary mb-4 transition-colors"
      >
        <ArrowLeft size={12} />
        All Stacks
      </button>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stack.color }} />
            <h1 className="text-xl font-bold text-text-bright">{stack.name}</h1>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            {stats.total} cards &bull; {stats.due} due for review
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowImport(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs bg-editor-active border border-editor-border text-text-secondary hover:text-text-primary transition-colors"
          >
            <Upload size={12} />
            Import
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs bg-editor-active border border-editor-border text-text-secondary hover:text-text-primary transition-colors"
          >
            <Plus size={12} />
            Add Card
          </button>
          {stats.due > 0 && (
            <button
              onClick={() => navigate(`/flashcards/${stackId}/study`)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded text-xs bg-accent-green/20 text-accent-green hover:bg-accent-green/30 transition-colors"
            >
              <BookOpen size={12} />
              Study ({stats.due})
            </button>
          )}
        </div>
      </div>

      {/* Cards list */}
      {stackCards.length === 0 ? (
        <div className="text-center py-12 bg-editor-sidebar border border-editor-border rounded-lg">
          <p className="text-text-secondary mb-1">No cards in this stack</p>
          <p className="text-xs text-text-muted mb-4">Add cards manually or import from CSV</p>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30"
          >
            <Plus size={14} />
            Add Card
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          {stackCards.map((card) => {
            const isDue = card.next_review <= new Date().toISOString();
            const isExpanded = expandedCard === card.id;

            return (
              <div
                key={card.id}
                className="bg-editor-sidebar border border-editor-border rounded-lg overflow-hidden hover:border-editor-hover transition-colors"
              >
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left"
                >
                  {isDue && <span className="w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary truncate">{card.front.replace(/[*`#]/g, '')}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={(e) => { e.stopPropagation(); setEditingCard(card); }}
                      className="text-text-muted hover:text-text-primary transition-colors"
                    >
                      <Edit3 size={12} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (stackId) deleteCard(card.id, stackId);
                      }}
                      className="text-text-muted hover:text-accent-red transition-colors"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-editor-border pt-3 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-text-muted">Front</span>
                      <div className="mt-1 bg-editor-bg rounded p-3">
                        <MarkdownRenderer content={card.front} />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-accent-blue">Back</span>
                      <div className="mt-1 bg-editor-bg rounded p-3">
                        <MarkdownRenderer content={card.back} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modals */}
      <CreateCardModal
        isOpen={showCreate}
        onClose={() => setShowCreate(false)}
        onSave={(front, back) => stackId && addCard(stackId, front, back)}
      />

      {editingCard && (
        <CreateCardModal
          isOpen
          onClose={() => setEditingCard(null)}
          onSave={(front, back) => {
            updateCard(editingCard.id, { front, back });
            setEditingCard(null);
          }}
          initial={{ front: editingCard.front, back: editingCard.back }}
        />
      )}

      <ImportCards
        isOpen={showImport}
        onClose={() => setShowImport(false)}
        defaultStackId={stackId}
      />
    </div>
  );
}
