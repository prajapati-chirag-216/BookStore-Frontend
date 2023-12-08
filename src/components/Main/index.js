import React from "react";
import SearchBox from "../UI/SearchBox";
import FilterBox from "../UI/FilterBox";
import classes from "./index.module.css";
import Grid from "../Grid";

function Main(props) {
  return (
    <div className={classes["main-container"]}>
      <h1 className={classes["container-heading"]}>{props.name}</h1>
      <div className={classes["container-action"]}>
        <SearchBox placeHolder={props.searchHolder} />
        <FilterBox />
      </div>
      <Grid items={props.items} />
    </div>
  );
}

export default Main;
