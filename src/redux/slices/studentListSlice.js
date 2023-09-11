import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStudentList } from '../../api/studentList';

export const fetchStudentListAsync = createAsyncThunk(
  'studentList/fetchStudentList',
  async () => {
    console.log('fetchStudentListAsync');
    localStorage.setItem('token', '94ff39777088055211388c1349f7b07a6fadfdab');
    const token = localStorage.getItem('token');
    const response = await getStudentList(token);
    return response;
  }
);

const studentListSlice = createSlice({
  name: 'studentList',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentListAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default studentListSlice.reducer;
