import CountryItem from "./country-item";

import classes from "./country-list.module.css";

function CountryList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((country) => (
        <CountryItem
          key={country.id}
          id={country.id}
          countryName={country.itemName}
          category={country.category}
          className={classes.list}
        />
      ))}
    </ul>
  );
}

export default CountryList;
