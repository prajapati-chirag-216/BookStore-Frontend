import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import orderReducer from "./order-slice";
const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
export default store;
