import type { UserConfig } from 'next-i18next';

const i18nConfig: UserConfig = {
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'zh'],
  },
  // Bỏ use: [i18nInstance] vì next-i18next sẽ tự tạo instance
  serializeConfig: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag'],
    caches: ['cookie']
  },
  // Thêm cấu hình interpolation để đồng bộ
  interpolation: {
    escapeValue: false
  }
};

export default i18nConfig;