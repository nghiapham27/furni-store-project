import { createSlice } from '@reduxjs/toolkit';

// try to get cart data from local storage
const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));

const initialCart = {
  list: cartLocalStorage?.list || [], // {id, name, img, color, price, qty, subTotal}
  cartAgg: {
    totalQty: cartLocalStorage?.cartAgg.totalQty || 0,
    subTotal: cartLocalStorage?.cartAgg.subTotal || 0,
    shippingFee: cartLocalStorage?.cartAgg.shippingFee || 0,
    totalPrice: cartLocalStorage?.cartAgg.totalPrice || 0,
  },
};

// update cartAgg
const cartAgg = (list) => {
  // calculate shipping fee (shipping = true means freeship, default shipping fee = 5$)
  let shippingFee;
  list.filter((item) => !item.shipping).length
    ? (shippingFee = 5)
    : (shippingFee = 0);
  // update totalQty
  const totalQty = list.reduce((a, c) => (a += c.qty), 0);
  // update subTotal
  const subTotal = list.reduce((a, c) => (a += c.qty * c.price), 0);
  // update totalPrice
  const totalPrice = subTotal + shippingFee;
  return { shippingFee, totalQty, subTotal, totalPrice };
};

// setup new item
const setupNewItem = (item, color, qtyAdded) => {
  const newItem = {};
  newItem.id = item.id;
  newItem.name = item.name;
  newItem.image = item.images[0].url;
  newItem.price = item.price;
  newItem.stock = item.stock;
  newItem.shipping = item.shipping;
  // selected color & qty
  newItem.color = color;
  newItem.qty = qtyAdded;
  return newItem;
};

// create slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    add(state, { payload }) {
      const { item, color, qtyAdded } = payload;
      // check if item added to cart
      const [itemSelected] = state.list.filter(
        (e) => e.id === item.id && e.color === color
      );
      // If item added, update item qty
      if (itemSelected) {
        // check if qty added is available
        if (qtyAdded <= itemSelected.stock - itemSelected.qty) {
          itemSelected.qty += qtyAdded;
        }
      }
      // If not, setup new item & update list
      if (!itemSelected) {
        const newItem = setupNewItem(item, color, qtyAdded);
        state.list.push(newItem);
      }

      // UPDATE CART AGGREGATOR
      const updateCartAgg = cartAgg(state.list);
      state.cartAgg = { ...updateCartAgg };
      // save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    remove(state, { payload }) {
      const { item, color } = payload;
      const [itemSelected] = state.list.filter(
        (e) => e.id === item.id && e.color === color
      );
      itemSelected.qty--;
      // remove if qty = 0
      if (itemSelected.qty === 0) {
        state.list = state.list.filter((e) => {
          if (e.id === itemSelected.id && e.color === color) return false;
          return true;
        });
      }
      // UPDATE CART AGGREGATOR
      const updateCartAgg = cartAgg(state.list);
      state.cartAgg = { ...updateCartAgg };
      // save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clear(state, { payload }) {
      state.list = state.list.filter((e) => {
        if (e.id === payload.item.id && e.color === payload.color) return false;
        return true;
      });
      // UPDATE CART AGGREGATOR
      const updateCartAgg = cartAgg(state.list);
      state.cartAgg = { ...updateCartAgg };
      // save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
