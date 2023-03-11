import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // <NotificationContextProvider>
      <Layout >
        <Head>
          <title>Winography - Next 202303</title>
          <meta name='description' content='NextJS Events' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    // </NotificationContextProvider>
  );
}

export default MyApp;
