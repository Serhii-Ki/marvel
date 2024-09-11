import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppStateType = {
  isLoading: boolean;
  isInitialized: boolean;
};

const initialState: AppStateType = {
  isLoading: false,
  isInitialized: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingStatus(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
    setIsInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
      state.isInitialized = action.payload.isInitialized;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;

export const selectApp = (state: { app: AppStateType }) => state.app;

export const appPath = "app";
