import { createSlice } from '@reduxjs/toolkit';

const initalSingleProduct = {
  singleProduct: {},
  loading: false,
};

const singleProductSlice = createSlice({
  initialState: initalSingleProduct,
  name: 'singleProduct',
  reducers: {
    loading(state, { payload }) {
      state.loading = payload;
    },

    loadSingleProduct(state, { payload }) {
      state.singleProduct = payload;
    },
  },
});

export const singleProductAction = singleProductSlice.actions;
export default singleProductSlice.reducer;
