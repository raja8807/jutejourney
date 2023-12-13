import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/layout/layout";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // easing: "ease-out-cubic",
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  // console.log(process.env.NEXT_PUBLIC_MONGO_URI);

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
