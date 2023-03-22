import Link from 'next/link';

import classes from './main-header.module.css';

function MainFooter() {
  return (
    <footer className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Winography Next</Link>
      </div>

    </footer>
  );
}

export default MainFooter;