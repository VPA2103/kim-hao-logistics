"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import bannergioithieu from "../../../public/filemanager/userfiles/banner/bn-gioi-thieu.png";

const AboutPage: React.FC = () => {
  const { t,ready } = useTranslation();

  if (!ready) {
  return <div>Loading translations...</div>;
}
  return (
    <>
      <Head>
        <title>{t("about.title")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Head>

      <main id="main">
        {/* Banner Section */}
        <div className="banner" id="banner-about">
          <Image
            src={bannergioithieu}
            alt={t("about.bannerAlt")}
            layout="responsive"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="content-container">
          <div className="left-column">
            <div className="company-description">
              <p
                dangerouslySetInnerHTML={{ __html: t("about.sections.intro1") }}
              />

              <p
                dangerouslySetInnerHTML={{ __html: t("about.sections.intro2") }}
              />

              <p>
                <strong>{t("about.sections.servicesTitle")}</strong>
              </p>

              <ul className="services-list">
                {Array.isArray(
                  t("about.servicesList", { returnObjects: true })
                ) &&
                  (
                    t("about.servicesList", { returnObjects: true }) as string[]
                  ).map((service, index) => <li key={index}>{service}</li>)}
              </ul>

              <p
                dangerouslySetInnerHTML={{ __html: t("about.sections.motto") }}
              />
            </div>
          </div>

          <div className="right-column">
            <h1>
              <strong>{t("about.companyName")}</strong>
            </h1>
            <div className="company-logo">
              <Image
                src={bannergioithieu}
                alt={t("about.logoAlt")}
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
