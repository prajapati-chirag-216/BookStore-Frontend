import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import classes from "./index.module.css";

const Error = () => {
  const error = useRouteError();
  return (
    <Fragment>
      <main className={classes.main}>
        <header className={classes.header}>{error.status || 404}</header>
        <h2>{error.message || error.statusText || "An Error occurred!"}</h2>
      </main>
    </Fragment>
  );
};
export default Error;
