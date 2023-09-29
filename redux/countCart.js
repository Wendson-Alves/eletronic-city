import { createSlice } from "@reduxjs/toolkit";

export const countCart = createSlice({
  name: "countCart",
  initialState: {
    countCart: 0,
  },
  reducers: {
    setCountCart(state, action) {
      return { ...state, countCart: action.payload };
    },
  },
});

export const { setCountCart } = countCart.actions;

export default countCart.reducer;