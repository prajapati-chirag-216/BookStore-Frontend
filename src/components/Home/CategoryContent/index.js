import React from "react";
import classes from "./index.module.css";
function CategoryContent(props) {
  return props.items.map((item) => (
    <div
      className={classes["item-container"]}
      key={item._id}
      onClick={props.onClick.bind(null, item._id)}
    >
      <img className={classes["item-img"]} src={item?.image} alt="img" />
      <h1 className={classes["item-name"]}>{item.name}</h1>
    </div>
  ));
}
export default CategoryContent;
