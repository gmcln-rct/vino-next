import Head from "next/head";

import Layout from "../components/layout/layout";
// import HomePage from './index';
import MainHeader from "../components/layout/main-header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout >
        <Head>
          <title>Winography - Wine Data Visualization</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name='robots' content='noindex, nofollow'></meta>
          <meta name="keywords" content="wine, data visualization, wine produciton" />
          <meta name="author" content="Glenn McClanan, Rio Create LLC" />
        </Head>
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
