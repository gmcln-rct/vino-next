import Link from "next/link";

import Head from "next/head";

// MAIN HOMEPAGE

function HomePage() {
  return (
    <>
      <Head>
        <title>Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Winography - Data visualization about wine production and consumption, both historic and present-day"
        />
      </Head>
      <h1>Homepage</h1>
      <Link href="/countries" className="link">
        All Countries
      </Link>
      <Link href="/grapes" className="link">
        All Grapes
      </Link>
    </>
  );
}

export default HomePage;
