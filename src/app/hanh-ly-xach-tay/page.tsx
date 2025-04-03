import React from "react";
import RelatedPosts from "./RelatedPosts";

const BlogPost = () => {
  return (
    <main id="main" className="bg-gray-50 pt-20 pb-8">
      <div id="content" className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Main Content Section */}
          <div className="md:w-2/3 space-y-8">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner bg-white p-6 rounded-lg shadow-md">
                <header className="entry-header">
                  <div className="entry-header-text text-left">
                    <h6 className="entry-category text-sm text-gray-500">
                      <a
                        href="/van-tai-hang-khong"
                        className="hover:text-blue-600"
                        rel="category tag"
                      >
                        VẬN TẢI HÀNG KHÔNG
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl font-semibold text-gray-900 mt-2">
                      HÀNH LÝ SÁCH TAY
                    </h1>
                    <div className="entry-divider my-4 border-t-2 border-gray-200" />
                  </div>
                </header>
                <div className="entry-content single-page text-gray-800">
                  <div id="main-detail-body" className="content">
                    <p>
                      <img
                        alt="Hành lý xách tay"
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/HLXT4.jpg"
                        className="w-full rounded-lg shadow-md"
                      />
                    </p>
                    <p className="mt-4 font-bold text-lg">
                      Dịch vụ chuyển phát nhanh, dịch vụ xách tay cho các lô
                      hàng mang tính chất cấp bách về thời gian.
                    </p>
                    <p className="mt-4">
                      Hành lý xách tay – Chuyển phát nhanh trên máy bay là dịch
                      vụ Scanwell cung cấp với đội ngũ nhân viên đặc biệt và quy
                      trình nhanh chóng hỗ trợ vận chuyển đúng nghĩa đen XÁCH
                      TAY hàng hóa của bạn lên máy bay. Dịch vụ này giúp đáp ứng
                      cho các lô hàng cấp bách hoặc giá trị cao có nhu cầu vận
                      chuyển bảo hộ hoặc nhanh chóng trong ngày hoặc ít nhất qua
                      ngày hôm sau tùy khu vực vận chuyển.
                    </p>
                    <p className="mt-4">
                      <img
                        alt="Hành lý xách tay"
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/HLXT2.jpg"
                        className="w-full rounded-lg shadow-md"
                      />
                    </p>
                    <div className="space-y-2 mt-4 text-blue-600">
                      <p>&gt;&gt; Dịch vụ 24/7/365</p>
                      <p>
                        &gt;&gt; Giao hàng trong cùng ngày hoặc ngày hôm sau tùy
                        thuộc vào điểm đến
                      </p>
                      <p>&gt;&gt; Mua vé máy bay</p>
                      <p>&gt;&gt; Tóm tắt thành viên nhóm được chọn</p>
                      <p>&gt;&gt; Nhận hàng gửi hàng</p>
                      <p>&gt;&gt; Thủ tục hải quan</p>
                      <p>
                        &gt;&gt; Giao hàng cá nhân cho người nhận hàng đã thỏa
                        thuận
                      </p>
                      <p>&gt;&gt; Xác nhận giao hàng</p>
                    </div>
                    <h1 className="mt-8 text-center">
                      <a
                        href="/lien-he"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200"
                      >
                        HÃY LIÊN HỆ CHÚNG TÔI NGAY!
                      </a>
                    </h1>
                  </div>
                  <div className="blog-share text-center mt-8">
                    <div className="is-divider my-4 border-t-2 border-gray-300" />
                    <div className="social-icons flex justify-center space-x-4">
                      <a
                        href="whatsapp://send?text=..."
                        className="icon button circle is-outline tooltip whatsapp"
                        aria-label="Share on WhatsApp"
                      >
                        <i className="icon-whatsapp text-xl text-green-500" />
                      </a>
                      <a
                        href="https://www.facebook.com/sharer.php?u=..."
                        className="icon button circle is-outline tooltip facebook"
                        aria-label="Share on Facebook"
                      >
                        <i className="icon-facebook text-xl text-blue-600" />
                      </a>
                      <a
                        href="https://twitter.com/share?url=..."
                        className="icon button circle is-outline tooltip twitter"
                        aria-label="Share on Twitter"
                      >
                        <i className="icon-twitter text-xl text-blue-400" />
                      </a>
                      <a
                        href="mailto:..."
                        className="icon button circle is-outline tooltip email"
                        aria-label="Email to a Friend"
                      >
                        <i className="icon-envelop text-xl text-gray-600" />
                      </a>
                      <a
                        href="https://pinterest.com/pin/create/button/?url=..."
                        className="icon button circle is-outline tooltip pinterest"
                        aria-label="Pin on Pinterest"
                      >
                        <i className="icon-pinterest text-xl text-red-600" />
                      </a>
                      <a
                        href="https://www.linkedin.com/shareArticle?mini=true&url=..."
                        className="icon button circle is-outline tooltip linkedin"
                        aria-label="Share on LinkedIn"
                      >
                        <i className="icon-linkedin text-xl text-blue-700" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div id="comments" className="comments-area"></div>
          </div>

          {/* Sidebar Section */}
          <div className="md:w-1/3">
            <RelatedPosts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
