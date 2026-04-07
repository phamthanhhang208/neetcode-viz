import { cn } from '@/lib/utils';
import type { GraphVizState } from '@/data/types';

interface Props {
  data: GraphVizState;
}

export default function GraphViz({ data }: Props) {
  const { nodes, edges, visited = [], current, queue, stack } = data;

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Graph</h4>
      <div className="flex gap-6">
        <svg width="300" height="250" className="overflow-visible">
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = nodes.find((n) => n.id === edge.from);
            const to = nodes.find((n) => n.id === edge.to);
            if (!from?.x || !from?.y || !to?.x || !to?.y) return null;
            return (
              <line
                key={i}
                x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke="#3e3e42" strokeWidth={1.5}
              />
            );
          })}
          {/* Nodes */}
          {nodes.map((node) => {
            const isVisited = visited.includes(node.id);
            const isCurrent = current === node.id;
            return (
              <g key={node.id}>
                <circle
                  cx={node.x ?? 0} cy={node.y ?? 0} r={20}
                  fill={isCurrent ? '#264f78' : isVisited ? '#6a995530' : '#2d2d2d'}
                  stroke={isCurrent ? '#569cd6' : isVisited ? '#6a9955' : '#3e3e42'}
                  strokeWidth={2}
                />
                <text
                  x={node.x ?? 0} y={node.y ?? 0}
                  textAnchor="middle" dominantBaseline="central"
                  fill="#d4d4d4" fontSize={12} fontFamily="JetBrains Mono, monospace"
                >
                  {node.value}
                </text>
              </g>
            );
          })}
        </svg>
        {/* Queue/Stack sidebar */}
        {(queue || stack) && (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-text-muted mb-1 font-semibold">
              {queue ? 'Queue' : 'Stack'}
            </div>
            <div className="space-y-0.5">
              {(queue ?? stack ?? []).map((id, i) => (
                <div key={i} className="px-2 py-1 rounded text-xs font-mono border border-editor-border bg-editor-active">
                  {id}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
