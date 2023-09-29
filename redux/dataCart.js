import { createSlice } from "@reduxjs/toolkit";

export const dataCart = createSlice({
  name: "dataCart",
  initialState: {
    dataCart: [],
    //countCart: 0
  },
  reducers: {
    setDataCart(state, action) {
      return { ...state, dataCart: action.payload };
    },
    // setCountCart(state, action) {
    //   return { ...state, countCart: action.payload };
    // },
  },
});

export const { setDataCart /*, setCountCart*/ } = dataCart.actions;

export default dataCart.reducer;