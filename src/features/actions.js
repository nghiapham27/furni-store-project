import { singleProductAction } from './singleProduct';
import { productsAPI, singleProductAPI, timeout } from '../utils/constants';

async function fetchWithTimeout(url, timeoutAfter) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutAfter * 1000);
  const response = await fetch(url, {
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

export const fetchSingleProduct = (ProductId) => {
  return async (dispatch) => {
    dispatch(singleProductAction.loading(true));
    try {
      const response = await fetchWithTimeout(
        singleProductAPI + ProductId,
        timeout
      );
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }

      const data = await response.json();
      dispatch(singleProductAction.loadSingleProduct(data));
      dispatch(singleProductAction.loading(false));
    } catch (error) {
      dispatch(singleProductAction.loading(false));
      // request timeout error
      if (error.name === 'AbortError') {
        dispatch(singleProductAction.error(`Error: Request Timeout`));
        return;
      }
      // API fetching error
      dispatch(singleProductAction.error(`${error}`));
    }
  };
};
