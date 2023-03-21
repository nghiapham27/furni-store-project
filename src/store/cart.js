import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  cart: 'nothing',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {},
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
