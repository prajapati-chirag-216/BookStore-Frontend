import React from "react";
import classes from "./index.module.css";
import { NavLink } from "react-router-dom";
function Navigation(props) {
  const openCartHandler = () => props.onOpen();

  return (
    <div className={classes["nav-container"]}>
      <div className={classes["container-links"]}>
        <NavLink to="/home" className={classes["nav-link"]}>
          Home
        </NavLink>
        <NavLink to="/about" className={classes["nav-link"]}>
          About
        </NavLink>
        <NavLink to="/contact" className={classes["nav-link"]}>
          Contact
        </NavLink>
      </div>

      <div className={classes["container-btns"]}>
        <div className={classes["btn-icon"]} onClick={openCartHandler}>
          <img src="cart.png" alt="icon" />
        </div>
        <div className={classes["btn-icon"]}>
          <img src="profile.png" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
