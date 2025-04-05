"use client";

// import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";

const DichVuHangDuAn = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <header className="text-center py-8 bg-blue-50">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">
                  {t("projectCargo.title")}
                </h1>
                <div className="border-b-2 border-blue-200 w-32 mx-auto"></div>
              </header>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 5, 6, 8].map((num) => (
                    <div
                      key={num}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="relative w-full h-64">
                        <Image
                          src={`/filemanager/userfiles/Tommy/PROJECT%20CARGO${
                            num > 1 ? ` (${num})` : ""
                          }.jpg`}
                          alt={t(`projectCargo.imageAlts.${num}`)}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h2 className="text-xl font-bold text-white">
                          {t(`projectCargo.sectionTitles.${num}`)}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-8 pb-8 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">
                    {t("projectCargo.shareLabel")}
                  </span>
                  <div className="flex space-x-3">
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
                        url="https://scanwelllogistics.vn/dich-vu-hang-du-an.html"
                        title={t("projectCargo.title")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* <aside className="lg:col-span-1">
            <RelatedPosts />
          </aside> */}
        </div>
      </div>
    </main>
  );
};

// const RelatedPosts = () => {
//   const { t } = useTranslation("common");
//   const posts = [
//     {
//       title: t("services.seaTransport"),
//       url: "/van-tai-duong-bien",
//       image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
//     },
//     {
//       title: t("services.airTransport"),
//       url: "/van-tai-hang-khong",
//       image: "/filemanager/userfiles/hang-nguy-hiem.jpg",
//     },
//     {
//       title: t("services.multimodalTransport"),
//       url: "/van-tai-da-phuong-thuc",
//       image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6">
//       <h3 className="text-xl font-bold text-blue-800 mb-4">
//         {t("projectCargo.relatedServices")}
//       </h3>
//       <div className="space-y-4">
//         {posts.map((post, index) => (
//           <Link
//             key={index}
//             href={post.url}
//             className="flex items-center space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition"
//           >
//             <div className="flex-shrink-0 w-20 h-16 relative overflow-hidden rounded">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <span className="font-medium text-gray-700 group-hover:text-blue-600">
//               {post.title}
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// Social URLs configuration

const socialUrls = {
  whatsapp: "whatsapp://send?text={title} - {url}",
  facebook: "https://www.facebook.com/sharer.php?u={url}",
  twitter: "https://twitter.com/share?url={url}&text={title}",
  linkedin:
    "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
};

// Updated SocialButton component
const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600"
    >
      <i className={`bi bi-${platform.icon} text-lg`}></i>
      <span className="text-sm">{platform.name}</span>
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
