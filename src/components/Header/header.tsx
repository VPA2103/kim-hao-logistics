"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "../../../public/filemanager/userfiles/logologo.png";

interface NavItem {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
}

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items memoization
  const navItems: NavItem[] = useMemo(
    () => [
      { href: "/", label: "home" },
      { href: "/gioi-thieu", label: "about_us" },
      {
        href: "/dich-vu",
        label: "services",
        subItems: [
          {
            href: "/van-tai-duong-thuy",
            label: "services_sub.water_transport",
          },
          { href: "/van-tai-hang-khong", label: "services_sub.air_transport" },
          {
            href: "/dich-vu-kho-bai-va-phan-phoi",
            label: "services_sub.warehouse",
          },
          {
            href: "/van-tai-noi-dia",
            label: "services_sub.domestic_transport",
          },
          { href: "/hai-quan", label: "services_sub.customs" },
        ],
      },
      {
        href: "/tin-kim-hao",
        label: "news",
        subItems: [
          { href: "/tin-tuc", label: "news_sub.news" },
          { href: "/hoat-dong", label: "news_sub.activities" },
          { href: "/tuyen-dung", label: "news_sub.recruitment" },
        ],
      },
      { href: "/lien-he", label: "contact" },
    ],
    []
  );

  // Event handlers memoization
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback((index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
    setIsSearchOpen(false);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language change effect
 useEffect(() => {
   const handleLanguageChange = () => {
     closeAllDropdowns();
   };
   i18n.on("languageChanged", handleLanguageChange);
   return () => i18n.off("languageChanged", handleLanguageChange);
 }, [i18n, closeAllDropdowns]);

 // With this:
 useEffect(() => {
   closeAllDropdowns();
 }, [i18n.language, closeAllDropdowns]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out",
        isScrolled
          ? "h-16 bg-white shadow-md" // Khi cuộn xuống
          : "h-20 bg-transparent" // Khi ở đầu trang
      )}
    >
      <div className="mx-auto h-full max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeAllDropdowns}
            className="z-10 transition-opacity hover:opacity-90"
          >
            <Image
              src={logo}
              alt="SCANWELL LOGISTICS VIETNAM"
              width={200}
              height={60}
              priority
              className={clsx(
                "h-auto transition-transform duration-300",
                isScrolled ? "scale-90" : "scale-100"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-1 md:justify-center">
            <ul className="flex gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setActiveDropdown(index)}
                  onMouseLeave={() => item.subItems && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center h-20 text-sm font-semibold uppercase tracking-wide transition-colors",
                      isScrolled ? "text-gray-800" : "text-white", // Chuyển đổi màu chữ
                      "hover:text-blue-500",
                      item.subItems &&
                        "relative after:absolute after:bottom-6 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                    )}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    {t(item.label)}
                    {item.subItems && <span className="ml-1.5 text-xs">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <ul
                      className={clsx(
                        "absolute top-full left-0 min-w-[220px] rounded-md bg-white shadow-lg transition-opacity duration-300",
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      )}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={closeAllDropdowns}
                          >
                            {t(subItem.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Track & Trace */}
            <Link
              href="#tracking"
              className={clsx(
                "hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm font-medium uppercase transition-colors",
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700" // Khi cuộn
                  : "bg-transparent text-white hover:bg-white/20" // Khi ở đầu trang
              )}
            >
              {t("track_trace")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-blue-600 md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-xl">{isMobileMenuOpen ? "×" : "☰"}</span>
            </button>

            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-800 hover:text-blue-600"
              aria-label="Search"
            >
              <span className="text-xl">🔍</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-white transition-transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col p-4">
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-blue-600"
              aria-label="Close menu"
            >
              <span className="text-xl">×</span>
            </button>
          </div>

          <nav className="mt-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="border-b last:border-0">
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-gray-100"
                  onClick={toggleMobileMenu}
                >
                  {t(item.label)}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="absolute left-1/2 top-20 w-full max-w-md -translate-x-1/2 transform px-4">
            <div className="rounded-lg bg-white p-4 shadow-xl">
              <form className="flex gap-2">
                <input
                  type="search"
                  placeholder={t("search_placeholder")}
                  className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  {t("search")}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
