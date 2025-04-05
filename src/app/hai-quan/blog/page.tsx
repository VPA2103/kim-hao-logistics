"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CustomsServiceComponent = () => {

  const {t} = useTranslation()



  return (
    <main className="py-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="post">
              <header className="mb-8">
                <div className="text-left">
                  <h6 className="text-sm text-blue-600">
                    <Link href="/hai-quan" className="hover:underline">
                      <p className="hover:underline">HẢI QUAN</p>
                    </Link>
                  </h6>
                  <h1 className="text-3xl font-semibold text-gray-800">
                    {t("haiquan_blog.title")}
                  </h1>
                  <div className="border-t-2 border-gray-300 my-4" />
                </div>
              </header>
              <div className="entry-content">
                <div className="content text-center">
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/CUSTOMS%201.png"
                    alt="Customs Service"
                    width={850}
                    height={227}
                    className="mx-auto"
                  />
                </div>
                <h2 className="mt-6 text-xl text-blue-600 underline text-center">
                  {t("haiquan_blog.description")}
                </h2>
                <div className="text-center mt-4">
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/Customs%202.png"
                    alt="Customs Service Details"
                    width={850}
                    height={464}
                    className="mx-auto"
                  />
                  <Image
                    src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/CUSTOMS%203.png"
                    alt="Customs Service Details"
                    width={850}
                    height={464}
                    className="mx-auto mt-4"
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
