import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async category => {
  const response = await fetch(`${API_URI}${PREFIX}?${category ? `category=${category}` : ''}`);

  return await response.json();
});
