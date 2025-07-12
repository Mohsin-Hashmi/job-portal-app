import { createSlice } from "@reduxjs/toolkit";

const jobApplicationSlice = createSlice({
  name: "JobApplicaions",
  initialState: null,
  reducers: {
    addJobApplication: (state, action) => {
      return action.payload;
    },
    removeJobApplication: (state) => {
      return null;
    },
  },
});
export const { addJobApplication, removeJobApplication } =
  jobApplicationSlice.actions;
export default jobApplicationSlice.reducer;
