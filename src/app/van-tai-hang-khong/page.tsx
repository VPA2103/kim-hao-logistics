"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import bannerImage from "../../../public/filemanager/userfiles/hang-k.png";
import dichvuhangduan from "../../../public/filemanager/userfiles/hang-ly-xach-tay.jpg";
import tongquanvanchuyen from "../../../public/filemanager/userfiles/hang-k.png";
import hangnguyhiem from "../../../public/filemanager/userfiles/hang-nguy-hiem.jpg";
import { useTranslation } from "react-i18next";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface AirFreightContent {
  title: string;
  services: Service[];
}


const WaterTransportPage = () => {

  const {t } = useTranslation();

  const airFreightData = t("vantaihangkhong", {
    returnObjects: true,
  }) as AirFreightContent;

  // Ensure we have the expected structure
  const content: AirFreightContent = airFreightData?.services
    ? airFreightData
    : {
        title: "VẬN TẢI HÀNG KHÔNG",
        services: [],
      };


  const serviceImages: Record<number, StaticImageData> = {
    1: dichvuhangduan,
    2: tongquanvanchuyen,
    3: hangnguyhiem,
  };

  // Link mapping based on service ID
  const serviceLinks: Record<number, string> = {
    1: "/hanh-ly-xach-tay",
    2: "/dich-vu-van-tai-hang-khong",
    3: "/hang-nguy-hiem",
  };

  return (
    <>
      <Head>
        <title>
          Vận tải hàng không - CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo
        </title>
        <meta
          name="description"
          content="Dịch vụ vận tải đường thủy chuyên nghiệp"
        />
      </Head>

      <main id="main">
        <div id="content" role="main">
          {/* Banner Section */}
          <div className="banner" id="banner-water-transport">
            jsx Copy
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
                alt="Banner vận tải đường thủy"
                className="banner-image"
                priority
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="banner-content">
              <div className="text-box">
                <div className="text-content"></div>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <div className="section-title-container">
            <h1 className="section-title-main">{t("vantaihangkhong.title")}</h1>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {content.services.map((service) => (
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
          margin: 0 auto;
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

export default WaterTransportPage;
