import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URI, PREFIX } from '../../const';

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  const response = await fetch(`${API_URI}${PREFIX}/category`);

  return await response.json();
});
