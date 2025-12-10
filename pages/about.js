import Head from "next/head";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Winography | Wine Data Visualization & Education</title>
        <meta
          name="description"
          content="Learn about Winography's mission to make wine education accessible through data visualization. Created by Glenn McClanan using Next.js and D3, featuring data from the University of Adelaide Wine Economics Research Centre."
        />
        <link rel="canonical" href="https://winography.net/about/" />
        <meta property="og:title" content="About Winography | Wine Data Visualization" />
        <meta
          property="og:description"
          content="Discover how Winography makes wine education accessible through interactive data visualizations and charts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://winography.net/about/" />
        <meta property="og:image" content="https://winography.net/images/site-images/homepage-masthead.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Winography | Wine Data Visualization" />
        <meta name="twitter:description" content="Discover how Winography makes wine education accessible through interactive data visualizations." />
        <meta name="twitter:image" content="https://winography.net/images/site-images/homepage-masthead.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Winography",
              "description": "Information about Winography, a wine data visualization and education platform",
              "url": "https://winography.net/about/",
              "mainEntity": {
                "@type": "Organization",
                "name": "Winography",
                "url": "https://winography.net",
                "logo": "https://winography.net/images/site-images/homepage-masthead.jpg",
                "description": "Wine data visualization and education platform making the world of wine accessible through interactive charts and visualizations",
                "founder": {
                  "@type": "Person",
                  "name": "Glenn McClanan",
                  "url": "https://www.glennmcclanan.com/",
                  "jobTitle": "Front End Developer and UI Designer"
                },
                "knowsAbout": ["Wine", "Data Visualization", "Viticulture", "Wine Production", "Wine Education"],
                "sameAs": [
                  "https://winography.net"
                ]
              },
              "citation": [
                {
                  "@type": "Organization",
                  "name": "Wine Economics Research Centre, University of Adelaide",
                  "url": "https://economics.adelaide.edu.au/wine-economics/"
                },
                {
                  "@type": "Organization",
                  "name": "Vitis International Variety Catalogue (VIVC)",
                  "url": "https://www.vivc.de/"
                }
              ]
            })
          }}
        />
      </Head>
      <section className="aboutPage">
        <h1>About Winography</h1>
        <p>
          Our mission is to help wine professionals, enthusiasts and newbies alike, by making the world of wine accessible and fun through a deeper understanding and appreciation of wine in its many forms.
        </p>
        <p>The site was was developed and designed by New York-based Front End Developer and UI Designer <Link href="https://www.glennmcclanan.com/">Glenn McClanan</Link> using <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://d3js.org/">D3</Link>.</p>
        <p>
          The primary data source for the site is from Wine Economics Research Centre at the University of Adelaide, a wine research and teaching university. The data spans many elements of the wine industry, from production, consumption, and trade. The data represented on this site is only a portion of what is available in their data set.
        </p>
        <p> The dataset is available in both pdf and Excel formats on the Centre&apos;s website: <br/> <Link href="https://economics.adelaide.edu.au/wine-economics/">
          Wine Economics Research Centre
        </Link>
        </p>
        <p>Their grape varietal data was, in part, drawn from <Link href="https://www.vivc.de/">Vitis International Variety Catalogue (VIVC)</Link>.</p>
        <p></p>
      </section>
    </>
  );
}

export default AboutPage;
