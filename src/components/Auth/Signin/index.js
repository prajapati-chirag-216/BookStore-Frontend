import React from "react";
import classes from "./index.module.css";
import Button from "../../Button";
import { motion } from "framer-motion";
function Signin(props) {
  const authChangeHandler = () => props.onAuthChange();

  return (
    <div className={classes["signin-container"]}>
      <motion.div
        className={classes["overlay"]}
        style={{
          left: props.authPage == "signup" ? "0" : "-100%", // Adjust values as needed
        }}
      >
        <div className={classes["overlay-text"]}>
          <h2>
            {props.authPage == "signup" ? "Already" : "Don't"} have an Account?{" "}
            <span onClick={authChangeHandler}>
              {props.authPage == "signup" ? "Signin" : "Signup"}
            </span>
          </h2>
        </div>
      </motion.div>
      <div className={classes["form-container"]}>
        <form className={classes["form"]}>
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
          <Button className="btn-small">Signin</Button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
