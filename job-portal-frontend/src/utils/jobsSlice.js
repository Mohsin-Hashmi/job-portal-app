import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    //Add all jobs
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },

    //Remove job by ID
    removeJob: (state, action) => {
      const jobIdToRemove = action.payload;
      state.jobs = state.jobs.filter((job) => job._id !== jobIdToRemove);
    },

    // Clear all jobs
    clearJobs: (state) => {
      state.jobs = [];
    },

    //Update a job by ID
    updateJob: (state, action) => {
      const updatedJob = action.payload;
      const index = state.jobs.findIndex((job) => job._id === updatedJob._id);
      if (index !== -1) {
        state.jobs[index] = updatedJob;
      }
    },
  },
});

export const { addJobs, removeJob, clearJobs, updateJob } = jobsSlice.actions;
export default jobsSlice.reducer;
