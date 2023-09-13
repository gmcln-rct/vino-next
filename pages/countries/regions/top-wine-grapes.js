import Head from "next/head";
import Link from "next/link";

import { GRAPE_TOP_100_ORIGINS } from "@/data/grape-top-100-origins";
import { GRAPES_DATA } from "../../../data/grape-data";
import classes from "./top-wine-grapes.module.css";

function RegionsTop100GrapesPage() {
  console.log(
    "grape data from top-wine-grapes.js: ",
    GRAPES_DATA.filter((grape) => grape.id === "cabernet-franc")
  );

  const grapeData = GRAPES_DATA;

  const grapeList = GRAPE_TOP_100_ORIGINS.map((grape) => {
    return {
      id: grape.id,
      itemName: grape.itemName,
      countryOriginName: grape.countryOriginName,
      description: grape.description,
      hasLink: grapeData.find((grapeItem) => grapeItem.id === grape.id),
      grapeType:
        grape.grapeType === "white"
          ? grape.grapeType[0].toUpperCase() + grape.grapeType.slice(1)
          : grape.grapeType[0].toUpperCase() +
            grape.grapeType.slice(1) +
            "    ",
    };
  });

  return (
    <>
      <Head>
        <title>
          Top 100 Wine Grapes - Production - Winography | Learn About Wine
          Through Data Visualizations
        </title>
        <meta
          name="description"
          content="Customizable bar chart of production in wine-producing regions, top national grape varietals, by land area."
        />
      </Head>
      <section className={classes.listSection}>
        <h1 className={classes.listHeader}>Top 100 Grapes List</h1>
        <h2 className={classes.listSubheader}>
          The most-produced wine grapes worldwide, by land area.
        </h2>
        <ul>
          {grapeList.map((grape, index) => (
            <li className={classes.listItem} key={grape.id}>
              <div className={classes.listNumber}>
                <span>#{index + 1}</span>
              </div>
              <div className={classes.listItemGrapeContainer}>
                {" "}
                <span
                  className={
                    grape.grapeType === "Red    "
                      ? `${classes.listItemGrape} ${classes.red}`
                      : `${classes.listItemGrape} ${classes.white}`
                  }
                >
                  {grape.grapeType}
                </span>{" "}
              </div>
              <div className={classes.listItemDetails}>
                {grape.hasLink ? (
                  <h3 className={classes.listItemName}>
                    <Link href={`/grapes/${grape.id}`}> {grape.itemName}</Link>
                  </h3>
                ) : (
                  <h3 className={classes.listItemName}> {grape.itemName}</h3>
                )}
                <h4>
                  Country of Origin:{" "}
                  <span className={classes.listRed}>
                    {grape.countryOriginName}
                  </span>
                </h4>
                <p>
                  Description:{" "}
                  <span className={classes.listRed}>{grape.description}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default RegionsTop100GrapesPage;
