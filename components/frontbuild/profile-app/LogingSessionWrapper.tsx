"use client";

import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { decodeJwt } from "@/lib/utils";
import { getRouteConfig } from "@/lib/routes";

export default function LogingSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const role = useMemo(() => {
    if (!token) return null;
    return decodeJwt(token)?.roles ?? null;
  }, [token]);

  // we do the call if we dont have token
  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token, // skip if we have token
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //Guard Auth
  useEffect(() => {
    if (!isMounted || isLoading) return;

    const routeConfig = getRouteConfig(pathname);

    if (!routeConfig) return;

    if (!token) {
      router.replace(routeConfig.redirectTo ?? "/login");
      return;
    }

    if (routeConfig.roles && (!role || !routeConfig.roles.includes(role))) {
      router.replace("/unauthorized");
      return;
    }
  }, [isMounted, isLoading, pathname, token, role, router]);

  if (!isMounted) {
    return <>{children}</>;
  }

  if (!token && isLoading) {
    return <p>Cargando sesión...</p>;
  }

  return <>{children}</>;
}
