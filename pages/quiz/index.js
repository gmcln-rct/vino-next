import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Masthead from "@/components/layout/masthead";
import Button from "@/components/ui/button";

// import classes from "./index.module.css";

export default function ResourcesIndex({ topGrapes }) {
  return (
    <>
      <Head>
        <title>Wine Quiz Index - Winography - Wine Data Visualization</title>
        <meta
          name="description"
          content="Data visualization of grape wine production for all wine-producing countries"
        />
      </Head>
      <Masthead
        backgroundImage="/images/site-images/index-masthead-quiz.jpg"
        header="Wine IQ Quiz"
        headerText="Test Your Vine Virtuosity and Raise Your Wine Wisdom"
      />

      <section className="info">
        <h2 className="header"> Winography Wine Quiz</h2>
        <h3 className="subheader">Think you're a wine whiz? Prove your grape greatness here.</h3>
        <div className="actionsContainer">
        <div className="actions">
          <Link href="/quiz/quiz" className="action__container center">
            <Image
              src="/images/icons/icon-quiz.png"
              className="transparent margin-bottom"
              alt="grapes icon"
              width={100}
              height={100}
            />
            <p className="link">Start Quiz</p>
          </Link>
        </div>
    
        </div>
      </section>
    </>
  );
}
