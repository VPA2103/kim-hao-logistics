import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import vi from './locales/vi.json';

export const initI18n = async () => {
    const lang =
        typeof window !== 'undefined'
            ? localStorage.getItem('lang') || navigator.language.split('-')[0] || 'vi'
            : 'vi';

    await i18n
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: en },
                vi: { translation: vi },
            },
            lng: lang,
            fallbackLng: 'vi',
            interpolation: { escapeValue: false },
        });

    return i18n;
};

export default i18n;
