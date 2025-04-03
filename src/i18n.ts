import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viTranslation from "../i18n/locales/vi.json";
import enTranslation from "../i18n/locales/en.json";
import LanguageDetector from "i18next-browser-languagedetector"; // Import bộ phát hiện ngôn ngữ

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: viTranslation },
      en: { translation: enTranslation },
    },
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['cookie'], // Lưu trữ ngôn ngữ trong cookie
    },
  });

export default i18n;
