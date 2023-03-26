import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});

export default store;