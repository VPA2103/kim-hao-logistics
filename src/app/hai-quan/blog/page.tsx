"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CustomsServiceComponent = () => {
  const { t } = useTranslation();

  return (
    <main className="py-8 pt-40 min-h-screen bg-gray-50">
      {" "}
      {/* Added background and min-h-screen */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Narrower container for better readability */}
        <div className="flex justify-center">
          {" "}
          {/* Centering wrapper */}
          <div className="w-full lg:w-5/6">
            {" "}
            {/* Controlled width */}
            <article className="bg-white rounded-xl shadow-md p-6 md:p-8">
              {" "}
              {/* Added card styling */}
              <header className="mb-8 text-center">
                {" "}
                {/* Centered header */}
                <div>
                  <h6 className="text-sm text-blue-600 mb-2">
                    <Link
                      href="/hai-quan"
                      className="hover:underline transition-colors"
                    >
                      HẢI QUAN
                    </Link>
                  </h6>
                  <h1 className="text-3xl font-bold text-gray-800">
                    {t("haiquan_blog.title")}
                  </h1>
                  <div className="border-t-2 border-blue-200 w-24 mx-auto my-4" />{" "}
                  {/* Centered divider */}
                </div>
              </header>
              <div className="entry-content space-y-8">
                {" "}
                {/* Added consistent spacing */}
                <div className="content">
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/CUSTOMS%201.png"
                    alt="Customs Service"
                    width={850}
                    height={227}
                    className="mx-auto rounded-lg shadow-sm"
                    priority
                  />
                </div>
                <h2 className="text-xl font-semibold text-blue-600 text-center px-4">
                  {t("haiquan_blog.description")}
                </h2>
                <div className="space-y-6">
                  {" "}
                  {/* Image container with spacing */}
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/Customs%202.png"
                    alt="Customs Service Details"
                    width={850}
                    height={464}
                    className="mx-auto rounded-lg shadow-sm"
                  />
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/CUSTOMS%203.png"
                    alt="Customs Service Details"
                    width={850}
                    height={464}
                    className="mx-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomsServiceComponent;
