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
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white min-h-[400px] flex flex-col"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main footer content - flex grow để chiếm hết không gian còn lại */}
      <div className="relative z-10 py-10 flex-grow flex items-center justify-center">
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-16">
          <div className="flex justify-center">
            <div className="w-full md:w-auto px-4 md:border-r md:pr-6 border-gray-500 flex flex-col items-center">
              <h5 className="text-lg font-bold uppercase mb-4">
                {locations.hcm.title}
              </h5>
              <p className="text-sm mb-2 max-w-xs text-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {locations.hcm.address}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-phone-alt mr-2"></i> {locations.hcm.tel}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-fax mr-2"></i> {locations.hcm.fax}
              </p>
              <p className="text-sm">
                <i className="fas fa-envelope mr-2"></i> {locations.hcm.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer - luôn ở dưới cùng */}
      <div className="border-t border-gray-600 py-4 text-center">
        <p className="text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
