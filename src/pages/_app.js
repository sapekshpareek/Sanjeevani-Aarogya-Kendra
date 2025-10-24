import { useEffect } from "react";
import { preloadCriticalImages } from "../utils/imagePreloader";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    preloadCriticalImages();
  }, []);

  return <Component {...pageProps} />;
}
