// src/components/Layout.js
import React from "react";
import Header from "../header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children} 
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
