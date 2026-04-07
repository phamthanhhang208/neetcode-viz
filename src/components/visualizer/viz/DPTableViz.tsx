import { cn } from '@/lib/utils';
import type { DPTableVizState } from '@/data/types';

interface Props {
  data: DPTableVizState;
}

export default function DPTableViz({ data }: Props) {
  const { values, current, dependencies = [], labels } = data;

  const isCurrent = (r: number, c: number) => current && current[0] === r && current[1] === c;
  const isDep = (r: number, c: number) => dependencies.some(([dr, dc]) => dr === r && dc === c);

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">DP Table</h4>
      <div className="overflow-auto">
        <table className="border-collapse">
          {labels?.cols && (
            <thead>
              <tr>
                {labels.rows && <th className="w-8" />}
                {labels.cols.map((c, i) => (
                  <th key={i} className="text-[10px] text-text-muted font-mono p-1 text-center">{c}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {values.map((row, r) => (
              <tr key={r}>
                {labels?.rows && (
                  <td className="text-[10px] text-text-muted font-mono p-1 text-right pr-2">{labels.rows[r]}</td>
                )}
                {row.map((val, c) => (
                  <td
                    key={c}
                    className={cn(
                      'w-10 h-8 text-center font-mono text-xs border transition-all duration-200',
                      isCurrent(r, c) && 'bg-accent-yellow/20 border-accent-yellow text-accent-yellow font-bold',
                      isDep(r, c) && !isCurrent(r, c) && 'bg-accent-blue/10 border-accent-blue/50',
                      !isCurrent(r, c) && !isDep(r, c) && 'border-editor-border text-text-primary',
                    )}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
