import Head from "next/head";
import Script from "next/script";

import Layout from "../components/layout/layout";
import {MainContextProvider} from "@/store/main-context";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <MainContextProvider>
      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="lang"
            content="en"
          />
          <meta name="robots" content="index, follow"></meta>
          <meta
            name="keywords"hs
            content="wine, data, datasets, data visualization, education, learning, visualizations, charts, graphs, bubble charts, d3"
          />
          <meta name="author" content="Glenn McClanan, Rio Create LLC" />
          <meta
            property="og:title"
            content="Winography | Learn About Wine Through Data Visualizations"
          />
          <meta
            property="og:description"
            content="Wine data visualizations for wine education and learning"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://winography.net/images/site-images/homepage-masthead.jpg"
          />
          <meta property="og:url" content="https://winography.net" />
        </Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X1PYJEHQHJ"
          id="google-analytics"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-2" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-X1PYJEHQHJ');
          `}
        </Script>
        <Component {...pageProps} />
      </Layout>
      </MainContextProvider>
    </>

  );
}

export default MyApp;
