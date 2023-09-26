import { configureStore } from '@reduxjs/toolkit';
import heroSlice from './heroes/slice';
import modalSlice from './modal/slice';
export const store = configureStore({
  reducer: {
    hero: heroSlice,
    modal: modalSlice,
  },
});
