import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const fetchAdditionals = createAsyncThunk('fetchAdditionals', async () => {
  const response = await fetch(`${API_URI}${PREFIX}/additionals`);

  if (!response.ok) throw new Error('Cannot fetch additional products');

  return await response.json();
});
