"use client";

import React from "react";
// import Image from "next/image";
// import bannerImage from "../../../public/filemanager/userfiles/tintuc.png";
// import hanhLyImage from "../../../public/filemanager/userfiles/LP__7980 (1)-360x.jpg";
import { useTranslation } from "react-i18next";
// import vanTaiImage from "../../../public/filemanager/userfiles/hang-k.png";
// import nguyHiemImage from "../../../public/filemanager/userfiles/hang-nguy-hiem.jpg";


// interface NewsItem {
//   id: number;
//   title: string;

// }

const AirTransportSection: React.FC = () => {
  const {t} = useTranslation();
  return (
    <>
      <main id="main">
        <div id="content" role="main" className="content-wrapper pt-40">
          {/* Banner Section */}
          {/* <div className="banner" id="banner-water-transport">
            <div className="banner-image-container">
              <Image
                src={bannerImage}
                alt="Banner vận tải đường thủy"
                className="banner-image"
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="banner-content">
              <div className="text-box">
                <div className="text-content"></div>
              </div>
            </div>
          </div> */}

          {/* Section Title */}
          <div className="section-title-container">
            <h1 className="section-title-main">{t("news-activities.title")}</h1>
          </div>

          {/* Services Grid */}
          <strong>Chưa có bài viết...</strong>
          {/* <div className="services-grid">
            {(
              t("news-activities.activities", {
                returnObjects: true,
              }) as NewsItem[]
            ).map((item) => (
              <div className="service-card" key={item.id}>
                <a href="/hoat-dong/blog" className="service-link">
                  <div className="image-container">
                    <Image
                      src={hanhLyImage}
                      alt={item.title}
                      fill
                      className="service-image"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="service-content">
                    <h2>{item.title}</h2>
                    <div className="divider"></div>
                  </div>
                </a>
              </div>
            ))}
          </div> */}
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
          background-color: #f5f5f5;
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
          height: 250px;
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
            height: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default AirTransportSection;
