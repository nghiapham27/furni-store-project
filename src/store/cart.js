import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  list: [], // {id, name, img, color, price, qty, subTotal}
  totalQty: 0,
  subTotal: 0,
  shippingFee: 0,
  totalPrice: 0,
};

// update totalQty & totalPrice
const updateCart = (state) => {
  // calculate shipping fee (shipping = true means freeship, default shipping fee = 5$)
  state.list.filter((item) => !item.shipping).length
    ? (state.shippingFee = 5)
    : (state.shippingFee = 0);
  // update totalQty
  state.totalQty = state.list.reduce((a, c) => (a += c.qty), 0);
  // update subTotal
  state.subTotal = state.list.reduce((a, c) => (a += c.subTotal), 0);
  // update totalPrice
  state.totalPrice = state.subTotal + state.shippingFee;
};

// add to cart fn handler
const addToCart = (state, payload) => {
  if (!payload.qtyAdded) payload.qtyAdded = 1;
  const { item, color, qtyAdded } = payload;

  const itemSelected = state.list.filter(
    (e) => e.id === item.id && e.color === color
  )[0];

  if (itemSelected) {
    if (qtyAdded <= itemSelected.availableQty) {
      // update qty, available qty & subTotal
      itemSelected.qty += qtyAdded;
      itemSelected.availableQty = itemSelected.stock - itemSelected.qty;
      itemSelected.subTotal = itemSelected.qty * itemSelected.price;
    }
  }
  // setup for new item
  if (!itemSelected) {
    const newItem = {};
    newItem.id = item.id;
    newItem.name = item.name;
    newItem.image = item.images[0].url;
    newItem.price = item.price;
    newItem.stock = item.stock;
    newItem.availableQty = item.stock - qtyAdded;
    newItem.shipping = item.shipping;
    // selected color & qty
    newItem.color = color;
    newItem.qty = qtyAdded;
    newItem.subTotal = item.price * qtyAdded;
    state.list.push(newItem);
  }
};

// remove from cart fn handler
const removeFromCart = (state, payload) => {
  const { item, color } = payload;
  const itemSelected = state.list.filter(
    (e) => e.id === item.id && e.color === color
  )[0];
  itemSelected.qty--;
  itemSelected.availableQty = itemSelected.stock - itemSelected.qty;
  itemSelected.subTotal = itemSelected.qty * itemSelected.price;
  // remove if qty = 0
  if (itemSelected.qty === 0) {
    state.list = state.list.filter((e) => {
      if (e.id === itemSelected.id && e.color === color) return false;
      return true;
    });
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
      state.list = state.list.filter((e) => {
        if (e.id === payload.item.id && e.color === payload.color) return false;
        return true;
      });
      updateCart(state);
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
