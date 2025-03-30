"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import bannerImage from "../../../public/filemanager/userfiles/tintuc.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  useEffect(() => {
    function switchLocation(location) {
      // Hide all maps and info
      document
        .querySelectorAll(".map-container, .office-info")
        .forEach((el) => {
          el.classList.remove("active");
        });

      // Deactivate all tabs
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      // Activate selected tab
      document
        .querySelector(`.tab-btn[data-location="${location}"]`)
        .classList.add("active");

      // Show selected map and info
      document.getElementById(`${location}-map`).classList.add("active");
      document.getElementById(`${location}-info`).classList.add("active");
    }

    // Gán sự kiện click cho các tab
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const location = e.currentTarget.dataset.location;
        switchLocation(location);
      });
    });

    // Form validation
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });

    // Khởi tạo mặc định
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
                height: "100vh" /* Full viewport height */,
                minHeight: "600px" /* Đảm bảo không quá nhỏ */,
                overflow: "hidden",
              }}
            >
              <Image
                src={bannerImage}
                alt="Banner vận tải đường thủy"
                fill /* Tự động lấp đầy container */
                priority
                className="banner-image"
                style={{
                  objectFit: "cover" /* Phủ kín container */,
                  objectPosition: "center" /* Căn giữa hình */,
                  width: "100%",
                  height: "100%",
                }}
                quality={100} /* Chất lượng hình ảnh tốt nhất */
                sizes="100vw" /* Tối ưh cho mọi kích thước màn hình */
              />
              {/* Có thể thêm overlay hoặc text nếu cần */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.3)" /* Overlay mờ */,
                }}
              ></div>
            </div>
            <div className="banner-content">
              <div className="text-box">
                <div className="text-content"></div>
              </div>
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
                <p className="contact-description">
                  Vui lòng chọn văn phòng Quý Khách cần liên hệ và điền đầy đủ
                  thông tin theo bảng phía dưới.
                </p>
              </div>

              {/* Office Tabs */}
              <div className="office-tabs">
                <button
                  className="tab-btn active"
                  data-location="hcm"
                  onClick={() => switchLocation("hcm")}
                >
                  Hồ Chí Minh
                </button>
                <button
                  className="tab-btn"
                  data-location="hanoi"
                  onClick={() => switchLocation("hanoi")}
                >
                  Hà Nội
                </button>
                <button
                  className="tab-btn"
                  data-location="haiphong"
                  onClick={() => switchLocation("haiphong")}
                >
                  Hải Phòng
                </button>
              </div>

              {/* Location Content - Two Columns */}
              <div className="location-content">
                {/* Left Column - Map */}
                <div className="map-column">
                  <div className="map-container active" id="hcm-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.146492327269!2d106.71641071526037!3d10.800090161708606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a613e61c0f%3A0x7693223c6cc5a100!2sCGV%20Pearl%20Plaza!5e0!3m2!1svi!2s!4v1670900185276!5m2!1svi!2s"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="HCM Office Map"
                    />
                  </div>

                  <div className="map-container" id="hanoi-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.5086658199118!2d105.785547!3d21.0299119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7a372b27946f3c9!2zMjHCsDAxJzQ3LjEiTiAxMDXCsDQ3JzA4LjciRQ!5e0!3m2!1svi!2s!4v1671533204760!5m2!1svi!2s"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Hanoi Office Map"
                    />
                  </div>

                  <div className="map-container" id="haiphong-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.1376836090285!2d106.6928889!3d20.866500000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0f6f0292cf96854!2zMjDCsDUxJzU5LjQiTiAxMDbCsDQxJzM0LjQiRQ!5e0!3m2!1svi!2s!4v1671533178922!5m2!1svi!2s"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Hai Phong Office Map"
                    />
                  </div>
                </div>

                {/* Right Column - Contact Info */}
                <div className="info-column">
                  {/* HCM Info */}
                  <div className="office-info active" id="hcm-info">
                    <h3>Văn phòng Hồ Chí Minh</h3>
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>94 Bùi Thanh Khiết, Tân Túc, Bình Chánh, HCM</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <span>Hotline: +84 93 806 5499</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-envelope"></i>
                      <span>hcm-sales@kimhao.com</span>
                    </div>
                  </div>

                  {/* Hanoi Info */}
                  <div className="office-info" id="hanoi-info">
                    <h3>Văn phòng Hà Nội</h3>
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        Tầng 13 Pearl Plaza, 561A Điện Biên Phủ, Q. Bình Thạnh,
                        Hà Nội
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <span>+84 028 3510 6866</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-envelope"></i>
                      <span>hanoi-sales@kimhao.com</span>
                    </div>
                  </div>

                  {/* Hai Phong Info */}
                  <div className="office-info" id="haiphong-info">
                    <h3>Văn phòng Hải Phòng</h3>
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>
                        Phòng 803, Tòa nhà Thành Đạt, số 3 Lê Thánh Tông, Q. Ngô
                        Quyền, Hải Phòng
                      </span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <span>+84 0225 325 0779</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-envelope"></i>
                      <span>haiphong-sales@kimhao.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container">
                <h3 className="form-title">Gửi yêu cầu liên hệ</h3>
                <form className="contact-form needs-validation" noValidate>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">
                        Họ và tên <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fullName"
                        required
                      />
                      <div className="invalid-feedback">
                        Vui lòng nhập họ tên
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Số điện thoại <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        required
                      />
                      <div className="invalid-feedback">
                        Vui lòng nhập số điện thoại
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        required
                      />
                      <div className="invalid-feedback">
                        Vui lòng nhập email hợp lệ
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label">
                        Công ty
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="company"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="office" className="form-label">
                      Văn phòng liên hệ <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="office"
                      required
                    >
                      <option value="">-- Chọn văn phòng --</option>
                      <option value="hcm">Hồ Chí Minh</option>
                      <option value="hanoi">Hà Nội</option>
                      <option value="haiphong">Hải Phòng</option>
                    </select>
                    <div className="invalid-feedback">
                      Vui lòng chọn văn phòng
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Dịch vụ quan tâm</label>
                    <div className="row g-3">
                      <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="serviceRoro"
                            value="roro"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="serviceRoro"
                          >
                            Ro/Ro
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="serviceAir"
                            value="air"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="serviceAir"
                          >
                            Vận tải hàng không
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="serviceSea"
                            value="sea"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="serviceSea"
                          >
                            Vận tải biển
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="serviceSpecial"
                            value="special"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="serviceSpecial"
                          >
                            Dịch vụ chuyên biệt
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Nội dung yêu cầu <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Vui lòng nhập nội dung
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="fas fa-paper-plane me-2"></i> Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <style jsx>{`
            .contact-section {
              padding: 60px 0;
            }

            .office-tabs {
              display: flex;
              justify-content: center;
              margin: 30px 0;
              gap: 10px;
            }

            .tab-btn {
              padding: 10px 20px;
              background: #f5f5f5;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.3s;
            }

            .tab-btn.active {
              background: #0056b3;
              color: white;
            }

            .location-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin-bottom: 40px;
            }

            .map-container {
              display: none;
              height: 400px;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .map-container.active {
              display: block;
            }

            .office-info {
              display: none;
              padding: 20px;
              background: #f9f9f9;
              border-radius: 8px;
            }

            .office-info.active {
              display: block;
            }

            .info-item {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
            }

            .info-item i {
              margin-right: 10px;
              color: #0056b3;
              width: 20px;
              text-align: center;
            }
          `}</style>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
