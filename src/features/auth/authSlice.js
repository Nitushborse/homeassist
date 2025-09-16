import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get('/user/currentuser');
    return response.data.data; // user object directly
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch user');
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  try {
    await axiosInstance.post('/user/logout');
  } catch (error) {
    console.error('Logout API failed (maybe token expired):', error);
  }
  // Always clear user locally
  thunkAPI.dispatch(clearUser());
  window.location.href = '/login';
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload; // Already user object
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
