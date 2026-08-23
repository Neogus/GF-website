'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import es from './es.json';
import en from './en.json';

type Language = 'es' | 'en';

/* eslint-disable @typescript-eslint/no-explicit-any */
const translations: Record<Language, any> = { es, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, key: string): string {
  const parts = key.split('.');
  let current: unknown = obj;
  for (const part of parts) {
    if (current === null || typeof current !== 'object') {
      return key;
    }
    current = (current as Record<string, unknown>)[part];
  }
  if (typeof current === 'string') return current;
  if (typeof current === 'number') return String(current);
  return key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const toggle = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return getNestedValue(translations[language] as Record<string, unknown>, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
