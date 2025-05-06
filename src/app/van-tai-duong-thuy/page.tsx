"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "react-i18next";
// import bannerImage from "../../../public/filemanager/userfiles/banner/bn-gioi-thieu.png";
import dichvuhangduan from "../../../public/filemanager/userfiles/dich-vu-hang-du-an.jpg";
import tongquanvanchuyen from "../../../public/filemanager/userfiles/tong-quan-dich-van-tai-duong-thuy.jpg";
import hangnguyhiem from "../../../public/filemanager/userfiles/hang-nguy-hiem.jpg";

const WaterTransportPage = () => {
  const { t, ready } = useTranslation();

  if (!ready) return <div>Loading...</div>;

  // Thêm type assertion và kiểm tra mảng
  const services = t("waterTransport.services", {
    returnObjects: true,
    defaultValue: [], // Giá trị mặc định nếu không tìm thấy
  }) as Array<{
    title: string;
    alt: string;
    href: string;
  }>;

  if (!Array.isArray(services)) {
    console.error("Invalid services data:", services);
    return <div>Error loading services</div>;
  }

  console.log("Final services data:", {
    services,
    type: typeof services,
    isArray: Array.isArray(services),
    keys: Object.keys(services),
  });


  return (
    <>
      <Head>
        <title>{t("waterTransport.title")}</title>
        <meta
          name="description"
          content={t("waterTransport.metaDescription")}
        />
      </Head>

      <main id="main">
        <div id="content" role="main" className="        pt-40">
          {/* Banner Section */}
          {/* <div className="banner" id="banner-water-transport">
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
                alt={t("waterTransport.bannerAlt")}
                className="banner-image"
                priority
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div> */}

          {/* Section Title */}
          <div className="section-title-container">
            <h1 className="section-title-main">
              {t("waterTransport.sectionTitle")}
            </h1>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {services.length > 0 ? (
              services.map((service, index) => (
                <div className="service-card" key={index}>
                  <a href={service.href} className="service-link">
                    <div className="image-container">
                      <Image
                        src={getServiceImage(index)}
                        alt={service.alt}
                        fill
                        className="service-image"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="service-content">
                      <h2>{service.title}</h2>
                      <div className="divider"></div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center p-8 text-red-500">
                Chưa có dịch vụ nào được cập nhật
              </div>
            )}
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

// Hàm helper để lấy ảnh tương ứng
const getServiceImage = (index: number) => {
  switch (index) {
    case 0:
      return dichvuhangduan;
    case 1:
      return tongquanvanchuyen;
    case 2:
      return hangnguyhiem;
    default:
      return dichvuhangduan;
  }
};

export default WaterTransportPage;
