import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const sendOrder = createAsyncThunk('sendOrder', async data => {
  const response = await fetch(`${API_URI}${PREFIX}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error('Cannot send order');

  return await response.json();
});
