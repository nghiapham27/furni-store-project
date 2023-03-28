import { createSlice } from '@reduxjs/toolkit';

const initalSingleProduct = {
  productData: {},
  loading: false,
  activeImgId: null,
  selectedColor: null,
  selectedQty: 1,
};

const singleProductSlice = createSlice({
  initialState: initalSingleProduct,
  name: 'singleProduct',
  reducers: {
    loading(state, { payload }) {
      state.loading = payload;
    },

    loadSingleProduct(state, { payload }) {
      state.productData = payload;
      state.productData.price = payload.price / 100;
      state.activeImgId = payload.images[0].id;
      state.selectedColor = payload.colors[0];
      state.selectedQty = 1;
    },

    setActiveImgId(state, { payload }) {
      state.activeImgId = payload;
    },
    selectColor(state, { payload }) {
      state.selectedColor = payload;
    },
    addQty(state) {
      state.selectedQty++;
    },
    removeQty(state) {
      state.selectedQty === 1 ? (state.selectedQty = 1) : state.selectedQty--;
    },
  },
});

export const singleProductAction = singleProductSlice.actions;
export default singleProductSlice.reducer;
