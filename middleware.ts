import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // const isAuthenticated = request.cookies.has("auth-token"); // Пример проверки
  const isAuthenticated = true;
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/user') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/user/:path*',
};
