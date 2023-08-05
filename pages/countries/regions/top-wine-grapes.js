import { GRAPE_TOP_100_ORIGINS } from "@/data/grape-top-100-origins";

import classes from "./top-wine-grapes.module.css";

function RegionsTop100GrapesPage() {
  const grapeList = GRAPE_TOP_100_ORIGINS.map((grape) => {
    return {
      id: grape.id,
      itemName: grape.itemName,
      countryOriginName: grape.countryOriginName,
      description: grape.description,
      grapeType: grape.grapeType === "white" ? grape.grapeType[0].toUpperCase() + grape.grapeType.slice(1) :grape.grapeType[0].toUpperCase() + grape.grapeType.slice(1) + "  ",
    };
  });

  return (
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
            <div className={classes.listItemDetails}>
              <h3>Grape: <span className={classes.listRed}>{grape.itemName}</span></h3>
              <h4>Country of Origin: <span className={classes.listRed}>{grape.countryOriginName}</span></h4>

              <p>Description: <span className={classes.listRed}>{grape.description}</span></p>
            </div>
            <div className={classes.listItemGrape}>{grape.grapeType} </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RegionsTop100GrapesPage;
