"use client";

import React from "react";
import { StaticImageData } from "next/image";
// import bannerImage from "../../../public/filemanager/userfiles/hai-quan.png";
import Image from "next/image";
import customsImage from "../../../public/filemanager/userfiles/Customs 5-360x.png";
import { useTranslation } from "react-i18next";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface CustomsContent {
  title: string;
  services: Service[];
}

const CustomsServicePage = () => {
  const { t } = useTranslation();

  // Get the translated content with proper typing
  const customsData = t("haiquan", { returnObjects: true }) as CustomsContent;

  // Provide fallback content if needed
  const content: CustomsContent = customsData?.services
    ? customsData
    : {
        title: "DỊCH VỤ HẢI QUAN",
        services: [
          {
            id: 1,
            title: "TỔNG QUAN DỊCH VỤ HẢI QUAN",
            description: "Cung cấp dịch vụ giao nhận hàng hóa tận nơi.",
          },
          {
            id: 2,
            title: "DỊCH VỤ HẢI QUAN",
            description: "Cung cấp dịch vụ lưu kho và phân phối hàng hóa.",
          },
          {
            id: 3,
            title: "HÀNG NGUY HIỂM",
            description: "Cung cấp dịch vụ lưu kho và phân phối hàng hóa.",
          },
        ],
      };

  // Image mapping based on service ID
  const serviceImages: Record<number, StaticImageData> = {
    1: customsImage,
    2: customsImage, // Using same image for now
    3: customsImage, // Using same image for now
  };

  // Link mapping based on service ID
  const serviceLinks: Record<number, string> = {
    1: "/hai-quan/blog",
    2: "/hai-quan/dich-vu",
    3: "/hai-quan/hang-nguy-hiem",
  };

  return (
    <>

        <div id="content" role="main" className="pt-40">
          {/* Banner Section */}
          {/* <div className="banner" id="banner-customs">
            <div className="banner-image-container">
              <Image
                src={bannerImage}
                alt={`${content.title} Banner`}
                fill
                priority
                className="banner-image"
                style={{ objectFit: "cover" }}
              />
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
                <a href={serviceLinks[service.id]} className="service-link">
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
                </a>
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

export default CustomsServicePage;
