"use client";

import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const protectedRoutes = ["/login/profile"];

export default function LogingSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

    const isProtected = protectedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    // if there is no token
    if (isProtected && !token) {
      router.replace("/login");
    }
  }, [isMounted, isLoading, pathname, token, router]);

  if (!isMounted) {
    return <>{children}</>;
  }

  if (!token && isLoading) {
    return <p>Cargando sesión...</p>;
  }

  return <>{children}</>;
}
