import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWithTimeout } from '../../utils/fetchWithTimeout';
import { singleProductAPI, timeout } from '../../utils/constants';

const initalSingleProduct = {
  productData: {},
  loading: false,
  error: false,
  activeImgId: null,
  selectedColor: null,
  selectedQty: 1,
};

// fetching products data from API
export const fetchSingleProductData = createAsyncThunk(
  'singleProduct/fetchSingleProductData',
  async (productId, thunkAPI) => {
    try {
      const response = await fetchWithTimeout(
        singleProductAPI + productId,
        timeout
      );
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

const singleProductSlice = createSlice({
  initialState: initalSingleProduct,
  name: 'singleProduct',
  reducers: {
    loading(state, { payload }) {
      state.loading = payload;
    },
    error(state, { payload }) {
      state.error = payload;
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProductData.fulfilled, (state, { payload }) => {
        state.loading = false;
        const transformedPayload = { ...payload, price: payload.price / 100 };
        state.productData = transformedPayload;
        state.activeImgId = transformedPayload.images[0].id;
        state.selectedColor = transformedPayload.colors[0];
        state.selectedQty = 1;
      })
      .addCase(fetchSingleProductData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const singleProductAction = singleProductSlice.actions;
export default singleProductSlice.reducer;
