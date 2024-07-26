import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice.ts';
import {useDispatch} from "react-redux";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;