import Link from "next/link";
import Image from "next/image";

import classes from "./country-item.module.css";

import { getDataItemById } from "@/data/utils";

import { COUNTRIES_DATA } from "@/data/country-data";
import Button from "../ui/button";

function CountryItem(props) {
  const { id, countryName, category } = props;

  const country = getDataItemById(id, COUNTRIES_DATA);

  if (!country || !country.id) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }
  // const flagImage = `/images/flags/flag-${country.id}.svg`;
    const flagImage = `/images/flags/flag-${country.id}.png`;

  // const flagImage = `/image/flags/france.png`;
  const flagImageAlt = `Flag of ${country.itemName}`;

  return (
    <li className={classes.item}>
      <Link href="/countries/[countryId]" as={`/countries/${id}`}>
        {countryName}
        <Image
          src={flagImage}
          alt={flagImageAlt}
          className="flagImage"
          width={100}
          height={100}
        />
      </Link>
    </li>
  );
}

export default CountryItem;
