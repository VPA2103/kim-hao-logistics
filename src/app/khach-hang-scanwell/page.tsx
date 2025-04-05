"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import RelatedPosts from "../hanh-ly-xach-tay/RelatedPosts";
import { useTranslation } from "react-i18next";

// interface SocialPlatform {
//   name: string;
//   icon: string;
//   url: string;
// }

// Props for SocialButton
// interface SocialButtonProps {
//   platform: SocialPlatform;
//   url: string;
//   title: string;
// }

const DichVuHangDuAn = () => {
  const { t } = useTranslation();
  const imageUrls = [
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH20.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH21.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH22.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH23.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH24.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH25.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH26.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH27.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH28.jpg",
    "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/WH29.jpg",
  ];

  return (
    <main className="pt-20 pb-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white shadow rounded-lg p-6">
              {/* Header */}
              <header className="text-center mb-10">
                <div className="mb-4">
                  <Link
                    href="/dich-vu-kho-bai-va-phan-phoi"
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {t("khach-hang.title")}
                  </Link>
                </div>
                <h1 className="text-4xl font-bold text-gray-800">
                  {t("khach-hang.description")}
                </h1>
                <div className="mt-4 border-b-2 border-gray-300"></div>
              </header>

              {/* Content Sections */}
              <div className="space-y-8">
                {imageUrls.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded overflow-hidden shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-center text-blue-600 py-4">
                      {/* {`Hình ảnh ${index + 1}`} */}
                    </h2>
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={imageUrl}
                        alt={`Hình ảnh số ${index + 1}`}
                        fill
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <aside className="bg-white shadow rounded-lg p-6">
            <RelatedPosts />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default DichVuHangDuAn;
