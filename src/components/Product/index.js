import React, { useEffect, useState } from "react";
import Main from "../Main";
import { getProductsOfCategory } from "../../utils/api";
import { useLocation, useNavigate } from "react-router-dom";
import ProductContent from "../Product/ProductContent";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { STATUS } from "../../utils/variables";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [items, setItems] = useState([]);

  const fetchItemsHandler = async (id) => {
    const data = await getProductsOfCategory(id);
    return data;
  };
  const navigateHandler = (id) => {
    navigate("/product/" + id);
  };

  useEffect(() => {
    const pathName = location.pathname;
    const id = pathName.split("/")[2];
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.LOAD }));
    fetchItemsHandler(id).then((data) => {
      setItems(data);
      dispatch(uiActions.setIsLoadingBar({ status: STATUS.COMPLETE }));
    });
  }, []);

  return (
    <div>
      <Main
        name="Action Books"
        searchHolder="Search book or author"
        applyFilter={true}
        gridContent={<ProductContent items={items} onClick={navigateHandler} />}
      />
    </div>
  );
}

export default Product;
