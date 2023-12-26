import React from "react";
import SearchBox from "../UI/SearchBox";
import FilterBox from "../UI/FilterBox";
import classes from "./index.module.css";
import Grid from "../Grid";
import LoadingSpinner from "../UI/LoadingSpinner";

function Main(props) {
  return (
    <div className={classes["main-container"]}>
      <h1 className="main-heading">{props.name}</h1>
      <div className={classes["container-action"]}>
        <SearchBox placeHolder={props.searchHolder} />
        {props.applyFilter && <FilterBox />}
      </div>
      {props?.isLoading ? <LoadingSpinner /> : <Grid>{props.gridContent}</Grid>}
    </div>
  );
}

export default Main;
