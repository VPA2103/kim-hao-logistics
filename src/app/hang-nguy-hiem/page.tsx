import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <main className="pt-20 pb-10 bg-gray-100 flex justify-center">
      <div
        id="content"
        className="blog-wrapper blog-single page-wrapper max-w-7xl w-full"
      >
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          {/* Main content */}
          <div className="lg:w-2/3 w-full">
            <article
              id="post-2413"
              className="post-2413 post type-post status-publish format-standard has-post-thumbnail hentry category-tin-tuc"
            >
              <div className="article-inner bg-white p-6 rounded-lg shadow-md">
                <header className="entry-header">
                  <div className="entry-header-text text-left">
                    <h6 className="entry-category text-xs text-gray-500">
                      <a
                        href="/van-tai-duong-thuy"
                        rel="category tag"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        VẬN TẢI ĐƯỜNG THỦY
                      </a>
                    </h6>
                    <h1 className="entry-title text-3xl font-bold mt-2 mb-4">
                      HÀNG NGUY HIỂM
                    </h1>
                    <div className="entry-divider border-t border-gray-300 my-2" />
                  </div>
                </header>
                <div className="entry-content single-page">
                  <div id="main-detail-body" className="content fck">
                    <p>

                      <Image
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/images2641-5c32b9fab0cfc-1024x683.jpg"
                        alt="Vận chuyển hàng nguy hiểm"
                        width={850} // You can specify the width
                        height={442} // You can specify the height
                        className="rounded-lg shadow-md mt-4"
                      />
                    </p>
                    <ol className="list-decimal pl-6 mt-4 text-lg font-semibold">
                      <li>Hàng hóa nguy hiểm là gì?</li>
                    </ol>
                    <p className="text-base mt-2 leading-relaxed">
                      Hàng hóa nguy hiểm là hàng hóa có chứa các chất nguy hiểm
                      khi chở trên đường bộ hoặc đường thủy nội địa có khả năng
                      gây nguy hại tới tính mạng, sức khỏe con người, môi
                      trường, an toàn và an ninh quốc gia.
                    </p>
                    <p className="text-base mt-2 leading-relaxed">
                      Chất nguy hiểm là những chất hoặc hợp chất ở dạng khí,
                      dạng lỏng hoặc dạng rắn có khả năng gây nguy hại tới tính
                      mạng, sức khỏe con người, môi trường, an toàn và an ninh
                      quốc gia.
                    </p>
                    <ol
                      start={2}
                      className="list-decimal pl-6 mt-4 text-lg font-semibold"
                    >
                      <li>
                        Dịch vụ vận chuyển hàng hóa nguy hiểm của Scanwell:
                      </li>
                    </ol>
                    <p className="text-base mt-2 leading-relaxed">
                      Kể từ khi thành lập, Scanwell đã nỗ lực để cung cấp chất
                      lượng dịch vụ cao nhất đến khách hàng trong lĩnh vực
                      logistics cho hàng hóa nguy hiểm. Dịch vụ vận chuyển hàng
                      nguy hiểm của Scanwell gồm:
                    </p>
                    <p>
                      <Image
                        src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/7.png"
                        alt="Vận chuyển hàng nguy hiểm"
                        width={850} // You can specify the width
                        height={442} // You can specify the height
                        className="rounded-lg shadow-md mt-4"
                      />
                    </p>
                    <p className="text-base mt-2 leading-relaxed">
                      Nhờ vào mạng lưới đại lý Công ty TNHH Thương Mại Vận Tải
                      Kim Hảo hoạt động ở hơn 80 quốc gia, đủ đáp ứng tất cả nhu
                      cầu của khách hàng trên toàn cầu. Tất cả các đại lí của
                      chúng tôi đều được chứng nhận bởi IATA, FIATA cho hoạt
                      động vận chuyển hàng nguy hiểm tại quốc gia, vùng có trụ
                      sở. Vì thế, Công ty TNHH Thương Mại Vận Tải Kim Hảo tự tin
                      sẽ mang đến một dịch vụ vận chuyển hàng nguy hiểm từ Việt
                      Nam đi các nước trên thế giới và ngược lại cho Quý khách
                      với độ an toàn và đáp ứng đầy đủ yêu cầu của các địa
                      phương trên toàn cầu.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar content */}
          <div className="lg:w-1/3 w-full">
            <div id="secondary" className="widget-area">
              <aside
                id="flatsome_recent_posts-2"
                className="widget flatsome_recent_posts bg-white p-6 rounded-lg shadow-md"
              >
                <span className="widget-title text-xl font-semibold mb-4">
                  Bài viết liên quan
                </span>
                <div className="is-divider my-4" />
                <ul>
                  {/* Related post 1 */}
                  <li className="recent-blog-posts-li mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="badge post-date badge-outline">
                          <div
                            className="badge-inner bg-fill"
                            style={{
                              background:
                                "url(/public/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg)",
                              border: 0,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <a
                          href="/hang-nguy-hiem"
                          title="HÀNG NGUY HIỂM"
                          className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                          HÀNG NGUY HIỂM
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* Related post 2 */}
                  <li className="recent-blog-posts-li mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="badge post-date badge-outline">
                          <div
                            className="badge-inner bg-fill"
                            style={{
                              background:
                                "url(/public/filemanager/userfiles/Tommy/IMAGE.jpg)",
                              border: 0,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <a
                          href="/dich-vu-van-tai-duong-thuy"
                          title="TỔNG QUAN DỊCH VỤ VẬN TẢI ĐƯỜNG THUỶ"
                          className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                          TỔNG QUAN DỊCH VỤ VẬN TẢI ĐƯỜNG THUỶ
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* Related post 3 */}
                  <li className="recent-blog-posts-li mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="badge post-date badge-outline">
                          <div
                            className="badge-inner bg-fill"
                            style={{
                              background:
                                "url(/public/filemanager/userfiles/Tommy/PROJECTCARGO7.jpg)",
                              border: 0,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <a
                          href="/dich-vu-hang-du-an"
                          title="DỊCH VỤ HÀNG DỰ ÁN"
                          className="text-lg font-medium text-blue-600 hover:text-blue-800"
                        >
                          DỊCH VỤ HÀNG DỰ ÁN
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

export default BlogPost;
