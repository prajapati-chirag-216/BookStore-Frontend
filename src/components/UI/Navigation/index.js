import React, { useState } from "react";
import classes from "./index.module.css";
import { NavLink, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "framer-motion";

function Navigation(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const [activatedLink, setActivatedLink] = useState(
    pathname === "/contact" ? 2 : pathname === "/about" ? 1 : 0
  );

  const openCartHandler = () => props.onOpen();

  const activateLinkHandler = (index) => setActivatedLink(index);

  const deActivateLinkHandler = () => {
    if (pathname === "/contact") {
      setActivatedLink(2);
    } else if (pathname === "/about") {
      setActivatedLink(1);
    } else {
      setActivatedLink(0);
    }
  };

  return (
    <div className={classes["nav-container"]}>
      <div className={classes["container-links"]}>
        <motion.div
          className={classes["active-link"]}
          style={{
            left:
              activatedLink === 0
                ? "0"
                : activatedLink === 1
                ? "16rem"
                : "32rem",
          }}
        />
        <NavLink
          to="/home"
          className={classes["nav-link"]}
          onMouseOver={activateLinkHandler.bind(null, 0)}
          onMouseLeave={deActivateLinkHandler}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={classes["nav-link"]}
          onMouseOver={activateLinkHandler.bind(null, 1)}
          onMouseLeave={deActivateLinkHandler}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={classes["nav-link"]}
          onMouseOver={activateLinkHandler.bind(null, 2)}
          onMouseLeave={deActivateLinkHandler}
        >
          Contact
        </NavLink>
      </div>

      <div className={classes["container-btns"]}>
        <div className={classes["btn-icon"]} onClick={openCartHandler}>
          <ShoppingCartOutlinedIcon
            sx={{ fontSize: "4rem", color: "var(--primary-font-color)" }}
          />
        </div>
        <div className={classes["btn-icon"]}>
          <AccountCircleIcon
            sx={{ fontSize: "4rem", color: "var(--primary-font-color)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
