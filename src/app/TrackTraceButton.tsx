import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import cosco from '../../public/filemanager/userfiles/z3901221202527_85eb4089bc0d3c43829b5bf93d1c2365.jpg.png'

const TrackTraceButton = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  // Xử lý click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsListVisible(false);
      }
    };

    if (isListVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isListVisible]);

  const shippingLines = [
    {
      name: "Yang Ming",
      logo: "https://scanwelllogistics.vn/public/filemanager/userfiles/ya.png",
    },
    {
      name: "MAERSK",
      logo: "https://amg-vietnam.com/wp-content/uploads/2022/06/MAERSK-1-2048x1024.jpg",
    },
    {
      name: "COSCO",
      logo: cosco,
    },
    {
      name: "Evergreen",
      logo: "https://scanwelllogistics.vn/public/filemanager/userfiles/evergreen.png",
    },
    {
      name: "ONE",
      logo: "https://scanwelllogistics.vn/public/filemanager/userfiles/one.png",
    },
  ];

  return (
    <div className="m-5 font-sans relative">
      {/* Nút Track & Trace */}
      <button
        onClick={toggleList}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-300"
      >
        Track & Trace
      </button>

      {/* Modal hiển thị danh sách */}
      {isListVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-y-auto"
          >
            <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">
              DANH SÁCH HÃNG TÀU
            </h2>

            <ul className="space-y-4">
              {shippingLines.map((line, index) => (
                <li
                  key={index}
                  className="pb-4 border-b border-gray-100 last:border-0 flex items-center"
                >
                  <div className="w-24 h-16 relative mr-4">
                    <Image
                      src={line.logo}
                      alt={line.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium">{line.name}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 text-right">
              <button
                onClick={() => setIsListVisible(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackTraceButton;
