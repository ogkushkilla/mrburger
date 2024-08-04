import { createSlice } from '@reduxjs/toolkit';
import { sendOrder } from '../thunks/sendOrder';

const initialState = {
  data: {},
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(sendOrder.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload | action.error.message;
      });
  },
});

export default orderSlice.reducer;
