import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import cartReducer from './slices/cartSlice';
import additionalsReducer from './slices/additionalsSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    additionals: additionalsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
