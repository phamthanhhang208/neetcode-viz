export type TopicId =
  | 'arrays-hashing' | 'two-pointers' | 'sliding-window' | 'stack'
  | 'binary-search' | 'linked-list' | 'trees' | 'tries'
  | 'heap-priority-queue' | 'backtracking' | 'graphs' | 'advanced-graphs'
  | '1d-dp' | '2d-dp' | 'greedy' | 'intervals' | 'math-geometry' | 'bit-manipulation';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type ProblemStatus = 'todo' | 'in-progress' | 'done';

export type VizType = 'array' | 'hashmap' | 'set' | 'stack' | 'queue' | 'linked-list' |
  'binary-tree' | 'graph' | 'matrix' | 'two-pointers' | 'binary-search' |
  'intervals' | 'dp-table' | 'trie' | 'heap' | 'custom';

export interface ArrayVizState {
  values: (number | string)[];
  highlights?: number[];
  found?: number[];
  comparing?: number[];
  swapping?: [number, number];
  sorted?: number[];
  labels?: Record<number, string>;
}

export interface HashMapVizState {
  entries: [string, any][];
  highlighted?: string;
  justAdded?: string;
  justRemoved?: string;
}

export interface SetVizState {
  values: (string | number)[];
  highlighted?: string | number;
  justAdded?: string | number;
  checking?: string | number;
}

export interface StackVizState {
  values: (string | number)[];
  pushing?: string | number;
  popping?: boolean;
  peeking?: boolean;
}

export interface QueueVizState {
  values: (string | number)[];
  enqueueing?: string | number;
  dequeueing?: boolean;
}

export interface LinkedListNode {
  value: number | string;
  id: string;
}

export interface LinkedListVizState {
  nodes: LinkedListNode[];
  pointers?: Record<string, string>; // name -> node id
  highlighted?: string[];
  newNode?: string;
  removingNode?: string;
}

export interface TreeNode {
  id: string;
  value: number | string;
  left?: string;
  right?: string;
}

export interface BinaryTreeVizState {
  nodes: TreeNode[];
  highlighted?: string[];
  visiting?: string;
  path?: string[];
}

export interface GraphNode {
  id: string;
  value: string | number;
  x?: number;
  y?: number;
}

export interface GraphEdge {
  from: string;
  to: string;
  weight?: number;
  directed?: boolean;
}

export interface GraphVizState {
  nodes: GraphNode[];
  edges: GraphEdge[];
  visited?: string[];
  current?: string;
  queue?: string[];
  stack?: string[];
}

export interface MatrixVizState {
  values: (number | string)[][];
  highlights?: [number, number][];
  path?: [number, number][];
  current?: [number, number];
}

export interface BinarySearchVizState {
  lo: number;
  hi: number;
  mid: number;
  target: number;
  eliminated?: 'left' | 'right';
}

export interface IntervalsVizState {
  items: [number, number][];
  highlighted?: number;
  merged?: [number, number][];
}

export interface DPTableVizState {
  values: (number | string)[][];
  current?: [number, number];
  dependencies?: [number, number][];
  labels?: { rows?: string[]; cols?: string[] };
}

export interface TrieNode {
  id: string;
  char: string;
  isEnd?: boolean;
}

export interface TrieEdge {
  from: string;
  to: string;
}

export interface TrieVizState {
  nodes: TrieNode[];
  edges: TrieEdge[];
  highlighted?: string[];
  currentPath?: string[];
}

export interface HeapVizState {
  values: number[];
  comparing?: [number, number];
  swapping?: [number, number];
  inserting?: number;
  removing?: boolean;
}

export interface VizState {
  array?: ArrayVizState;
  hashmap?: HashMapVizState;
  set?: SetVizState;
  stack?: StackVizState;
  queue?: QueueVizState;
  linkedList?: LinkedListVizState;
  binaryTree?: BinaryTreeVizState;
  graph?: GraphVizState;
  matrix?: MatrixVizState;
  pointers?: Record<string, number>;
  binarySearch?: BinarySearchVizState;
  intervals?: IntervalsVizState;
  dpTable?: DPTableVizState;
  trie?: TrieVizState;
  heap?: HeapVizState;
  variables?: Record<string, any>;
}

export interface VisualizationStep {
  line: number;
  label: string;
  message: string;
  viz: VizState;
  isKeyMoment?: boolean;
}

export interface Problem {
  id: string;
  name: string;
  number: number;
  difficulty: Difficulty;
  link: string;
  description: string;
  vizTypes: VizType[];
  code: string;
  language: string;
  testInput: string;
  steps: VisualizationStep[];
  hints?: string[];
  timeComplexity: string;
  spaceComplexity: string;
  pattern: string;
}

export interface TopicSummary {
  keyIdea: string;
  concepts: { term: string; description: string }[];
  whenToUse: string[];
  commonMistakes?: string[];
  complexity: string;
}

export interface TopicMeta {
  id: TopicId;
  name: string;
  icon: string;
  color: string;
  order: number;
  summary: TopicSummary;
}

export interface Topic extends TopicMeta {
  problems: Problem[];
}

export interface NeetCodeProblem {
  id: string;
  name: string;
  number: number;
  difficulty: Difficulty;
  topicId: TopicId;
  link: string;
  hasVisualization: boolean;
}
