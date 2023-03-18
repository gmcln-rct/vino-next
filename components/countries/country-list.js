import CountryItem from "./country-item";

import classes from "./country-list.module.css";

function CountryList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((country) => (
        <CountryItem
          key={country.id}
          id={country.id}
          countryName={country.itemName}
          category={country.category}
        />
      ))}
    </ul>
  );
}

export default CountryList;
