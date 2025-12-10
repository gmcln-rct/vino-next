import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masthead from "@/components/layout/masthead";
import Button from "@/components/ui/button";

import classes from "./index.module.css";

export default function ResourcesIndex({ topGrapes }) {
  return (
    <>
      <Head>
        <title>Wine Learning Resources | Winography</title>
        <meta
          name="description"
          content="Wine education resources including comprehensive wine terminology glossary and historical timeline. Learn essential wine vocabulary, viticulture terms, and wine history from ancient times to today."
        />
        <link rel="canonical" href="https://winography.net/learning/" />
        <meta property="og:title" content="Wine Learning Resources | Winography" />
        <meta property="og:description" content="Comprehensive wine education resources: glossary, timeline, and learning materials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winography.net/learning/" />
        <meta property="og:image" content="https://winography.net/images/site-images/index-masthead-learning.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Wine Learning Resources",
              "description": "Educational resources about wine including terminology, history, and data visualizations",
              "url": "https://winography.net/learning/",
              "hasPart": [
                {
                  "@type": "FAQPage",
                  "name": "Wine Terms Glossary",
                  "url": "https://winography.net/learning/terms/"
                },
                {
                  "@type": "WebPage",
                  "name": "Wine History Timeline",
                  "url": "https://winography.net/learning/wine-history-timeline/"
                }
              ]
            })
          }}
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-learning.jpg"
        header="Wine Learning"
        headerText="Explore wine resources and learn how to enjoy wine through wine pairings."
      />
      <section className="info">
        <h2 className="header">Educational Resources</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Enhance your wine knowledge with our educational resources. From essential terminology to historical context, deepen your understanding of wine culture and production.
        </p>
        <div className="actionsContainer">
        <div className="actions">
          <Link href="/learning/terms" className="action__link center">
            <Image
              src="/images/icons/icon-terms.png"
              className="transparent margin-bottom"
              alt="Wine terminology book icon representing wine glossary and definitions"
              width={100}
              height={100}
            />
            <p className="link">Wine Terms Glossary</p>
          </Link>
        </div>
        <div className="actions">
          <Link href="/learning/wine-history-timeline" className="action__link center">
            <Image
              src="/images/icons/icon-timeline.png"
              className="transparent margin-bottom"
              alt="Historical timeline icon showing wine history through the ages"
              width={100}
              height={100}
            />
            <p className="link">Wine History Timeline</p>
          </Link>
        </div>
        </div>
      </section>
      <section className="info alt" style={{ padding: '3rem 1rem' }}>
        <h2 className="header">Explore Wine Data</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', maxWidth: '700px', margin: '0 auto 1.5rem' }}>
          Ready to dive into wine production data? Explore our interactive charts and visualizations.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button link="/countries/">Explore Countries</Button>
          <Button link="/grapes/">Explore Grapes</Button>
          <Button link="/historic/">Historical Trends</Button>
        </div>
      </section>
    </>
  );
}
