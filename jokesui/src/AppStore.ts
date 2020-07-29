import { configureStore } from "@reduxjs/toolkit";
import { JokesSlice } from './Reducer/JokesReducer'
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
      jokes: JokesSlice.reducer
    }
  });


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
