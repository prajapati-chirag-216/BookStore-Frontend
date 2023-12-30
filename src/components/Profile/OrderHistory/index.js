import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import Grid from "../../Grid";
import OrderContent from "./OrderContent";
import { getUserOrders, logoutUser, addCartItems } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { SNACKBAR_DETAILS, STATUS } from "../../../utils/variables";
import { cartActions } from "../../../store/cart-slice";

function OrderHistory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const fetchOrderDataHandler = async () => {
    const data = await getUserOrders();
    return data;
  };

  const logoutHandler = async () => {
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.LOAD }));
    try {
      await addCartItems(cartItems);
      await logoutUser();
    } catch (err) {
      dispatch(uiActions.setSnackBar(SNACKBAR_DETAILS.ON_ERROR));
    }
    dispatch(uiActions.setSnackBar(SNACKBAR_DETAILS.ON_LOGGED_OUT));
    dispatch(cartActions.clearCart());
    navigate("/auth", { replace: true });
  };

  const navigateHandler = (id) => {
    navigate("orderStatus/" + id);
  };

  useEffect(() => {
    fetchOrderDataHandler().then((data) => {
      if (data) {
        setOrderData(data);
      }
    });
  }, []);

  return (
    <div className={classes["order-container"]}>
      <div className={classes["container-heading"]}>
        <div>
          <h1 className={classes["container-heading--primary"]}>order List</h1>
          <h2 className={classes["container-heading--secondary"]}>
            stay updated with your orders track your status
          </h2>
        </div>
        <Button className="btn-small" width="20rem" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
      <div className={classes["container-main"]}>
        <Grid small marginTop="0" reverse>
          {orderData.length > 0 && (
            <OrderContent orderData={orderData} onClick={navigateHandler} />
          )}
        </Grid>
      </div>
    </div>
  );
}

export default OrderHistory;
