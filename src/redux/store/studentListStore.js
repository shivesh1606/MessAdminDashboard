// store.js
import { configureStore } from '@reduxjs/toolkit';
import studentListReducer from '../slices/studentListSlice';

export const store = configureStore({
  reducer: {
    studentList: studentListReducer
  }
});
