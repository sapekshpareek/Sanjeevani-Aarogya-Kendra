import "../styles/globals.css";
import MainLayout from "../components/layout/MainLayout";
import SEO from "../components/SEO";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      {/* SEO component for default head tags */}
      <SEO />
      {/* MainLayout provides Navbar, Footer, and Theme */}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default appWithTranslation(App);
