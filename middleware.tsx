import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export const middleware = auth((req) => {
    const isloggedIn = !!req.auth
    const path = req.nextUrl.pathname

    const protectedPaths = ['/dashboard', 'admin'];
    const isProtected = protectedPaths.some((p) => path.startsWith(p));

    // اگه لاگین نکرده بود و صفحه محافظت شده است، بفرست به صفحه لاگین
    if (!isloggedIn && isProtected) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    // اگه لاگین کرده و داره میره به صفحه لاگین / رجیستر، بفرست به داشبورد
    if (isloggedIn && (path === '/login' || path === '/register')) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next();
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

