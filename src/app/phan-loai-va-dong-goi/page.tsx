import Link from "next/link";
import Image from "next/image";

const RelatedArticles = () => {
  const articles = [
    {
      title: "PHÂN LOẠI VÀ ĐÓNG GÓI",
      href: "/phan-loai-va-dong-goi.html",
      img: "/public/filemanager/userfiles/63cfd5064555165b4efc44bb_pick-pack-ship-workflow1.jpg",
    },
    {
      title: "TỔNG QUAN DỊCH VỤ KHO BÃI",
      href: "/kho-ngoai-quan-kho-thuong.html",
      img: "/public/filemanager/userfiles/Tommy/pastedimage0.png",
    },
    {
      title: "KHÁCH HÀNG SCANWELL",
      href: "/khach-hang-scanwell.html",
      img: "/public/filemanager/userfiles/Tommy/photo-1586528116311-ad8dd3c8310d.jpg",
    },
  ];

  return (
    <aside className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Bài viết liên quan
      </h2>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li key={index} className="flex items-center space-x-4">
            <div className="w-16 h-16 overflow-hidden rounded-lg shadow-md">
              <Image
                src={article.img}
                alt={article.title}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <Link
              href={article.href}
              className="text-blue-600 hover:underline font-medium"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const ArticleContent = () => {
  return (
    <main className="pt-20 pb-10 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <article className="bg-white shadow rounded-lg p-6">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-800">
              PHÂN LOẠI VÀ ĐÓNG GÓI
            </h1>
            <div className="mt-4 border-b-2 border-gray-300"></div>
          </header>

          <div className="space-y-8 text-center">
            <h2 className="text-xl font-semibold text-blue-600">
              ỨNG DỤNG HỆ THỐNG QUẢN LÝ KHO
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/63cfd5064555165b4efc44bb_pick-pack-ship-workflow.jpg"
              alt="Ứng dụng hệ thống quản lý kho"
              width={850}
              height={446}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              SƠ ĐỒ DỊCH VỤ DC BYPASS
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/PICK%20AND%20PACK%20(1000%20%C3%97%202000%20px).png"
              alt="Sơ đồ DC Bypass"
              width={850}
              height={1700}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-blue-600">
              HỆ THỐNG KHO MIỀN NAM
            </h2>
            <Image
              src="https://scanwelllogistics.vn/public/filemanager/userfiles/Tommy/4.png"
              alt="Hệ thống kho miền Nam"
              width={850}
              height={567}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </article>
        <div className="mt-8">
          <RelatedArticles />
        </div>
      </div>
    </main>
  );
};

export default ArticleContent;
