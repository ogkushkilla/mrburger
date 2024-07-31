import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const fetchCart = createAsyncThunk('fetchCart', async ({ id, quantity }) => {
  const response = await fetch(`${API_URI}${PREFIX}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, quantity }),
  });

  if (!response.ok) throw new Error('Cannot fetch the cart');

  return await response.json();
});
