import {GRAPE_TOP_100_ORIGINS} from "@/data/grape-top-100-origins";

import classes from "./top-wine-grapes.module.css";

function RegionsTop100GrapesPage() {

    const grapeList = GRAPE_TOP_100_ORIGINS.map((grape) => {
        return {
            id: grape.id,
            itemName: grape.itemName,
            countryOriginName: grape.countryOriginName,
            description: grape.description,
        }
    });


    return (
        <section className={classes.listSection}>
            <h1 className={classes.listTitle}>Top 100 Grapes</h1>
            <h2 className={classes.listSubTitle}>A list of the 100 most-produced grapes globally, by land area. </h2>
            <ul>
                {grapeList.map((grape, index) => (
                    <li className={classes.listItem} key={grape.id}>
                        <div className={classes.listNumber}>
                            <span>#{index +1}</span>
                        </div>
                        <div className={classes.listItemDetails}>
                        <h3>Grape: {grape.itemName}</h3>
                        <h4>Country of Origin: {grape.countryOriginName}
                            </h4>    

                        <p>Description: {grape.description}</p>

                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RegionsTop100GrapesPage;
