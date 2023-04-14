import Link from "next/link";
import { useState, useRef } from "react";

import classes from "./main-header.module.css";

function MainHeader() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  // const [isOpen, setIsOpen] = useState(false);
  // const drawerRef = useRef();

  // const handleButtonClick = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleTransitionEnd = () => {
  //   if (!isOpen) {
  //     drawerRef.current.style.display = 'none';
  //   }
  // };

  // const drawerStyle = isOpen
  //   ? { display: 'flex', opacity: 1, transform: 'translateY(0)' }
  //   : { display: 'none', opacity: 0, transform: 'translateY(-10px)' };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Winography <span className={classes.sitebeta}>Beta</span></Link>
      </div>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          {/* <li>
            <button onClick={toggleDrawer} className="button">Data Visualizations</button>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li> */}

      {/* {showDrawer && (
        <div className="drawer">
            <Link href="/countries">Countries</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/historic">Historic Data</Link>
        </div>
      )} */}
      {/* <div
        className={classes.drawer}
        ref={drawerRef}
        onTransitionEnd={handleTransitionEnd}
        style={drawerStyle}
      >
        {isOpen && (
          <div className={classes.drawer}>
            <Link href="/countries">Countries</Link>
            <Link href="/countries">Countries</Link>
            <Link href="/historic">Historic Data</Link>
          </div>
        )}
      </div> */}
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
