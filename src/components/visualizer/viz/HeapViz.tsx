import { cn } from '@/lib/utils';
import type { HeapVizState } from '@/data/types';

interface Props {
  data: HeapVizState;
}

export default function HeapViz({ data }: Props) {
  const { values, comparing, swapping, inserting, removing } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Heap</h4>
      {/* Array view */}
      <div className="flex gap-1 mb-4">
        {values.map((val, i) => {
          const isComparing = comparing && (comparing[0] === i || comparing[1] === i);
          const isSwapping = swapping && (swapping[0] === i || swapping[1] === i);
          const isInserting = inserting === i;
          return (
            <div
              key={i}
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded font-mono text-sm border transition-all duration-200',
                isSwapping && 'border-accent-purple bg-accent-purple/10',
                isComparing && !isSwapping && 'border-accent-yellow bg-accent-yellow/10',
                isInserting && 'border-accent-green bg-accent-green/10',
                !isSwapping && !isComparing && !isInserting && 'border-editor-border bg-editor-active text-text-primary',
              )}
            >
              {val}
            </div>
          );
        })}
      </div>
      {/* Tree view */}
      <svg width="300" height={Math.max(100, Math.ceil(Math.log2(values.length + 1)) * 50)} className="overflow-visible">
        {values.map((val, i) => {
          const level = Math.floor(Math.log2(i + 1));
          const posInLevel = i - (Math.pow(2, level) - 1);
          const totalInLevel = Math.pow(2, level);
          const x = ((posInLevel + 0.5) / totalInLevel) * 300;
          const y = level * 50 + 25;
          const parentIdx = Math.floor((i - 1) / 2);

          return (
            <g key={i}>
              {i > 0 && (() => {
                const pLevel = Math.floor(Math.log2(parentIdx + 1));
                const pPos = parentIdx - (Math.pow(2, pLevel) - 1);
                const pTotal = Math.pow(2, pLevel);
                const px = ((pPos + 0.5) / pTotal) * 300;
                const py = pLevel * 50 + 25;
                return <line x1={px} y1={py} x2={x} y2={y} stroke="#3e3e42" strokeWidth={1} />;
              })()}
              <circle cx={x} cy={y} r={16} fill="#2d2d2d" stroke="#3e3e42" strokeWidth={1.5} />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#d4d4d4" fontSize={11} fontFamily="JetBrains Mono, monospace">
                {val}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
