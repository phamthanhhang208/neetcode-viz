import type { Problem, TopicId } from './types';
import { arraysHashingProblems } from './problems/arrays-hashing';
import { stackProblems } from './problems/stack';
import { binarySearchProblems } from './problems/binary-search';
import { twoPointersProblems } from './problems/two-pointers';
import { slidingWindowProblems } from './problems/sliding-window';
import { linkedListProblems } from './problems/linked-list';

const PROBLEM_REGISTRY: Partial<Record<TopicId, Problem[]>> = {
  'arrays-hashing': arraysHashingProblems,
  'two-pointers': twoPointersProblems,
  'sliding-window': slidingWindowProblems,
  'stack': stackProblems,
  'binary-search': binarySearchProblems,
  'linked-list': linkedListProblems,
};

export function getProblemsForTopic(topicId: TopicId): Problem[] {
  return PROBLEM_REGISTRY[topicId] ?? [];
}

export function getProblemById(topicId: TopicId, problemId: string): Problem | undefined {
  const problems = getProblemsForTopic(topicId);
  return problems.find((p) => p.id === problemId);
}
