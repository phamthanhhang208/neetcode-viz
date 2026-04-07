import { cn } from '@/lib/utils';

interface VariablesPanelProps {
  variables: Record<string, any>;
  prevVariables?: Record<string, any>;
}

function formatValue(val: any): string {
  if (val === null || val === undefined) return 'null';
  if (typeof val === 'string') return `"${val}"`;
  if (Array.isArray(val)) return `[${val.join(', ')}]`;
  if (typeof val === 'object') return JSON.stringify(val);
  return String(val);
}

function valueColor(val: any): string {
  if (typeof val === 'number') return 'text-accent-blue';
  if (typeof val === 'string') return 'text-accent-orange';
  if (typeof val === 'boolean') return 'text-accent-purple';
  if (val === null || val === undefined) return 'text-text-muted';
  return 'text-text-primary';
}

export default function VariablesPanel({ variables, prevVariables }: VariablesPanelProps) {
  const entries = Object.entries(variables);
  if (entries.length === 0) return null;

  return (
    <div className="border-t border-editor-border bg-editor-bg p-3">
      <h3 className="text-[10px] uppercase tracking-wider text-text-muted mb-2 font-semibold">Variables</h3>
      <div className="space-y-1">
        {entries.map(([key, val]) => {
          const changed = prevVariables && JSON.stringify(prevVariables[key]) !== JSON.stringify(val);
          return (
            <div key={key} className={cn('flex items-center gap-2 text-xs font-mono px-1 rounded', changed && 'bg-accent-yellow/10')}>
              <span className="text-accent-purple">{key}</span>
              <span className="text-text-muted">=</span>
              <span className={cn(valueColor(val), changed && 'font-bold')}>{formatValue(val)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
