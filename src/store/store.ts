import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { appPath, appReducer } from "./appSlice.ts";
import { authPath, authReducer } from "./authSlice.ts";

export const store = configureStore({
  reducer: {
    [appPath]: appReducer,
    [authPath]: authReducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
