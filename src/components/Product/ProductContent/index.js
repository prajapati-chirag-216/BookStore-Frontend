import React from "react";
import classes from "./index.module.css";
import Button from "../../Button";
function ProductContent(props) {
  return props.items.map((item) => (
    <div key={item._id} className={classes["item-container"]}>
      <span className={classes["item-quantity"]}>{item.quantity}</span>
      <div
        className={classes["image-container"]}
        onClick={props.onClick.bind(null, item._id)}
      >
        <img className={classes["item-img"]} src={item.images[0]} alt="img" />
        <h1 className={classes["item-author"]}>- {item.authorName}</h1>
        <h1 className={classes["item-name"]}>{item.bookName}</h1>
      </div>
      <div className={classes["item-ctrl"]}>
        <span className={classes["item-price"]}>{item.price} &#8377;</span>
        <Button className="btn-large" color="var(--primary-font-color)">
          Add To Cart
        </Button>{" "}
      </div>
    </div>
  ));
}

export default ProductContent;
