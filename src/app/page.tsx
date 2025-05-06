//page.tsx
"use client";
import Image from "next/image";
// import vantaibien from "../../public/filemanager/userfiles/_thumbs/ICON 2023/Sea-144x.png";
// import cosco from "../../public/filemanager/userfiles/z3901221202527_85eb4089bc0d3c43829b5bf93d1c2365.jpg.png";
// import wcas from "../../public/filemanager/userfiles/wcas.png";
// import oocl from "../../public/filemanager/userfiles/oocl.png";
// import vantainoidia from "../../public/filemanager/userfiles/van-tai-noi-dia.png";
import banner from "../../image/home.jpg";
import Link from "next/link";
import section2 from "../../image/1.jpg";
// import crm3 from "../../public/filemanager/userfiles/banner/crm3.png";
import map3 from "../../public/filemanager/userfiles/banner/outlined-map-world-vector-31655562.jpg";
import sectionBg from "../../public/filemanager/userfiles/_thumbs/_thumbs/global-logistics-disruption-new.jpg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// import { useMemo } from "react";

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   iconUrl: string;
//   link: string;
// }



export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { t } = useTranslation();

  const services = t("homepage.services.list", {
    returnObjects: true,
  });

  // Kiểm tra nếu services không phải là mảng
  if (!Array.isArray(services)) {
    console.error("Dữ liệu dịch vụ không hợp lệ:", services);
    return null; // hoặc hiển thị UI fallback
  }

  // Ép kiểu an toàn hơn
  const serviceList = services as Array<{
    id: number;
    title: string;
    description: string;
    link: string;
    iconUrl: string;
  }>;

  if (!t) {
    return <div>Loading...</div>; // Hoặc bất kỳ UI loading nào bạn muốn
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    alert(result.message);
  };

  console.log("Kiểm tra:", {
    type: typeof services, // → 'object'
    isArray: Array.isArray(services), // → true
    data: services, // → Mảng dịch vụ
  });

  return (
    <>
      <main id="main" className="homepage">
        <div id="content" role="main">
          <section className="relative w-full pt-24 md:pt-28">
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
                          {t("homepage.banner.button")}{" "}
                          {/* Lấy chuỗi button từ JSON */}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left column - Text content */}
                <div className="w-full md:w-1/2 order-1 md:order-none">
                  <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm md:shadow-none">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-4 uppercase truncate">
                      {t("homepage.about.title")}
                    </h2>
                    <p className="text-gray-700 md:text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                      {t("homepage.about.description")}
                    </p>
                  </div>
                </div>

                {/* Right column - Image */}
                <div className="w-full md:w-1/2 order-0 md:order-none">
                  <div className="relative aspect-video md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={section2}
                      alt={t("homepage.about.title")}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, 50vw"
                      priority
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
                {serviceList.map((service) => (
                  <div
                    key={service.id}
                    className="transition-all duration-300 hover:shadow-lg"
                  >
                    <a
                      href={service.link}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="bg-white rounded-lg p-8 h-full shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
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
                    </a>
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
                      <h2 className="text-4xl font-bold uppercase text-blue-500 tracking-wider">
                        MANAGEMENT SYSTEM
                      </h2>
                    </span>
                  </h2>
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
                    {/* <div
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
                    </div> */}
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
                  {/* <div className="h-1 w-16 bg-blue-500 my-4"></div> */}
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

              {/* Office Listings - Centered Single Card */}
              <div className="flex justify-center px-4">
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 - Bình Chánh */}
                  <a
                    href="https://maps.app.goo.gl/h79fMeix7eL34twa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 text-center">
                      {t("locations.hcm.title")}
                    </h3>
                    <div className="flex flex-col items-center">
                      <div className="flex items-start w-full max-w-xs">
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
                        <span className="text-gray-600 text-sm leading-relaxed text-left">
                          {t("locations.hcm.address")}
                        </span>
                      </div>
                      <div className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium inline-flex items-center transition-colors">
                        {t("map")}
                        <svg
                          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </a>

                  {/* Card 2 - Quận 5 */}
                  <a
                    href="https://maps.app.goo.gl/bXcxNzEaMkWXWp2g9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 text-center">
                      {t("locations.D5.title")}
                    </h3>
                    <div className="flex flex-col items-center">
                      <div className="flex items-start w-full max-w-xs">
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
                        <span className="text-gray-600 text-sm leading-relaxed text-left">
                          {t("locations.D5.address")}
                        </span>
                      </div>
                      <div className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium inline-flex items-center transition-colors">
                        {t("map")}
                        <svg
                          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </a>
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

              {/* <div className="partner-logos">
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
              </div> */}
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

                  <form className="wpcf7-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={t("homepage.contact.form.name")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder={t("homepage.contact.form.email")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder={t("homepage.contact.form.phone")}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder={t("homepage.contact.form.content")}
                        value={formData.message}
                        onChange={handleChange}
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
