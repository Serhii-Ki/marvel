import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { appReducer, appPath } from "./appSlice"; // Предполагается, что appSlice существует
import { authReducer, authPath } from "./authSlice";
import { userPath, userReducer } from "./userSlice.ts"; // Предполагается, что authSlice существует

export const store = configureStore({
  reducer: {
    [appPath]: appReducer,
    [authPath]: authReducer,
    [userPath]: userReducer,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
