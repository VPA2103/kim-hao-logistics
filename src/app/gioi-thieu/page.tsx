"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import bannergioithieu from "../../../public/filemanager/userfiles/banner/bn-gioi-thieu.png";
import logo from "../../../image/logo/Logo.svg";

const AboutPage: React.FC = () => {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>

      <div className="pt-20">
        <main id="main">
          {/* Banner Section - Now with reduced height */}
          <div className="banner" id="banner-about">
            <div className="banner-image-container">
              <Image
                src={bannergioithieu}
                alt={t("about.bannerAlt")}
                width={1800}
                height={400}
                layout="responsive"
                priority
                className="banner-image"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="content-container">
            <div className="left-column">
              <div className="company-description">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t("about.sections.intro1"),
                  }}
                />

                <p
                  dangerouslySetInnerHTML={{
                    __html: t("about.sections.intro2"),
                  }}
                />

                <p>
                  <strong>{t("about.sections.servicesTitle")}</strong>
                </p>

                <ul className="services-list">
                  {Array.isArray(
                    t("about.servicesList", { returnObjects: true })
                  ) &&
                    (
                      t("about.servicesList", {
                        returnObjects: true,
                      }) as string[]
                    ).map((service, index) => <li key={index}>{service}</li>)}
                </ul>

                <p
                  dangerouslySetInnerHTML={{
                    __html: t("about.sections.motto"),
                  }}
                />
              </div>
            </div>

            <div className="right-column">
              <h1>
                <strong>{t("about.companyName")}</strong>
              </h1>
              <div className="company-logo-container">
                <div className="company-logo-background">
                  <Image
                    src={logo}
                    alt={t("about.logoAlt")}
                    width={400}
                    height={100}
                    layout="responsive"
                    className="logo-image"
                  />
                </div>
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
            background-color: #ffffff;
            padding-top: 80px; /* Add padding to account for fixed header */
          }

          /* Banner Styles */
          .banner {
            width: 100%;
            margin-bottom: 40px;
            background-color: #ffffff;
            overflow: hidden;
          }

          .banner-image-container {
            max-height: 300px; /* Reduced height for banner */
            overflow: hidden;
          }

          .banner-image {
            width: 100%;
            height: auto;
            display: block;
          }

          /* Layout Styles */
          .content-container {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            gap: 40px;
            background-color: #ffffff;
          }

          .left-column {
            flex: 2;
            background-color: #ffffff;
          }

          .right-column {
            flex: 1;
            padding: 20px;
            background: #ffffff;
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
          .company-logo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
          }
          .company-logo-background {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            width: 100%;
            max-width: 400px;
          }
          .logo-image {
            background-color: #ffffff;
            mix-blend-mode: multiply;
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
            #main {
              padding-top: 60px; /* Smaller padding on mobile */
            }

            .banner-image-container {
              max-height: 200px; /* Even smaller height on mobile */
            }

            .content-container {
              flex-direction: column;
            }

            .company-logo-background {
              padding: 15px;
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
      </div>
    </>
  );
};

export default AboutPage;
