import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//Combine Reducers and Create a Store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

//export store to global
export default store;
