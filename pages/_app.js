import Head from "next/head";
import Script from "next/script";

import Layout from "../components/layout/layout";
// import HomePage from './index';
import MainHeader from "../components/layout/main-header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Winography - Wine Data Visualizations</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow"></meta>
          <meta
            name="keywords"
            content="wine, data visualization, wine education, learning"
          />
          <meta name="author" content="Glenn McClanan, Rio Create LLC" />
          <meta
            property="og:title"
            content="Winography - Wine Data Visualizations"
          />
          <meta
            property="og:description"
            content="Wine data visualizations for wine education and learning"
          />
          <meta
            property="og:image"
            content="https://winography.net/images/site-images/homepage-masthead.jpg"
          />
          <meta property="og:url" content="https://winography.net" />

        </Head>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {/* Google tag (gtag.js) */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-X1PYJEHQHJ"
            ></script>
            <script>
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-X1PYJEHQHJ');
            </script>
          </Script>
        <Component {...pageProps} />
      </Layout>
    </>
    // <NotificationContextProvider>
    // <Layout >
    //   <Head>
    //     <title>Winography - Next 202303</title>
    //     <meta name='description' content='NextJS Events' />
    //     <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    //   </Head>
    //   <Component {...pageProps} />
    // </Layout>
    // </NotificationContextProvider>
  );
}

export default MyApp;
