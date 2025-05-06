"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vi from './locales/vi.json';
import en from './locales/en.json';
import zh from './locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'vi',
    fallbackLng: 'vi',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      zh: { translation: zh },
    },
    returnObjects: true,
    react: {
      useSuspense: false,
    }
  });

export default i18n;
