import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getClientPostedJobs,
  getRequestedJobs,
  createNewJob,
  getJobCategories
} from '../../services/jobsService';

// Fetch client jobs
export const fetchClientJobs = createAsyncThunk('jobs/fetchClientJobs', async (_, thunkAPI) => {
  try {
    return await getClientPostedJobs();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || 'Failed to fetch client jobs');
  }
});

// Fetch freelancer requested jobs
export const fetchRequestedJobs = createAsyncThunk('jobs/fetchRequestedJobs', async (_, thunkAPI) => {
  try {
    return await getRequestedJobs();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || 'Failed to fetch requested jobs');
  }
});


// Create new job
export const addJob = createAsyncThunk('jobs/addJob', async (jobData, thunkAPI) => {
  try {
    return await createNewJob(jobData);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || 'Failed to create job');
  }
});


// Fetch job categories
export const fetchCategories = createAsyncThunk("jobs/fetchCategories", async (_, thunkAPI) => {
  try {
    return await getJobCategories();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data || "Failed to fetch categories");
  }
});


// =======================
// Slice
// =======================
const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    clientJobs: [],
    requestedJobs: [],
    categories: [],
    loading: false,
    success: false, 
    error: null,
  },
  reducers: {
    resetSuccess: (state) => {
      state.success = false; 
    }
  },
  extraReducers: (builder) => {
    // client jobs
    builder
      .addCase(fetchClientJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchClientJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.clientJobs = action.payload;
        state.error = null;
      })
      .addCase(fetchClientJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // freelancer requested jobs
    builder
      .addCase(fetchRequestedJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRequestedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.requestedJobs = action.payload;
        state.error = null;
      })
      .addCase(fetchRequestedJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // add new job
    builder
      .addCase(addJob.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.loading = false;
        state.clientJobs.push(action.payload); // update state
        state.success = true;
        state.error = null;
      })
      .addCase(addJob.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });

    // categories
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { resetSuccess } = jobsSlice.actions;
export default jobsSlice.reducer;