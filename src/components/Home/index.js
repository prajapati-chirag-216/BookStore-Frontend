import React, { Fragment } from "react";
import classes from "./index.module.css";
import Header from "./Header";
import Main from "../Main";
const ITEMS = [
  {
    id: "1",
    name: "Almond",
    img: "display-img.jpeg",
  },
  {
    id: "2",
    name: "Kasue",
    img: "display-img.jpeg",
  },
  {
    id: "3",
    name: "Peanuts",
    img: "display-img.jpeg",
  },
  {
    id: "4",
    name: "Walnuts",
    img: "display-img.jpeg",
  },
  {
    id: "5",
    name: "Dates",
    img: "display-img.jpeg",
  },
];
function Home() {
  return (
    <Fragment>
      <Header />
      <hr className={classes["divider"]}></hr>
      <Main name="inventory" items={ITEMS} searchHolder="Search genre" />
    </Fragment>
  );
}

export default Home;
