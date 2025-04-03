//page.tsx
"use client";
import Image from "next/image";
// import vantaibien from "../../public/filemanager/userfiles/_thumbs/ICON 2023/Sea-144x.png";
import cosco from "../../public/filemanager/userfiles/z3901221202527_85eb4089bc0d3c43829b5bf93d1c2365.jpg.png";
import wcas from "../../public/filemanager/userfiles/wcas.png";
import oocl from "../../public/filemanager/userfiles/oocl.png";
// import vantainoidia from "../../public/filemanager/userfiles/van-tai-noi-dia.png";
import banner from '../../image/home.png'
import Link from "next/link";
import section2 from "../../image/1.jpg";
import crm3 from "../../public/filemanager/userfiles/banner/crm3.png";
import map3 from "../../public/filemanager/userfiles/banner/map3.png";
import sectionBg from "../../public/filemanager/userfiles/_thumbs/_thumbs/global-logistics-disruption-new.jpg";
import { useTranslation } from "react-i18next";
// import { useMemo } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  iconUrl: string;
}


export default function Home() {

   const { t } = useTranslation();
  
  const services = t("homepage.services.list", {
    returnObjects: true,
  }) as Service[];

  if (!t) {
    return <div>Loading...</div>; // Hoặc bất kỳ UI loading nào bạn muốn
  }

  return (
    <>
      <main id="main" className="homepage">
        <div id="content" role="main">
          <section className="relative w-full">
            {/* Banner background */}
            <div className="relative h-screen max-h-[600px] w-full overflow-hidden bg-gray-900">
              <Image
                src={banner} // Cập nhật với đường dẫn đúng của banner
                alt="Scanwell Logistics Việt Nam"
                className="object-cover w-full h-full"
                width={1200}
                height={600}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />

              {/* Text overlay container */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  {/* Text content positioned on the left */}
                  <div className="w-full md:w-1/2 lg:w-5/12 p-6">
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
                        {t("homepage.banner.title")}{" "}
                        {/* Lấy chuỗi title từ JSON */}
                      </h2>
                      <p className="text-white mb-6">
                        {t("homepage.banner.description")}{" "}
                        {/* Lấy chuỗi description từ JSON */}
                      </p>
                      <Link href="/gioi-thieu">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded transition duration-300">
                          {t("homepage.banner.button")} {/* Lấy chuỗi button từ JSON */}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                {/* Left column - Text content */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-5 uppercase leading-tight">
                      {t("homepage.about.title")}
                    </h2>

                    <p className="text-gray-800 text-base leading-relaxed mb-5">
                      {t("homepage.about.description")}
                    </p>
                  </div>
                </div>

                {/* Right column - Image */}
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative h-full min-h-64 md:min-h-full">
                    <Image
                      src={section2} // Đảm bảo cung cấp đúng đường dẫn hình ảnh từ JSON nếu cần
                      alt={t("homepage.about.title")}
                      className="rounded shadow-md"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-blue-500 uppercase mb-4">
                  {t("homepage.services.title")}
                </h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="bg-white rounded-lg p-8 h-full shadow-md text-center">
                      <div className="flex justify-center mb-4">
                        <Image
                          src={service.iconUrl}
                          alt={service.title}
                          width={80}
                          height={80}
                          className="object-contain"
                          quality={90}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/gioi-thieu">
                  <span className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold uppercase py-3 px-8 rounded transition-colors duration-300">
                    {t("homepage.services.button")}
                  </span>
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div
              id="section-4"
              style={{
                width: "100%",
                padding: "60px 0",
                backgroundColor: "#f8f9fa",
                textAlign: "center",
              }}
            >
              <div
                className="container"
                style={{ maxWidth: "1200px", margin: "0 auto" }}
              >
                <div
                  id="text-34295278"
                  className="text"
                  style={{ marginBottom: "30px" }}
                >
                  <h2 className="fontsize-160000 fontspace-135905 text-uppercase">
                    <span
                      style={{
                        fontSize: "2.2rem",
                        color: "#41a0d6",
                        letterSpacing: "1px",
                      }}
                    >
                      <strong>MANAGEMENT SYSTEM</strong>
                    </span>
                  </h2>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      maxWidth: "800px",
                      margin: "20px auto 0",
                      color: "#555",
                    }}
                  >
                    Streamline your business operations with our comprehensive
                    management solution
                  </p>
                </div>

                <div className="slider-container">
                  <div
                    className="row slider row-slider slider-nav-reveal slider-nav-push"
                    data-flickity-options='{
            "imagesLoaded": true,
            "groupCells": "100%",
            "dragThreshold": 5,
            "cellAlign": "center",
            "wrapAround": true,
            "prevNextButtons": true,
            "percentPosition": true,
            "pageDots": true,
            "rightToLeft": false,
            "autoPlay": 5000
          }'
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={crm3}
                        alt="Management System Dashboard"
                        width={1000}
                        height={500}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          margin: "0 auto",
                        }}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 bg-white" id="network">
            <div className="container mx-auto px-4">
              {/* Heading */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase text-blue-500 tracking-wider">
                  Network
                </h2>
                <div className="flex justify-center">
                  <div className="h-1 w-16 bg-blue-500 my-4"></div>
                </div>
              </div>

              {/* Map Image */}
              <div className="mb-16">
                <div className="max-w-6xl mx-auto">
                  <Image
                    src={map3}
                    alt="Network Map"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                    priority={true}
                  />
                </div>
              </div>

              {/* Office Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
                {/* ASIA Offices */}
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    ASIA Offices
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Hong Kong - Headquarters</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Bangkok, Thailand</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Cebu, Philippines</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Manila, Philippines</span>
                    </li>
                    {/* Thêm các địa điểm còn lại tương tự */}
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Singapore</span>
                    </li>
                    <li className="mt-2">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        Xem tất cả
                        <svg
                          className="h-4 w-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* CHINA Offices */}
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    CHINA Offices
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Shanghai</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Beijing</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Dalian</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Guangzhou</span>
                    </li>
                    <li className="mt-2">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        Xem tất cả
                        <svg
                          className="h-4 w-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* EUROPE & MIDDLE EAST Offices */}
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    EUROPE & MIDDLE EAST Offices
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Felixstowe, United Kingdom</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Istanbul, Turkey</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Dubai, United Arab Emirates</span>
                    </li>
                    <li className="mt-2">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        Xem tất cả
                        <svg
                          className="h-4 w-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* WEST ASIA Offices */}
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    WEST ASIA Offices
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Bangalore - India Head Office</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Mumbai, India</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Karachi, Pakistan</span>
                    </li>
                    <li className="mt-2">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        Xem tất cả
                        <svg
                          className="h-4 w-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>

                {/* NORTH AMERICA Offices */}
                <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                    NORTH AMERICA Offices
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>New York, US</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Los Angeles, US</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Toronto, Canada</span>
                    </li>
                    <li className="mt-2">
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        Xem tất cả
                        <svg
                          className="h-4 w-4 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="partner-section" id="section_1974571113">
            <style jsx>{`
              .partner-section {
                padding: 50px 0;
                background-color: #ffffff;
              }
              .partner-title {
                text-align: center;
                margin-bottom: 20px;
              }
              .partner-title h2 {
                font-size: 28px;
                color: #41a0d6;
                font-weight: bold;
                text-transform: uppercase;
                margin: 0;
              }
              .divider {
                width: 66px;
                height: 2px;
                background-color: #41a0d6;
                margin: 10px auto 30px;
              }
              .partner-logos {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 30px;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
              }
              .partner-logo {
                flex: 1;
                min-width: 250px;
                max-width: 350px;
                text-align: center;
                transition: transform 0.3s ease;
              }
              .partner-logo:hover {
                transform: scale(1.05);
              }
              .logo-image {
                width: 100%;
                height: auto;
                object-fit: contain;
              }
              @media (max-width: 768px) {
                .partner-logos {
                  gap: 20px;
                }
                .partner-logo {
                  min-width: 200px;
                }
              }
            `}</style>

            <div className="section-content">
              <div className="partner-title">
                <h2>
                  <span>{t("homepage.partners.title")}</span>
                </h2>
                <div className="divider"></div>
              </div>

              <div className="partner-logos">
                <div className="partner-logo">
                  <Image
                    src={cosco}
                    alt="COSCO Logo"
                    width={350}
                    height={160}
                    className="logo-image"
                    quality={100}
                  />
                </div>
                <div className="partner-logo">
                  <Image
                    src={wcas}
                    alt="WCAS Logo"
                    width={350}
                    height={160}
                    className="logo-image"
                    quality={100}
                  />
                </div>
                <div className="partner-logo">
                  <Image
                    src={oocl}
                    alt="OOCL Logo"
                    width={350}
                    height={160}
                    className="logo-image"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="contact-section" id="section_1631451535">
            <style jsx global>{`
              .contact-section {
                position: relative;
                padding: 60px 0;
                overflow: hidden;
              }

              .section-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
              }

              .section-bg-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.68);
              }

              .contact-container {
                display: flex;
                flex-wrap: wrap;
                max-width: 1200px;
                margin: 0 auto;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              }

              .contact-image,
              .contact-form {
                flex: 1;
                min-width: 300px;
              }

              .contact-image {
                position: relative;
                min-height: 500px;
                background-size: cover;
                background-position: center;
              }

              .contact-form {
                padding: 40px;
                background: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }

              .contact-title {
                font-size: 2.3rem;
                font-weight: bold;
                margin-bottom: 30px;
                text-align: center;
              }

              .contact-form form {
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
              }

              .contact-form input,
              .contact-form textarea {
                width: 100%;
                padding: 12px 15px;
                margin-bottom: 20px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
              }

              .contact-form textarea {
                min-height: 120px;
                resize: vertical;
              }

              .contact-form button {
                background: #41a0d6;
                color: white;
                border: none;
                padding: 12px 30px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 4px;
                transition: background 0.3s;
              }

              .contact-form button:hover {
                background: #369;
              }

              @media (max-width: 768px) {
                .contact-image {
                  min-height: 300px;
                }

                .contact-title {
                  font-size: 1.8rem;
                }
              }
            `}</style>

            {/* Background elements */}
            <div className="section-bg">
              <Image
                src={sectionBg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
              <div className="section-bg-overlay" />
            </div>

            <div className="section-content">
              <div className="contact-container">
                {/* Left side - Image */}
                <div className="contact-image">
                  <Image
                    src={sectionBg}
                    alt="Contact background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>

                {/* Right side - Form */}
                <div className="contact-form">
                  <div className="text-center">
                    <h2 className="contact-title">
                      {t("homepage.contact.title")}
                    </h2>
                  </div>

                  <form className="wpcf7-form">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={t("homepage.contact.form.name")}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={t("homepage.contact.form.email")}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder={t("homepage.contact.form.phone")}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="content"
                        className="form-control"
                        placeholder={t("homepage.contact.form.content")}
                        required
                      />
                    </div>

                    <div className="text-center">
                      <button type="submit" className="submit-btn">
                        {t("homepage.contact.form.button")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
