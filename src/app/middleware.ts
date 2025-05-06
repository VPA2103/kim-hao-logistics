import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

type Locale = 'vi' | 'en' | 'zh'
const locales: readonly Locale[] = ['vi', 'en', 'zh'] as const
const defaultLocale: Locale = 'vi'

function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const searchParams = request.nextUrl.searchParams.toString()

  // Bỏ qua các route không cần xử lý i18n
  if (shouldSkipProcessing(pathname)) {
    return NextResponse.next()
  }

  // Kiểm tra nếu URL đã có locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Nếu đã có locale trong URL, chỉ cần cập nhật cookie nếu cần
  if (pathnameHasLocale) {
    const pathLocale = pathname.split('/')[1] as Locale
    const response = NextResponse.next()
    updateLanguageCookie(response, pathLocale, request.cookies.get('NEXT_LOCALE')?.value)
    return response
  }

  // Xác định locale ưu tiên
  const preferredLocale = getPreferredLocale(request)

  // Redirect về URL có locale
  const newUrl = new URL(`/${preferredLocale}${pathname}${searchParams ? `?${searchParams}` : ''}`, request.url)
  const response = NextResponse.redirect(newUrl)
  setLanguageCookie(response, preferredLocale)
  return response
}

// Helper functions
function shouldSkipProcessing(pathname: string): boolean {
  const skipPrefixes = [
    '/_next/',
    '/api/',
    '/static/',
    '/favicon.ico',
    '/images/',
    '/fonts/'
  ]
  return skipPrefixes.some(prefix => pathname.startsWith(prefix)) || 
         pathname.includes('.')
}

function getPreferredLocale(request: NextRequest): Locale {
  // Thứ tự ưu tiên: cookie > accept-language header > mặc định
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && isValidLocale(cookieLocale)) return cookieLocale

  const headers = { 'accept-language': request.headers.get('accept-language') || '' }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale) as Locale
}

function setLanguageCookie(response: NextResponse, locale: Locale): void {
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  })
}

function updateLanguageCookie(response: NextResponse, newLocale: Locale, currentLocale?: string): void {
  if (!currentLocale || currentLocale !== newLocale) {
    setLanguageCookie(response, newLocale)
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|icons|fonts|api/auth).*)'
  ]
}