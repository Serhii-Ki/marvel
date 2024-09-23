import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ErrorType,
  ResponseSignInType,
  ResponseSignUpType,
  SignInType,
  SignUpType,
} from "../utils/types/authTypes.ts";
import { useAuth } from "../utils/services/useAuth.ts";
import { appActions } from "./appSlice.ts";
import { NavigateFunction } from "react-router-dom";

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
    setToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.jwt;
        localStorage.setItem("jwt", action.payload.jwt);
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("jwt", action.payload.token);
      });
  },
});

const signUp = createAsyncThunk<
  ResponseSignUpType,
  { userData: SignUpType; navigate: NavigateFunction },
  { rejectValue: ErrorType }
>(`${slice.name}/signup`, async ({ userData, navigate }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setLoadingStatus({ isLoading: true }));
  try {
    const res = await useAuth().signUp(userData);
    navigate("/bankingonline/dashboard");
    return res.data;
  } catch (err) {
    return rejectWithValue(err);
  } finally {
    dispatch(appActions.setLoadingStatus({ isLoading: false }));
  }
});

const signIn = createAsyncThunk<
  ResponseSignInType,
  { userData: SignInType; navigate: NavigateFunction },
  { rejectValue: ErrorType }
>(`${slice.name}/signin`, async ({ userData, navigate }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setLoadingStatus({ isLoading: true }));
  try {
    const res = await useAuth().signIn(userData);
    navigate("/bankingonline/dashboard");
    return res.data;
  } catch (err) {
    return rejectWithValue(err);
  } finally {
    dispatch(appActions.setLoadingStatus({ isLoading: false }));
  }
});

const logOut = createAsyncThunk(
  `${slice.name}/logout`,
  async ({ navigate }, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    dispatch(appActions.setLoadingStatus({ isLoading: true }));
    try {
      await useAuth().logOut();
      localStorage.removeItem("jwt");
      navigate("/auth");
    } catch (err) {
      return rejectWithValue(err);
    } finally {
      dispatch(appActions.setLoadingStatus({ isLoading: false }));
    }
  },
);

export const authReducer = slice.reducer;
export const authActions = slice.actions;

export const selectAuth = (state: { auth: AuthStateType }) => state.auth;

export const authThunks = { signUp, signIn, logOut };

export const authPath = "auth";
