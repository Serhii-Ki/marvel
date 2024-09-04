import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppStateType = {
  isLoading: boolean;
};

const initialState: AppStateType = {
  isLoading: false,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoadingStatus(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;

export const selectApp = (state: { auth: AppStateType }) => state.auth;

export const appPath = "app";
