

import { createSlice } from "@reduxjs/toolkit";

const jobsSlice= createSlice({
    name: 'jobs',
    initialState: [],
    reducers: {
        addJobs: (state, action) => {
            return action.payload;
        },
        removeJobs: () => {
            return [];
        }
    }
});

export const {addJobs, removeJobs} = jobsSlice.actions;
export default jobsSlice.reducer;
