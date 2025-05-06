import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName, headerName } from "@/app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.indexOf('icon') > -1 || request.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next();
    let lng;
    if (request.cookies.has(cookieName)) lng = acceptLanguage.get(request.cookies.get(cookieName)?.value);
    if (!lng) lng = acceptLanguage.get(request.headers.get('Accept-Language'));
    if (!lng) lng = fallbackLng;
    const langInPath = languages.find((loc: string) => request.nextUrl.pathname.startsWith(`/${loc}`))
    const headers = new Headers(request.headers)
    headers.set(headerName, langInPath || lng)
    console.log('langInPath', langInPath)

    // Lógica de redirección:
    // Si el idioma detectado NO está en el path (`!lngInPath`)
    // Y la ruta NO es una ruta interna de Next.js (`!req.nextUrl.pathname.startsWith('/_next')`)
    if (
        !langInPath &&
        !request.nextUrl.pathname.startsWith('/_next')
        // && req.nextUrl.pathname !== '/' // Opcional: evita redirección de '/' a '/en' si el matcher es solo '/'
    ) {
        const newUrl = new URL(`/${lng}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url);
        return NextResponse.redirect(newUrl);
    }

    //todo logica de referer?

    return NextResponse.next({ headers })
}