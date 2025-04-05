"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "../../../public/filemanager/userfiles/logologo.png";
// import { TracingChannel } from "node:diagnostics_channel";
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

  // Scroll effect - now actually used
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
        isScrolled ? "bg-white shadow-md h-16" : "bg-white h-20" // Always white background as per design
      )}
    >
      <div className="mx-auto h-full max-w-screen-xl px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="z-10 transition-opacity hover:opacity-90"
            onClick={closeAllDropdowns}
          >
            <Image
              src={logo}
              alt="SCANWELL LOGISTICS VIETNAM"
              width={160}
              height={40}
              priority
              className={clsx(
                "h-auto transition-transform duration-300",
                isScrolled ? "scale-95" : "scale-100"
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
                      "flex items-center h-16 text-sm font-bold uppercase tracking-wide transition-colors",
                      "text-gray-800 hover:text-blue-600", // Consistent text color
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
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
            </div>

            {/* Track & Trace */}
            <TrackTraceButton />

            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-800 hover:text-blue-600 md:hidden"
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
          "fixed inset-0 z-40 bg-white transition-transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ top: isScrolled ? "4rem" : "5rem" }} // Adjust based on scroll
      >
        <div className="flex h-[calc(100vh-5rem)] flex-col">
          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <div className="flex flex-col">
                  <button
                    className="flex justify-between items-center w-full px-4 py-4 text-left text-gray-800 font-bold uppercase"
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
                      <span className="text-sm transform transition-transform">
                        {activeDropdown === index ? "▲" : "▼"}
                      </span>
                    )}
                  </button>

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
                            onClick={toggleMobileMenu}
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
            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-medium">
                +84 028 3510 6866
              </span>
            </div>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
