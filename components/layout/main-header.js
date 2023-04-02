import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Winography  <span className={classes.sitebeta}>Beta</span></Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link href='/countries'>Countries</Link>
          </li>
          <li>
            <Link href='/grapes'>Grapes</Link>
          </li>
          <li>
            <Link href='/historic'>Historic Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
