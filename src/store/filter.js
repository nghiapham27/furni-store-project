import { createSlice } from '@reduxjs/toolkit';

import { productsData } from '../utils/Draft-Data';

const initialFilter = {
  searchName: '',
  category: 'all',
  company: 'all',
  color: 'all',
  ship: false,
  price: 5000,
  sortType: 'ascending',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    search(state, { payload }) {
      state.searchName = payload;
    },
    category(state, { payload }) {
      state.category = payload;
    },
    company(state, { payload }) {
      state.company = payload;
    },
    color(state, { payload }) {
      state.color = payload;
    },
    ship(state) {
      state.ship = !state.ship;
    },
    price(state, { payload }) {
      state.price = payload;
    },
    sort(state, { payload }) {
      state.sortType = payload;
    },
    reset(state) {
      Object.keys(state).map((key) => (state[key] = initialFilter[key]));
    },
  },
});

export const filterAction = filterSlice.actions;

export default filterSlice.reducer;
