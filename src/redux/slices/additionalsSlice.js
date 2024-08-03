import { createSlice } from '@reduxjs/toolkit';
import { fetchAdditionals } from '../thunks/fetchAdditionals';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const additionalsSlice = createSlice({
  name: 'additionals',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdditionals.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAdditionals.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchAdditionals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default additionalsSlice.reducer;
