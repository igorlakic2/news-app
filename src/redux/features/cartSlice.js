import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
  // isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action);
      state.cartItems.push(action.payload);
      state.total += 1;
    },
    // clearCart: (state) => (state.cartItems = []),
    // removeItem: (state, action) => {
    //   const itemId = action.payload;
    //   state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    // },
    // increase: (state, action) => {
    //   const cartItem = state.cartItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   cartItem.amount += 1;
    // },
    // decrease: (state, action) => {
    //   const cartItem = state.cartItems.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   cartItem.amount -= 1;
    // },
    // calculateTotals: (state) => {
    //   let amount = 0;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     amount += item.amount;
    //     total += item.amount * item.price;
    //   });
    //   state.amount = amount;
    //   state.total = total;
    // },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
