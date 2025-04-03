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
   closeAllDropdowns();
 }, [i18n.language, closeAllDropdowns]);

 // With this:
 useEffect(() => {
   closeAllDropdowns();
 }, [i18n.language, closeAllDropdowns]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md h-16">
      <div className="mx-auto h-full max-w-screen-xl px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image
              src={logo}
              alt="SCANWELL LOGISTICS VIETNAM"
              width={180}
              height={50}
              priority
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-1 md:justify-center">
            <ul className="flex gap-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.subItems && setActiveDropdown(index)}
                  onMouseLeave={() => item.subItems && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center h-16 text-sm font-bold uppercase tracking-wide text-gray-800 hover:text-blue-600 transition-colors",
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
                  {item.subItems && activeDropdown === index && (
                    <ul className="absolute top-full left-0 min-w-[200px] bg-white shadow-lg rounded-b-md overflow-hidden">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600"
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

          {/* Right Side - Phone and Track & Trace */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <LanguageSwitcher />
            </div>

            <Link
              href="#tracking"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold uppercase hover:bg-blue-700 transition-colors"
            >
              {t("track_trace")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-16">
          {/* Nút đóng và Language Switcher */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-blue-600 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <span className="text-2xl">×</span>
            </button>

            {/* Language Switcher cho mobile */}
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="flex flex-col p-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full px-4 py-3 text-left text-gray-800 font-bold uppercase"
                    onClick={() => {
                      if (item.subItems) {
                        toggleDropdown(index);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    <span>{t(item.label)}</span>
                    {item.subItems && (
                      <span>{activeDropdown === index ? "▲" : "▼"}</span>
                    )}
                  </button>

                  {item.subItems && activeDropdown === index && (
                    <div className="pl-6 py-2 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t(subItem.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <div className="flex items-center gap-2 px-4 py-2 text-blue-600">
                  <span>+84 028 3510 6866</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
