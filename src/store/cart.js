import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  // {id, name, img, price, qty, subTotal}
  list: [],
  totalQty: 0,
  totalPrice: 0,
};

// update totalQty & totalPrice
const updateCart = (state) => {
  // update totalQty
  state.totalQty = +state.list.reduce((a, c) => (a += c.qty), 0).toFixed(2);
  // update totalPrice
  state.totalPrice = +state.list
    .reduce((a, c) => (a += c.subTotal), 0)
    .toFixed(2);
};

// add to cart fn handler
const addToCart = (state, payload) => {
  const itemSelected = state.list.filter((e) => e.id === payload.id)[0];

  if (itemSelected) {
    itemSelected.qty++;
    itemSelected.subTotal = itemSelected.qty * itemSelected.price;
  }
  // setup for new item
  if (!itemSelected) {
    const newItem = {};
    newItem.id = payload.id;
    newItem.name = payload.name;
    newItem.image = payload.image;
    newItem.price = payload.price;
    newItem.qty = 1;
    newItem.subTotal = payload.price;
    state.list.push(newItem);
  }
};

// remove from cart fn handler
const removeFromCart = (state, item) => {
  const itemSelected = state.list.filter((e) => e.id === item.id)[0];
  itemSelected.qty--;
  itemSelected.subTotal = itemSelected.qty * itemSelected.price;
  // remove if qty = 0
  if (itemSelected.qty === 0) {
    state.list = state.list.filter((item) => item.id !== itemSelected.id);
  }
};

// create slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    add(state, { payload }) {
      addToCart(state, payload);
      updateCart(state);
    },
    remove(state, { payload }) {
      removeFromCart(state, payload);
      updateCart(state);
    },
    clear(state, { payload }) {
      state.list = state.list.filter((item) => item.id !== payload.id);
      updateCart(state);
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
