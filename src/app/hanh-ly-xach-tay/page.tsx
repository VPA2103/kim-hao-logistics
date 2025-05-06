"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { t } = useTranslation();
  return (
    <main id="main" className="bg-gray-50 pt-40 pb-8 min-h-screen">
      {" "}
      {/* Increased pt-20 to pt-28 */}
      <div id="content" className="max-w-6xl mx-auto px-4">
        {" "}
        {/* Increased max-width to 6xl */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {" "}
          {/* Added justify-center */}
          {/* Main Content Section */}
          <div className="md:w-2/3 lg:w-1/2 space-y-8">
            {" "}
            {/* Adjusted width for better centering */}
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner bg-white p-8 rounded-xl shadow-lg">
                {" "}
                {/* Increased padding and rounded corners */}
                <header className="entry-header">
                  <div className="entry-header-text text-center">
                    {" "}
                    {/* Changed to text-center */}
                    <h6 className="entry-category text-sm text-gray-500 mb-2">
                      <a
                        href="/van-tai-hang-khong"
                        className="hover:text-blue-600 transition-colors"
                        rel="category tag"
                      >
                        {t("vantaihangkhong.title")}
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                      {t("hanh-ly.title")}
                    </h1>
                    <div className="entry-divider my-6 mx-auto w-24 border-t-2 border-blue-500" />{" "}
                    {/* Centered divider */}
                  </div>
                </header>
                <div className="entry-content single-page text-gray-800">
                  <div id="main-detail-body" className="content space-y-6">
                    {" "}
                    {/* Added space-y-6 */}
                    <Image
                      src={t("hanh-ly.images.0")}
                      alt={t("hanh-ly.imageAlts.0")}
                      width={850}
                      height={442}
                      className="rounded-lg shadow-md w-full"
                      priority
                    />
                    <p className="font-bold text-lg text-center">
                      {" "}
                      {/* Centered text */}
                      {t("hanh-ly.introText")}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {" "}
                      {/* Improved readability */}
                      {t("hanh-ly.description")}
                    </p>
                    <Image
                      src={t("hanh-ly.images.1")}
                      alt={t("hanh-ly.imageAlts.1")}
                      width={850}
                      height={442}
                      className="rounded-lg shadow-md"
                    />
                    <div className="space-y-3 mt-6">
                      {" "}
                      {/* Improved spacing */}
                      {(
                        t("hanh-ly.features", {
                          returnObjects: true,
                        }) as string[]
                      ).map((feature: string, index: number) => (
                        <p
                          key={index}
                          className="flex items-start text-blue-600"
                        >
                          <span className="mr-2">»</span> {feature}
                        </p>
                      ))}
                    </div>
                    <div className="text-center mt-10">
                      {" "}
                      {/* Centered CTA */}
                      <a
                        href={t("hanh-ly.cta.link")}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-200 shadow-md"
                      >
                        {t("hanh-ly.cta.text")}
                      </a>
                    </div>
                  </div>

                  <div className="blog-share mt-12">
                    {" "}
                    {/* Increased margin-top */}
                    <div className="is-divider my-6 mx-auto border-t-2 border-gray-200 w-1/4" />{" "}
                    {/* Centered divider */}
                    <div className="social-icons flex justify-center space-x-6">
                      {" "}
                      {/* Increased spacing */}
                      {/* Social icons remain the same */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div id="comments" className="comments-area"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
