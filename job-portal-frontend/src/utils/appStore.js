

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import jobsReducer from  './jobsSlice';
import JobApplicationReducer from './jobApplicationsSlice'
export const store= configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer,
        jobApplications: JobApplicationReducer
    }
})