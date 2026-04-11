"use client";

import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getRouteConfig } from "@/lib/routes";
import { decodeJwt } from "@/lib/utils";

export default function LoginSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const role = useMemo(() => {
    if (!token) return null;
    return decodeJwt(token)?.roles ?? null;
  }, [token]);

  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token,
  });

  // Guard: Auth + Roles
  useEffect(() => {
    if (isLoading) return;
    const routeConfig = getRouteConfig(pathname);

    // Public Route
    if (!routeConfig) {
      setIsAuthorized(true);
      return;
    }

    if (!token) {
      setIsAuthorized(false);
      router.replace(routeConfig.redirectTo ?? "/login");
      return;
    }

    if (routeConfig.roles && (!role || !routeConfig.roles.includes(role))) {
      setIsAuthorized(false);
      router.replace("/unauthorized");
      return;
    }

    setIsAuthorized(true);
  }, [isLoading, pathname, token, role, router]);

  // Not yout mounted and loading session
  if (isLoading) {
    return <p>Cargando sesión...</p>;
  }

  // Guard evaluated but has no access
  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
