import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Khởi tạo react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our app!",
        },
      },
      vi: {
        translation: {
          welcome: "Chào mừng bạn đến với ứng dụng của chúng tôi!",
        },
      },
    },
    lng: "vi", // Ngôn ngữ mặc định
    fallbackLng: "en", // Ngôn ngữ dự phòng
    interpolation: {
      escapeValue: false, // Không cần escape ký tự đặc biệt
    },
  });

export default i18n;
