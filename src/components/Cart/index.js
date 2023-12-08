import React, { Fragment, useState } from "react";
import classes from "./index.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Button from "../Button";
const ITEMS = [
  {
    id: "1",
    name: "The Sparrow",
    description:
      "this is nice book you shoud buy it trust me this is nice book trust me you should buy it",
    price: 100,
    quantity: 1,
  },
  {
    id: "2",
    name: "The Book",
    description:
      "this is nice book you shoud buy it trust me this is nice book trust me you should buy it",
    price: 200,
    quantity: 2,
  },
  {
    id: "3",
    name: "The Book",
    description:
      "this is nice book you shoud buy it trust me this is nice book trust me you should buy it",
    price: 200,
    quantity: 2,
  },
  {
    id: "4",
    name: "The Book",
    description:
      "this is nice book you shoud buy it trust me this is nice book trust me you should buy it",
    price: 200,
    quantity: 2,
  },
];

function Cart() {
  const [items, setItems] = useState(ITEMS);
  const increseQtyHandler = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => {
        if (item.id === id) {
          return item.quantity++;
        }
        return item;
      })
    );
  };
  const descreseQtyHandler = (id) => {
    const updatedItems = items.filter((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return item.quantity--;
        }
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  };
  const removeItemHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <div className={classes["cart-container"]}>
      <div className={classes["container-heading"]}>
        <h1>Cart</h1>
        <span>&#x2715;</span>
      </div>
      <div className={classes["container-items"]}>
        {items.length > 0 ? (
          items.map((item) => (
            <div className={classes["container-item"]} key={item.id}>
              <div className={classes["item-img"]}>
                <img src="display-img.jpeg" />
              </div>
              <div className={classes["item-details"]}>
                <h2 className={classes["item-name"]}>{item.name}</h2>
                <p className={classes["item-description"]}>
                  {item.description.slice(0, 70)}..
                </p>
                <div className={classes["qty-controller"]}>
                  <RemoveIcon
                    sx={{ fontSize: "3rem", cursor: "pointer" }}
                    onClick={descreseQtyHandler.bind(null, item.id)}
                  />
                  <h3 className={classes["qty-text"]}>{item.quantity}</h3>
                  <AddIcon
                    sx={{ fontSize: "3rem", cursor: "pointer" }}
                    onClick={increseQtyHandler.bind(null, item.id)}
                  />
                </div>
                <div className={classes["item-controller"]}>
                  <h2 className={classes["item-price"]}>{item.price}</h2>
                  <h2
                    className={classes["item-btn"]}
                    onClick={removeItemHandler.bind(null, item.id)}
                  >
                    Remove
                  </h2>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Fragment>
            <HourglassEmptyIcon
              sx={{
                fontSize: "8rem",
                color: "#0003",
                marginTop: "50%",
                alignSelf: "center",
              }}
            />
            <h1 className={classes["empty-text"]}>Empty!</h1>
          </Fragment>
        )}
      </div>
      <Button className="btn-large" disabled={items.length <= 0}>
        Checkoute
      </Button>
    </div>
  );
}

export default Cart;
