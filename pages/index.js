import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Masthead from "@/components/layout/masthead";

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
      <Masthead
        backgroundImage="/images/masthead-homepage.jpg"
        headerText="Winography"
      />
      <section className="homePage">
        {/* <p className="headline">
          Winography presents the world of wine through data, with grape varietals and countries from around the world. It is
          a resource intended for wine professionals and wine enthusiasts alike. Enjoy!
        </p> */}

        <h2 className="homePageHeader">Browse data visualizations:</h2>
        <section className="homePage__links">
          <Link href="/countries" className="action__container center">
            <Image
              src="/images/icons/icon-country-sm.png"
              className="transparent margin-bottom"
              alt="countries icon"
              width={100}
              height={100}
            />
            <p className="link">By Country</p>
          </Link>
          <Link href="/grapes" className="action__container center">
            <Image
              src="/images/icons/icon-grape-sm.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">By Grape</p>
          </Link>
          <Link href="/historic" className="action__container center">
            <Image
              src="/images/icons/icon-historic-data-sm.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Historic Data</p>
          </Link>
        </section>
      </section>
    </>
  );
}

export default HomePage;
