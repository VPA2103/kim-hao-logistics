"use client";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import i18n from "../../../i18n/i18n";

interface LanguageContextType {
  language: string;
  changeLanguage: (lng: string) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(i18n.language || "vi");

  // Đồng bộ ngôn ngữ khi khởi tạo
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setLanguage(lng.split("-")[0]);
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const changeLanguage = async (lng: string) => {
    try {
      if (typeof i18n.changeLanguage !== "function") {
        throw new Error(
          "i18n.changeLanguage is not a function. Check i18n configuration."
        );
      }
      await i18n.changeLanguage(lng);
      // Không cần setLanguage ở đây vì đã xử lý trong event listener
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
