import { create } from 'zustand';
import type { SupportedLanguage } from '@/data/types';

interface LanguageState {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: (localStorage.getItem('neetcode-language') as SupportedLanguage) || 'python',
  setLanguage: (lang) => {
    localStorage.setItem('neetcode-language', lang);
    set({ language: lang });
  },
}));
