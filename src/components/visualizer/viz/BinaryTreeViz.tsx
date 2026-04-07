import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { BinaryTreeVizState, TreeNode } from '@/data/types';

interface Props {
  data: BinaryTreeVizState;
}

interface PositionedNode {
  node: TreeNode;
  x: number;
  y: number;
  level: number;
}

function layoutTree(nodes: TreeNode[]): PositionedNode[] {
  if (nodes.length === 0) return [];
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const positioned: PositionedNode[] = [];
  const root = nodes[0];

  function place(id: string | undefined, x: number, y: number, level: number, spread: number) {
    if (!id) return;
    const node = nodeMap.get(id);
    if (!node) return;
    positioned.push({ node, x, y, level });
    place(node.left, x - spread, y + 60, level + 1, spread / 2);
    place(node.right, x + spread, y + 60, level + 1, spread / 2);
  }

  place(root.id, 200, 30, 0, 100);
  return positioned;
}

export default function BinaryTreeViz({ data }: Props) {
  const { nodes, highlighted = [], visiting, path = [] } = data;
  const positioned = layoutTree(nodes);
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  return (
    <div className="p-4">
      <h4 className="text-[10px] uppercase tracking-wider text-text-muted mb-3 font-semibold">Binary Tree</h4>
      <svg width="400" height={Math.max(200, positioned.length * 30)} className="overflow-visible">
        {/* Edges */}
        {positioned.map(({ node, x, y }) => {
          const children = [node.left, node.right].filter(Boolean);
          return children.map((childId) => {
            const child = positioned.find((p) => p.node.id === childId);
            if (!child) return null;
            const isOnPath = path.includes(node.id) && path.includes(childId!);
            return (
              <line
                key={`${node.id}-${childId}`}
                x1={x} y1={y} x2={child.x} y2={child.y}
                stroke={isOnPath ? '#6a9955' : '#3e3e42'}
                strokeWidth={isOnPath ? 2 : 1}
              />
            );
          });
        })}
        {/* Nodes */}
        {positioned.map(({ node, x, y }) => {
          const isVisiting = visiting === node.id;
          const isHighlighted = highlighted.includes(node.id);
          const isOnPath = path.includes(node.id);

          return (
            <motion.g key={node.id} initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <circle
                cx={x} cy={y} r={18}
                fill={isVisiting ? '#264f78' : isHighlighted ? '#dcdcaa20' : isOnPath ? '#6a995520' : '#2d2d2d'}
                stroke={isVisiting ? '#569cd6' : isHighlighted ? '#dcdcaa' : isOnPath ? '#6a9955' : '#3e3e42'}
                strokeWidth={2}
              />
              <text
                x={x} y={y} textAnchor="middle" dominantBaseline="central"
                fill={isVisiting ? '#fff' : '#d4d4d4'}
                fontSize={12} fontFamily="JetBrains Mono, monospace"
              >
                {node.value}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
