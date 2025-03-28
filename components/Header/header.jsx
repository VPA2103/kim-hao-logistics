"use client";

import Link from "next/link";
import Image from "next/image";
import './index.css'
import logo from '../../assets/userfiles/logologo.png'
import vi from '../../assets/userfiles/vi.png'
import { useState } from "react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      id="header"
      className="header transparent has-transparent has-sticky sticky-shrink"
    >
      <div className="header-wrapper">
        <div
          id="top-bar"
          className="header-top hide-for-sticky nav-dark hide-for-medium"
        >
          <div className="flex-row container">
            <div className="flex-col hide-for-medium flex-left">
              <ul className="nav nav-left medium-nav-center nav-small nav-"></ul>
            </div>

            <div className="flex-col hide-for-medium flex-center">
              <ul className="nav nav-center nav-small nav-"></ul>
            </div>

            <div className="flex-col hide-for-medium flex-right">
              <ul className="nav top-bar-nav nav-right nav-small nav-"></ul>
            </div>
          </div>
        </div>

        <div id="masthead" className="header-main nav-dark">
          <div
            className="header-inner flex-row container logo-left medium-logo-center"
            role="navigation"
          >
            {/* Logo */}
            <div id="logo" className="flex-col logo">
              <Link href="/" title="SCANWELLLOGISTICS VIETNAM" rel="home">
                <Image
                  width={200}
                  height={134}
                  src={logo}
                  className="header_logo header-logo"
                  alt="SCANWELLLOGISTICS VIETNAM"
                />
                <Image
                  width={200}
                  height={134}
                  src={logo}
                  className="header-logo-dark"
                  alt="SCANWELLLOGISTICS VIETNAM"
                />
              </Link>
            </div>

            {/* Mobile Left Elements */}
            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left">
                <li className="nav-icon has-icon">
                  <a
                    href="#"
                    data-open="#main-menu"
                    data-pos="left"
                    data-bg="main-menu-overlay"
                    data-color=""
                    className="is-small"
                    aria-label="Menu"
                    aria-controls="main-menu"
                    aria-expanded="false"
                  >
                    <i className="icon-menu"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Left Elements */}
            <div className="flex-col hide-for-medium flex-left flex-grow">
              <ul className="header-nav header-nav-main nav nav-left nav-size-medium nav-spacing-medium nav-uppercase"></ul>
            </div>

            {/* Right Elements */}
            <div className="flex-col hide-for-medium flex-right">
              <ul className="header-nav header-nav-main nav nav-right nav-size-medium nav-spacing-medium nav-uppercase">
                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-2338 menu-item-design-default"
                >
                  <Link
                    href="/index.html"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-2338 menu-item-design-default"
                >
                  <Link
                    href="/gioi-thieu.html"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Về chúng tôi
                  </Link>
                </li>

                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-2338 menu-item-design-default"
                >
                  <Link
                    href="/dich-vu.html"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Dịch vụ<i className="icon-angle-down"></i>
                  </Link>

                  <ul className="sub-menu nav-dropdown nav-dropdown-default">
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/van-tai-duong-thuy.html">
                        VẬN TẢI ĐƯỜNG THỦY
                      </Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/van-tai-hang-khong.html">
                        VẬN TẢI HÀNG KHÔNG
                      </Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/dich-vu-kho-bai-va-phan-phoi.html">
                        DỊCH VỤ KHO BÃI VÀ PHÂN PHỐI
                      </Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/van-tai-noi-dia.html">VẬN TẢI NỘI ĐỊA</Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/hai-quan.html">HẢI QUAN</Link>
                    </li>
                  </ul>
                </li>

                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-2338 menu-item-design-default"
                >
                  <Link
                    href="/tin-kim-hao.html"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Tin Kim Hảo<i className="icon-angle-down"></i>
                  </Link>

                  <ul className="sub-menu nav-dropdown nav-dropdown-default">
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/tin-tuc.html">Tin Tức</Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/hoat-dong-scanwell.html">Hoạt Kim Hảo</Link>
                    </li>
                    <li
                      id="menu-item-2340"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2340"
                    >
                      <Link href="/tuyen-dung.html">Tuyển Dụng</Link>
                    </li>
                  </ul>
                </li>

                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type active menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-2338 menu-item-design-default"
                >
                  <Link
                    href="/lien-he.html"
                    aria-current="page"
                    className="nav-top-link"
                  >
                    Liên hệ
                  </Link>
                </li>

                <li className="html custom html_nav_position_text">
                  <style jsx>{`
                    iframe#\:0\.container {
                      display: none;
                    }
                    body {
                      top: 0 !important;
                    }
                    .ct-language__dropdown {
                      padding-top: 8px;
                      max-height: 0;
                      overflow: hidden;
                      position: absolute;
                      top: 110%;
                      transition: all 0.25s ease-in-out;
                      text-align: center;
                      padding-top: 0;
                      z-index: 200;
                    }
                    .ct-language__dropdown li {
                      margin: 0;
                    }
                    .ct-language__dropdown li a {
                      display: block;
                    }
                    .ct-language__dropdown li:first-child {
                    }
                    .ct-language__dropdown li:last-child {
                      border-radius: 0 0 3px 3px;
                    }
                    .ct-language__dropdown li:hover {
                    }
                    .ct-language {
                      position: relative;
                      color: #fff;
                      margin-bottom: 0;
                    }
                    .ct-language:hover .ct-language__dropdown {
                      max-height: 200px;
                      padding-top: 8px;
                    }
                    li.ct-language img {
                      width: 33px;
                    }
                    .ct-topbar__list li {
                      list-style: none;
                    }
                    @media (max-width: 768px) {
                      .ct-language__dropdown li a {
                        padding: 0 !important;
                        color: unset !important;
                      }
                    }
                  `}</style>
                  <div className="ct-topbar">
                    <div className="">
                      <ul className="list-unstyled list-inline ct-topbar__list">
                        <li className="ct-language">
                          <Image
                            src={vi}
                            alt="Việt Nam"
                            width={33}
                            height={33}
                          />
                          <ul className="list-unstyled ct-language__dropdown">
                            <li>
                              <Link
                                href="/change-language?code=_en"
                                className="lang-en lang-select"
                                data-lang="en"
                              >
                                <Image
                                  src="/public/frontend/themes/scanwelllog/usa.png"
                                  alt="USA"
                                  width={33}
                                  height={22}
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <Link
                  href="#popup"
                  className="button primary popup"
                  style={{ borderRadius: "10px" }}
                >
                  <span>TRACK&TRACE</span>
                </Link>

                {/* Search */}
                <li className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                  <div className="header-button">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      aria-label="Search"
                      className="icon primary button circle is-small"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                  {isSearchOpen && (
                    <ul className="nav-dropdown nav-dropdown-default">
                      <li className="header-search-form search-form html relative has-icon">
                        <div className="header-search-form-wrapper">
                          <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                            <form
                              method="get"
                              className="searchform"
                              action="tim-kiem"
                              role="search"
                            >
                              <div className="flex-row relative">
                                <div className="flex-col flex-grow">
                                  <input
                                    type="search"
                                    className="search-field mb-0"
                                    name="keyword"
                                    id="s"
                                    placeholder="Search"
                                  />
                                </div>
                                <div className="flex-col">
                                  <button
                                    type="submit"
                                    className="ux-search-submit submit-button secondary button icon mb-0"
                                    aria-label="Submit"
                                  >
                                    <i className="icon-search"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="live-search-results text-left z-top"></div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>

            {/* Mobile Right Elements */}
            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right">
                <li className="header-search header-search-dropdown has-icon has-dropdown menu-item-has-children">
                  <div className="header-button">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      aria-label="Search"
                      className="icon primary button circle is-small"
                    >
                      <i className="icon-search"></i>
                    </button>
                  </div>
                  {isSearchOpen && (
                    <ul className="nav-dropdown nav-dropdown-default">
                      <li className="header-search-form search-form html relative has-icon">
                        <div className="header-search-form-wrapper">
                          <div className="searchform-wrapper ux-search-box relative form-flat is-normal">
                            <form
                              method="get"
                              className="searchform"
                              action="tim-kiem"
                              role="search"
                            >
                              <div className="flex-row relative">
                                <div className="flex-col flex-grow">
                                  <input
                                    type="search"
                                    className="search-field mb-0"
                                    name="keyword"
                                    id="s"
                                    placeholder="Search"
                                  />
                                </div>
                                <div className="flex-col">
                                  <button
                                    type="submit"
                                    className="ux-search-submit submit-button secondary button icon mb-0"
                                    aria-label="Submit"
                                  >
                                    <i className="icon-search"></i>
                                  </button>
                                </div>
                              </div>
                              <div className="live-search-results text-left z-top"></div>
                            </form>
                          </div>
                        </div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bg-container fill">
          <div className="header-bg-image fill"></div>
          <div className="header-bg-color fill"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
