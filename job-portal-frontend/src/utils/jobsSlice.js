import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },
    removeJob: (state, action) => {
      const jobIdToRemove = action.payload;
      state.jobs = state.jobs.filter((job) => job._id !== jobIdToRemove);
    },
    clearJobs: (state) => {
      state.jobs = [];
    },
  },
});

export const { addJobs, removeJob, clearJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
