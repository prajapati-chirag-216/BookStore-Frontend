import React from "react";
import SearchBox from "../UI/SearchBox";
import FilterBox from "../UI/FilterBox";
import classes from "./index.module.css";
import Grid from "../Grid";
import Heading from "../Heading";

function Main(props) {
  return (
    <div className={classes["main-container"]}>
      <Heading title={props.name} />
      <div className={classes["container-action"]}>
        <SearchBox placeHolder={props.searchHolder} onSearch={props.onSearch} />
        {props.applyFilter && <FilterBox onSort={props.onSort} />}
      </div>
      <Grid>{props.gridContent}</Grid>
    </div>
  );
}

export default Main;
