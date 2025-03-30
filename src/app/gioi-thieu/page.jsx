"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import bannergioithieu from "../../../public/filemanager/userfiles/banner/bn-gioi-thieu.png";


const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Giới thiệu - CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo</title>
        <meta
          name="description"
          content="Giới thiệu về CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo"
        />
      </Head>

      <main id="main">
        {/* Banner Section - Hiển thị trên cùng */}
        <div className="banner" id="banner-about">
          <Image
            src={bannergioithieu}
            alt="Banner giới thiệu công ty"
            layout="responsive"
            width={1920}
            height={550}
            priority
          />
        </div>

        {/* Content Section - Bố cục 2 cột */}
        <div className="content-container">
          <div className="left-column">
            <div className="company-description">
              <p>
                <strong>CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo</strong> được
                thành lập vào năm 1981, có trụ sở chính đặt tại Hồng Kông. Trong
                hơn 35 năm qua, chúng tôi đã phát triển để trở thành một trong
                những công ty lớn nhất về dịch vụ vận tải và giao nhận, là thành
                viên được hiệp hội IATA hoàn toàn tín nhiệm.
              </p>

              <p>
                <strong>CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo</strong> là một
                công ty logistics toàn diện. Chúng tôi cung cấp các dịch vụ tối
                ưu với chuỗi cung ứng hoàn chỉnh "end-to-end" để tiết kiệm thời
                gian của khách hàng khi lựa chọn nhà vận chuyển trọn gói.
              </p>

              <p>
                <strong>Các dịch vụ chúng tôi cung cấp:</strong>
              </p>

              <ul className="services-list">
                <li>Vận Tải Biển – Xuất Nhập khẩu</li>
                <li>Vận Tải Hàng Không – Xuất Nhập khẩu</li>
                <li>Vận Tải Đường Bộ và đa phương thức</li>
                <li>Quản lý kho vận</li>
                <li>Thủ tục hải quan</li>
              </ul>

              <p>
                <strong>Phương châm của chúng tôi</strong> là luôn luôn tập
                trung vào nhu cầu của khách hàng, cống hiến hết mình, tiết kiệm
                chi phí, và giao hàng đúng hạn.
              </p>
            </div>
          </div>

          <div className="right-column">
            <h1>
              <strong>CÔNG TY TNHH Thương Mại Vận Tải Kim Hảo</strong>
            </h1>
            <div className="company-logo">
              <Image
                src={bannergioithieu}
                alt="Logo Công ty Kim Hảo"
                width={400}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        /* Global Styles */
        #main {
          font-family: "Arial", sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Banner Styles */
        .banner {
          width: 100%;
          height: auto;
          margin-bottom: 40px;
        }

        /* Layout Styles */
        .content-container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          gap: 40px;
        }

        .left-column {
          flex: 2;
        }

        .right-column {
          flex: 1;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          height: fit-content;
        }

        h1 {
          color: #0056b3;
          font-size: 1.8rem;
          margin-bottom: 30px;
          text-align: center;
        }

        p {
          margin-bottom: 20px;
        }

        strong {
          color: #0056b3;
        }

        .company-logo {
          margin-top: 20px;
          text-align: center;
        }

        .services-list {
          margin: 20px 0;
          padding-left: 20px;
        }

        .services-list li {
          margin-bottom: 10px;
          list-style-type: disc;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }

          .right-column {
            order: -1;
            margin-bottom: 30px;
          }

          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
