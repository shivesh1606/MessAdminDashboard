// store.js
import { configureStore } from '@reduxjs/toolkit';
import studentListReducer from './redux/slices/studentListSlice';

export const store = configureStore({
  reducer: {
    studentList: studentListReducer
  } 
});