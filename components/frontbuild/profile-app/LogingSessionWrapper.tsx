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

  // we do the call if we dont have token
  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token, // skip if we have token
  });

  if (isLoading) {
    return <p>Cargando sesión...</p>;
  }

  return <>{children}</>;
}
