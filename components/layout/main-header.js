import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
// import { CSSTransition } from "react-transition-group";
import classes from "./main-header.module.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.navContainer}>
          <div className={classes.brand}>
            <Link href="/">
              Winography <span className={classes.sitebeta}>Beta</span>
            </Link>
          </div>
          <div>
            <nav className={classes.listContainer}>
              <ul className={classes.list}>
                <li className={classes.listitem} onClick={toggleDrawer}>
                  Data Visualizations
                </li>
                <li className={classes.listitem}>
                  <Link href="/learning">Learning</Link>
                </li>
                <li className={classes.listitem}>
                  <Link href="/quiz/">Quiz</Link>
                </li>
                <li className={classes.listitem}>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </nav>
            <IconButton
              edge="end"
              aria-label="menu"
              display={{ xs: "block", sm: "none" }}
              className={classes.menuButton}
              onClick={toggleDrawer}
            >
              <MenuIcon sx={{ color: "a10101" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List className={classes.drawer}>
          <p className={classes.listHeader}>Data Visualizations:</p>
          <div className={classes.listDataViz}>
            <ListItem
              button
              onClick={toggleDrawer}
              component={Link}
              href="/countries"
            >
              <ListItemText primary="Countries" />
            </ListItem>
            <ListItem
              button
              onClick={toggleDrawer}
              component={Link}
              href="/grapes"
            >
              <ListItemText primary="Grapes" />
            </ListItem>
            <ListItem
              button
              onClick={toggleDrawer}
              component={Link}
              href="/historic"
            >
              <ListItemText primary="Historic Data" />
            </ListItem>
          </div>
          <div className={classes.horizontalLine}></div>
          <ListItem
            button
            onClick={toggleDrawer}
            className={classes.mobileOnly}
            component={Link}
            href="/learning"
          >
            <ListItemText primary="Wine Learning" />
          </ListItem>
          <ListItem
            button
            onClick={toggleDrawer}
            className={classes.mobileOnly}
            component={Link}
            href="/quiz"
          >
            <ListItemText primary="Quiz" />
          </ListItem>
          <ListItem
            button
            onClick={toggleDrawer}
            className={classes.mobileOnly}
            component={Link}
            href="/about"
          >
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
