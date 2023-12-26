import React from "react";
import classes from "./index.module.css";
import { Outlet } from "react-router-dom";
import BasicLoadingBar from "../LoadingBar";
function Wrapper() {
  return (
    <div className={classes["wrapper"]}>
      <BasicLoadingBar />
      <Outlet />
    </div>
  );
}

export default Wrapper;
