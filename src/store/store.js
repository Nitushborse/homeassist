import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import jobsReducer from '../features/job/jobSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: jobsReducer,
  },
});

export default store;