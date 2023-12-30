import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../../utils/api";
import { uiActions } from "../../../store/ui-slice";
import { STATUS } from "../../../utils/variables";

function Navigation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [activatedLink, setActivatedLink] = useState(
    pathname === "/contact" ? 2 : pathname === "/about" ? 1 : 0
  );

  const cartItems = useSelector((state) => state.cart.cartItems);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [userProfile, setUserProfile] = useState(null);

  const changeQuantityHandler = (items) => {
    let totalQty = 0;
    items.forEach((item) => (totalQty += item.quantity));
    setTotalQuantity(totalQty);
  };

  const fetchUserProfileHandler = async () => {
    const userData = await fetchUserProfile();
    return userData;
  };

  const navigateHandler = () => {
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.LOAD }));
    if (userProfile) {
      navigate("/myProfile");
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    changeQuantityHandler(cartItems);
  }, [cartItems]);

  useEffect(() => {
    fetchUserProfileHandler().then((data) => {
      if (data) {
        setUserProfile(data);
      }
    });
  }, []);

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
          {totalQuantity > 0 && (
            <span className={classes["total-qty"]}>{totalQuantity}</span>
          )}
          {totalQuantity == 0 ? (
            <ShoppingCartOutlinedIcon
              sx={{ fontSize: "4rem", color: "var(--primary-font-color)" }}
            />
          ) : (
            <ShoppingCartIcon
              sx={{ fontSize: "4rem", color: "var(--primary-font-color)" }}
            />
          )}
        </div>
        <div className={classes["btn-icon"]} onClick={navigateHandler}>
          <AccountCircleIcon
            sx={{ fontSize: "4rem", color: "var(--primary-font-color)" }}
          />
          <span className={classes["user-name"]}>
            {userProfile
              ? `Hello ${userProfile.name.split(" ")[0]}`
              : "Signup/login"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
