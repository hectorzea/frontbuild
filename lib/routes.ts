import { UserRoles } from "./types";

interface RouteConfig {
  path: string;
  roles?: UserRoles[];
  redirectTo?: string;
}

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
