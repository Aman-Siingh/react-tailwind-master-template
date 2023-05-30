import React, { Children } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer/>
    </>
  );
}

export default MainLayout;
