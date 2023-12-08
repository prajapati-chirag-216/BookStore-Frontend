import React from "react";
import classes from "./index.module.css";
import Button from "../../Button";

function Signup(props) {
  return (
    <div className={classes["signup-container"]}>
      <div className={classes["form-container"]}>
        <form className={classes["form"]}>
          <input
            className={classes["form-input"]}
            type="text"
            placeholder="Name"
          ></input>
          <input
            className={classes["form-input"]}
            type="email"
            placeholder="Email"
          ></input>
          <input
            className={classes["form-input"]}
            type="password"
            placeholder="Password"
          ></input>
          <Button className="btn-small">Signup</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
