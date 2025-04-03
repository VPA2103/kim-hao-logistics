"use client";

import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../i18n"; // Kiểm tra i18n đã khởi tạo đúng chưa
import { LanguageProvider } from "@components/contexts/LanguageContext";
import Header from "@components/Header/header";
import Footer from "@components/Footer/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <LanguageProvider>
          {" "}
          {/* Bọc toàn bộ ứng dụng để ngôn ngữ có thể thay đổi */}
          <div className="flex flex-col min-h-screen">
            <Header /> {/* Đảm bảo Header sử dụng context */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
