"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";

const DichVuHangDuAn = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 xl:w-8/12">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <header className="text-center py-6 sm:py-8 bg-blue-50">
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3 sm:mb-4">
                  {t("projectCargo.title")}
                </h1>
                <div className="border-b-2 border-blue-200 w-24 sm:w-32 mx-auto"></div>
              </header>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[1, 2, 3, 8].map((num) => (
                    <div
                      key={num}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="relative w-full aspect-[4/3] sm:h-64">
                        <Image
                          src={`/filemanager/userfiles/Tommy/PROJECT%20CARGO${
                            num > 1 ? ` (${num})` : ""
                          }.jpg`}
                          alt={t(`projectCargo.imageAlts.${num}`)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                        <h2 className="text-lg sm:text-xl font-bold text-white">
                          {t(`projectCargo.sectionTitles.${num}`)}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-sm sm:text-base text-gray-600 font-medium">
                    {t("projectCargo.shareLabel")}
                  </span>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {Object.entries(
                      t("projectCargo.socialPlatforms", { returnObjects: true })
                    ).map(([key, name]) => (
                      <SocialButton
                        key={key}
                        platform={{
                          name: name as string,
                          icon: key,
                          url: socialUrls[key as keyof typeof socialUrls],
                        }}
                        url="https://kimhaotransport.com/dich-vu-hang-du-an"
                        title={t("projectCargo.title")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

const socialUrls = {
  whatsapp: "whatsapp://send?text={title} - {url}",
  facebook: "https://www.facebook.com/sharer.php?u={url}",
  twitter: "https://twitter.com/share?url={url}&text={title}",
  linkedin:
    "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
};

const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600 text-sm sm:text-base"
      aria-label={`Share on ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon}`}></i>
      <span>{platform.name}</span>
    </a>
  );
};

interface SocialButtonProps {
  platform: {
    name: string;
    icon: string;
    url: string;
  };
  url: string;
  title: string;
}

export default DichVuHangDuAn;
