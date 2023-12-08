import React, { Fragment } from "react";
import classes from "./index.module.css";
import { Outlet } from "react-router-dom";
function Wrapper() {
  return (
    <div className={classes["wrapper"]}>
      <Outlet />
    </div>
  );
}

export default Wrapper;
