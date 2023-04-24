import DataItem from "./data-item";

import classes from "./data-list.module.css";

function DataList(props) {
  const { items, headerText } = props;

  return (
    <section className={classes.listContainer}>
    <h2 className={classes.header}>{headerText}</h2>
    <ul className={classes.list}>
      {items.map((item) => (
        <DataItem
          key={item.id}
          id={item.id}
          itemName={item.itemName}
          dataType={item.dataType}
          category={item.category}
          bgImage={item.indexImageLink}
        />
      ))}
    </ul>
    </section>
  );
}

export default DataList;
