"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";


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

const VanTaiHangKhong = () => {
  const { t } = useTranslation();

  const getSectionTitle = (num: number): string => {
    const sections = t("vantaihangkhong.services_air.sections", {
      returnObjects: true,
    }) as Array<{ id: number; title: string }>;

    if (Array.isArray(sections) && sections[num - 1]) {
      return sections[num - 1].title;
    }

    const fallbackTitles: Record<number, string> = {
      1: "CÁC ĐỐI TÁC HÃNG BAY",
      2: "KHỐI LƯỢNG",
      3: "CHUYÊN TUYẾN",
      5: "VĂN PHÒNG",
    };
    return fallbackTitles[num] || "VĂN PHÒNG";
  };

  const getImageAlt = (num: number): string => {
    const altTexts: Record<number, string> = {
      1: "Chứng nhận của công ty",
      2: "Các dự án chuyên nghiệp",
      3: "Chuyên tuyến vận chuyển",
      5: "Văn phòng đại diện",
    };
    return altTexts[num] || "Hình ảnh dịch vụ vận tải hàng không";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 pt-40 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 xl:w-8/12">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Header */}
              <header className="text-center py-8 bg-blue-50">
                <div className="mb-4">
                  <Link
                    href="/van-tai-hang-khong"
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    {t("blog_hk.category")}
                  </Link>
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 px-4">
                  {t("vantaihangkhong.services_air.title")}
                </h1>
                <div className="mt-6 border-b-2 border-blue-200 w-24 mx-auto"></div>
              </header>

              {/* Content Sections */}
              <div className="p-6 space-y-8">
                {[
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/12.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/13.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/3(1).png",
                ].map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.01]"
                  >
                    <h2 className="text-lg md:text-xl font-semibold text-center text-blue-600 py-4 px-4">
                      {getSectionTitle(index + 1)}
                    </h2>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={imageUrl}
                        alt={getImageAlt(index + 1)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="px-6 py-8 border-t border-gray-200 bg-gray-50">
                <div className="text-center">
                  <h5 className="text-lg font-bold mb-6 text-gray-700">
                    {t("specialTransport.social.shareTitle")}
                  </h5>
                  <div className="flex justify-center gap-4">
                    {socialPlatforms.map((platform) => (
                      <SocialButton
                        key={platform.name}
                        platform={platform}
                        url="https://kimhaotransport.com/dich-vu-van-tai-hang-khong"
                        title="DỊCH VỤ HÀNG DỰ ÁN"
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

const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3  text-white rounded-full hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Chia sẻ lên ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon} text-lg`}></i>
    </a>
  );
};

// Helper functions and socialPlatforms array remain the same
// const getSectionTitle = (num: number): string => {
//    const sections = t("vantaihangkhong.services_air.sections", {
//      returnObjects: true,
//    });

//     if (Array.isArray(sections) && sections[num - 1]) {
//       return sections[num - 1].title;
//     }

//   const fallbackTitles: Record<number, string> = {
//     1: "CÁC ĐỐI TÁC HÃNG BAY",
//     2: "KHỐI LƯỢNG",
//     3: "CHUYÊN TUYẾN",
//     5: "VĂN PHÒNG",
//   };
//   return fallbackTitles[num] || "VĂN PHÒNG";
// };

// const getImageAlt = (num: number): string => {
//   const altTexts: Record<number, string> = {
//     1: "Chứng nhận của công ty",
//     2: "Các dự án chuyên nghiệp",
//     3: "Chuyên tuyến vận chuyển",
//     5: "Văn phòng đại diện",
//   };
//   return altTexts[num] || "Hình ảnh dịch vụ vận tải hàng không";
// };

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

export default VanTaiHangKhong;
