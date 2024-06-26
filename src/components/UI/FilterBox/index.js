import React from "react";
import classes from "./index.module.css";
import { SORTING_OPTIONS } from "../../../utils/variables";
function FilterBox(props) {
  return (
    <div className={classes["filter-box"]}>
      <div className={classes["filter-box--selector"]}>
        <input
          type="text"
          readOnly
          placeholder="Sort By"
          className={classes["input-filter"]}
        />
        <img src="/down-arr.png" alt="" />
      </div>
      <div className={classes["filter-box--value"]}>
        <li
          onClick={props.onSort.bind(
            null,
            SORTING_OPTIONS.SORT_BY_PRICE_HIGH_TO_LOW
          )}
        >
          Price high to low
        </li>
        <li
          onClick={props.onSort.bind(
            null,
            SORTING_OPTIONS.SORT_BY_PRICE_LOW_TO_HIGH
          )}
        >
          Price low to high
        </li>
        <li
          onClick={props.onSort.bind(
            null,
            SORTING_OPTIONS.SORT_BY_DATE_NEW_TO_OLD
          )}
        >
          Latest
        </li>
        <li
          onClick={props.onSort.bind(
            null,
            SORTING_OPTIONS.SORT_BY_DATE_OLD_TO_NEW
          )}
        >
          Oldest
        </li>
        <li
          onClick={props.onSort.bind(
            null,
            SORTING_OPTIONS.SORT_BY_HIGH_RATINGS
          )}
        >
          Most popular
        </li>
      </div>
    </div>
  );
}

export default FilterBox;
