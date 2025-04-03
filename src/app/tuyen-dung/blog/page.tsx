import Image from "next/image";
import Link from "next/link";

const SalesSupervisorJob = () => {
  return (
    <main className="bg-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner bg-white p-8 rounded-lg shadow-md">
                <header className="entry-header mb-8">
                  <div className="entry-header-text entry-header-text-top text-left mb-4">
                    <h6 className="entry-category text-xs text-gray-500">
                      <Link href="/tuyen-dung" className="hover:text-blue-600">
                        <p>Tuyển Dụng</p>
                      </Link>
                    </h6>
                    <h1 className="entry-title text-3xl font-bold text-gray-900">
                      [HCM] Tuyển Dụng Sales Supervisor
                    </h1>
                    <div className="entry-divider is-divider small mt-4" />
                  </div>
                </header>
                <div className="entry-content single-page text-gray-700">
                  <div id="main-detail-body" className="content fck">
                    <p className="text-center mb-6">
                      <Image
                        alt="Sales Supervisor"
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/_thumbs/dang-tin-tuyen-dung-360x.jpg"
                        width={360}
                        height={225}
                        className="rounded-lg"
                      />
                    </p>
                    <div className="job-description">
                      <p>
                        <strong>Mô tả công việc:</strong>
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>
                          Lưu trữ chỉ tiêu bán hàng được giao của nhóm và chỉ
                          tiêu cá nhân do quản lý đặt ra;
                        </li>
                        <li>
                          Lập kế hoạch bán hàng, đào tạo cho đại diện bán hàng
                          mới;
                        </li>
                        <li>
                          Tổ chức và điều phối lịch trình đại diện bán hàng;
                        </li>
                        <li>
                          Giám sát đại diện kinh doanh, hỗ trợ họ đạt và vượt
                          mục tiêu;
                        </li>
                        <li>
                          Cung cấp dịch vụ giao nhận vận tải và các dịch vụ cốt
                          lõi của logistics;
                        </li>
                        <li>
                          Thường xuyên tìm kiếm khách hàng mới và chăm sóc khách
                          hàng hiện có;
                        </li>
                        <li>
                          Phát triển và duy trì mối quan hệ tin cậy với khách
                          hàng;
                        </li>
                        <li>
                          Quản lý hợp đồng khách hàng và quy trình báo giá;
                        </li>
                        <li>
                          Giải quyết mọi vấn đề và khiếu nại của khách hàng;
                        </li>
                      </ul>

                      <p>
                        <strong>Yêu Cầu:</strong>
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>Trình độ học vấn: Cao đẳng trở lên;</li>
                        <li>
                          Có 2-3 năm kinh nghiệm trong các hoạt động Kinh doanh
                          Hậu cần/Xuất nhập khẩu;
                        </li>
                        <li>Có sẵn nguồn khách hàng là một lợi thế;</li>
                        <li>
                          Khả năng giao tiếp tốt, nhanh nhẹn, ăn nói lưu loát;
                        </li>
                        <li>Khả năng làm việc nhóm, chia sẻ với tập thể;</li>
                        <li>Yêu thích kinh doanh, nhiệt tình, chủ động;</li>
                        <li>Tiếng Anh là ngoại ngữ bắt buộc;</li>
                        <li>Báo cáo cho Trưởng phòng kinh doanh;</li>
                      </ul>

                      <p>
                        <strong>Quyền Lợi:</strong>
                      </p>
                      <ul className="list-disc pl-6 mb-6">
                        <li>
                          Môi trường làm việc hiện đại, chuyên nghiệp, thân
                          thiện;
                        </li>
                        <li>BHXH, BHYT, BHTN theo luật Việt Nam;</li>
                        <li>
                          Phụ cấp và Thưởng tháng 13, Quà sinh nhật, Phép năm,
                          Du lịch hàng năm;
                        </li>
                        <li>Kiểm tra sức khoẻ hàng năm;</li>
                        <li>Thưởng sinh nhật, Thưởng lễ tết;</li>
                        <li>Bảo hiểm y tế;</li>
                      </ul>

                      <p>
                        <strong>Liên Hệ:</strong>
                      </p>
                      <p>
                        Vui lòng gửi CV ứng tuyển về{" "}
                        <strong>hcm-admin@scanwell.com</strong>;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              id="secondary"
              className="widget-area bg-white p-6 rounded-lg shadow-md"
            >
              <aside
                id="flatsome_recent_posts-2"
                className="widget flatsome_recent_posts"
              >
                <h2 className="widget-title text-xl font-semibold mb-4">
                  Bài viết liên quan
                </h2>
                <div className="is-divider small mb-4" />
                <ul>
                  <li className="recent-blog-posts-li mb-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div
                          className="badge post-date badge-outline"
                          style={{
                            backgroundImage:
                              "url(/public/filemanager/userfiles/dang-tin-tuyen-dung.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="flex-grow">
                        <Link
                          href="/tuyen-dung.html"
                          className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                        >
                          [HCM] Tuyển Dụng Sales Executive
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="recent-blog-posts-li">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div
                          className="badge post-date badge-outline"
                          style={{
                            backgroundImage:
                              "url(/public/filemanager/userfiles/_thumbs/SalesSupervisor.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="flex-grow">
                        <Link
                          href="/hcm-tuyen-dung-sales-supervisor.html"
                          className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                        >
                          [HCM] Tuyển Dụng Sales Supervisor
                        </Link>
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

export default SalesSupervisorJob;
