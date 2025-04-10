"use client";

import React from "react";
import { StaticImageData } from "next/image";
import bannerImage from "../../../public/filemanager/userfiles/tintuc.png";
import Image from "next/image";
import recruitment1Image from "../../../public/filemanager/userfiles/Sales Supervisor-360x.jpg";
import recruitment2Image from "../../../public/filemanager/userfiles/dang-tin-tuyen-dung-360x.jpg";
import { useTranslation } from "react-i18next";

interface Recruitment {
  id: number;
  title: string;
}

interface RecruitmentContent {
  title: string;
  recruitments: Recruitment[];
}

const RecruitmentSection = () => {
  const { t } = useTranslation();

  // Get the translated content with proper typing
  const recruitmentData = t("tuyen-dung", {
    returnObjects: true,
  }) as RecruitmentContent;

  // Provide fallback content if needed
  const content: RecruitmentContent = recruitmentData?.recruitments
    ? recruitmentData
    : {
        title: "TUYỂN DỤNG",
        recruitments: [
          {
            id: 1,
            title: "[HCM] Tuyển dụng sales Supervisor",
          },
          {
            id: 2,
            title: "[HCM] Tuyển dụng sales Executive",
          },
        ],
      };

  // Image mapping based on recruitment ID
  const recruitmentImages: Record<number, StaticImageData> = {
    1: recruitment1Image,
    2: recruitment2Image,
  };

  // Link mapping based on recruitment ID
  const recruitmentLinks: Record<number, string> = {
    1: "/tuyen-dung/blog1",
    2: "/tuyen-dung/blog2",
  };

  return (
    <>
      <main id="main">
        <div id="content" role="main">
          {/* Banner Section */}
          <div className="banner" id="banner-recruitment">
            <div
              className="banner-image-container"
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt={`${content.title} Banner`}
                fill
                priority
                className="banner-image"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
                quality={100}
                sizes="100vw"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>
            </div>
          </div>

          {/* Section Title */}
          <div className="section-title-container">
            <h1 className="section-title-main">{content.title}</h1>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {content.recruitments.map((recruitment: Recruitment) => (
              <div className="service-card" key={recruitment.id}>
                <a
                  href={recruitmentLinks[recruitment.id]}
                  className="service-link"
                >
                  <div className="image-container">
                    <Image
                      src={recruitmentImages[recruitment.id]}
                      alt={recruitment.title}
                      fill
                      className="service-image"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="service-content">
                    <h2>{recruitment.title}</h2>
                    <div className="divider"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        /* Global Styles */
        #main {
          font-family: "Arial", sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Banner Styles */
        .banner {
          position: relative;
          width: 100%;
          height: 550px;
          overflow: hidden;
          background-color: #f5f5f5; /* Fallback background */
        }

        .banner-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .banner-image {
          object-fit: contain;
        }

        .banner-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-box {
          width: 60%;
          text-align: center;
        }

        /* Section Title */
        .section-title-container {
          text-align: center;
          margin: 40px 0;
          padding: 0 20px;
        }

        .section-title-main {
          font-size: 2rem;
          color: #0056b3;
          font-weight: bold;
          margin: 0;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto 80px; /* Thêm margin-bottom 80px */
          padding: 0 20px;
        }

        .service-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          background-color: #f5f5f5; /* Background for image container */
        }

        .service-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        .service-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 250px; /* Fixed height for service images */
          overflow: hidden;
        }

        .service-image {
          object-fit: contain;
        }

        .service-content {
          padding: 20px;
          text-align: center;
        }

        .service-content h2 {
          margin: 0 0 15px;
          font-size: 1.25rem;
        }

        .divider {
          height: 2px;
          width: 50px;
          background: #0056b3;
          margin: 0 auto;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .image-container {
            height: 300px; /* Larger height on desktop */
          }
        }
      `}</style>
    </>
  );
};

export default RecruitmentSection;
