"use client";

import { useRefreshQuery } from "@/lib/features/auth/authApiSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";

export default function LogingSessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useSelector((state: RootState) => state.auth.accessToken);
  const [isMounted, setIsMounted] = useState(false);
  // we do the call if we dont have token
  const { isLoading } = useRefreshQuery(undefined, {
    skip: !!token, // skip if we have token
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  if (isLoading) {
    return <p>Cargando sesión...</p>;
  }

  return <>{children}</>;
}
