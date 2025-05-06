"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "../../../image/logo/Logo.svg";
import TrackTraceButton from "@/app/TrackTraceButton";

interface NavItem {
  href: string;
  label: string;
  subItems?: { href: string; label: string }[];
}

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
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

  // Event handlers
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback((index: number) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language change effect
  useEffect(() => {
    closeAllDropdowns();
  }, [i18n.language, closeAllDropdowns]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      {/* Logo Section - Shown only when not scrolled */}
      {!isScrolled && (
        <div className="w-full flex justify-center py-2">
          <Link
            href="/"
            className="z-10 transition-opacity hover:opacity-90"
            onClick={closeAllDropdowns}
          >
            <Image
              src={logo}
              alt="Kim Hảo LOGISTICS VIETNAM"
              width={140}
              height={40}
              priority
              className="h-auto"
            />
          </Link>
        </div>
      )}

      {/* Navigation Section */}
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex h-full items-center justify-between relative">
          {/* Logo when scrolled - appears to the left */}
          {isScrolled && (
            <div className="absolute left-0">
              <Link
                href="/"
                className="z-10 transition-opacity hover:opacity-90"
                onClick={closeAllDropdowns}
              >
                <Image
                  src={logo}
                  alt="Kim Hảo LOGISTICS VIETNAM"
                  width={120}
                  height={35}
                  priority
                  className="h-auto"
                />
              </Link>
            </div>
          )}

          {/* Desktop Navigation - Always centered */}
          <nav className="hidden md:flex mx-auto">
            <ul className="flex gap-6 xl:gap-8 ml-40">
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
                      "flex items-center h-12 text-sm font-bold uppercase tracking-wide transition-colors",
                      isScrolled
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-black hover:text-blue-600",
                      item.subItems && "pr-4"
                    )}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleDropdown(index);
                      }
                    }}
                  >
                    {t(item.label)}
                    {item.subItems && <span className="ml-1 text-xs">▼</span>}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <ul
                      className={clsx(
                        "absolute top-full left-0 min-w-[220px] rounded-md bg-white shadow-lg transition-all duration-300",
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      )}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
            </div>

            {/* Track & Trace */}
            <TrackTraceButton />

            <button
              onClick={toggleMobileMenu}
              className={clsx(
                "p-2 md:hidden",
                isScrolled
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-black hover:text-blue-600"
              )}
              aria-label="Toggle menu"
            >
              <span className="text-2xl">{isMobileMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-white/90 backdrop-blur-sm transition-transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ top: isScrolled ? "4rem" : "6rem" }}
      >
        {/* Mobile menu header with close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <span className="font-bold text-gray-800">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-800 hover:text-blue-600"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          className={clsx(
            "flex flex-col",
            isScrolled ? "h-[calc(100vh-4rem)]" : "h-[calc(100vh-6rem)]"
          )}
        >
          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <div className="flex flex-col">
                  {item.subItems ? (
                    <button
                      className="flex justify-between items-center w-full px-4 py-4 text-left text-gray-800 font-bold uppercase"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{t(item.label)}</span>
                      <span className="text-sm transform transition-transform">
                        {activeDropdown === index ? "▲" : "▼"}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center w-full px-4 py-4 text-left text-gray-800 font-bold uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{t(item.label)}</span>
                    </Link>
                  )}

                  {/* SubItems for mobile */}
                  {item.subItems && (
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-300",
                        activeDropdown === index ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="pl-6 py-2 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(subItem.label)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <span className="text-blue-600 font-medium">0903 357 988</span>
            </div>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
