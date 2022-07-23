import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  useEffect(() => {
    console.log("reload");
  }, [children]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
