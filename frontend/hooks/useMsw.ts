"use client";
import { setUpMocks } from "@/app/mocks/setupMocks";
import { useEffect, useState } from "react";

export const useMsw = () => {
  const [isMswReady, setIsMswReady] = useState<boolean>(false);
  //TESTS
  useEffect(() => {
    const initializeMocking = async () => {
      if (process.env.NEXT_PUBLIC_ENABLE_MSW === "true") {
        console.log("MSW: Initializing mocks...");
        try {
          await setUpMocks();
          setIsMswReady(true);
        } catch (error) {
          console.error("MSW: Error Importing Worker:", error);
        }
      } else {
        console.log("MSW: Mocks are disabled by NEXT_PUBLIC_ENABLE_MSW.");
        setIsMswReady(true);
      }
    };
    initializeMocking();
  }, []);

  return isMswReady;
};
