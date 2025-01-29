'use client'
import {configureStore} from '@reduxjs/toolkit';
import rentSlice from './rentSlice';

export const store = configureStore({
  reducer: {
    rent: rentSlice,
  },
});