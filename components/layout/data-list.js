import DataItem from "./data-item";

import classes from "./data-list.module.css";

function DataList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <DataItem
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          dataType={item.dataType}
          category={item.category}
          bgImage={item.imageLink}
        />
      ))}
    </ul>
  );
}

export default DataList;
