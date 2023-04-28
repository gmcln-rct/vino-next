import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import classes from "./main-header.module.css";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleDrawerTimer = () => {
    setTimeout(() => {  
      setDrawerOpen(!drawerOpen);
    }, 5000);

  };
  if (drawerOpen) {
  toggleDrawerTimer();
  }

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.brand}>
          <Link href="/">
            {/* Winography <span className={classes.sitebeta}>Beta</span> */}
            Winography <span className={classes.sitebeta}>Beta</span>

          </Link>
        </div>
        <ul className={classes.list}>
          <li className={classes.listitem} onClick={toggleDrawer}>
            Data Visualizations
          </li>
          <li className={classes.listitem}>
            <Link href="/resources">Resources</Link>
          </li>
          <li className={classes.listitem}>
            <Link href="/quiz/">Quiz</Link>
          </li>
          <li className={classes.listitem}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <CSSTransition
        in={drawerOpen}
        timeout={500}
        className={classes.drawer}
        unmountOnExit
      >
        <div className="drawer" onClick={toggleDrawer}>
          <div className={classes.drawercontent}>
            <Link className={classes.drawerlink} href="/countries">
              Country
            </Link>
            <Link className={classes.drawerlink} href="/grapes">
              Grapes
            </Link>
            <Link className={classes.drawerlink} href="/historic">
              Historic Data
            </Link>
          <p onClick={toggleDrawer} className={classes.drawerClose}>
            {/* <Image 
              src="/images/icons/close.png"
              alt="close"
              width={20}
              height={20}
              className={classes.close}
            /> */}
            Close
          </p>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Navbar;
