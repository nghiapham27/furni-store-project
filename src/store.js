import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/products';
import cartReducer from './features/cart/cart';
import singleProductReducer from './features/singleProduct';
import userReducer from './features/user/user';

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
