"use client";
import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getRouteConfig } from "@/lib/routes";
import { decodeJwt } from "@/lib/utils";

type AuthStatus = { status: "authorized" } | { status: "redirect"; to: string };

export default function LoginSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const pathname = usePathname();
  const router = useRouter();

  const role = useMemo(() => {
    if (!token) return null;
    return decodeJwt(token)?.roles ?? null;
  }, [token]);

  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token,
  });

  // Estado derivado: se calcula, no se guarda
  const auth = useMemo<AuthStatus>(() => {
    const routeConfig = getRouteConfig(pathname);

    // Public Route
    if (!routeConfig) return { status: "authorized" };

    if (!token) {
      return { status: "redirect", to: routeConfig.redirectTo ?? "/login" };
    }

    if (routeConfig.roles && (!role || !routeConfig.roles.includes(role))) {
      return { status: "redirect", to: "/unauthorized" };
    }

    return { status: "authorized" };
  }, [pathname, token, role]);

  // El efecto solo sincroniza con el sistema externo (el router)
  useEffect(() => {
    if (isLoading) return;
    if (auth.status === "redirect") {
      router.replace(auth.to);
    }
  }, [isLoading, auth, router]);

  if (isLoading) {
    return <p>Cargando sesión...</p>;
  }

  if (auth.status !== "authorized") {
    return null;
  }

  return <>{children}</>;
}
