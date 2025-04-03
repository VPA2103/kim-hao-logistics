"use client";

import Link from "next/link";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
}

// Props for SocialButton
interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  title: string;
}

const DichVuHangDuAn = () => {
  return (
    <main className="pt-20 pb-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white shadow rounded-lg p-6">
              {/* Header */}
              <header className="text-center mb-10">
                <div className="mb-4">
                  <Link
                    href="/van-tai-duong-thuy"
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    VẬN TẢI ĐƯỜNG THỦY
                  </Link>
                </div>
                <h1 className="text-4xl font-bold text-gray-800">
                  DỊCH VỤ HÀNG DỰ ÁN
                </h1>
                <div className="mt-4 border-b-2 border-gray-300"></div>
              </header>

              {/* Content Sections */}
              <div className="space-y-8">
                {[
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/12.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/13.png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/3(1).png",
                  "https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/OCEAN%20FREIGHT.png",
                ].map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded overflow-hidden shadow-md"
                  >
                    <h2 className="text-xl font-semibold text-center text-blue-600 py-4">
                      {getSectionTitle(index + 1)}
                    </h2>
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <Image
                        src={imageUrl} // Dynamic image URL from the array
                        alt={getImageAlt(index + 1)}
                        fill
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="mt-10 border-t-2 border-gray-300 pt-6 text-center">
                <h5 className="text-lg font-bold mb-6">Chia sẻ bài viết</h5>
                <div className="flex justify-center gap-4">
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
          <aside className="bg-white shadow rounded-lg p-6">
            <RelatedPosts />
          </aside>
        </div>
      </div>
    </main>
  );
};

// SocialButton Component
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
      <i className={`bi bi-${platform.icon}`}></i> {/* Dynamic icon */}
    </a>
  );
};

// RelatedPosts Component
const RelatedPosts = () => {
  const posts = [
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
            className="flex items-center gap-4 bg-gray-100 rounded p-4 shadow-md hover:bg-gray-200 transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={60}
              className="rounded object-cover"
            />
            <span className="font-medium text-gray-800">{post.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Helper Functions
const getSectionTitle = (num: number): string => {
  const titles: Record<number, string> = {
    1: "CÁC HÃNG TÀU ĐỐI TÁC",
    2: "KHỐI LƯỢNG",
    3: "CHUYÊN TUYẾN",
    5: "VĂN PHÒNG",
  };
  return titles[num] || "VĂN PHÒNG";
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
