import { configureStore } from "@reduxjs/toolkit";
import dataCart from "./dataCart";

export default configureStore ({
  reducer: {
    dataCart: dataCart
  }
})