import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../utils/types/userTypes.ts";

const initialState: UserType = {
  id: "",
  fullName: "",
  avatar: "",
  age: null,
  bio: "",
  balance: 0,
  notifications: [],
  transactions: [],
  username: "",
  posts_count: 0,
  followers: 0,
  following: 0,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: { payload: UserType }) {
      return (state = action.payload);
    },
  },
});

export const getUser = createAsyncThunk(`${slice.name}/getUser`, () => {});

export const userReducer = slice.reducer;

export const selectUser = (state: { user: UserType }) => state.user;

export const userActions = slice.actions;

export const userPath = "user";
