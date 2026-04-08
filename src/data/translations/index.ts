import type { SupportedLanguage, CodeSolution } from '../types';
import { arraysHashingTranslations } from './arrays-hashing';
import { twoPointersTranslations } from './two-pointers';
import { stackTranslations } from './stack';
import { binarySearchTranslations } from './binary-search';
import { treesTranslations } from './trees';
import { triesTranslations } from './tries';

export type TranslationMap = Record<string, Partial<Record<SupportedLanguage, CodeSolution>>>;

const translations: TranslationMap = {
  ...arraysHashingTranslations,
  ...twoPointersTranslations,
  ...stackTranslations,
  ...binarySearchTranslations,
  ...treesTranslations,
  ...triesTranslations,
};

export default translations;
