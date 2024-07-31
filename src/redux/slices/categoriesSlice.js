import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks/fetchCategories';

const initialState = {
  categories: [],
  activeCategory: 0,
  status: 'idle',
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload.indexCategory;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'success';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { changeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
