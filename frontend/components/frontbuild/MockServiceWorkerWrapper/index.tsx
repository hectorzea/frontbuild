"use client";
import * as React from "react";
import { useEffect } from "react";

export interface IMockServiceWorkerWrapperProps {
  children: React.ReactNode;
}

export default function MockServiceWorkerWrapper({
  children,
}: IMockServiceWorkerWrapperProps) {
  const [isMockReady, setMockReady] = React.useState(false);

  useEffect(() => {
    async function enableMocks() {
      if (process.env.NEXT_PUBLIC_ENABLE_MSW === "true") {
        const { initMocks } = await import("@/app/mocks/setupMocks");
        await initMocks();
      }
      setMockReady(true);
    }

    enableMocks();
  }, []);

  if (!isMockReady) {
    return <div>Loading mocks...</div>;
  }

  return <>{children}</>;
}
