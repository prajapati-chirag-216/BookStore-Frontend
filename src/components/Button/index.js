import React from "react";
import classes from "./index.module.css";
function Button(props) {
  return (
    <button
      className={`${classes["btn"]} ${classes[props.className]}`}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      disabled={props.disabled}
      style={{ color: props?.color || "auto", marginTop: props.marginTop }}
    >
      {props.children}
    </button>
  );
}

export default Button;
