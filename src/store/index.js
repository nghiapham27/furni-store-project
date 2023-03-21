import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter';
import cartReducer from './cart';

const store = configureStore({
  reducer: { filter: filterReducer, cart: cartReducer },
});

export default store;
