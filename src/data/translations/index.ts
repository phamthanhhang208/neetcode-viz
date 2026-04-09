import type { SupportedLanguage, CodeSolution } from '../types';
import { arraysHashingTranslations } from './arrays-hashing';
import { twoPointersTranslations } from './two-pointers';
import { slidingWindowTranslations } from './sliding-window';
import { stackTranslations } from './stack';
import { binarySearchTranslations } from './binary-search';
import { treesTranslations } from './trees';
import { triesTranslations } from './tries';
import { heapPriorityQueueTranslations } from './heap-priority-queue';
import { backtrackingTranslations } from './backtracking';
import { linkedListTranslations } from './linked-list';
import { graphsTranslations } from './graphs';
import { advancedGraphsTranslations } from './advanced-graphs';
import { oneDDPTranslations } from './1d-dp';
import { twoDDPTranslations } from './2d-dp';
import { greedyTranslations } from './greedy';
import { intervalsTranslations } from './intervals';
import { mathGeometryTranslations } from './math-geometry';
import { bitManipulationTranslations } from './bit-manipulation';

export type TranslationMap = Record<string, Partial<Record<SupportedLanguage, CodeSolution>>>;

const translations: TranslationMap = {
  ...arraysHashingTranslations,
  ...twoPointersTranslations,
  ...slidingWindowTranslations,
  ...stackTranslations,
  ...binarySearchTranslations,
  ...linkedListTranslations,
  ...treesTranslations,
  ...triesTranslations,
  ...heapPriorityQueueTranslations,
  ...backtrackingTranslations,
  ...graphsTranslations,
  ...advancedGraphsTranslations,
  ...oneDDPTranslations,
  ...twoDDPTranslations,
  ...greedyTranslations,
  ...intervalsTranslations,
  ...mathGeometryTranslations,
  ...bitManipulationTranslations,
};

export default translations;
