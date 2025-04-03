// src/app/van-tai-hang-khong/RelatedPosts.tsx
import React from "react";

const RelatedPosts = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Bài viết liên quan
      </h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div
            className="w-16 h-16 bg-cover bg-center rounded-md"
            style={{
              backgroundImage:
                "url(/public/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg)",
            }}
          ></div>
          <div>
            <a
              href="/hang-nguy-hiem.html"
              className="text-lg text-blue-600 hover:text-blue-800 font-medium"
            >
              HÀNG NGUY HIỂM
            </a>
            <p className="text-sm text-gray-500">
              Thời gian giao hàng nhanh chóng và an toàn.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="w-16 h-16 bg-cover bg-center rounded-md"
            style={{
              backgroundImage:
                "url(/public/filemanager/userfiles/Tommy/16.png)",
            }}
          ></div>
          <div>
            <a
              href="/dich-vu-van-tai-hang-khong.html"
              className="text-lg text-blue-600 hover:text-blue-800 font-medium"
            >
              TỔNG QUAN DỊCH VỤ VẬN TẢI HÀNG KHÔNG
            </a>
            <p className="text-sm text-gray-500">
              Khám phá các dịch vụ vận tải hàng không toàn diện.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="w-16 h-16 bg-cover bg-center rounded-md"
            style={{
              backgroundImage:
                "url(/public/filemanager/userfiles/Tommy/HLXT5.jpg)",
            }}
          ></div>
          <div>
            <a
              href="/hanh-ly-sach-tay.html"
              className="text-lg text-blue-600 hover:text-blue-800 font-medium"
            >
              HÀNH LÝ SÁCH TAY
            </a>
            <p className="text-sm text-gray-500">
              Dịch vụ vận chuyển hành lý xách tay an toàn và nhanh chóng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
