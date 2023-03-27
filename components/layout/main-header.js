import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Winography  <span className={classes.sitebeta}> Site Beta</span></Link>
      </div>
      {/* <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default MainHeader;
