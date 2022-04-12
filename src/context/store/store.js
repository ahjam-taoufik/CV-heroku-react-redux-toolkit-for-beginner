import { configureStore } from '@reduxjs/toolkit';
import  counterSlice  from '../redux/CounterSlice';
import toggleSlice from '../redux/ToggleSlice';

export const store = configureStore({
  reducer: {
    Counter: counterSlice,
    toggle: toggleSlice,
  },
});
