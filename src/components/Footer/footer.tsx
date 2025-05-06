"use client";
import footerBg from "../../../public/filemanager/userfiles/tintuc.png";
import { FC } from "react";
import { useTranslation } from "next-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  const locations = {
    hcm: {
      title: t("locations.hcm.title"),
      address: t("locations.hcm.address"),
      tel: t("locations.hcm.tel"),
      fax: t("locations.hcm.fax"),
      email: t("locations.hcm.email"),
    },
    D5: {
      title: t("locations.D5.title"),
      address: t("locations.D5.address"),
      tel: t("locations.D5.tel"),
      fax: t("locations.D5.fax"),
      email: t("locations.D5.email"),
    }
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white min-h-[400px] flex flex-col"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0  bg-opacity-10"></div>

      {/* Main footer content */}
      <div className="relative z-10 py-10 flex-grow">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Địa chỉ HCM */}
            <a href="/lien-he" className="">
              <div className="text-center md:text-left">
                <h5 className="text-lg font-bold uppercase mb-4 text-white">
                  {locations.hcm.title}
                </h5>
                <div className="space-y-2 text-gray-100">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 w-4 flex-shrink-0 text-center"></i>
                    <p className="text-sm text-left whitespace-normal break-words">
                      {locations.hcm.address}
                    </p>
                  </div>
                  <p className="text-sm flex items-center justify-center md:justify-start">
                    <i className="fas fa-phone-alt mr-2 w-4 text-center"></i>
                    {locations.hcm.tel}
                  </p>
                  <p className="text-sm flex items-center justify-center md:justify-start">
                    <i className="fas fa-envelope mr-2 w-4 text-center"></i>
                    {locations.hcm.email}
                  </p>
                </div>
              </div>
            </a>

            {/* Địa chỉ D5 */}
            <a href="/lien-he" className="">
              <div className="text-center md:text-left">
                <h5 className="text-lg font-bold uppercase mb-4 text-white">
                  {locations.D5.title}
                </h5>
                <div className="space-y-2 text-gray-100">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-2 w-4 flex-shrink-0 text-center"></i>
                    <p className="text-sm text-left whitespace-normal break-words">
                      {locations.D5.address}
                    </p>
                  </div>
                  <p className="text-sm flex items-center justify-center md:justify-start">
                    <i className="fas fa-phone-alt mr-2 w-4 text-center"></i>
                    {locations.D5.tel}
                  </p>
                  <p className="text-sm flex items-center justify-center md:justify-start">
                    <i className="fas fa-envelope mr-2 w-4 text-center"></i>
                    {locations.D5.email}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative border-t border-gray-400 py-4 text-center">
        <p className="text-sm text-gray-200">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
