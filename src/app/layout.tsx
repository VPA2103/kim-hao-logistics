// layout.tsx (no "use client" directive)
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../../i18n/i18n";
import { LanguageProvider } from "@components/contexts/LanguageContext";
import Header from "@components/Header/header";
import Footer from "@components/Footer/footer";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIM HẢO TRANSPORT",
  description:
    "Scanwell Logistics Việt Nam - Cung cấp dịch vụ vận tải quốc tế, logistics và kho bãi chuyên nghiệp.",
};

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
          <ClientLayout>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
