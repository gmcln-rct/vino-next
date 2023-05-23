// import { Fragment, useContext } from 'react';

import MainHeader from "./main-header";
import MainFooter from "./main-footer";

function Layout(props) {

  return (
    <>
      <MainHeader />
        <main>{props.children}</main>
      <MainFooter />
    </>
  );
}

export default Layout;
