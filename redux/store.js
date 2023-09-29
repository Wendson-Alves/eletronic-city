import { configureStore } from "@reduxjs/toolkit";
import dataCart from "./dataCart";
import countCart from "./countCart";

export default configureStore ({
  reducer: {
    dataCart: dataCart,
    //countCart: countCart,
  }
})