import type { SupportedLanguage, CodeSolution } from '../types';

export type TranslationMap = Record<string, Partial<Record<SupportedLanguage, CodeSolution>>>;

// Translations will be added here as they are generated.
// Each topic file exports a TranslationMap keyed by problem ID.
// Example:
//   import { arraysHashingTranslations } from './arrays-hashing';
//   merge into the combined map below.

const translations: TranslationMap = {};

export default translations;
