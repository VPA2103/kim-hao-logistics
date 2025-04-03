import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import viFlag from "../../../public/filemanager/userfiles/vi.png";
import enFlag from "../../../public/filemanager/userfiles/usa.png";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = async (lng: string) => {
    await i18n.changeLanguage(lng);
    setIsOpen(false);
  };

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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-center p-2 rounded-md border border-gray-300 shadow-sm bg-white hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={i18n.language === "vi" ? viFlag : enFlag}
          alt={i18n.language === "vi" ? "Tiếng Việt" : "English"}
          width={24}
          height={16}
        />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-28 bg-white shadow-md rounded-md border border-gray-200 p-2 z-50">
          {["vi", "en"].map((lng) => (
            <button
              key={lng}
              className={`flex items-center justify-start w-full px-3 py-2 rounded-md hover:bg-gray-100 ${
                i18n.language === lng ? "bg-gray-200" : ""
              }`}
              onClick={() => handleLanguageChange(lng)}
            >
              <Image
                src={lng === "vi" ? viFlag : enFlag}
                alt={lng}
                width={24}
                height={16}
              />
              <span className="ml-2">
                {lng === "vi" ? "Tiếng Việt" : "English"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
