import { RouteConfig } from "./types";

export const protectedRoutes: RouteConfig[] = [
  { path: "/login/profile" },
  {
    path: "/login/admin",
    roles: ["admin"],
  },
];

export function getRouteConfig(pathname: string): RouteConfig | undefined {
  return protectedRoutes.find((route) => pathname.startsWith(route.path));
}
