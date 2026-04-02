"use client";

import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function LogingSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);

  // Solo hacemos la petición si NO tenemos token en memoria
  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token, // "skip" le dice a RTK que ignore la query si ya hay token
  });

  if (isLoading) {
    return <p>Cargando sesión...</p>; // O un spinner
  }

  return <>{children}</>;
}
