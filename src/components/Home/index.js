import React, { Fragment, useEffect, useState } from "react";
import Main from "../Main";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { STATUS, WINDOW_SIZE } from "../../utils/variables";
import Button from "../Button";
import classes from "./index.module.css";
import CategoryContent from "./CategoryContent";
import { fetchFilteredCategories } from "../../utils/api";
import Header from "./Header";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [pageNo, setPageNo] = useState(+localStorage.getItem("pageNo") || 1);
  const [haveMoreData, setHaveMoreData] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onNextPageHandler = () => {
    setPageNo((prevPage) => prevPage + 1);
  };
  const navigateHandler = (id) => {
    navigate("/products/" + id);
  };
  const updateStateHandler = (data) => {
    setItems(data);
  };

  // we will do this after
  useEffect(() => {
    fetchItemsHandler().then((data) => {
      setHaveMoreData(data.haveMore);
      if (pageNo == 1) {
        updateStateHandler(data.categories);
      } else {
        updateStateHandler([...items, ...data.categories]);
      }
    });
  }, [pageNo, searchText]);

  const fetchItemsHandler = async () => {
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.LOAD }));
    const filteredItems = await fetchFilteredCategories(
      WINDOW_SIZE,
      pageNo - 1,
      searchText == "" ? "all" : searchText
    );
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.COMPLETE }));
    return filteredItems;
  };

  const searchChangeHandler = (eve) => {
    const searchTxt = eve.target.value.trim();
    setPageNo(1);
    setSearchText(searchTxt);
  };

  return (
    <Fragment>
      <Header />
      <hr className={classes["divider"]}></hr>
      <Main
        name="inventory"
        searchHolder="Search genre"
        onSearch={searchChangeHandler}
        gridContent={
          <CategoryContent items={items} onClick={navigateHandler} />
        }
      />
      <div className={classes["btn-container"]}>
        {haveMoreData && (
          <Button
            className="btn-small"
            width="20rem"
            onClick={onNextPageHandler}
          >
            Load more
          </Button>
        )}
      </div>
    </Fragment>
  );
}

export default Product;
