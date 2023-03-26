import DataItem from "./data-item";

import classes from "./data-list.module.css";

function CountryList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <itemItem
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          dataType={item.dataType}
          category={item.category}
        />
      ))}
    </ul>
  );
}

export default CountryList;
