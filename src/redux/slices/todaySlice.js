import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSTodaysData } from '../../api/todaysData';

export const fetchTodaysDataAsync = createAsyncThunk(
  'todaysData/fetchTodaysData',
  async () => {
    console.log('fetchTodaysDataAsync');
    localStorage.setItem('token', '94ff39777088055211388c1349f7b07a6fadfdab');
    const token = localStorage.getItem('token');
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
