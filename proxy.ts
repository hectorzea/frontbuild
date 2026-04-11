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

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // if route doesnt require locale, we let it pass
  const isNoLocaleRoute = noLocaleRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (isNoLocaleRoute) {
    return NextResponse.next();
  }

  // if the route HAS locale, we use intlMiddleware
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
