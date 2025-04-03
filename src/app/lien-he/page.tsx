"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import bannerImage from "../../../public/filemanager/userfiles/tintuc.png";

const ContactPage: React.FC = () => {
function switchLocation(location: string) {
  document
    .querySelectorAll<HTMLElement>(".map-container, .office-info")
    .forEach((el) => el.classList.remove("active"));

  document.querySelectorAll<HTMLElement>(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  document
    .querySelector<HTMLElement>(`.tab-btn[data-location="${location}"]`)
    ?.classList.add("active");

  document.getElementById(`${location}-map`)?.classList.add("active");
  document.getElementById(`${location}-info`)?.classList.add("active");
}
  useEffect(() => {

    

    document.querySelectorAll<HTMLButtonElement>(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", (e: Event) => {
        const target = e.currentTarget as HTMLButtonElement;
        switchLocation(target.dataset.location || "hcm");
      });
    });

    const forms =
      document.querySelectorAll<HTMLFormElement>(".needs-validation");
    forms.forEach((form) => {
      form.addEventListener(
        "submit",
        (event: Event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });

    switchLocation("hcm");
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
            <div
              className="banner-image-container"
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: "600px",
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt="Banner vận tải đường thủy"
                fill
                priority
                className="banner-image"
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={100}
                sizes="100vw"
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>
            </div>
          </div>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="container">
              <div className="text-center">
                <h2 className="section-title">LIÊN HỆ VĂN PHÒNG & CHI NHÁNH</h2>
                <p className="section-subtitle">
                  Công ty TNHH Thương Mại Vận Tải Kim Hảo VIỆT NAM
                </p>
              </div>

              {/* Office Tabs */}
              <div className="office-tabs">
                {[
                  { id: "hcm", label: "Hồ Chí Minh" },
                  { id: "hanoi", label: "Hà Nội" },
                  { id: "haiphong", label: "Hải Phòng" },
                ].map((office) => (
                  <button
                    key={office.id}
                    className="tab-btn"
                    data-location={office.id}
                    onClick={(e) => {
                      const location =
                        e.currentTarget.getAttribute("data-location") || "hcm";
                      switchLocation(location);
                    }}
                  >
                    {office.label}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
