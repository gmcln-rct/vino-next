import Link from "next/link";

function AboutPage() {
  return (
    <section className="aboutPage">
      <h1>About Winography</h1>
      <p>
        Our mission is to help wine professionals, enthusiasts and newbies alike, by making the world of wine accessible and fun through a deeper understanding and appreciation of wine in its many forms.
      </p>
      <p>The site was was created and designed by New York-based Front End Developer <Link href="https://www.glennmcclanan.com/">Glenn McClanan</Link> using <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://d3js.org/">D3</Link>.</p>
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
  );
}

export default AboutPage;
