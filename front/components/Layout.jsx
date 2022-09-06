import React from "react";

import Footer from "./Footer";
import Quote from "./Quote";

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <div>
        <Quote />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
