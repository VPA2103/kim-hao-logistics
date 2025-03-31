  "use client";

  import Link from "next/link";
  import Image from "next/image";
  import { useEffect, useState } from "react";
  import { useTranslation } from "next-i18next";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "./header.css";
  import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

  // Import images
  import logo from "../../../public/filemanager/userfiles/logologo.png";
  import vi from "../../../public/filemanager/userfiles/vi.png";
  import usa from "../../../public/filemanager/userfiles/usa.png";

  const Header = () => {
    // const { i18n } = useTranslation();
    // const [currentLang, setCurrentLang] = useState(i18n.language || "vi");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      handleScroll(); // Check initial scroll position
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

      // useEffect(() => {
      //   if (!i18n) return;

      //   const handleLanguageChange = () => {
      //     const savedLang = localStorage.getItem("lang") || "vi";
      //     setCurrentLang(savedLang);
      //   };

      //   // Khởi tạo ngôn ngữ
      //   handleLanguageChange();

      //   // Thêm event listener cho việc thay đổi ngôn ngữ
      //   i18n.on("languageChanged", handleLanguageChange);

      //   return () => {
      //     i18n.off("languageChanged", handleLanguageChange);
      //   };
      // }, [i18n]);

    const toggleDropdown = (menu) => {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const closeAllDropdowns = () => {
      setActiveDropdown(null);
      setIsSearchOpen(false);
    };

    // const changeLanguage = (lng) => {
    //   if (!i18n) return;

    //   i18n
    //     .changeLanguage(lng)
    //     .then(() => {
    //       localStorage.setItem("lang", lng);
    //       setCurrentLang(lng);
    //     })
    //     .catch((err) => {
    //       console.error("Lỗi thay đổi ngôn ngữ:", err);
    //     });
    // };

    const navItems = [
      { href: "/", label: "Trang chủ" },
      { href: "/gioi-thieu", label: "Về chúng tôi" },
      {
        href: "/dich-vu",
        label: "Dịch vụ",
        subItems: [
          { href: "/van-tai-duong-thuy", label: "VẬN TẢI ĐƯỜNG THỦY" },
          { href: "/van-tai-hang-khong", label: "VẬN TẢI HÀNG KHÔNG" },
          {
            href: "/dich-vu-kho-bai-va-phan-phoi",
            label: "DỊCH VỤ KHO BÃI VÀ PHÂN PHỐI",
          },
          { href: "/van-tai-noi-dia", label: "VẬN TẢI NỘI ĐỊA" },
          { href: "/hai-quan", label: "HẢI QUAN" },
        ],
      },
      {
        href: "/tin-kim-hao",
        label: "Tin tức Kim Hảo",
        subItems: [
          { href: "/tin-tuc", label: "Tin Tức" },
          { href: "/hoat-dong", label: "Hoạt Kim Hảo" },
          { href: "/tuyen-dung", label: "Tuyển Dụng" },
        ],
      },
      { href: "/lien-he", label: "Liên hệ" },
    ];
    return (
      <>
        {/* <LanguageSwitcher /> */}
        <header
          id="header"
          className={`header ${isScrolled ? "scrolled" : ""}`}
        >
          <div className="header-wrapper">
            {/* Top Bar - Optional, currently hidden */}
            <div className="header-top hide-for-sticky nav-dark hide-for-medium">
              <div className="flex-row container">
                <div className="flex-col hide-for-medium flex-left">
                  <ul className="nav nav-left medium-nav-center nav-small"></ul>
                </div>
                <div className="flex-col hide-for-medium flex-center">
                  <ul className="nav nav-center nav-small"></ul>
                </div>
                <div className="flex-col hide-for-medium flex-right">
                  <ul className="nav top-bar-nav nav-right nav-small"></ul>
                </div>
              </div>
            </div>

            {/* Main Header */}
            <div className="header-main nav-dark">
              <div className="header-inner flex-row container logo-left medium-logo-center">
                {/* Logo */}
                <div className="flex-col logo">
                  <Link
                    href="/"
                    title="SCANWELLLOGISTICS VIETNAM"
                    rel="home"
                    onClick={closeAllDropdowns}
                  >
                    <Image
                      width={200}
                      height={120}
                      src={logo}
                      className="header-logo"
                      alt="SCANWELLLOGISTICS VIETNAM"
                      priority
                    />
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex-col show-for-medium flex-left">
                  <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                  >
                    <i className="icon-menu"></i>
                  </button>
                </div>

                {/* Desktop Navigation */}
                <div className="flex-col hide-for-medium flex-left flex-grow">
                  <ul className="header-nav header-nav-main nav nav-left nav-size-medium nav-spacing-medium nav-uppercase">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className={`menu-item ${
                          item.subItems
                            ? "menu-item-has-children has-dropdown"
                            : ""
                        } ${activeDropdown === item.label ? "active" : ""}`}
                      >
                        <Link href={item.href} passHref legacyBehavior>
                          <a
                            className="nav-top-link"
                            onClick={(e) => {
                              if (item.subItems) {
                                e.preventDefault();
                                toggleDropdown(item.label);
                              }
                            }}
                          >
                            {item.label}
                            {item.subItems && (
                              <i className="icon-angle-down"></i>
                            )}
                          </a>
                        </Link>

                        {item.subItems && (
                          <ul className="sub-menu nav-dropdown nav-dropdown-default">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex} className="menu-item">
                                <Link
                                  href={subItem.href}
                                  passHref
                                  legacyBehavior
                                >
                                  <a onClick={closeAllDropdowns}>
                                    {subItem.label}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Elements */}
                <div className="flex-col hide-for-medium flex-right">
                  <ul className="header-nav header-nav-main nav nav-right nav-size-medium nav-spacing-medium nav-uppercase">
                    {/* Language Selector */}
                    <li className="ct-language">
                      {/* <div
                        className="current-language"
                        onClick={() =>
                          changeLanguage(currentLang === "vi" ? "en" : "vi")
                        }
                      >
                        <Image
                          src={currentLang === "vi" ? vi : usa}
                          alt={currentLang === "vi" ? "Tiếng Việt" : "English"}
                          width={40}
                          height={30}
                          className={`language-flag ${currentLang}`}
                        />
                      </div> */}
                      <LanguageSwitcher />
                    </li>

                    {/* Track & Trace Button */}
                    <li>
                      <Link
                        href="#popup"
                        className="button primary popup track-trace-btn"
                      >
                        <span>TRACK&TRACE</span>
                      </Link>
                    </li>

                    {/* Search */}
                    <li
                      className={`header-search ${
                        isSearchOpen ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        aria-label="Search"
                        className="search-toggle"
                      >
                        <i className="icon-search"></i>
                      </button>

                      <div className="search-dropdown">
                        <form
                          method="get"
                          className="search-form"
                          action="tim-kiem"
                          role="search"
                        >
                          <input
                            type="search"
                            className="search-input"
                            name="keyword"
                            id="search-input"
                            placeholder="Tìm kiếm..."
                          />
                          <button
                            type="submit"
                            className="search-submit"
                            aria-label="Submit"
                          >
                            <i className="icon-search"></i>
                          </button>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Mobile Right Elements (Search) */}
                <div className="flex-col show-for-medium flex-right">
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    aria-label="Search"
                    className="search-toggle mobile-search-toggle"
                  >
                    <i className="icon-search"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Search */}
            {isSearchOpen && (
              <div className="mobile-search-container">
                <form
                  method="get"
                  className="search-form"
                  action="tim-kiem"
                  role="search"
                >
                  <input
                    type="search"
                    className="search-input"
                    name="keyword"
                    placeholder="Tìm kiếm..."
                  />
                  <button
                    type="submit"
                    className="search-submit"
                    aria-label="Submit"
                  >
                    <i className="icon-search"></i>
                  </button>
                  <button
                    type="button"
                    className="close-search"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <i className="icon-close"></i>
                  </button>
                </form>
              </div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mobile-menu-overlay">
                <div className="mobile-menu-container">
                  <button
                    className="mobile-menu-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <i className="icon-close"></i>
                  </button>

                  <ul className="mobile-nav">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className={`mobile-menu-item ${
                          item.subItems ? "has-dropdown" : ""
                        } ${activeDropdown === item.label ? "active" : ""}`}
                      >
                        {item.subItems ? (
                          <>
                            <div
                              className="mobile-menu-link dropdown-header"
                              onClick={() => toggleDropdown(item.label)}
                            >
                              {item.label}
                              <i
                                className={`icon-angle-${
                                  activeDropdown === item.label ? "up" : "down"
                                }`}
                              ></i>
                            </div>
                            <div
                              className={`dropdown-content ${
                                activeDropdown === item.label ? "active" : ""
                              }`}
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="mobile-submenu-link"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    closeAllDropdowns();
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="mobile-menu-link"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              closeAllDropdowns();
                            }}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="mobile-menu-footer">
                    <div className="mobile-language-selector">
                      <LanguageSwitcher mobile />
                      {/* <div
                        onClick={() => changeLanguage("vi")}
                        className={`language-item ${
                          currentLang === "vi" ? "active" : ""
                        }`}
                      >
                        <Image
                          src={vi}
                          alt="Việt Nam"
                          width={40}
                          height={30}
                          className="language-flag"
                        />
                        <span>Tiếng Việt</span>
                      </div> */}

                      {/* <div
                        onClick={() => changeLanguage("en")}
                        className={`language-item ${
                          currentLang === "en" ? "active" : ""
                        }`}
                      >
                        <Image
                          src={usa}
                          alt="English"
                          width={40}
                          height={30}
                          className="language-flag"
                        />
                        <span>English</span>
                      </div> */}
                    </div>

                    <Link
                      href="#popup"
                      className="button primary mobile-track-trace-btn"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      TRACK&TRACE
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Header Background */}
            <div className="header-bg-container fill">
              <div className="header-bg-image fill"></div>
              <div className="header-bg-color fill"></div>
            </div>
          </div>
        </header>
      </>
    );
  };

  export default Header;
