

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import jobsReducer from  './jobsSlice';
export const store= configureStore({
    reducer: {
        user: userReducer,
        jobs: jobsReducer
    }
})