"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";

const KhoNgoaiThuong = () => {

   const { t } = useTranslation();
     
  return (
    <main className="pt-40 pb-10 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <article className="bg-white shadow rounded-lg p-6">
          {/* Header */}
          <header className="text-center mb-10">
            <div className="mb-4">
              <Link
                href="/dich-vu-kho-bai-va-phan-phoi"
                className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {t("khoBai.category")}
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-800">
              {t("khoBai.title")}
            </h1>
            <div className="mt-4 border-b-2 border-gray-300"></div>
          </header>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-blue-600">
              WAREHOUSE NETWORK
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/3347F736.jpg"
              alt="Warehouse Network"
              width={850}
              height={563}
              className="w-full h-auto object-contain"
            />
            <h2 className="text-xl font-semibold text-blue-600 text-center">
              {t("khoBai.sections.whyChooseUs.title")}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("khoBai.sections.whyChooseUs.benefits.0")}</li>
              <li>{t("khoBai.sections.whyChooseUs.benefits.1")}</li>
              <li>{t("khoBai.sections.whyChooseUs.benefits.2")}</li>
              <li>{t("khoBai.sections.whyChooseUs.benefits.3")}</li>
            </ul>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/4.png"
              alt="Kho Bãi"
              width={850}
              height={567}
              className="w-full h-auto object-contain"
            />
            <h2 className="text-xl font-semibold text-blue-600 text-center">
              {t("khoBai.sections.managementSystem.title")}
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/2.jpg"
              alt="Hệ thống quản lý kho"
              width={850}
              height={567}
              className="w-full h-auto object-contain"
            />
            <h2 className="text-xl font-semibold text-blue-600 text-center">
              {t("khoBai.sections.warehouseImage2.title")}
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/3.jpg"
              alt="Hình ảnh kho"
              width={850}
              height={567}
              className="w-full h-auto object-contain"
            />
          </div>
        </article>
      </div>
    </main>
  );
};

export default KhoNgoaiThuong;
