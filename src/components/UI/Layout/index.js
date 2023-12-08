import React, { useState } from "react";
import classes from "./index.module.css";
import { Outlet } from "react-router-dom";
import Navigation from "../../UI/Navigation";
import Footer from "../../Footer";
import Cart from "../../Cart";
function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const openCartHandler = () => setIsOpen(true);
  return (
    <div className={classes["main-container"]}>
      <Cart isOpen={isOpen} />
      <Navigation onOpen={openCartHandler} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
