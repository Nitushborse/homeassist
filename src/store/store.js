import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice, // add more slices here if needed
  },
});

export default store;