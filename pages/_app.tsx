import { AppProps } from 'next/app';
import Head from "next/head";
import Script from "next/script";

import Layout from "../components/layout/layout";
import { MainContextProvider } from "@/store/main-context";
import "../styles/global.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
              name="description"
              content="Wine data visualizations about grapes, countries and history. Wine quizzes to test your wine knowledge."
            />
            <meta
              name="keywords"
              content="wine, winemaking, viticulture, grape varieties, data visualization, wine grapes, wine facts, wine statistics, wine knowledge, historic wine data, production, consumption, oenology, learning, charts, graphs, bubble charts, d3"
            />
            <meta name="author" content="Glenn McClanan, Rio Create LLC" />
            <link rel="canonical" href="https://winography.net/" />
            <meta
              property="og:title"
              content="Winography | Learn About Wine Through Data Visualizations"
            />
            <meta
              property="og:description"
              content="Wine data visualizations about grapes, countries and history. Wine quizzes to test your wine knowledge."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://winography.net/images/site-images/homepage-masthead.jpg"
            />
            <meta property="og:url" content="https://winography.net" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Winography | Learn About Wine Through Data Visualizations" />
            <meta name="twitter:description" content="Wine data visualizations about grapes, countries and history. Wine quizzes to test your wine knowledge." />
            <meta name="twitter:image" content="https://winography.net/images/site-images/homepage-masthead.jpg" />
          </Head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-X1PYJEHQHJ"
            id="google-analytics"
            strategy="afterInteractive"
          />
          <Script id="google-analytics-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X1PYJEHQHJ');
            `}
          </Script>
          <Component {...pageProps} />
        </Layout>
      </MainContextProvider>
    </>
  );
}

export default MyApp;
