import "../globals.css";
import { useEffect, useState } from "react";
import { setUpMocks } from "../utils/setUpMocks"
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  {
    const [isMswReady, setIsMswReady] = useState<boolean>(false);

    useEffect(() => {
      const initializeMocking = async () => {
        if (process.env.NODE_ENV === "development") {
          await setUpMocks();
        }
        setIsMswReady(true);
      }
      initializeMocking();
    }, []);

    if (!isMswReady) {
      return <div>Loading...</div>;
    }

    return <Component {...pageProps} />;
  }
}