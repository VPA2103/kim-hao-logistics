"use client";

import React from "react";
import { StaticImageData } from "next/image";
// import bannerImage from "../../../public/filemanager/userfiles/kho.png";
import Image from "next/image";
import hanhLyImage from "../../../public/filemanager/userfiles/photo-1586528116311-ad8dd3c8310d-360x.jpg";
import vanTaiImage from "../../../public/filemanager/userfiles/pasted image 0-360x.png";
import nguyHiemImage from "../../../public/filemanager/userfiles/63cfd5064555165b4efc44bb_pick-pack-ship-workflow(1)-360x.jpg";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface WarehouseContent {
  title: string;
  services: Service[];
}

const WarehouseSection = () => {
  const { t } = useTranslation();

  // Get the translated content with proper typing
  const warehouseData = t("dichvukhobaivaphanphoi", {
    returnObjects: true,
  }) as WarehouseContent;

  // Provide fallback content if needed
  const content: WarehouseContent = warehouseData?.services
    ? warehouseData
    : {
        title: "DỊCH VỤ KHO BÃI VÀ PHÂN PHỐI",
        services: [],
      };

  // Image mapping based on service ID
  const serviceImages: Record<number, StaticImageData> = {
    1: hanhLyImage,
    2: vanTaiImage,
    3: nguyHiemImage,
  };

  // Link mapping based on service ID
  const serviceLinks: Record<number, string> = {
    1: "/khach-hang-scanwell",
    2: "/kho-ngoai-quan-kho-thuong",
    3: "/phan-loai-va-dong-goi",
  };

  return (
    <>
  
        <div id="content" role="main" className="pt-40">
          {/* Banner Section */}
          {/* <div className="banner" id="banner-warehouse">
            <div
              className="banner-image-container"
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt={`Banner ${content.title}`}
                className="banner-image"
                priority
                fill
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
            <h1 className="section-title-main">{content.title}</h1>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {content.services.map((service: Service) => (
              <div className="service-card" key={service.id}>
                <Link href={serviceLinks[service.id]} className="service-link">
                  <div className="image-container">
                    <Image
                      src={serviceImages[service.id]}
                      alt={service.title}
                      fill
                      className="service-image"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="service-content">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <div className="divider"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      

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
          background-color: #f5f5f5;
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
          margin: 0 auto;
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

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto 80px; /* Thêm margin-bottom 80px */
          padding: 0 20px;
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

        .service-content p {
          margin: 0 0 15px;
          color: #666;
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

export default WarehouseSection;
