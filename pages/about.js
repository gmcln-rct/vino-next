import Link from "next/link";

function AboutPage() {
  return (
    <section className="aboutPage">
      <h1>About Winography</h1>
      <p>
        Our mission is to serve wine professionals and enthusiasts alike, with the aim of making wine accessible and fun for everyone through a deeper understanding of it.
      </p>
      <p>The site was built using <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://d3js.org/">D3</Link>. It was created by New York-based Front End Developer <Link href="https://www.glennmcclanan.com/">Glenn McClanan</Link>.</p>
      <p>
        The primary data source for the site is from Wine Economics Research Centre at the University of Adelaide, the Southern Hemisphere&apos;s premier wine research and teaching university. The data spans many elements of the wine industry, including production, consumption, and trade. 
      </p>
      <p> The dataset is available in both pdf and Excel formats on the Centre&apos;s website: <br/> <Link href="https://economics.adelaide.edu.au/wine-economics/" className="yellow">
        Wine Economics Research Centre
      </Link>
      </p>
      <p></p>
    </section>
  );
}

export default AboutPage;
