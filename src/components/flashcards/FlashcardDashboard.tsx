import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlashcards } from '@/hooks/useFlashcards';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { Plus, Layers, BookOpen, Trash2, X } from 'lucide-react';
import ImportCards from './ImportCards';

const COLORS = ['#4ec9b0', '#569cd6', '#dcdcaa', '#c586c0', '#6a9955', '#ce9178', '#f44747', '#9cdcfe'];

export default function FlashcardDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { stacks, fetchStacks, addStack, deleteStack, fetchCards, getStackStats, seedIfEmpty } = useFlashcards();
  const [showCreate, setShowCreate] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState(COLORS[0]);

  useEffect(() => {
    fetchStacks();
  }, [fetchStacks]);

  useEffect(() => {
    if (user) {
      seedIfEmpty(user.id);
    }
  }, [user, seedIfEmpty]);

  // Prefetch card counts
  useEffect(() => {
    stacks.forEach((s) => fetchCards(s.id));
  }, [stacks, fetchCards]);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    const id = await addStack(newName.trim(), newColor);
    setNewName('');
    setShowCreate(false);
    if (id) navigate(`/flashcards/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-bright mb-1">Flashcards</h1>
          <p className="text-sm text-text-secondary">
            {stacks.length} stack{stacks.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowImport(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs bg-editor-active border border-editor-border text-text-secondary hover:text-text-primary hover:border-accent-blue/50 transition-colors"
          >
            Import CSV
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
          >
            <Plus size={12} />
            New Stack
          </button>
        </div>
      </div>

      {/* Create stack inline form */}
      {showCreate && (
        <div className="mb-6 bg-editor-sidebar border border-editor-border rounded-lg p-4">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="text-xs text-text-secondary mb-1 block">Stack Name</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                className="w-full bg-editor-bg border border-editor-border rounded px-3 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
                placeholder="e.g., Frontend, System Design..."
                autoFocus
              />
            </div>
            <div>
              <label className="text-xs text-text-secondary mb-1 block">Color</label>
              <div className="flex gap-1">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setNewColor(c)}
                    className={cn('w-6 h-6 rounded-full border-2 transition-transform', c === newColor ? 'border-white scale-110' : 'border-transparent')}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
            <button onClick={handleCreate} className="px-4 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30">
              Create
            </button>
            <button onClick={() => setShowCreate(false)} className="text-text-muted hover:text-text-primary">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Stack grid */}
      {stacks.length === 0 ? (
        <div className="text-center py-16 bg-editor-sidebar border border-editor-border rounded-lg">
          <Layers size={32} className="mx-auto text-text-muted mb-3" />
          <p className="text-text-secondary mb-1">No flashcard stacks yet</p>
          <p className="text-xs text-text-muted mb-4">Create your first stack to start studying</p>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30"
          >
            <Plus size={14} />
            Create Stack
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stacks.map((stack) => {
            const stats = getStackStats(stack.id);
            return (
              <div
                key={stack.id}
                className="group bg-editor-sidebar border border-editor-border rounded-lg overflow-hidden hover:border-accent-blue/30 transition-all cursor-pointer"
                onClick={() => navigate(`/flashcards/${stack.id}`)}
              >
                <div className="h-1" style={{ backgroundColor: stack.color }} />
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-semibold text-text-bright">{stack.name}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Delete "${stack.name}"?`)) deleteStack(stack.id);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-accent-red transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-text-muted">{stats.total} cards</span>
                    {stats.due > 0 && (
                      <span className="px-1.5 py-0.5 rounded bg-accent-blue/20 text-accent-blue font-medium">
                        {stats.due} due
                      </span>
                    )}
                  </div>
                  {stats.due > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/flashcards/${stack.id}/study`);
                      }}
                      className="mt-3 flex items-center gap-1 text-xs text-accent-green hover:underline"
                    >
                      <BookOpen size={12} />
                      Study Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <ImportCards isOpen={showImport} onClose={() => setShowImport(false)} />
    </div>
  );
}
