// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'vi']; // Các ngôn ngữ hỗ trợ

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Chuyển hướng về ngôn ngữ mặc định (ví dụ: 'en')
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// Cấu hình matcher (tuỳ chọn)
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'], // Bỏ qua các route API
};