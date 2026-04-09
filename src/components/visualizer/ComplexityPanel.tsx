import { useState } from 'react';
import { ChevronDown, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  timeComplexity: string;
  spaceComplexity: string;
}

interface ComplexityInfo {
  label: string;
  color: string;
  rank: number;
  description: string;
}

const COMPLEXITIES: Record<string, ComplexityInfo> = {
  'O(1)':       { label: 'O(1)', color: '#4ec9b0', rank: 1, description: 'Constant — same time regardless of input size' },
  'O(log n)':   { label: 'O(log n)', color: '#6a9955', rank: 2, description: 'Logarithmic — halving each step (binary search)' },
  'O(n)':       { label: 'O(n)', color: '#569cd6', rank: 3, description: 'Linear — one pass through the data' },
  'O(n log n)': { label: 'O(n log n)', color: '#dcdcaa', rank: 4, description: 'Linearithmic — sorting-based algorithms' },
  'O(n²)':      { label: 'O(n²)', color: '#ce9178', rank: 5, description: 'Quadratic — nested loops, brute force pairs' },
  'O(2ⁿ)':      { label: 'O(2ⁿ)', color: '#f44747', rank: 6, description: 'Exponential — subsets, brute force recursion' },
  'O(n!)':      { label: 'O(n!)', color: '#f44747', rank: 7, description: 'Factorial — permutations, brute force' },
};

function parseComplexity(s: string): ComplexityInfo | null {
  // Normalize input
  const normalized = s.trim()
    .replace(/\s+/g, '')
    .replace('²', '²')
    .replace('^2', '²')
    .replace('logn', 'log n')
    .replace('nlogn', 'n log n');

  for (const [key, info] of Object.entries(COMPLEXITIES)) {
    if (normalized.includes(key.replace(/\s/g, '')) || s.includes(key)) {
      return info;
    }
  }
  return null;
}

// Generate curve points for a given complexity
function curvePoints(complexity: string, maxN: number, maxY: number): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const steps = 50;

  for (let i = 0; i <= steps; i++) {
    const n = (i / steps) * maxN;
    if (n === 0) { points.push({ x: 0, y: 0 }); continue; }

    let y: number;
    switch (complexity) {
      case 'O(1)':       y = 1; break;
      case 'O(log n)':   y = Math.log2(n); break;
      case 'O(n)':       y = n; break;
      case 'O(n log n)': y = n * Math.log2(n); break;
      case 'O(n²)':      y = n * n; break;
      case 'O(2ⁿ)':      y = Math.pow(2, n); break;
      case 'O(n!)':      y = n > 10 ? Infinity : Array.from({ length: Math.floor(n) }, (_, i) => i + 1).reduce((a, b) => a * b, 1); break;
      default:           y = n; break;
    }

    // Normalize to chart height
    points.push({ x: (i / steps) * 280, y: Math.min(y / maxY * 120, 120) });
  }
  return points;
}

export default function ComplexityPanel({ timeComplexity, spaceComplexity }: Props) {
  const [open, setOpen] = useState(false);
  const timeInfo = parseComplexity(timeComplexity);
  const spaceInfo = parseComplexity(spaceComplexity);

  const chartComplexities = ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'O(n²)'];
  const maxN = 20;
  const maxY = maxN * maxN; // Scale to O(n²) max

  return (
    <div className="border-t border-editor-border bg-editor-sidebar">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-2 text-xs text-text-secondary hover:text-text-primary transition-colors"
      >
        <BarChart3 size={12} />
        <span>Complexity: <span className="text-accent-blue">{timeComplexity}</span> time, <span className="text-accent-purple">{spaceComplexity}</span> space</span>
        <ChevronDown size={12} className={cn('ml-auto transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 pb-3 space-y-3">
          {/* Time & Space badges */}
          <div className="flex gap-4">
            <div className="flex-1 bg-editor-bg rounded p-2.5">
              <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Time</p>
              <p className="text-sm font-mono font-bold" style={{ color: timeInfo?.color ?? '#d4d4d4' }}>
                {timeComplexity}
              </p>
              {timeInfo && <p className="text-[10px] text-text-secondary mt-1">{timeInfo.description}</p>}
            </div>
            <div className="flex-1 bg-editor-bg rounded p-2.5">
              <p className="text-[10px] uppercase tracking-wider text-text-muted mb-1">Space</p>
              <p className="text-sm font-mono font-bold" style={{ color: spaceInfo?.color ?? '#d4d4d4' }}>
                {spaceComplexity}
              </p>
              {spaceInfo && <p className="text-[10px] text-text-secondary mt-1">{spaceInfo.description}</p>}
            </div>
          </div>

          {/* Big-O Chart */}
          <div className="bg-editor-bg rounded p-3">
            <p className="text-[10px] uppercase tracking-wider text-text-muted mb-2 font-semibold">Growth Comparison</p>
            <svg width="300" height="150" className="w-full" viewBox="0 0 300 150">
              {/* Grid lines */}
              {[0, 30, 60, 90, 120].map(y => (
                <line key={y} x1={20} y1={y + 10} x2={300} y2={y + 10} stroke="#3e3e42" strokeWidth={0.5} />
              ))}
              {/* Axis */}
              <line x1={20} y1={130} x2={300} y2={130} stroke="#5a5a5a" strokeWidth={1} />
              <line x1={20} y1={10} x2={20} y2={130} stroke="#5a5a5a" strokeWidth={1} />
              <text x={160} y={148} textAnchor="middle" fill="#5a5a5a" fontSize={9} fontFamily="monospace">n →</text>
              <text x={8} y={70} textAnchor="middle" fill="#5a5a5a" fontSize={9} fontFamily="monospace" transform="rotate(-90, 8, 70)">time →</text>

              {/* Curves */}
              {chartComplexities.map(c => {
                const info = COMPLEXITIES[c];
                const pts = curvePoints(c, maxN, maxY);
                const isActive = timeInfo?.label === c;
                const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x + 20} ${130 - p.y}`).join(' ');

                return (
                  <g key={c}>
                    <path
                      d={d}
                      fill="none"
                      stroke={info.color}
                      strokeWidth={isActive ? 2.5 : 1}
                      opacity={isActive ? 1 : 0.3}
                    />
                    {/* Label at end of curve */}
                    {pts.length > 0 && (
                      <text
                        x={pts[pts.length - 1].x + 20}
                        y={130 - Math.min(pts[pts.length - 1].y, 115) - 4}
                        fill={info.color}
                        fontSize={isActive ? 9 : 7}
                        fontFamily="monospace"
                        fontWeight={isActive ? 'bold' : 'normal'}
                        opacity={isActive ? 1 : 0.5}
                        textAnchor="end"
                      >
                        {c}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
