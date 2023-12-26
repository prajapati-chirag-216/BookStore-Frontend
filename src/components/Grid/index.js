import React from "react";
import classes from "./index.module.css";

function Grid(props) {
  return <div className={classes["grid"]}>{props.children}</div>;
}

export default Grid;
