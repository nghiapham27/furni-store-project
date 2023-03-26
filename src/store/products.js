import { createSlice } from '@reduxjs/toolkit';

const initialProducts = {
  loading: false,
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
  sortType: '---',
  display: 'grid',
};

// Filter Hanlder
const filterHandler = (state) => {
  const { searchName, category, company, color, ship, price } =
    state.filterInput;
  state.filterProducts = state.productsData.filter((product) => {
    if (
      (searchName === '' || product.name.includes(searchName)) &&
      (category === 'all' || product.category === category) &&
      (company === 'all' || product.company === company) &&
      (color === 'all' || product.colors.includes(color)) &&
      (ship === false || product.shipping === ship) &&
      (price === 5000 || product.price <= price)
    ) {
      return true;
    }
    return false;
  });
};

// Sort Handler
const sortHandler = (state, payload) => {
  if (payload === 'ascending') {
    state.filterProducts.sort((a, b) => a.price - b.price);
  }
  if (payload === 'descending') {
    state.filterProducts.sort((a, b) => b.price - a.price);
  }
};

// Processing price value
const transformPrice = (payload) => {
  payload.forEach((product) => (product.price = product.price / 100));
};

// Find the max price
const findMaxPrice = (state) => {
  state.maxPrice = state.productsData
    .map((item) => item.price)
    .reduce((max, price) => {
      if (price > max) {
        return price;
      }
      return max;
    }, 0);
};

const productsSlice = createSlice({
  name: 'filter',
  initialState: initialProducts,
  reducers: {
    // loading
    loading(state, { payload }) {
      state.loading = payload;
    },
    // initial fetch
    initiateProductsData(state, { payload }) {
      transformPrice(payload);
      state.productsData = payload;
      state.filterProducts = payload;
      findMaxPrice(state);
      state.filterInput.price = state.maxPrice;
    },

    // filter
    setFilter(state, { payload }) {
      payload.type !== 'ship'
        ? (state.filterInput[payload.type] = payload.value)
        : (state.filterInput['ship'] = !state.filterInput['ship']);
      filterHandler(state);
    },
    // sort
    sort(state, { payload }) {
      state.sortType = payload;
      sortHandler(state, payload);
    },
    // sort
    display(state, { payload }) {
      state.display = payload;
    },
    // clear filter
    clearFilter(state) {
      Object.keys(state.filterInput).map(
        (key) => (state.filterInput[key] = initialProducts.filterInput[key])
      );
      state.filterProducts = state.productsData;
      state.filterInput.price = state.maxPrice;
      state.sortType = initialProducts.sortType;
    },
  },
});

export const productsAction = productsSlice.actions;

export default productsSlice.reducer;
