"use client";
import footerBg from "../../../public/filemanager/userfiles/tintuc.png";
import { FC } from "react";
import { useTranslation } from "next-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  const locations = {
    hanoi: {
      title: t("locations.hanoi.title"),
      address: t("locations.hanoi.address"),
      tel: t("locations.hanoi.tel"),
      fax: t("locations.hanoi.fax"),
      email: t("locations.hanoi.email"),
    },
    hcm: {
      title: t("locations.hcm.title"),
      address: t("locations.hcm.address"),
      tel: t("locations.hcm.tel"),
      fax: t("locations.hcm.fax"),
      email: t("locations.hcm.email"),
    },
    haiphong: {
      title: t("locations.haiphong.title"),
      address: t("locations.haiphong.address"),
      tel: t("locations.haiphong.tel"),
      fax: t("locations.haiphong.fax"),
      email: t("locations.haiphong.email"),
    },
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Main footer content */}
      <div className="relative z-10 py-10 flex">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Hà Nội */}
            <div className="px-4 md:border-r md:pr-6 border-gray-500">
              <h5 className="text-lg font-bold uppercase mb-4">
                {locations.hanoi.title}
              </h5>
              <p className="text-sm mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {locations.hanoi.address}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-phone-alt mr-2"></i> {locations.hanoi.tel}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-fax mr-2"></i> {locations.hanoi.fax}
              </p>
              <p className="text-sm">
                <i className="fas fa-envelope mr-2"></i> {locations.hanoi.email}
              </p>
            </div>

            {/* Hồ Chí Minh */}
            <div className="px-4 md:border-r md:pr-6 border-gray-500">
              <h5 className="text-lg font-bold uppercase mb-4">
                {locations.hcm.title}
              </h5>
              <p className="text-sm mb-2">
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

            {/* Hải Phòng */}
            <div className="px-4">
              <h5 className="text-lg font-bold uppercase mb-4">
                {locations.haiphong.title}
              </h5>
              <p className="text-sm mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {locations.haiphong.address}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-phone-alt mr-2"></i>{" "}
                {locations.haiphong.tel}
              </p>
              <p className="text-sm mb-2">
                <i className="fas fa-fax mr-2"></i> {locations.haiphong.fax}
              </p>
              <p className="text-sm">
                <i className="fas fa-envelope mr-2"></i>{" "}
                {locations.haiphong.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-600 py-4 text-center">
        <p className="text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
