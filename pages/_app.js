import Head from "next/head";

import Layout from "../components/layout/layout";
// import HomePage from './index';
import MainHeader from "../components/layout/main-header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout >
        <Head>
          <title>Winography - Wine Data Visualization</title>
          <meta name='description' content='Winography - Data visualization about wine production and consumption, both historic and present-day' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='robots' content='index, follow'></meta>
          <meta charset="UTF-8" />
          <meta name="keywords" content="titla, meta, nextjs" />
          <meta name="author" content="Syamlal CM" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
