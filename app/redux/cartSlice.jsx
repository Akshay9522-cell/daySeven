// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        // If product already exists, increase its quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // Otherwise, add the product to the cart
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
