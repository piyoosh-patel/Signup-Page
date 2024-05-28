import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/signup/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
});