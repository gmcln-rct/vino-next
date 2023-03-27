import Link from 'next/link';

import classes from './main-footer.module.css';

const currentYear = new Date().getFullYear();

const dataSource = "https://economics.adelaide.edu.au/wine-economics/databases/";

function MainFooter() {
  return (
    <footer className={classes.footer}>
      @{currentYear} Rio Create LLC. All Rights Reserved.
        {/* <Link href={dataSource}>Data Source</Link> */}
    </footer>
  );
}

export default MainFooter;