import { productsAction } from './products';
import { singleProductAction } from './singleProduct';
import { productsAPI, singleProductAPI } from '../utils/constants';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(productsAction.loading(true));
    const response = await fetch(productsAPI);
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      dispatch(productsAction.initiateProductsData(data));
      dispatch(productsAction.loading(false));
    }
  };
};

export const fetchSingleProduct = (ProductId) => {
  return async (dispatch) => {
    dispatch(singleProductAction.loading(true));
    const response = await fetch(singleProductAPI + ProductId);
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      dispatch(singleProductAction.loadSingleProduct(data));
      dispatch(singleProductAction.loading(false));
    }
  };
};
