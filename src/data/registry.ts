import type { Problem, TopicId } from './types';
import { arraysHashingProblems } from './problems/arrays-hashing';
import { stackProblems } from './problems/stack';
import { binarySearchProblems } from './problems/binary-search';
import { twoPointersProblems } from './problems/two-pointers';
import { slidingWindowProblems } from './problems/sliding-window';
import { linkedListProblems } from './problems/linked-list';
import { treesProblems } from './problems/trees';
import { triesProblems } from './problems/tries';
import { heapProblems } from './problems/heap-priority-queue';
import { backtrackingProblems } from './problems/backtracking';
import { oneDDPProblems } from './problems/1d-dp';
import { greedyProblems } from './problems/greedy';
import { intervalsProblems } from './problems/intervals';
import { mathGeometryProblems } from './problems/math-geometry';
import { bitManipulationProblems } from './problems/bit-manipulation';
import { graphsProblems } from './problems/graphs';
import { advancedGraphsProblems } from './problems/advanced-graphs';
import { twoDDPProblems } from './problems/2d-dp';

const PROBLEM_REGISTRY: Partial<Record<TopicId, Problem[]>> = {
  'arrays-hashing': arraysHashingProblems,
  'two-pointers': twoPointersProblems,
  'sliding-window': slidingWindowProblems,
  'stack': stackProblems,
  'binary-search': binarySearchProblems,
  'linked-list': linkedListProblems,
  'trees': treesProblems,
  'tries': triesProblems,
  'heap-priority-queue': heapProblems,
  'backtracking': backtrackingProblems,
  '1d-dp': oneDDPProblems,
  'greedy': greedyProblems,
  'intervals': intervalsProblems,
  'math-geometry': mathGeometryProblems,
  'bit-manipulation': bitManipulationProblems,
  'graphs': graphsProblems,
  'advanced-graphs': advancedGraphsProblems,
  '2d-dp': twoDDPProblems,
};

export function getProblemsForTopic(topicId: TopicId): Problem[] {
  return PROBLEM_REGISTRY[topicId] ?? [];
}

export function getProblemById(topicId: TopicId, problemId: string): Problem | undefined {
  const problems = getProblemsForTopic(topicId);
  return problems.find((p) => p.id === problemId);
}
