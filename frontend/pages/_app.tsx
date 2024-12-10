import "../globals.css";
import { useEffect } from "react";
import { setUpMocks } from "../src/mocks/browser"; // Asegúrate de la ruta correcta
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setUpMocks();
  }, []);

  return <Component {...pageProps} />;
}