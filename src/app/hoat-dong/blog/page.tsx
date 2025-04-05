"use client";

import Image from "next/image";
import Link from "next/link";
import image1 from "../../../../image/LP__5880.jpg";
import image2 from "../../../../image/LP__5824.jpg";
import image3 from "../../../../image/Blank 4 Grids Collage (6).png";
import image4 from "../../../../image/Blank 4 Grids Collage (3).png";
import image5 from "../../../../image/Blank 4 Grids Collage (4).png";
import image6 from "../../../../image/Blank 4 Grids Collage.png";
import { useTranslation } from "react-i18next";

const NewYearParty2025 = () => {
  const {t} = useTranslation();

  return (
    <main
      id="main"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      {/* Wrapper with flexbox to center content */}
      <div
        id="content"
        className="blog-wrapper blog-single page-wrapper max-w-4xl w-full"
      >
        <div className="row row-large row-divided">
          <div className="large-9 col">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner">
                <header className="entry-header">
                  <div className="entry-header-text entry-header-text-top text-left">
                    <h6 className="entry-category is-xsmall">
                      <Link
                        href="/hoat-dong"
                        rel="category tag"
                        className="
                        inline-block 
                        px-3 py-1 
                        bg-gradient-to-r from-blue-500 to-blue-600 
                        text-white 
                        rounded-full 
                        text-xs font-medium
                        shadow-md
                        transition-all duration-300
                        hover:from-blue-600 hover:to-blue-700
                        hover:shadow-lg
                        hover:-translate-y-0.5
                        active:translate-y-0
                        active:shadow-md
                        group
                      "
                      >
                        <span
                          className="
                          relative 
                          after:content-[''] 
                          after:absolute after:bottom-0 after:left-0 
                          after:w-0 after:h-0.5 
                          after:bg-white 
                          after:transition-all after:duration-300
                          group-hover:after:w-full
                        "
                        >
                          {t("hoat-dong-KH.category")}
                        </span>
                      </Link>
                    </h6>
                    <h1 className="entry-title">{t("hoat-dong-KH.title")}</h1>
                    <div className="entry-divider is-divider small" />
                  </div>
                </header>
                <div className="entry-content single-page">
                  <div id="main-detail-body" className="content fck">
                    <h3>{t("hoat-dong-KH.sections.0.content")}</h3>
                    <div className="image-container">
                      <Image
                        src={image1}
                        alt="Tiệc Tân niên"
                        width={850}
                        height={567}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <h1>
                      <strong>{t("hoat-dong-KH.sections.1.title")}</strong>
                    </h1>
                    <h3>{t("hoat-dong-KH.sections.1.content")}</h3>

                    <div className="image-container">
                      <Image
                        src={image2}
                        alt="Hoạt động tiệc Tân niên"
                        width={850}
                        height={567}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <div className="image-container">
                      <Image
                        src={image3}
                        alt="Hoạt động khác"
                        width={850}
                        height={850}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <h3>{t("hoat-dong-KH.sections.2.content")}</h3>

                    <div className="image-container">
                      <Image
                        src={image4}
                        alt="Văn nghệ tiệc Tân niên"
                        width={850}
                        height={850}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <h3>{t("hoat-dong-KH.sections.3.content")}</h3>

                    <div className="image-container">
                      <Image
                        src={image5}
                        alt="Khoảnh khắc tiệc Tân niên"
                        width={850}
                        height={850}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <h3>{t("hoat-dong-KH.sections.4.content")}</h3>

                    <div className="image-container">
                      <Image
                        src={image6}
                        alt="Trò chơi tiệc Tân niên"
                        width={850}
                        height={850}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <h1>
                      <strong>{t("hoat-dong-KH.sections.5.title")}</strong>
                    </h1>
                    <h3>
                      {t("hoat-dong-KH.sections.5.content")}
                    </h3>

                    <div className="image-container">
                      <Image
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/New%20Year%20Party%202025/LP__7980.jpg"
                        alt="Thông điệp tiệc Tân niên"
                        width={850}
                        height={567}
                        className="w-full h-auto rounded-lg shadow-md mt-4"
                      />
                    </div>

                    <div className="video-container">
                      <iframe
                        frameBorder={0}
                        height={550}
                        src="https://www.youtube.com/embed/cYQuktgXCTY?si=kYLEeJFDrPffk0QB"
                        title="YouTube video player"
                        width={850}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewYearParty2025;
