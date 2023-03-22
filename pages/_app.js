import Head from "next/head";

import Layout from "../components/layout/layout";
// import HomePage from './index';
import MainHeader from "../components/layout/main-header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />`{" "}
      <Head>
        <title>Winography - Wine Data Visualization</title>
        <meta name="description" content="Winography - Data visualization about wine production and consumption, both historic and present-day" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      `
      <main>
        <Component {...pageProps} />
      </main>
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
