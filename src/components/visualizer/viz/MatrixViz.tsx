import { cn } from '@/lib/utils';
import type { MatrixVizState } from '@/data/types';

interface Props {
  data: MatrixVizState;
}

export default function MatrixViz({ data }: Props) {
  const { values, highlights = [], path = [], current } = data;

  const isHighlighted = (r: number, c: number) => highlights.some(([hr, hc]) => hr === r && hc === c);
  const isPath = (r: number, c: number) => path.some(([pr, pc]) => pr === r && pc === c);
  const isCurrent = current && current[0] === current[0] && current[1] === current[1]
    ? (r: number, c: number) => current[0] === r && current[1] === c
    : () => false;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Matrix</h4>
      <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${values[0]?.length ?? 0}, 2.5rem)` }}>
        {values.map((row, r) =>
          row.map((val, c) => (
            <div
              key={`${r}-${c}`}
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded text-xs font-mono border transition-all duration-200',
                isCurrent(r, c) && 'border-accent-yellow bg-accent-yellow/20 text-accent-yellow',
                isHighlighted(r, c) && !isCurrent(r, c) && 'border-accent-yellow bg-accent-yellow/10',
                isPath(r, c) && !isCurrent(r, c) && !isHighlighted(r, c) && 'border-accent-blue/50 bg-accent-blue/10',
                !isCurrent(r, c) && !isHighlighted(r, c) && !isPath(r, c) && 'border-editor-border bg-editor-active text-text-primary',
              )}
            >
              {val}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
