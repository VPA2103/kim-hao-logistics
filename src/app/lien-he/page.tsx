"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import bannerImage from "../../../public/filemanager/userfiles/tintuc.png";
import Image from "next/image";

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState("hcm");
  const formRef = useRef<HTMLFormElement>(null);

  const switchLocation = useCallback((location: string) => {
    setActiveLocation(location);
  }, []);
  
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handler = (event: Event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    };

    form.addEventListener("submit", handler);
    return () => form.removeEventListener("submit", handler);
  }, []);

  return (
    <>
      <Head>
        <title>Công ty TNHH Thương Mại Vận Tải Kim Hảo VIỆT NAM</title>
      </Head>

      <main id="main">
        <div id="content" role="main">
          {/* Banner Section */}
          <div className="banner" id="banner-water-transport">
            <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
              <Image
                src={bannerImage}
                alt="Banner vận tải đường thủy"
                fill
                priority
                className="object-cover object-center w-full h-full"
                quality={100}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="banner-content">
              <div className="text-box">
                <div className="text-content"></div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-2">
                LIÊN HỆ VĂN PHÒNG & CHI NHÁNH
              </h2>
              <p className="text-lg mb-6">
                Công ty TNHH Thương Mại Vận Tải Kim Hảo VIỆT NAM
              </p>
              <p className="mb-8">
                Vui lòng chọn văn phòng Quý Khách cần liên hệ và điền đầy đủ
                thông tin theo bảng phía dưới.
              </p>

              {/* Office Tabs */}
              <div className="flex justify-center gap-4 mb-8">
                {["hcm", "hanoi", "haiphong"].map((location) => (
                  <button
                    key={location}
                    className={`px-6 py-2 rounded transition ${
                      activeLocation === location
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                    }`}
                    onClick={() => switchLocation(location)}
                  >
                    {location === "hcm" && "Hồ Chí Minh"}
                    {location === "hanoi" && "Hà Nội"}
                    {location === "haiphong" && "Hải Phòng"}
                  </button>
                ))}
              </div>

              {/* Location Content - Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Map */}
                <div className="map-column">
                  {["hcm", "hanoi", "haiphong"].map((location) => (
                    <div
                      key={location}
                      className={`map-container ${
                        activeLocation === location ? "active" : "hidden"
                      }`}
                    >
                      <iframe
                        src={
                          location === "hcm"
                            ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.146492327269!2d106.71641071526037!3d10.800090161708606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1670900185276!5m2!1svi!2s"
                            : location === "hanoi"
                            ? "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.5086658199118!2d105.785547!3d21.0299119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7a372b27946f3c9!2zMjHCsDAxJzQ3LjEiTiAxMDXCsDQ3JzA4LjciRQ!5e0!3m2!1svi!2s!4v1671533204760!5m2!1svi!2s"
                            : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.1376836090285!2d106.6928889!3d20.866500000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0f6f0292cf96854!2zMjDCsDUxJzU5LjQiTiAxMDbCsDQxJzM0LjQiRQ!5e0!3m2!1svi!2s!4v1671533178922!5m2!1svi!2s"
                        }
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`${location} Office Map`}
                      />
                    </div>
                  ))}
                </div>

                {/* Right Column - Contact Info */}
                <div className="info-column">
                  {[
                    {
                      id: "hcm",
                      title: "Văn phòng Hồ Chí Minh",
                      address: "94 Bùi Thanh Khiết, Tân Túc, Bình Chánh, HCM",
                      phone: "+84 93 806 5499",
                      email: "hcm-sales@kimhao.com",
                    },
                    {
                      id: "hanoi",
                      title: "Văn phòng Hà Nội",
                      address:
                        "Tầng 13 Pearl Plaza, 561A Điện Biên Phủ, Q. Bình Thạnh, Hà Nội",
                      phone: "+84 028 3510 6866",
                      email: "hanoi-sales@kimhao.com",
                    },
                    {
                      id: "haiphong",
                      title: "Văn phòng Hải Phòng",
                      address:
                        "Phòng 803, Tòa nhà Thành Đạt, số 3 Lê Thánh Tông, Q. Ngô Quyền, Hải Phòng",
                      phone: "+84 0225 325 0779",
                      email: "haiphong-sales@kimhao.com",
                    },
                  ].map((office) => (
                    <div
                      key={office.id}
                      className={`office-info ${
                        activeLocation === office.id ? "active block" : "hidden"
                      }`}
                    >
                      <h3 className="text-2xl font-semibold mb-4">
                        {office.title}
                      </h3>

                      <div className="flex items-center mb-4">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        <span className="text-gray-700">{office.address}</span>
                      </div>

                      <div className="flex items-center mb-4">
                        <i className="fas fa-phone-alt mr-2 text-blue-500"></i>
                        <span className="text-gray-700">{office.phone}</span>
                      </div>

                      <div className="flex items-center">
                        <i className="fas fa-envelope mr-2 text-blue-500"></i>
                        <span className="text-gray-700">{office.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">
                <h3 className="text-xl font-semibold mb-4">
                  Gửi yêu cầu liên hệ
                </h3>
                <form ref={formRef} className="needs-validation" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <label htmlFor="fullName" className="form-label">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-lg p-3 w-full border border-gray-300"
                        id="fullName"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg rounded-lg p-3 w-full border border-gray-300"
                        id="phone"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-lg p-3 w-full border border-gray-300"
                      id="email"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-lg rounded-lg p-3 w-full border border-gray-300"
                      id="message"
                      // rows="4"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                  >
                    Gửi
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
