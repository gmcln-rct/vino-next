import Link from "next/link";
import Image from "next/image";

import classes from "./data-item.module.css";

import Button from "../ui/button";

function DataItem(props) {
  const { id, itemName, dataType, category, bgImage } = props;

  const grapePrefix = "/grapes/" + id + "/";
  const countryPrefix = "/countries/";

  let grapeColor;

  if (category === "R") {
    grapeColor = `classes.redGrapeColor`;
  } else {
    grapeColor = "whiteGrapeColor";
  }

  return (
    <li
      className={`${classes.item} ${
        category === "R" ? classes.redGrapeColor : classes.whiteGrapeColor
      }`}
    >
      {/* <Image
        src={bgImage}
        alt={itemName}
        className={classes.image}
        width={100}
        height={75}
      /> */}
      <div className={classes.actions}>
        <Link href={grapePrefix} as={`/grapes/${id}`}>
          {" "}
          {itemName}{" "}
        </Link>
      </div>
    </li>
  );
}

export default DataItem;
