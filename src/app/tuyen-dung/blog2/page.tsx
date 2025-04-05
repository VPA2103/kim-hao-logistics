"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SalesSupervisorJob = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-100 py-12 flex items-center justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Container chính căn giữa */}
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <header className="mb-8 text-center lg:text-left">
                  <div className="mb-6">
                    <h6 className="text-sm font-medium text-gray-500 mb-2">
                      <Link
                        href="/tuyen-dung"
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {t("tuyen-dung-KH.category")}
                      </Link>
                    </h6>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {t("tuyen-dung-KH.title")}
                    </h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto lg:mx-0 my-4 rounded-full"></div>
                  </div>
                </header>

                {/* Nội dung chính */}
                <div className="prose max-w-none text-gray-700">
                  <div className="flex justify-center mb-8">
                    <Image
                      alt="Sales Supervisor"
                      src="https://scanwelllogistics.vn/public/filemanager/userfiles/_thumbs/dang-tin-tuyen-dung-360x.jpg"
                      width={500}
                      height={312}
                      className="rounded-lg shadow-md"
                    />
                  </div>

                  {/* Các mục thông tin */}
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-semibold text-blue-600 mb-4">
                        {t("tuyen-dung-KH.jobDescription.title")}
                      </h2>
                      <ul className="space-y-3 pl-5 list-disc">
                        {[
                          t("tuyen-dung-KH.jobDescription.items.0"),
                          t("tuyen-dung-KH.jobDescription.items.1"),
                          t("tuyen-dung-KH.jobDescription.items.2"),
                          t("tuyen-dung-KH.jobDescription.items.3"),
                          t("tuyen-dung-KH.jobDescription.items.4"),
                          t("tuyen-dung-KH.jobDescription.items.5"),
                          t("tuyen-dung-KH.jobDescription.items.6"),
                          t("tuyen-dung-KH.jobDescription.items.7"),
                          t("tuyen-dung-KH.jobDescription.items.8"),
                        ].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-blue-600 mb-4">
                        {t("tuyen-dung-KH.requirements.title")}
                      </h2>
                      <ul className="space-y-3 pl-5 list-disc">
                        {[
                          t("tuyen-dung-KH.requirements.items.0"),
                          t("tuyen-dung-KH.requirements.items.1"),
                          t("tuyen-dung-KH.requirements.items.2"),
                          t("tuyen-dung-KH.requirements.items.3"),
                          t("tuyen-dung-KH.requirements.items.4"),
                          t("tuyen-dung-KH.requirements.items.5"),
                          t("tuyen-dung-KH.requirements.items.6"),
                          t("tuyen-dung-KH.requirements.items.7"),
                        ].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-xl font-semibold text-blue-600 mb-4">
                        {t("tuyen-dung-KH.benefits.title")}
                      </h2>
                      <ul className="space-y-3 pl-5 list-disc">
                        {[
                          t("tuyen-dung-KH.benefits.items.0"),
                          t("tuyen-dung-KH.benefits.items.1"),
                          t("tuyen-dung-KH.benefits.items.2"),
                          t("tuyen-dung-KH.benefits.items.3"),
                          t("tuyen-dung-KH.benefits.items.4"),
                          t("tuyen-dung-KH.benefits.items.5"),
                        ].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="bg-blue-50 p-6 rounded-lg">
                      <h2 className="text-xl font-semibold text-blue-600 mb-4">
                        {t("tuyen-dung-KH.contact.title")}
                      </h2>
                      <p>
                        Vui lòng gửi CV ứng tuyển về{" "}
                        <a
                          href="mailto:hcm-admin@scanwell.com"
                          className="text-blue-600 font-medium hover:underline"
                        >
                          {t("tuyen-dung-KH.contact.email")}
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SalesSupervisorJob;
