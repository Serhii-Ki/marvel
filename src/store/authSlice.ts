import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  token: string;
};

const initialState: AuthStateType = {
  token: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;

export const selectAuth = (state: { auth: AuthStateType }) => state.auth;

export const authPath = "auth";
