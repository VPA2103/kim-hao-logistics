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
    <main className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white shadow-md rounded-lg p-6">
              {/* Header */}
              <header className="text-center mb-8">
                <div className="mb-2">
                  <Link
                    href="/van-tai-duong-thuy"
                    className="inline-block text-sm bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    VẬN TẢI ĐƯỜNG THỦY
                  </Link>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">
                  DỊCH VỤ HÀNG DỰ ÁN
                </h1>
                <div className="mt-4 border-b-2 border-gray-300"></div>
              </header>

              {/* Content Sections */}
              <div className="space-y-8">
                {[1, 2, 3, 5, 6, 8].map((num) => (
                  <div
                    key={num}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-center text-blue-600 py-4">
                      {getSectionTitle(num)}
                    </h2>
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={`/filemanager/userfiles/Tommy/PROJECT%20CARGO${
                          num > 1 ? ` (${num})` : ""
                        }.jpg`}
                        alt={getImageAlt(num)}
                        fill
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="mt-8 border-t-2 border-gray-300 pt-6 text-center">
                <h5 className="text-lg font-bold mb-4">Chia sẻ bài viết</h5>
                <div className="flex justify-center space-x-4">
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
            </article>
          </div>

          {/* Sidebar */}
          <aside className="bg-white shadow-md rounded-lg p-6">
            <RelatedPosts />
          </aside>
        </div>
      </div>
    </main>
  );
};

// Component for Social Buttons
const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:ring focus:ring-blue-300"
      aria-label={`Share on ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon}`}></i>
    </a>
  );
};

// Component for Related Posts
const RelatedPosts = () => {
  const posts: RelatedPost[] = [
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/hang-nguy-hiem.jpg",
    },
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
  ];

  return (
    <div>
      <h5 className="text-lg font-bold mb-4">Bài viết liên quan</h5>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={post.url}
            className="flex items-center space-x-4 bg-gray-100 rounded-lg p-3 shadow-md hover:bg-gray-200 transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={60}
              className="rounded-lg object-cover"
            />
            <span className="font-medium text-gray-800">{post.title}</span>
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
