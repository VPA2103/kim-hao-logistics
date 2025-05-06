import { useState, useEffect } from "react";

export default function KHLogoLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-gray-100">
      <div
        className={`transition-all duration-1000 transform ${
          loading ? "scale-100" : "scale-90 opacity-0"
        }`}
      >
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-8">
              {/* Glow effects under logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400 opacity-10 rounded-full blur-2xl animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-400 opacity-10 rounded-full blur-xl animate-pulse-delayed" />

              {/* Logo KH với hiệu ứng nâng cao */}
              <div className="relative z-10">
                <svg
                  width="150"
                  height="90"
                  viewBox="0 0 150 90"
                  className="filter drop-shadow-lg"
                >
                  {/* Chữ K (phần xanh) - với hiệu ứng gradient */}
                  <defs>
                    <linearGradient
                      id="blueGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M40,20 h14 v21 l28,-21 h18 l-28,25 28,25 h-18 l-28,-21 v21 h-14 z"
                    fill="url(#blueGradient)"
                    className="logo-animate"
                  />

                  {/* Chữ H (phần đỏ và đen) - với hiệu ứng gradient */}
                  <defs>
                    <linearGradient
                      id="redGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#dc2626" />
                      <stop offset="100%" stopColor="#b91c1c" />
                    </linearGradient>
                    <linearGradient
                      id="darkGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="92"
                    y="20"
                    width="14"
                    height="50"
                    rx="3"
                    fill="url(#darkGradient)"
                    className="logo-animate"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <rect
                    x="112"
                    y="20"
                    width="14"
                    height="50"
                    rx="3"
                    fill="url(#darkGradient)"
                    className="logo-animate"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <rect
                    x="92"
                    y="38"
                    width="34"
                    height="14"
                    rx="3"
                    fill="url(#redGradient)"
                    className="logo-animate"
                    style={{ animationDelay: "0.7s" }}
                  />
                </svg>
              </div>
            </div>

            {/* Loading progress */}
            <div className="w-48 relative">
              <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <div className="loading-bar h-full rounded-full" />
              </div>

              {/* Loading dots */}
              <div className="flex justify-center mt-4">
                <span
                  className="h-2 w-2 bg-blue-500 rounded-full mx-1 animate-loading-dot"
                  style={{ animationDelay: "0s" }}
                ></span>
                <span
                  className="h-2 w-2 bg-blue-500 rounded-full mx-1 animate-loading-dot"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="h-2 w-2 bg-red-500 rounded-full mx-1 animate-loading-dot"
                  style={{ animationDelay: "0.4s" }}
                ></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`transition-all duration-1000 transform ${
          !loading ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
      >
        {!loading && (
          <div className="text-center fade-in">
            <svg
              width="150"
              height="90"
              viewBox="0 0 150 90"
              className="filter drop-shadow"
            >
              {/* Chữ K (phần xanh) */}
              <defs>
                <linearGradient
                  id="blueGradientStatic"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>

              <path
                d="M40,20 h14 v21 l28,-21 h18 l-28,25 28,25 h-18 l-28,-21 v21 h-14 z"
                fill="url(#blueGradientStatic)"
              />

              {/* Chữ H (phần đỏ và đen) */}
              <defs>
                <linearGradient
                  id="redGradientStatic"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#b91c1c" />
                </linearGradient>
                <linearGradient
                  id="darkGradientStatic"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>

              <rect
                x="92"
                y="20"
                width="14"
                height="50"
                rx="3"
                fill="url(#darkGradientStatic)"
              />
              <rect
                x="112"
                y="20"
                width="14"
                height="50"
                rx="3"
                fill="url(#darkGradientStatic)"
              />
              <rect
                x="92"
                y="38"
                width="34"
                height="14"
                rx="3"
                fill="url(#redGradientStatic)"
              />
            </svg>
            <h1 className="mt-6 text-xl font-medium text-slate-800">
              Tải hoàn tất
            </h1>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeInLogo {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
            width: 100%;
          }
          50% {
            width: 50%;
          }
          100% {
            transform: translateX(100%);
            width: 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes loadingDot {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes pulseDelayed {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        .logo-animate {
          animation: fadeInLogo 0.8s ease-out forwards;
          opacity: 0;
        }

        .loading-bar {
          background: linear-gradient(90deg, #3b82f6, #ef4444, #3b82f6);
          background-size: 200% 100%;
          animation: loadingBar 2.5s infinite ease-in-out;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-loading-dot {
          animation: loadingDot 1.4s infinite ease-in-out;
        }

        .animate-pulse-delayed {
          animation: pulseDelayed 3s infinite ease-in-out;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
}
