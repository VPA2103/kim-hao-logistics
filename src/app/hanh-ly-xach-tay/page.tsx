"use client";
import React from "react";
// import RelatedPosts from "./RelatedPosts";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { t } = useTranslation();
  return (
    <main id="main" className="bg-gray-50 pt-20 pb-8">
      <div id="content" className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Main Content Section */}
          <div className="md:w-2/3 space-y-8">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner bg-white p-6 rounded-lg shadow-md">
                <header className="entry-header">
                  <div className="entry-header-text text-left">
                    <h6 className="entry-category text-sm text-gray-500">
                      <a
                        href="/van-tai-hang-khong"
                        className="hover:text-blue-600"
                        rel="category tag"
                      >
                        VẬN TẢI HÀNG KHÔNG
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl font-semibold text-gray-900 mt-2">
                      HÀNH LÝ SÁCH TAY
                    </h1>
                    <div className="entry-divider my-4 border-t-2 border-gray-200" />
                  </div>
                </header>
                <div className="entry-content single-page text-gray-800">
                  <div id="main-detail-body" className="content">
                    <p>
                      <Image
                        src={t("hanh-ly.images.0")}
                        alt={t("hanh-ly.imageAlts.0")}
                        width={850}
                        height={442}
                        className="rounded-lg shadow-md mt-4"
                      />
                    </p>
                    <p className="mt-4 font-bold text-lg">
                      {t("hanh-ly.introText")}
                    </p>
                    <p className="mt-4">{t("hanh-ly.description")}</p>
                    <p className="mt-4">
                      <Image
                        src={t("hanh-ly.images.1")}
                        alt={t("hanh-ly.imageAlts.1")}
                        width={850}
                        height={442}
                        className="rounded-lg shadow-md mt-4"
                      />
                    </p>
                    <div className="space-y-2 mt-4 text-blue-600">
                      {(t("hanh-ly.features", { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                        <p key={index}>&gt;&gt; {feature}</p>
                      ))}
                    </div>
                    <h1 className="mt-8 text-center">
                      <a
                        href={t("hanh-ly.cta.link")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
                      >
                        {t("hanh-ly.cta.text")}
                      </a>
                    </h1>
                  </div>

                  <div className="blog-share text-center mt-8">
                    <div className="is-divider my-4 border-t-2 border-gray-300" />
                    <div className="social-icons flex justify-center space-x-4">
                      <a
                        href="whatsapp://send?text=..."
                        className="icon button circle is-outline tooltip whatsapp"
                        aria-label="Share on WhatsApp"
                      >
                        <i className="icon-whatsapp text-xl text-green-500" />
                      </a>
                      <a
                        href="https://www.facebook.com/sharer.php?u=..."
                        className="icon button circle is-outline tooltip facebook"
                        aria-label="Share on Facebook"
                      >
                        <i className="icon-facebook text-xl text-blue-600" />
                      </a>
                      <a
                        href="https://twitter.com/share?url=..."
                        className="icon button circle is-outline tooltip twitter"
                        aria-label="Share on Twitter"
                      >
                        <i className="icon-twitter text-xl text-blue-400" />
                      </a>
                      <a
                        href="mailto:..."
                        className="icon button circle is-outline tooltip email"
                        aria-label="Email to a Friend"
                      >
                        <i className="icon-envelop text-xl text-gray-600" />
                      </a>
                      <a
                        href="https://pinterest.com/pin/create/button/?url=..."
                        className="icon button circle is-outline tooltip pinterest"
                        aria-label="Pin on Pinterest"
                      >
                        <i className="icon-pinterest text-xl text-red-600" />
                      </a>
                      <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=..."
                        className="icon button circle is-outline tooltip linkedin"
                        aria-label="Share on LinkedIn"
                      >
                        <i className="icon-linkedin text-xl text-blue-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div id="comments" className="comments-area"></div>
          </div>

          {/* Sidebar Section */}
          {/* <div className="md:w-1/3">
            <RelatedPosts />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
