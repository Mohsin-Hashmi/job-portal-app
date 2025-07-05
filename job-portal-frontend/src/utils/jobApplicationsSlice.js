

import { createSlice } from "@reduxjs/toolkit";

const jobApplicationSlice= createSlice({
    name: "Job Applicaions",
    initialState: [],
    reducers: {
        addJobApplication: (state, action)=> {
             return action.payload;
        },
        removeJobApplication: ()=>{
           return []
        }
    }  
})
export const {addJobApplication, removeJobApplication} = jobApplicationSlice.actions;
export default jobApplicationSlice.reducer;