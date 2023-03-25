import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
      <h2>Browse data visualizations by type:</h2>
      <section className="home">
        <Link href="/countries" className="home__main center">
          <Image
            src="/images/icons/country-icon-sm.png"
            className="transparent margin-bottom"
            alt="countries icon"
            width={100}
            height={100}
          />
          <p className="link">Data By Country</p>
        </Link>
        <Link href="/grapes" className="home__main center">
          <Image
            src="/images/icons/grape-icon-sm.png"
            className="transparent margin-bottom"
            alt="grapes icon"
            width={100}
            height={100}
          />
          <p className="link">Data By Grape</p>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
