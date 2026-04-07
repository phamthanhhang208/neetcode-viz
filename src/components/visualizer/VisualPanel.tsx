import type { VizState } from '@/data/types';
import ArrayViz from './viz/ArrayViz';
import HashMapViz from './viz/HashMapViz';
import SetViz from './viz/SetViz';
import StackViz from './viz/StackViz';
import QueueViz from './viz/QueueViz';
import LinkedListViz from './viz/LinkedListViz';
import BinaryTreeViz from './viz/BinaryTreeViz';
import GraphViz from './viz/GraphViz';
import MatrixViz from './viz/MatrixViz';
import BinarySearchViz from './viz/BinarySearchViz';
import IntervalsViz from './viz/IntervalsViz';
import DPTableViz from './viz/DPTableViz';
import TrieViz from './viz/TrieViz';
import HeapViz from './viz/HeapViz';

interface Props {
  viz: VizState;
}

export default function VisualPanel({ viz }: Props) {
  return (
    <div className="h-full overflow-auto divide-y divide-editor-border">
      {viz.binarySearch && <BinarySearchViz data={viz.binarySearch} array={viz.array} />}
      {viz.array && !viz.binarySearch && (
        <ArrayViz data={viz.array} pointers={viz.pointers} />
      )}
      {viz.hashmap && <HashMapViz data={viz.hashmap} />}
      {viz.set && <SetViz data={viz.set} />}
      {viz.stack && <StackViz data={viz.stack} />}
      {viz.queue && <QueueViz data={viz.queue} />}
      {viz.linkedList && <LinkedListViz data={viz.linkedList} />}
      {viz.binaryTree && <BinaryTreeViz data={viz.binaryTree} />}
      {viz.graph && <GraphViz data={viz.graph} />}
      {viz.matrix && <MatrixViz data={viz.matrix} />}
      {viz.intervals && <IntervalsViz data={viz.intervals} />}
      {viz.dpTable && <DPTableViz data={viz.dpTable} />}
      {viz.trie && <TrieViz data={viz.trie} />}
      {viz.heap && <HeapViz data={viz.heap} />}
    </div>
  );
}
