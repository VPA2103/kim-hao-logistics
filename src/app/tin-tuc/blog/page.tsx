"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { t } = useTranslation();


  return (
    <main className="bg-gray-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Bài viết chính */}
        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header bài viết */}
          <header className="text-center py-8 px-6">
            <div className="mb-4">
              <a
                href="/tin-tuc"
                className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                {t("tin-tuc-KH.category")}
              </a>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              {t("tin-tuc-KH.title")}
            </h1>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </header>

          {/* Nội dung bài viết */}
          <div className="px-6 pb-8">
            {/* Hình ảnh đầu bài */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/OBORC.jpg"
                alt="Hội thảo Một vành đai Một con đường"
                width={1200}
                height={630}
                layout="responsive"
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">{t("tin-tuc-KH.intro.0")}</p>

              <p className="mb-6 font-medium text-gray-800">
                {t("tin-tuc-KH.intro.1")}
              </p>

              {/* Hình ảnh minh họa */}
              <div className="my-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/OBORI.png"
                  alt="Sơ đồ Một vành đai Một con đường"
                  width={1200}
                  height={630}
                  layout="responsive"
                  className="object-cover"
                />
              </div>

              <p className="mb-6">{t("tin-tuc-KH.oborExplanation")}</p>

              {/* Tiêu đề phụ */}
              <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6 pb-2 border-b border-gray-200">
                {t("tin-tuc-KH.impactTitle")}
              </h2>

              {/* Danh sách tác động */}
              <ul className="space-y-4 mb-8">
                {[
                  {
                    title: t("tin-tuc-KH.impacts.0.title"),
                    content: t("tin-tuc-KH.impacts.0.content"),
                  },
                  {
                    title: t("tin-tuc-KH.impacts.1.title"),
                    content: t("tin-tuc-KH.impacts.1.content"),
                  },
                  {
                    title: t("tin-tuc-KH.impacts.2.title"),
                    content: t("tin-tuc-KH.impacts.2.content"),
                  },
                  {
                    title: t("tin-tuc-KH.impacts.3.title"),
                    content: t("tin-tuc-KH.impacts.3.content"),
                  },
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Tiêu đề phụ */}
              <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6 pb-2 border-b border-gray-200">
                {t("tin-tuc-KH.howItWorksTitle")}
              </h2>

              <p className="mb-6">{t("tin-tuc-KH.howItWorks")}</p>

              {/* Danh sách hành lang kinh tế */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t("tin-tuc-KH.abc")}
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  {[
                    t("tin-tuc-KH.economicCorridors.0"),
                    t("tin-tuc-KH.economicCorridors.1"),
                    t("tin-tuc-KH.economicCorridors.2"),
                    t("tin-tuc-KH.economicCorridors.3"),
                    t("tin-tuc-KH.economicCorridors.4"),
                    t("tin-tuc-KH.economicCorridors.5"),
                    ].map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Phần chia sẻ */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-center text-sm font-medium text-gray-500 mb-4">
                {t("tin-tuc-KH.share")}
              </h3>
              <div className="flex justify-center space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Email",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors"
                    aria-label={`Chia sẻ qua ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost;
