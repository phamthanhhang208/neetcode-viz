import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '@/hooks/useFavorites';
import { Plus, Star, Trash2, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const COLORS = ['#569cd6', '#4ec9b0', '#dcdcaa', '#c586c0', '#6a9955', '#ce9178', '#f44747', '#9cdcfe'];

export default function ListsDashboard() {
  const navigate = useNavigate();
  const { favorites, lists, fetchLists, createList, deleteList, listItems, fetchListItems } = useFavorites();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState(COLORS[0]);

  useEffect(() => { fetchLists(); }, [fetchLists]);
  useEffect(() => { lists.forEach((l) => fetchListItems(l.id)); }, [lists, fetchListItems]);

  const handleCreate = async () => {
    if (!newName.trim()) return;
    await createList(newName.trim(), '', newColor);
    setNewName('');
    setShowCreate(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-bright mb-1">My Lists</h1>
          <p className="text-sm text-text-secondary">{lists.length} custom list{lists.length !== 1 ? 's' : ''} + Favorites</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
        >
          <Plus size={12} />
          New List
        </button>
      </div>

      {showCreate && (
        <div className="mb-6 bg-editor-sidebar border border-editor-border rounded-lg p-4">
          <div className="flex items-end gap-3">
            <div className="flex-1">
              <label className="text-xs text-text-secondary mb-1 block">List Name</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                className="w-full bg-editor-bg border border-editor-border rounded px-3 py-1.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-blue focus:outline-none"
                placeholder="e.g., Weak Topics, Mock Interview..."
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
            <button onClick={handleCreate} className="px-4 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30">Create</button>
            <button onClick={() => setShowCreate(false)} className="text-text-muted hover:text-text-primary"><X size={14} /></button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Favorites card (built-in) */}
        <div
          className="bg-editor-sidebar border border-editor-border rounded-lg overflow-hidden hover:border-accent-yellow/30 transition-colors cursor-pointer"
          onClick={() => navigate('/lists/favorites')}
        >
          <div className="h-1 bg-accent-yellow" />
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Star size={14} className="text-accent-yellow" fill="currentColor" />
              <h3 className="text-sm font-semibold text-text-bright">Favorites</h3>
            </div>
            <p className="text-xs text-text-muted">{favorites.length} problem{favorites.length !== 1 ? 's' : ''}</p>
          </div>
        </div>

        {/* Custom lists */}
        {lists.map((list) => {
          const count = (listItems[list.id] ?? []).length;
          return (
            <div
              key={list.id}
              className="group bg-editor-sidebar border border-editor-border rounded-lg overflow-hidden hover:border-accent-blue/30 transition-colors cursor-pointer"
              onClick={() => navigate(`/lists/${list.id}`)}
            >
              <div className="h-1" style={{ backgroundColor: list.color }} />
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-text-bright">{list.name}</h3>
                  <button
                    onClick={(e) => { e.stopPropagation(); if (confirm(`Delete "${list.name}"?`)) deleteList(list.id); }}
                    className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-accent-red transition-all"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
                <p className="text-xs text-text-muted">{count} problem{count !== 1 ? 's' : ''}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
