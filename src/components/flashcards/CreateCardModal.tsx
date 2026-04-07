import { useState } from 'react';
import { X, Eye, Edit3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import MarkdownRenderer from './MarkdownRenderer';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (front: string, back: string) => void;
  initial?: { front: string; back: string };
}

export default function CreateCardModal({ isOpen, onClose, onSave, initial }: Props) {
  const [front, setFront] = useState(initial?.front ?? '');
  const [back, setBack] = useState(initial?.back ?? '');
  const [preview, setPreview] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    if (front.trim() && back.trim()) {
      onSave(front.trim(), back.trim());
      setFront('');
      setBack('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-editor-sidebar border border-editor-border rounded-lg shadow-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-editor-border">
          <h2 className="text-sm font-semibold text-text-bright">
            {initial ? 'Edit Card' : 'New Card'}
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreview(!preview)}
              className={cn(
                'flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors',
                preview ? 'bg-accent-blue/20 text-accent-blue' : 'text-text-muted hover:text-text-primary',
              )}
            >
              {preview ? <Eye size={12} /> : <Edit3 size={12} />}
              {preview ? 'Preview' : 'Edit'}
            </button>
            <button onClick={onClose} className="text-text-muted hover:text-text-primary">
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Front */}
          <div>
            <label className="text-xs text-text-secondary mb-1 block">Front (Question)</label>
            {preview ? (
              <div className="bg-editor-bg border border-editor-border rounded p-3 min-h-[80px]">
                <MarkdownRenderer content={front || '*No content*'} />
              </div>
            ) : (
              <textarea
                value={front}
                onChange={(e) => setFront(e.target.value)}
                className="w-full bg-editor-bg border border-editor-border rounded p-3 text-sm text-text-primary font-mono placeholder:text-text-muted focus:border-accent-blue focus:outline-none resize-none"
                rows={3}
                placeholder="What is **Big O notation**?"
              />
            )}
          </div>

          {/* Back */}
          <div>
            <label className="text-xs text-text-secondary mb-1 block">Back (Answer)</label>
            {preview ? (
              <div className="bg-editor-bg border border-editor-border rounded p-3 min-h-[100px]">
                <MarkdownRenderer content={back || '*No content*'} />
              </div>
            ) : (
              <textarea
                value={back}
                onChange={(e) => setBack(e.target.value)}
                className="w-full bg-editor-bg border border-editor-border rounded p-3 text-sm text-text-primary font-mono placeholder:text-text-muted focus:border-accent-blue focus:outline-none resize-none"
                rows={5}
                placeholder="Describes the upper bound of an algorithm's growth rate...&#10;&#10;- `O(1)` — constant&#10;- `O(n)` — linear"
              />
            )}
          </div>

          <p className="text-[10px] text-text-muted">Supports Markdown: **bold**, `code`, ```code blocks```, - lists, | tables |</p>
        </div>

        <div className="flex justify-end gap-2 px-4 py-3 border-t border-editor-border">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!front.trim() || !back.trim()}
            className="px-4 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors disabled:opacity-40"
          >
            {initial ? 'Update' : 'Create Card'}
          </button>
        </div>
      </div>
    </div>
  );
}
