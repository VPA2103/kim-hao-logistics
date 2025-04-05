"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

type TransportService = {
  name: string;
  details: string[];
};

type TransportSection = {
  title: string;
  image1?: string;
  alt1?: string;
  image2?: string;
  alt2?: string;
  image?: string;
  alt?: string;
  services?: TransportService[];
};

type VanTaiNoiDiaData = {
  category: string;
  title: string;
  domesticTransport: TransportSection;
  crossBorderTransport: TransportSection;
  lastMileDelivery: TransportSection;
};

const RelatedPost = () => {
  const { t } = useTranslation();

  const vanTaiNoiDia = t("vanTaiNoiDia", {
    returnObjects: true,
  }) as Partial<VanTaiNoiDiaData>;

  const defaultTransportSection: TransportSection = {
    title: "",
    services: [],
  };

  const domesticTransport =
    vanTaiNoiDia?.domesticTransport || defaultTransportSection;
  const crossBorderTransport =
    vanTaiNoiDia?.crossBorderTransport || defaultTransportSection;
  const lastMileDelivery =
    vanTaiNoiDia?.lastMileDelivery || defaultTransportSection;

  const SafeImage = ({
    src,
    alt,
    width = 850,
    height = 442,
  }: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }) => {
    if (!src) return null;

    return (
      <div className="flex justify-center">
        <Image
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className="rounded-lg shadow-md mt-4 mx-auto"
        />
      </div>
    );
  };

  return (
    <main id="main" className="pt-24 py-8">
      <div id="content" className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-full lg:w-2/3">
            <article className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc mb-8">
              <div className="article-inner">
                <header className="entry-header mb-6 text-center">
                  <div className="entry-header-text entry-header-text-top">
                    <h6 className="entry-category is-xsmall">
                      <a href="/van-tai-noi-dia" className="text-blue-500">
                        {vanTaiNoiDia?.category || "Vận tải nội địa"}
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl font-bold mb-2">
                      {vanTaiNoiDia?.title || "Dịch vụ vận tải"}
                    </h1>
                    <div className="entry-divider is-divider small mx-auto mb-4 w-20 border-t-2 border-blue-500"></div>
                  </div>
                </header>

                <div className="entry-content single-page">
                  {/* Domestic Transportation Section */}
                  <section className="mb-12 text-center">
                    <SafeImage
                      src={domesticTransport.image1}
                      alt={domesticTransport.alt1}
                    />

                    <h2 className="text-2xl font-semibold text-blue-600 mb-6 mt-8">
                      {domesticTransport.title}
                    </h2>

                    <SafeImage
                      src={domesticTransport.image2}
                      alt={domesticTransport.alt2}
                    />

                    <div className="max-w-3xl mx-auto mt-8">
                      <ul className="space-y-6">
                        {domesticTransport.services?.map((service, index) => (
                          <li
                            key={`service-${index}`}
                            className="bg-gray-50 p-6 rounded-lg"
                          >
                            <h3 className="text-xl font-semibold text-blue-500 mb-3">
                              {service.name}
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                              {service.details?.map((detail, detailIndex) => (
                                <li
                                  key={`detail-${index}-${detailIndex}`}
                                  className="text-gray-700"
                                >
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Cross-border Transportation Section */}
                  <section className="mb-12 text-center">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                      {crossBorderTransport.title}
                    </h2>

                    <SafeImage
                      src={crossBorderTransport.image}
                      alt={crossBorderTransport.alt}
                    />

                    <div className="max-w-3xl mx-auto mt-8">
                      <ul className="space-y-6">
                        {crossBorderTransport.services?.map(
                          (service, index) => (
                            <li
                              key={`cb-service-${index}`}
                              className="bg-gray-50 p-6 rounded-lg"
                            >
                              <h3 className="text-xl font-semibold text-blue-500 mb-3">
                                {service.name}
                              </h3>
                              <ul className="list-disc pl-6 space-y-2">
                                {service.details?.map((detail, detailIndex) => (
                                  <li
                                    key={`cb-detail-${index}-${detailIndex}`}
                                    className="text-gray-700"
                                  >
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </section>

                  {/* Last Mile Delivery Section */}
                  <section className="text-center">
                    <h2 className="text-2xl font-semibold text-blue-600 mb-6">
                      {lastMileDelivery.title}
                    </h2>

                    <SafeImage
                      src={lastMileDelivery.image}
                      alt={lastMileDelivery.alt}
                    />
                  </section>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RelatedPost;
