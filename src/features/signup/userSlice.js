import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure } = userSlice.actions;

const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;