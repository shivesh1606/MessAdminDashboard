// store.js
import { configureStore } from '@reduxjs/toolkit';
import studentListReducer from './redux/slices/studentListSlice';
import todaysDataReducer from './redux/slices/todaySlice';

export const store = configureStore({
  reducer: {
    studentList: studentListReducer,
    todaysData: todaysDataReducer
  } 
});