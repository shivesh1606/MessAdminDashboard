import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getStudentList } from '../../api/studentList';

export const fetchStudentListAsync = createAsyncThunk(
  'studentList/fetchStudentList',
  async () => {
    console.log('fetchStudentListAsync');
    localStorage.setItem('admintoken', 'f5409ec9b09546174e31e3cbb1e667aeca71d952');
    const token = localStorage.getItem('admintoken');
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
