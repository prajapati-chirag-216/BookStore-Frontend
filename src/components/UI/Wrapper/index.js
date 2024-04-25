import React from "react";
import classes from "./index.module.css";
import { Outlet } from "react-router-dom";
import BasicLoadingBar from "../LoadingBar";
import SnackBar from "../SnackBar";
import ScrollToTop from "../ScrollToTop";

function Wrapper() {
  return (
    <div className={classes["wrapper"]}>
      <ScrollToTop />
      <SnackBar />
      <BasicLoadingBar />
      <Outlet />
    </div>
  );
}

export default Wrapper;
