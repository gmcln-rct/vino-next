import Link from "next/link";

import classes from "./data-source.module.css";
function DataSource() {
  return (
    <div>
      <p className={classes.dataSource}>
        Data Source:{" "}
        <Link
          href="https://economics.adelaide.edu.au/wine-economics/databases/"
          className={classes.dataSource}
        >
          Wine Economics Research Centre, University of Adelaide
        </Link>
      </p>
    </div>
  );
}

export default DataSource;
