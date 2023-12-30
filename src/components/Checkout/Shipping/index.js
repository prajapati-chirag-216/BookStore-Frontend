import React from "react";
import classes from "./index.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import Form from "./Form";
function Shipping() {
  const props = useOutletContext();

  const navigate = useNavigate();
  const navigateHandler = () => {
    props.onStepChange(1);
    navigate("/checkout");
  };
  const nextPageHandler = (data) => {
    props.onStepChange(3);
    props.onContinue(3, data);
  };
  return (
    <div className={classes["shipping-container"]}>
      <div className={classes["details-container"]}>
        <div className={classes["details-content"]}>
          <label className={classes["content-label"]}>Contact</label>
          <h1 className={classes["content-text"]}>chirag@gmail.com</h1>
          <span className={classes["content-link"]} onClick={navigateHandler}>
            Change
          </span>
        </div>
        <hr className={classes["divider"]} />
        <div className={classes["details-content"]}>
          <label className={classes["content-label"]}>Ship to</label>
          <h1 className={classes["content-text"]}>
            c/4 ratndeep socity isanpur
          </h1>
          <span className={classes["content-link"]} onClick={navigateHandler}>
            Change
          </span>
        </div>
      </div>
      <div className={classes["method-container"]}>
        <h1 className={classes["container-heading"]}>Shipping method</h1>
        <div className={classes["container-banner"]}>We trust you</div>
        <Form onSubmit={nextPageHandler} onBack={navigateHandler} />
      </div>
    </div>
  );
}

export default Shipping;
