"use client";
// import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";



const ArticleContent = () => {

  const { t } = useTranslation();


  return (
    <main className="pt-40 pb-10 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <article className="bg-white shadow rounded-lg p-6">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800">
              {t("phan-loai.title")}
            </h1>
            <div className="mt-4 border-b-2 border-gray-300"></div>
          </header>

          <div className="space-y-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">
              {t("phan-loai.title1")}
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/63cfd5064555165b4efc44bb_pick-pack-ship-workflow.jpg"
              alt="Ứng dụng hệ thống quản lý kho"
              width={850}
              height={446}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              {t("phan-loai.title2")}
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/PICK%20AND%20PACK%20(1000%20%C3%97%202000%20px).png"
              alt="Sơ đồ DC Bypass"
              width={850}
              height={1700}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              {t("phan-loai.title3")}
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/4.png"
              alt="Hệ thống kho miền Nam"
              width={850}
              height={567}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default ArticleContent;
