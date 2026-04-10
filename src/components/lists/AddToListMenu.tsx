import { useState, useRef, useEffect } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface Props {
  problemId: string;
}

export default function AddToListMenu({ problemId }: Props) {
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const { lists, listItems, createList, addToList, removeFromList, fetchListItems } = useFavorites();

  useEffect(() => {
    if (open) lists.forEach((l) => fetchListItems(l.id));
  }, [open, lists, fetchListItems]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    const id = await createList(newName.trim());
    if (id) {
      await addToList(id, problemId);
    }
    setNewName('');
    setCreating(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); setOpen(!open); }}
        className="text-text-muted/30 hover:text-accent-blue transition-colors flex-shrink-0"
      >
        <Plus size={14} />
      </button>

      {open && (
        <div className="absolute right-0 top-6 z-50 w-48 bg-editor-sidebar border border-editor-border rounded-lg shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <div className="px-3 py-2 border-b border-editor-border">
            <p className="text-[10px] uppercase tracking-wider text-text-muted font-semibold">Add to list</p>
          </div>

          {lists.length === 0 && !creating && (
            <p className="px-3 py-2 text-xs text-text-muted">No lists yet</p>
          )}

          <div className="max-h-32 overflow-auto">
            {lists.map((list) => {
              const isIn = (listItems[list.id] ?? []).includes(problemId);
              return (
                <button
                  key={list.id}
                  onClick={() => isIn ? removeFromList(list.id, problemId) : addToList(list.id, problemId)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-text-primary hover:bg-editor-hover transition-colors"
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: list.color }} />
                  <span className="flex-1 text-left truncate">{list.name}</span>
                  {isIn && <Check size={12} className="text-accent-green flex-shrink-0" />}
                </button>
              );
            })}
          </div>

          {creating ? (
            <div className="px-3 py-2 border-t border-editor-border flex gap-1">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                className="flex-1 bg-editor-bg border border-editor-border rounded px-2 py-1 text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue"
                placeholder="List name..."
                autoFocus
              />
              <button onClick={handleCreate} className="text-accent-green"><Check size={14} /></button>
              <button onClick={() => setCreating(false)} className="text-text-muted"><X size={14} /></button>
            </div>
          ) : (
            <button
              onClick={() => setCreating(true)}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-accent-blue hover:bg-editor-hover transition-colors border-t border-editor-border"
            >
              <Plus size={12} />
              New list
            </button>
          )}
        </div>
      )}
    </div>
  );
}
