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
        //on development and prd we can access to the browser mocks if we want by enabling NEXT_PUBLIC_ENABLE_MSW
        if (process.env.NODE_ENV !== "test") {
          const { initMocks } = await import("@/mocks/setupMocks");
          await initMocks();
          setMockReady(true);
        } else {
          setMockReady(true);
        }
      } else {
        setMockReady(true);
      }
    }

    enableMocks();
  }, []);

  if (!isMockReady) {
    return <div>Loading mocks...</div>;
  }

  return <>{children}</>;
}
