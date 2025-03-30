"use client";

import './index.css'


const Footer = () => {

  return (
    <>
    <footer>
  <div
    className="topfooter wow fadeIn transition animated"
    data-wow-delay="0.1s"
    style={{
      visibility: "visible",
      WebkitAnimationDelay: "0.1s",
      MozAnimationDelay: "0.1s",
      animationDelay: "0.1s"
    }}
  >
    <div className="container-fluid">
      <div
        className="owltopfooter owl-carousel owl-theme"
        style={{ opacity: 1, display: "block" }}
      >
        <div className="owl-wrapper-outer">
          <div
            className="owl-wrapper"
            style={{
              left: 0,
              transition: "all 1000ms ease 0s",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          >
            <div className="owl-item">
              <div className="wrap">
                <div className="item">
                  <a href="/lien-he">
                    <h5>HỒ CHÍ MINH</h5>
                    <p>
                      <span className="dc-footer">
                        <i className="fa fa-fw fa-map-marker" /> 94 Bùi Thanh
                        Khiết, Tân Túc, Bình Chánh, HCM
                      </span>
                      <br />
                      - Tel : +84 024 3532 2590 <br />
                      - Fax : +84 024 3495 0702
                      <br />- Mail : digifund@digifund.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bottomfooter">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 footer-column">
          <div className="row">
            {/* <a href="tel:+842839919259">Hotline: +84 028 3510 6866</a> */}
          </div>
        </div>
        <div className="col-md-4 footer-column text-right">
          Copyright © 2025 Digifund Viet Nam
        </div>
        <div className="col-md-4 footer-column text-center">
          <a href="https://www.digifund.tech/" target="_blank">
            <i className="fa fa-fw fa-facebook" />
          </a>
          <a href="https://www.digifund.tech/" target="_blank">
            <i className="fa fa-fw fa-youtube" />
          </a>
          <a href="https://www.digifund.tech/" target="_blank">
            <i className="fa fa-fw fa-google" />
          </a>
        </div>
        <div className="col-md-2 footer-column">
          <div className="row">
            {/* <a target="_blank" rel="nofollow" href="https://hbweb.vn/?utm_campaign=cpn:site_khach_hang-plm:footer&campaign=site_khach_hang">Thiết kế bởi: Hbweb.vn</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
