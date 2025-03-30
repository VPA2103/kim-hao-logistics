"use client";

import "./index.css";
import footerBg from "../../../public/filemanager/userfiles/tintuc.png"; // Import ảnh nền

const Footer = () => {
  return (
    <footer
      className="footer-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* Top Footer - Thông tin liên hệ */}
      <div className="top-footer py-5">
        <div className="container">
          <div className="row g-4">
            {/* Văn phòng HCM */}
            <div className="col-md-4">
              <div className="footer-office h-100 p-4">
                <h5 className="text-uppercase mb-3">HỒ CHÍ MINH</h5>
                <div className="footer-contact">
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    94 Bùi Thanh Khiết, Tân Túc, Bình Chánh, HCM
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone-alt me-2"></i>
                    Tel: +84 024 3532 2590
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-fax me-2"></i>
                    Fax: +84 024 3495 0702
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope me-2"></i>
                    digifund@digifund.com
                  </p>
                </div>
              </div>
            </div>

            {/* Văn phòng Hà Nội */}
            <div className="col-md-4">
              <div className="footer-office h-100 p-4">
                <h5 className="text-uppercase mb-3">HÀ NỘI</h5>
                <div className="footer-contact">
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Tòa nhà Pearl Plaza, Q. Bình Thạnh, Hà Nội
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone-alt me-2"></i>
                    Tel: +84 028 3510 6866
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope me-2"></i>
                    hanoi@digifund.com
                  </p>
                </div>
              </div>
            </div>

            {/* Văn phòng Đà Nẵng */}
            <div className="col-md-4">
              <div className="footer-office h-100 p-4">
                <h5 className="text-uppercase mb-3">ĐÀ NẴNG</h5>
                <div className="footer-contact">
                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Số 123 Nguyễn Văn Linh, Q. Hải Châu, Đà Nẵng
                  </p>
                  <p className="mb-2">
                    <i className="fas fa-phone-alt me-2"></i>
                    Tel: +84 0236 3828 288
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope me-2"></i>
                    danang@digifund.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Copyright và social */}
      <div className="bottom-footer py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                Copyright © 2025 Digifund Viet Nam. All rights reserved.
              </p>
            </div>

            <div className="col-md-4 text-center mb-3 mb-md-0">
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <p className="mb-0">
                Designed with <i className="fas fa-heart text-danger"></i> by
                Digifund Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
