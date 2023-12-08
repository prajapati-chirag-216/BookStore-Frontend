import React from "react";
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
function Product() {
  return (
    <div>
      <Main
        name="Action Books"
        items={ITEMS}
        searchHolder="Search book or author"
      />
    </div>
  );
}

export default Product;
