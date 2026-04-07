import { cn } from '@/lib/utils';
import type { TrieVizState } from '@/data/types';

interface Props {
  data: TrieVizState;
}

export default function TrieViz({ data }: Props) {
  const { nodes, edges, highlighted = [], currentPath = [] } = data;

  // Simple layout: BFS level-based
  const levels: Map<string, number> = new Map();
  const childrenOf: Map<string, string[]> = new Map();
  edges.forEach((e) => {
    const list = childrenOf.get(e.from) ?? [];
    list.push(e.to);
    childrenOf.set(e.from, list);
  });

  const root = nodes.find((n) => n.char === '*' || !edges.some((e) => e.to === n.id));
  if (!root) return null;

  const queue = [root.id];
  levels.set(root.id, 0);
  const positions: Map<string, { x: number; y: number }> = new Map();
  const levelCounts: Map<number, number> = new Map();

  while (queue.length > 0) {
    const id = queue.shift()!;
    const level = levels.get(id)!;
    const count = levelCounts.get(level) ?? 0;
    levelCounts.set(level, count + 1);
    positions.set(id, { x: count * 50 + 50, y: level * 50 + 30 });
    const children = childrenOf.get(id) ?? [];
    children.forEach((c) => { levels.set(c, level + 1); queue.push(c); });
  }

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Trie</h4>
      <svg width="400" height={((levelCounts.size ?? 1) + 1) * 50} className="overflow-visible">
        {edges.map((edge, i) => {
          const from = positions.get(edge.from);
          const to = positions.get(edge.to);
          if (!from || !to) return null;
          return <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#3e3e42" strokeWidth={1.5} />;
        })}
        {nodes.map((node) => {
          const pos = positions.get(node.id);
          if (!pos) return null;
          const isH = highlighted.includes(node.id);
          const isPath = currentPath.includes(node.id);
          return (
            <g key={node.id}>
              <circle
                cx={pos.x} cy={pos.y} r={16}
                fill={isH || isPath ? '#264f78' : '#2d2d2d'}
                stroke={isH ? '#dcdcaa' : isPath ? '#569cd6' : '#3e3e42'}
                strokeWidth={node.isEnd ? 3 : 1.5}
              />
              <text x={pos.x} y={pos.y} textAnchor="middle" dominantBaseline="central" fill="#d4d4d4" fontSize={12} fontFamily="JetBrains Mono, monospace">
                {node.char}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
