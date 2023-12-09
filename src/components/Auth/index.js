import React, { useState } from "react";
import classes from "./index.module.css";
import Signin from "../../components/Auth/Signin";
import Signup from "../../components/Auth/Signup";

function Auth() {
  const [authPage, setAuthPage] = useState("signup");
  const authChangeHandler = () => {
    setAuthPage((prevState) => (prevState === "signup" ? "signin" : "signup"));
  };
  return (
    <div className={classes["auth-container"]}>
      <Signup />
      <Signin authPage={authPage} onAuthChange={authChangeHandler} />
    </div>
  );
}

export default Auth;
