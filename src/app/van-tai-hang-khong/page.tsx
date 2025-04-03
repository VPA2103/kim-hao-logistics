"use client";

import React from "react";
import bannerImage from "../../../public/filemanager/userfiles/hang-k.png";
import Image from "next/image";

// Import images for services
import hanhLyImage from "../../../public/filemanager/userfiles/hang-ly-xach-tay.jpg";
import vanTaiImage from "../../../public/filemanager/userfiles/hang-k.png";
import nguyHiemImage from "../../../public/filemanager/userfiles/hang-nguy-hiem.jpg";

const AirTransportSection = () => {
  return (
    <>
      <main id="main">
        <div id="content" role="main">
          {/* Banner Section */}
          <div className="banner" id="banner-water-transport">
            <div
              className="banner-image-container"
              style={{
                position: "relative",
                width: "100%",
                height: "100vh" /* Full viewport height */,
                minHeight: "600px" /* Đảm bảo không quá nhỏ */,
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt="Banner vận tải đường thủy"
                fill /* Tự động lấp đầy container */
                priority
                className="banner-image"
                style={{
                  objectFit: "cover" /* Phủ kín container */,
                  objectPosition: "center" /* Căn giữa hình */,
                  width: "100%",
                  height: "100%",
                }}
                quality={100} /* Chất lượng hình ảnh tốt nhất */
                sizes="100vw" /* Tối ưh cho mọi kích thước màn hình */
              />
              {/* Có thể thêm overlay hoặc text nếu cần */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)" /* Overlay mờ */,
                }}
              ></div>
            </div>

            <div className="banner-content">
              <div className="text-box">
                <div className="text-content"></div>
              </div>
            </div>
          </div>

          {/* Section Title */}
          <div className="section-title-container">
            <h1 className="section-title-main">VẬN TẢI ĐƯỜNG HÀNG KHÔNG</h1>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <a href="/dich-vu-hang-du-an.html" className="service-link">
                <div className="image-container">
                  <Image
                    src={hanhLyImage}
                    alt="Hành lý xách tay"
                    fill
                    className="service-image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="service-content">
                  <h2>HÀNH LÝ XÁCH TAY</h2>
                  <div className="divider"></div>
                </div>
              </a>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <a
                href="/dich-vu-van-tai-duong-thuy.html"
                className="service-link"
              >
                <div className="image-container">
                  <Image
                    src={vanTaiImage}
                    alt="Tổng quan dịch vụ vận tải hàng không"
                    fill
                    className="service-image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="service-content">
                  <h2>TỔNG QUAN DỊCH VỤ VẬN TẢI HÀNG KHÔNG</h2>
                  <div className="divider"></div>
                </div>
              </a>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <a href="/hang-nguy-hiem.html" className="service-link">
                <div className="image-container">
                  <Image
                    src={nguyHiemImage}
                    alt="Hàng nguy hiểm"
                    fill
                    className="service-image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="service-content">
                  <h2>HÀNG NGUY HIỂM</h2>
                  <div className="divider"></div>
                </div>
              </a>
            </div>
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

export default AirTransportSection;
