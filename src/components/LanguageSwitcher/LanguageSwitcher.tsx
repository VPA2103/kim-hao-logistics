"use client";
import { useState, useRef, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import viFlag from "../../../public/filemanager/userfiles/vi.png";
import enFlag from "../../../public/filemanager/userfiles/usa.png";
import zhFlag from "../../../public/filemanager/userfiles/cn.png";

interface FlagPaths {
  [key: string]: StaticImageData;
}

const flags: FlagPaths = {
  vi: viFlag,
  en: enFlag,
  zh: zhFlag,
};

const languageNames: Record<string, string> = {
  vi: "Tiếng Việt",
  en: "English",
  zh: "中文",
};

const supportedLanguages = ["vi", "en", "zh"];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language?.split("-")[0] || "vi";

  const handleLanguageChange = async (lng: string) => {
    if (!supportedLanguages.includes(lng)) return;

    try {
      // Update i18n
      await i18n.changeLanguage(lng);

      // Save to cookie and localStorage
      document.cookie = `i18nextLng=${lng}; path=/; max-age=${
        365 * 24 * 60 * 60
      }; SameSite=Lax`;
      localStorage.setItem("i18nextLng", lng);

      // Refresh the page to apply changes
      router.refresh();
    } catch (error) {
      console.error("Error changing language:", error);
    } finally {
      setIsOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync language on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (
      savedLang &&
      supportedLanguages.includes(savedLang) &&
      savedLang !== i18n.language
    ) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center p-2 rounded-md border border-gray-300 shadow-sm bg-white hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        type="button"
      >
        <Image
          src={flags[currentLanguage] || flags.vi}
          alt={languageNames[currentLanguage] || languageNames.vi}
          width={24}
          height={16}
          quality={100}
        />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-60 bg-white shadow-lg rounded-md border border-gray-200 p-2 z-50">
          {Object.keys(flags).map((lng) => (
            <button
              key={lng}
              className={`flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ${
                currentLanguage === lng ? "bg-gray-100 font-medium" : ""
              }`}
              onClick={() => handleLanguageChange(lng)}
              type="button"
            >
              <Image
                src={flags[lng]}
                alt={languageNames[lng]}
                width={24}
                height={16}
                className="flex-shrink-0"
                quality={100}
              />
              <span className="ml-2 overflow-hidden text-ellipsis">
                {languageNames[lng]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
