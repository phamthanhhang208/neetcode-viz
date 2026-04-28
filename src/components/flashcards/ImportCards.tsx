import { useState, useRef } from 'react';
import Papa from 'papaparse';
import { X, Upload, FileText, Check, Download } from 'lucide-react';
import { useFlashcards } from '@/hooks/useFlashcards';
import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultStackId?: string;
}

interface ParsedRow {
  front: string;
  back: string;
  stack?: string;
}

export default function ImportCards({ isOpen, onClose, defaultStackId }: Props) {
  const [rows, setRows] = useState<ParsedRow[]>([]);
  const [importing, setImporting] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { stacks, addStack, importCards } = useFlashcards();

  if (!isOpen) return null;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse<ParsedRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const valid = results.data.filter((r) => r.front?.trim() && r.back?.trim());
        setRows(valid);
      },
    });
  };

  const handleImport = async () => {
    setImporting(true);

    // Resolve stack names to IDs
    const stackMap = new Map(stacks.map((s) => [s.name.toLowerCase(), s.id]));
    const cardsToImport: { front: string; back: string; stackId: string }[] = [];

    for (const row of rows) {
      let stackId = defaultStackId;

      if (row.stack?.trim()) {
        const name = row.stack.trim();
        const existing = stackMap.get(name.toLowerCase());
        if (existing) {
          stackId = existing;
        } else {
          const newId = await addStack(name, '#569cd6');
          if (newId) {
            stackMap.set(name.toLowerCase(), newId);
            stackId = newId;
          }
        }
      }

      if (stackId) {
        cardsToImport.push({ front: row.front.trim(), back: row.back.trim(), stackId });
      }
    }

    await importCards(cardsToImport);
    setImporting(false);
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div
        className="w-full max-w-2xl bg-editor-sidebar border border-editor-border rounded-lg shadow-2xl mx-4 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-editor-border">
          <h2 className="text-sm font-semibold text-text-bright">Import Cards from CSV</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary">
            <X size={16} />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-auto">
          {done ? (
            <div className="text-center py-8">
              <Check size={32} className="mx-auto text-accent-green mb-3" />
              <p className="text-text-bright font-medium">Imported {rows.length} cards!</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-1.5 rounded text-xs bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30"
              >
                Done
              </button>
            </div>
          ) : rows.length === 0 ? (
            <div className="text-center py-8">
              <Upload size={32} className="mx-auto text-text-muted mb-3" />
              <p className="text-sm text-text-secondary mb-1">Upload a CSV file</p>
              <p className="text-xs text-text-muted mb-4">
                Columns: <code className="bg-editor-bg px-1 rounded">front</code>,{' '}
                <code className="bg-editor-bg px-1 rounded">back</code>,{' '}
                <code className="bg-editor-bg px-1 rounded">stack</code> (optional)
              </p>
              <input
                ref={fileRef}
                type="file"
                accept=".csv"
                onChange={handleFile}
                className="hidden"
              />
              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={() => fileRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-editor-active border border-editor-border text-sm text-text-primary hover:border-accent-blue/50 transition-colors"
                >
                  <FileText size={14} />
                  Choose CSV File
                </button>
                <a
                  href="/flashcard-template.csv"
                  download="flashcard-template.csv"
                  className="inline-flex items-center gap-1 text-xs text-accent-blue hover:underline"
                >
                  <Download size={12} />
                  Download template
                </a>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs text-text-secondary mb-3">
                Preview: {rows.length} cards found
              </p>
              <div className="border border-editor-border rounded overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-editor-bg">
                      <th className="px-3 py-1.5 text-left text-text-muted font-medium">#</th>
                      <th className="px-3 py-1.5 text-left text-text-muted font-medium">Front</th>
                      <th className="px-3 py-1.5 text-left text-text-muted font-medium">Back</th>
                      <th className="px-3 py-1.5 text-left text-text-muted font-medium">Stack</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.slice(0, 10).map((row, i) => (
                      <tr key={i} className="border-t border-editor-border">
                        <td className="px-3 py-1.5 text-text-muted">{i + 1}</td>
                        <td className="px-3 py-1.5 text-text-primary truncate max-w-[200px]">{row.front}</td>
                        <td className="px-3 py-1.5 text-text-primary truncate max-w-[200px]">{row.back}</td>
                        <td className="px-3 py-1.5 text-text-secondary">{row.stack || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {rows.length > 10 && (
                  <p className="px-3 py-1.5 text-[10px] text-text-muted border-t border-editor-border">
                    ...and {rows.length - 10} more
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {rows.length > 0 && !done && (
          <div className="flex justify-end gap-2 px-4 py-3 border-t border-editor-border">
            <button
              onClick={() => { setRows([]); }}
              className="px-3 py-1.5 rounded text-xs text-text-secondary hover:text-text-primary"
            >
              Choose Different File
            </button>
            <button
              onClick={handleImport}
              disabled={importing}
              className="px-4 py-1.5 rounded text-xs bg-accent-green/20 text-accent-green hover:bg-accent-green/30 transition-colors disabled:opacity-40"
            >
              {importing ? 'Importing...' : `Import ${rows.length} Cards`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
