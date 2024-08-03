import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const fetchCart = createAsyncThunk('fetchCart', async () => {
  const response = await fetch(`${API_URI}${PREFIX}/cart/items`);

  if (!response.ok) throw new Error('Cannot fetch cart');

  return await response.json();
});
