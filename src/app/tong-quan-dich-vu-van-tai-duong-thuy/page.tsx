"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
}

interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  title: string;
}

const HangDuAn = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="pt-28 pb-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <article className="bg-white shadow rounded-lg p-6">
              <header className="text-center mb-10">
                <div className="mb-4">
                  <Link
                    href="/van-tai-duong-thuy"
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    {t("specialTransport.header.link")}
                  </Link>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t("specialTransport.header.title")}
                </h1>
                <div className="mt-4 mx-auto w-24 border-b-2 border-gray-300"></div>
              </header>

              <div className="space-y-8 max-w-4xl mx-auto">
                {[
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/1.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/VOLUME.PNG",
                ].map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded overflow-hidden shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-center text-blue-600 py-4">
                      {t(`specialTransport.sections.titles.${index + 1}`)}
                    </h2>
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={imageUrl}
                        alt={t(`specialTransport.sections.alts.${index + 1}`)}
                        fill
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t-2 border-gray-300 pt-6 text-center">
                <h5 className="text-lg font-bold mb-6">
                  {t("specialTransport.social.shareTitle")}
                </h5>
                <div className="flex justify-center gap-4">
                  {socialPlatforms.map((platform) => (
                    <SocialButton
                      key={platform.name}
                      platform={{
                        ...platform,
                        name: t(
                          `specialTransport.social.platforms.${platform.name}`
                        ),
                      }}
                      url="https://scanwelllogistics.vn/dich-vu-hang-du-an.html"
                      title={t("header.title")}
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
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
      className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-300 transition-colors"
      aria-label={`Share on ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon}`}></i>
    </a>
  );
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "whatsapp",
    icon: "whatsapp",
    url: "whatsapp://send?text={title} - {url}",
  },
  {
    name: "facebook",
    icon: "facebook",
    url: "https://www.facebook.com/sharer.php?u={url}",
  },
  {
    name: "twitter",
    icon: "twitter",
    url: "https://twitter.com/share?url={url}&text={title}",
  },
  {
    name: "linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
  },
];

export default HangDuAn;
