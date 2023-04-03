import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  isAuthenticated: false,
  error: null,
  user: null,
  loginWithRedirect: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    initiateUser(state, { payload }) {
      const { isAuthenticated, user } = payload;
      state.isAuthenticated = isAuthenticated;
      state.user = user;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
