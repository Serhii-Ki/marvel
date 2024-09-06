import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ErrorType,
  ResponseSignUpType,
  SignUpType,
} from "../utils/types/authTypes.ts";
import { useAuth } from "../utils/services/useAuth.ts";
import { appActions } from "./appSlice.ts";

type AuthStateType = {
  token: string;
};

const initialState: AuthStateType = {
  token: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload.jwt;
    });
  },
});

const signUp = createAsyncThunk<
  ResponseSignUpType,
  SignUpType,
  { rejectValue: ErrorType }
>(`${slice.name}/signup`, async (userData, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setLoadingStatus({ isLoading: true }));
  try {
    const res = await useAuth().signUp(userData);
    console.log(res);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  } finally {
    dispatch(appActions.setLoadingStatus({ isLoading: false }));
  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;

export const selectAuth = (state: { auth: AuthStateType }) => state.auth;

export const authThunks = { signUp };

export const authPath = "auth";
