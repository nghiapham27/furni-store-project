import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import cartReducer from './cart';
import singleProductReducer from './singleProduct';
import userReducer from './user';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
