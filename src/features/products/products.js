import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWithTimeout } from '../../utils/fetchWithTimeout';
import { productsAPI, timeout } from '../../utils/constants';

const initialProducts = {
  loading: false,
  error: null,
  productsData: [],
  filterProducts: [],
  filterInput: {
    searchName: '',
    category: 'all',
    company: 'all',
    color: 'all',
    ship: false,
    price: 0,
  },
  maxPrice: 0,
  sortType: '',
  display: 'grid',
};

// fetching products data from API
export const fetchProductsData = createAsyncThunk(
  'products/fetchProductsData',
  async (_, thunkAPI) => {
    try {
      const response = await fetchWithTimeout(productsAPI, timeout);
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response.json();
    } catch (error) {
      // customize reject value for request timeout
      if (error.name === 'AbortError')
        return thunkAPI.rejectWithValue('Error: Request Timeout');
      // reject value for request errror
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Sort Handler
const sortHandler = (data, type) => {
  if (type === 'ascending') {
    return data.sort((a, b) => a.price - b.price);
  }
  if (type === 'descending') {
    return data.sort((a, b) => b.price - a.price);
  }
  return data;
};

// Filter Hanlder
const filterHandler = (input, data, sort, maxPrice) => {
  const { searchName, category, company, color, ship, price } = input;
  // filter
  const filterData = data.filter((product) => {
    if (
      (searchName === '' || product.name.includes(searchName)) &&
      (category === 'all' || product.category === category) &&
      (company === 'all' || product.company === company) &&
      (color === 'all' || product.colors.includes(color)) &&
      (ship === false || product.shipping === ship) &&
      (price === maxPrice || product.price <= price)
    ) {
      return true;
    }
    return false;
  });
  // sort
  sortHandler(filterData, sort);
  return filterData;
};

// CREATE PRODUCTS SLICE
const productsSlice = createSlice({
  name: 'filter',
  initialState: initialProducts,
  reducers: {
    // loading
    loading(state, { payload }) {
      state.loading = payload;
    },
    // error
    error(state, { payload }) {
      state.error = payload;
    },
    // filter
    setFilter(state, { payload }) {
      // update filter input
      payload.type !== 'ship'
        ? (state.filterInput[payload.type] = payload.value)
        : (state.filterInput['ship'] = !state.filterInput['ship']);
      // update filter products
      state.filterProducts = filterHandler(
        state.filterInput,
        state.productsData,
        state.sortType,
        state.maxPrice
      );
    },
    // sort
    sort(state, { payload }) {
      // update sort type
      state.sortType = payload;
      // update filter products
      state.filterProducts = sortHandler(state.filterProducts, payload);
    },
    // display
    display(state, { payload }) {
      state.display = payload;
    },
    // clear filter
    clearFilter(state) {
      state.filterInput = { ...initialProducts.filterInput };
      state.filterInput.price = state.maxPrice;
      state.sortType = initialProducts.sortType;
      state.filterProducts = state.productsData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        // transform price
        payload.forEach((product) => (product.price = product.price / 100));
        // set data
        state.productsData = payload;
        // find the max price
        state.maxPrice = payload
          .map((item) => item.price)
          .reduce((max, price) => {
            if (price > max) {
              return price;
            }
            return max;
          }, 0);
        // set price in filter input = max price
        if (!state.filterInput.price) state.filterInput.price = state.maxPrice;
        // update filter products
        state.filterProducts = filterHandler(
          state.filterInput,
          state.productsData,
          state.sortType,
          state.maxPrice
        );
      })
      .addCase(fetchProductsData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const productsAction = productsSlice.actions;

export default productsSlice.reducer;
