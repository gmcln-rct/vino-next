import Link from 'next/link';

import classes from './main-header.module.css';

const dataSource = "https://economics.adelaide.edu.au/wine-economics/databases/""

function MainFooter() {
  return (
    <footer className={classes.header}>
        <Link href={dataSource}>Data Source</Link>

    </footer>
  );
}

export default MainFooter;