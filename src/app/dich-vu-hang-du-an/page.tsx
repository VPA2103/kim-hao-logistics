"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

// Type definitions for props and helper functions
interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  title: string;
}

interface RelatedPost {
  title: string;
  url: string;
  image: string;
}

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
}

const DichVuHangDuAn = () => {
  return (
    <main className="pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/dich-vu" className="hover:text-blue-600">
            Dịch vụ
          </Link>
          <span className="mx-2">/</span>
          <span className="text-blue-600">Dịch vụ hàng dự án</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <header className="text-center py-8 bg-blue-50">
                <h1 className="text-3xl font-bold text-blue-800 mb-4">
                  DỊCH VỤ HÀNG DỰ ÁN
                </h1>
                <div className="border-b-2 border-blue-200 w-32 mx-auto"></div>
              </header>

              {/* Content Sections */}
              <div className="p-8">
                {/* <div className="mb-8 text-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Scanwell Logistics cung cấp dịch vụ vận chuyển hàng dự án
                    chuyên nghiệp với đội ngũ giàu kinh nghiệm và hệ thống trang
                    thiết bị hiện đại...
                  </p>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 5, 6, 8].map((num) => (
                    <div
                      key={num}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="relative w-full h-64">
                        <Image
                          src={`/filemanager/userfiles/Tommy/PROJECT%20CARGO${
                            num > 1 ? ` (${num})` : ""
                          }.jpg`}
                          alt={getImageAlt(num)}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h2 className="text-xl font-bold text-white">
                          {getSectionTitle(num)}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Sharing */}
              <div className="px-8 pb-8 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Chia sẻ:</span>
                  <div className="flex space-x-3">
                    {socialPlatforms.map((platform) => (
                      <SocialButton
                        key={platform.name}
                        platform={platform}
                        url="https://scanwelllogistics.vn/dich-vu-hang-du-an.html"
                        title="DỊCH VỤ HÀNG DỰ ÁN"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <RelatedPosts />
          </aside>
        </div>
      </div>
    </main>
  );
};

const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-100 text-gray-600 hover:text-blue-600"
    >
      <i className={`bi bi-${platform.icon} text-lg`}></i>
      <span className="text-sm">{platform.name}</span>
    </a>
  );
};

const RelatedPosts = () => {
  const posts: RelatedPost[] = [
    {
      title: "VẬN TẢI ĐƯỜNG BIỂN",
      url: "/van-tai-duong-bien",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
    {
      title: "VẬN TẢI HÀNG KHÔNG",
      url: "/van-tai-hang-khong",
      image: "/filemanager/userfiles/hang-nguy-hiem.jpg",
    },
    {
      title: "VẬN TẢI ĐA PHƯƠNG THỨC",
      url: "/van-tai-da-phuong-thuc",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-blue-800 mb-4">DỊCH VỤ KHÁC</h3>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.url}
            className="flex items-center space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition"
          >
            <div className="flex-shrink-0 w-20 h-16 relative overflow-hidden rounded">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium text-gray-700 group-hover:text-blue-600">
              {post.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Helper functions
const getSectionTitle = (num: number): string => {
  const titles: Record<number, string> = {
    1: "CHỨNG NHẬN",
    2: "CHUYÊN CÁC DỰ ÁN",
    3: "CHUYÊN TUYẾN",
    5: "VĂN PHÒNG ĐẠI DIỆN",
    6: "HÌNH ẢNH THI CÔNG",
    8: "HÌNH ẢNH THI CÔNG",
  };
  return titles[num] || "HÌNH ẢNH THI CÔNG";
};

const getImageAlt = (num: number): string => {
  const altTexts: Record<number, string> = {
    1: "Chứng nhận của công ty",
    2: "Các dự án chuyên nghiệp",
    3: "Chuyên tuyến vận chuyển",
    5: "Văn phòng đại diện",
    6: "Hình ảnh thi công",
    8: "Hình ảnh thực tế của dự án",
  };

  return altTexts[num] || "Default image description";
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "whatsapp",
    icon: "whatsapp",
    url: "whatsapp://send?text={title} - {url}",
  },
  {
    name: "facebook",
    icon: "facebook",
    url: "https://www.facebook.com/sharer.php?u={url}",
  },
  {
    name: "twitter",
    icon: "twitter",
    url: "https://twitter.com/share?url={url}&text={title}",
  },
  {
    name: "linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
  },
];

export default DichVuHangDuAn;
