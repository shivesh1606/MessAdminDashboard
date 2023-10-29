import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSTodaysData } from '../../api/todaysData';

export const fetchTodaysDataAsync = createAsyncThunk(
  'todaysData/fetchTodaysData',
  async () => {
    console.log('fetchTodaysDataAsync');
    localStorage.setItem('admintoken', 'f5409ec9b09546174e31e3cbb1e667aeca71d952');
    const token = localStorage.getItem('admintoken');
    const response = await getSTodaysData(token);
    return response;
  }
);

const todaysDataSlice = createSlice({
  name: 'todaysData',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodaysDataAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export default todaysDataSlice.reducer;
