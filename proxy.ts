import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createIntlMiddleware(routing);

const noLocaleRoutes = [
  "/admin",
  "/songs",
  "/tasks",
  "/hs-card-search",
  "/job-search",
  "/login",
  "/unauthorized",
];
const protectedRoutes = ["/login/profile"];
const adminRoutes = ["/login/admin"];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Auth
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route));

  if (isProtected || isAdminRoute) {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (isAdminRoute) {
      try {
        const payloadBase64 = refreshToken.split(".")[1];
        const decodedPayload = JSON.parse(atob(payloadBase64));
        const userRoles: string[] = decodedPayload.roles || [];

        if (!userRoles.includes("admin")) {
          return NextResponse.redirect(new URL("/unauthorized", request.url));
        }
      } catch {
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }

  //if route doesnt require locale, we let it pass
  const isNoLocaleRoute = noLocaleRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (isNoLocaleRoute) {
    return NextResponse.next();
  }

  //if the route HAS locale, we use intlMiddleware
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
