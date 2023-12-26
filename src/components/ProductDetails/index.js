import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../utils/api";
import ProductReview from "./ProductReview";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { STATUS } from "../../utils/actions";

function ProductDetails() {
  const location = useLocation();
  const pathName = location.pathname;
  const productId = pathName.split("/")[2];

  const dispatch = useDispatch();

  const [productDetails, setProductDetails] = useState(null);
  const fetchProductDetails = async () => {
    const data = await getProduct(productId);
    return data;
  };
  useEffect(() => {
    dispatch(uiActions.setIsLoadingBar({ status: STATUS.LOAD }));
    fetchProductDetails().then((data) => {
      setProductDetails(data);
      console.log(data);
      dispatch(uiActions.setIsLoadingBar({ status: STATUS.COMPLETE }));
    });
  }, []);
  return (
    <Fragment>
      {productDetails && <Header productDetails={productDetails} />}
      {productDetails && (
        <ProductReview productDetails={productDetails} productId={productId} />
      )}
    </Fragment>
  );
}

export default ProductDetails;
