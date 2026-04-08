import type { SupportedLanguage, CodeSolution } from '../types';
import { arraysHashingTranslations } from './arrays-hashing';
import { twoPointersTranslations } from './two-pointers';
import { slidingWindowTranslations } from './sliding-window';
import { stackTranslations } from './stack';
import { binarySearchTranslations } from './binary-search';
import { treesTranslations } from './trees';
import { triesTranslations } from './tries';
import { heapTranslations } from './heap-priority-queue';
import { backtrackingTranslations } from './backtracking';
import { linkedListTranslations } from './linked-list';

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
  ...heapTranslations,
  ...backtrackingTranslations,
};

export default translations;
