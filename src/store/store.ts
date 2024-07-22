import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice.ts';
import {useDispatch} from "react-redux";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()