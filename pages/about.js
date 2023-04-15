import Link from "next/link";

function AboutPage() {
  return (
    <div className="aboutPage">
      <h1>About Winography</h1>
      <p>
        Our mission is to serve both wine professionals and enthusiasts alike,
        with the aim of making wine accessible to everyone and to help people
        discover new and exciting wines that they will love.
      </p>
      <p>
        The primary data source for the site is from Wine Economics Research
        Centre at the University of Adelaide, the Southern Hemisphere's premier wine research and teaching university. The data spans many elements of the wine industry, including production, consumption, and trade. 
      </p>
      <p> The data is available in both pdf and Excel formats on the Centre's website:</p>
      <Link href="https://economics.adelaide.edu.au/wine-economics/" className="yellow">
        Wine Economics Research Centre
      </Link>
      <p></p>
    </div>
  );
}

export default AboutPage;
