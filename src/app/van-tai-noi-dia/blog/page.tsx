"use client";
import Image from "next/image";
import React from "react";

const RelatedPost = () => {
  return (
    <main id="main" className="pt-24 py-8">
      {" "}
      {/* Thêm padding-top cho phần main */}
      <div id="content" className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-2/3">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc mb-8"
            >
              <div className="article-inner">
                <header className="entry-header mb-6">
                  <div className="entry-header-text entry-header-text-top text-left">
                    <h6 className="entry-category is-xsmall">
                      <a href="/van-tai-noi-dia" className="text-blue-500">
                        VẬN TẢI NỘI ĐỊA
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl font-bold mb-2">
                      TỔNG QUAN VẬN TẢI NỘI ĐỊA
                    </h1>
                    <div className="entry-divider is-divider small mb-4"></div>
                  </div>
                </header>
                <div className="entry-content single-page">
                  <div
                    id="main-detail-body"
                    className="content fck text-center"
                  >
                    <Image
                      src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/INLAND%201.png"
                      alt="Vận chuyển hàng nguy hiểm"
                      width={850} // You can specify the width
                      height={442} // You can specify the height
                      className="rounded-lg shadow-md mt-4"
                    />
                    <h2 className="text-xl text-blue-500 underline mb-4">
                      DỊCH VỤ VẬN TẢI NỘI ĐỊA
                    </h2>

                    <Image
                      src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/INLAND%202.png"
                      alt="Vận chuyển hàng nguy hiểm"
                      width={850} // You can specify the width
                      height={442} // You can specify the height
                      className="rounded-lg shadow-md mt-4"
                    />
                    <ul className="text-left mx-auto space-y-4 max-w-2xl">
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Đầu kéo:
                        </h3>
                        <ul>
                          <li>Phục vụ liên tỉnh, bắc-trung-nam.</li>
                          <li>Hoạt động liên tục 24/7.</li>
                          <li>Trang bị hệ thống giám sát hàng hoá.</li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Đường sắt:
                        </h3>
                        <ul>
                          <li>Kéo containers Nam-Trung-Bắc.</li>
                          <li>
                            Tránh ùn tắc giao thông, cắt giảm các chi phí đường
                            bộ.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Xà lang:
                        </h3>
                        <ul>
                          <li>
                            Thuận tiện giao thông vào các khu vực ven sông, biển
                            như các tỉnh miền Tây.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Xe van và xe bán tải (&lt;950kg):
                        </h3>
                        <ul>
                          <li>
                            Phục vụ các mặt hàng dưới 1 tấn trong nội thành và
                            các khu vực cấm tải.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Xe 2 bánh:
                        </h3>
                        <ul>
                          <li>
                            Vận chuyển các mặt hàng thương mại điện tử và chứng
                            từ.
                          </li>
                          <li>Dễ lưu thông vào các đường nhỏ, tránh kẹt xe.</li>
                        </ul>
                      </li>
                    </ul>
                    <h2 className="text-xl text-blue-500 underline mb-4">
                      DỊCH VỤ VẬN TẢI XUYÊN BIÊN GIỚI
                    </h2>

                    <Image
                      src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/INLAND%203.png"
                      alt="Vận chuyển hàng nguy hiểm"
                      width={850} // You can specify the width
                      height={442} // You can specify the height
                      className="rounded-lg shadow-md mt-4"
                    />
                    <ul className="text-left mx-auto space-y-4 max-w-2xl">
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Ga quốc tế:
                        </h3>
                        <ul>
                          <li>
                            VIỆT NAM-TRUNG QUỐC (Bằng Tường, Quảng Tây, Nam
                            Ninh, ...).
                          </li>
                          <li>
                            VIỆT NAM-TRUNG Á (Ulaanbaatar, Mongolia, ...).
                          </li>
                          <li>VIỆT NAM-NGA (Vorsino, Moscow).</li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="text-lg font-semibold underline">
                          Đầu kéo quốc tế:
                        </h3>
                        <ul>
                          <li>VIỆT NAM - LÀO</li>
                          <li>VIỆT NAM - CAMPUCHIA</li>
                          <li>VIỆT NAM - TRUNG QUỐC</li>
                        </ul>
                      </li>
                    </ul>
                    <h2 className="text-xl text-blue-500 underline mb-4">
                      GIAO HÀNG CHẶN CUỐI (LAST MILE DELIVERY)
                    </h2>

                    <Image
                      src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/INLAND%204.png"
                      alt="Vận chuyển hàng nguy hiểm"
                      width={850} // You can specify the width
                      height={442} // You can specify the height
                      className="rounded-lg shadow-md mt-4"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="w-full lg:w-1/3">
            <div
              id="secondary"
              className="widget-area bg-gray-100 p-4 rounded-lg"
            >
              <aside
                id="flatsome_recent_posts-2"
                className="widget flatsome_recent_posts"
              >
                <span className="widget-title text-lg font-semibold">
                  Bài viết liên quan
                </span>
                <div className="is-divider small my-4"></div>
                <ul>
                  <li className="recent-blog-posts-li">
                    <div className="flex flex-row items-center mb-4">
                      <div className="mr-3">
                        <div
                          className="badge post-date bg-fill w-8 h-8 rounded-full bg-cover"
                          style={{
                            backgroundImage:
                              "url(/public/filemanager/userfiles/Tommy/INLAND5.png)",
                          }}
                        ></div>
                      </div>
                      <div className="flex-grow">
                        <a
                          href="/van-tai-noi-dia.html"
                          title="TỔNG QUAN VẬN TẢI NỘI ĐỊA"
                          className="text-blue-600 font-semibold hover:underline"
                        >
                          TỔNG QUAN VẬN TẢI NỘI ĐỊA
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RelatedPost;
