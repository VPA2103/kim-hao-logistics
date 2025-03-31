"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import vi from "../../../public/filemanager/userfiles/vi.png";
import usa from "../../../public/filemanager/userfiles/usa.png";
import './index.css'

const LanguageSwitcher = ({ mobile = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Xử lý ngôn ngữ qua i18n
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setIsOpen(false);
  };

  // Xử lý click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`language-switcher ${mobile ? "mobile" : ""}`}
      ref={dropdownRef}
    >
      <button className="language-trigger" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={i18n.language === "vi" ? vi : usa}
          alt={i18n.language === "vi" ? "Vietnamese" : "English"}
          width={24}
          height={16}
        />
      </button>

      {isOpen && (
        <div className="language-dropdown">
          <button onClick={() => changeLanguage("vi")}>
            <Image src={vi} alt="Vietnamese" width={24} height={16} />
            {/* <span>Tiếng Việt</span> */}
          </button>
          <button onClick={() => changeLanguage("en")}>
            <Image src={usa} alt="English" width={24} height={16} />
            {/* <span>English</span> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
