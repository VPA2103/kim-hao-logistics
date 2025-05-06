import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import yangming from '../../image/logo_cachangtau/yaming.png'
import zim from "../../image/logo_cachangtau/AnyConv.com__ZIM.jpg";
import oocl from "../../image/logo_cachangtau/AnyConv.com__OIP.jpg";
import evergreen from "../../image/logo_cachangtau/AnyConv.com__EMC.jpg";
import kmtcline from "../../image/logo_cachangtau/AnyConv.com__KMTC.jpg";
import namsung from "../../image/logo_cachangtau/AnyConv.com__OIP-2.jpg";
import asl from "../../image/logo_cachangtau/ASL-1.png";
import haian from "../../image/logo_cachangtau/hai-an.png";
import hapag from "../../image/logo_cachangtau/hapag.png";
import heung from "../../image/logo_cachangtau/heung-A-1.png";
import sitc from "../../image/logo_cachangtau/logo_sitc-1.png";
import logo1 from "../../image/logo_cachangtau/logo-1.png";
import masersk from "../../image/logo_cachangtau/MAERSK-1-2048x1024.jpg";
import panocean from "../../image/logo_cachangtau/PAN-OCEAN-2.gif";
import pil from "../../image/logo_cachangtau/PIL-2-2048x472.png";
import skr from "../../image/logo_cachangtau/R-1-2.png";
import samudera from "../../image/logo_cachangtau/samudera-1.png";
import sealand from "../../image/logo_cachangtau/SEA-LAND-1-2048x745.png";
import tslines from "../../image/logo_cachangtau/TSLINE-1.png";




const TrackTraceButton = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  // Xử lý click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };

    if (isListVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isListVisible]);

  const shippingLines = [
    {
      logo: yangming,
      link: "https://www.yangming.com/en",
    },
    {
      logo: zim,
      link: "https://www.zim.com/tools/track-a-shipment",
    },
    {
      logo: oocl,
      link: "https://www.oocl.com/eng/ourservices/eservices/cargotracking/Pages/cargotracking.aspx",
    },
    {
      logo: evergreen,
      link: "https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do",
    },
    {
      logo: kmtcline,
      link: "https://www.visiwise.co/tracking/container/kmtc/",
    },
    {
      logo: namsung,
      link: "https://ebiz.namsung.co.kr/?direct=Y&code=00010025&rtnUrl=/WS/trk/UIE0710.xml&title=cargo",
    },
    {
      logo: asl,
      link: "https://trackthispackage.com/asl-shipping-line-container-tracking/",
    },
    {
      logo: haian,
      link: "http://haian.container-tracking.org/",
    },
    {
      logo: hapag,
      link: "https://www.hapag-lloyd.com/en/home.html",
    },
    {
      logo: heung,
      link: "http://heungashipping.container-tracking.org/",
    },
    {
      logo: sitc,
      link: "https://api.sitcline.com/sitcline/wel",
    },
    {
      logo: logo1,
      link: "https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking",
    },
    {
      logo: masersk,
      link: "https://www.maersk.com/tracking/",
    },
    {
      logo: panocean,
      link: "https://container.panocean.com/",
    },
    {
      logo: pil,
      link: "https://www.pilship.com/en-our-track-and-trace-pil-pacific-international-lines/120.html",
    },
    {
      logo: skr,
      link: "http://sinokor.container-tracking.org/",
    },
    {
      logo: samudera,
      link: "http://samudera.container-tracking.org/",
    },
    {
      logo: sealand,
      link: "https://www.maersk.com/sealand",
    },
    {
      logo: tslines,
      link: "https://www.tslines.com/en/e-service-list/tracking",
    },
  ];

  return (
    <div className="m-5 font-sans relative">
      {/* Nút Track & Trace */}
      <button
        onClick={toggleList}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
      >
        Track & Trace
      </button>

      {/* Modal hiển thị danh sách */}
      {isListVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">DANH SÁCH HÃNG TÀU</h2>
              <button
                onClick={() => setIsListVisible(false)}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {shippingLines.map((line, index) => (
                <a
                  key={index}
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-full h-16 relative mb-2">
                    <Image
                      src={line.logo}
                      alt={"Shipping line logo"}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 150px"
                    />
                  </div>
                  {/* {line.name && (
                    <span className="text-xs text-center text-gray-600 truncate w-full">
                      {line.name}
                    </span>
                  )} */}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackTraceButton;
