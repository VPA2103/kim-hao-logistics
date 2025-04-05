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
    <main className="pt-20 pb-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white shadow rounded-lg p-6">
              <header className="text-center mb-10">
                <div className="mb-4">
                  <Link
                    href="/van-tai-duong-thuy"
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {t("specialTransport.header.link")}
                  </Link>
                </div>
                <h1 className="text-4xl font-bold text-gray-800">
                  {t("specialTransport.header.title")}
                </h1>
                <div className="mt-4 border-b-2 border-gray-300"></div>
              </header>

              <div className="space-y-8">
                {[
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/1.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/VOLUME.PNG",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/3(1).png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/OCEAN%20FREIGHT.png",
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

          {/* <aside className="bg-white shadow rounded-lg p-6">
            <RelatedPosts />
          </aside> */}
        </div>
      </div>
    </main>
  );
};

// const RelatedPosts = () => {
//   const { t } = useTranslation("specialTransport");

//   const posts = Array(3).fill({
//     title: t("relatedPosts.postTitle"),
//     url: "/hang-nguy-hiem",
//     image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
//   });

//   return (
//     <div>
//       <h5 className="text-lg font-bold mb-4">{t("relatedPosts.title")}</h5>
//       <div className="space-y-4">
//         {posts.map((post, index) => (
//           <Link
//             key={index}
//             href={post.url}
//             className="flex items-center gap-4 bg-gray-100 rounded p-4 shadow-md hover:bg-gray-200 transition"
//           >
//             <Image
//               src={post.image}
//               alt={post.title}
//               width={80}
//               height={60}
//               className="rounded object-cover"
//             />
//             <span className="font-medium text-gray-800">{post.title}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// SocialButton Component
const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-300"
      aria-label={`Share on ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon}`}></i> {/* Dynamic icon */}
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
