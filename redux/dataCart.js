import { createSlice } from "@reduxjs/toolkit";

export const dataCart = createSlice({
  name: "dataCart",

  initialState: {
    dataCart: [],
    quantity: 100,
    image: '/imagens/notebook.jpg',
    preco: 30000,
    nome: 'Titulo do produto',
    
  },
  reducers: {
    setDataCart(state, action) {
      return { ...state, dataCart: action.payload };
    },
  },
});

export const { setDataCart } = dataCart.actions;

export default dataCart.reducer;