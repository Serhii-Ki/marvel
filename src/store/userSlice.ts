import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../utils/types/userTypes.ts";
import { useUser } from "../utils/services/useUser.ts";
import { ErrorType } from "../utils/types/authTypes.ts";
import { appActions } from "./appSlice.ts";

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
    setUser(state, action: PayloadAction<UserType>) {
      return action.payload;
    },
    updateUser(state, action: PayloadAction<Partial<UserType>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const getUser = createAsyncThunk<
  UserType,
  void,
  { rejectValue: ErrorType }
>(`${slice.name}/getUser`, async (_, { dispatch, rejectWithValue }) => {
  try {
    dispatch(appActions.setLoadingStatus({ isLoading: true }));
    const res = await useUser().getUser();
    dispatch(userActions.setUser(res.data));
    return res.data;
  } catch (err) {
    return rejectWithValue(err);
  } finally {
    dispatch(appActions.setLoadingStatus({ isLoading: false }));
  }
});

export const depositMoney = createAsyncThunk<
  UserType,
  number,
  { rejectValue: ErrorType }
>(`${slice.name}/depositMoney`, async (count, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(appActions.setLoadingStatus({ isLoading: true }));
  try {
    const res = await useUser().depositMoney(count);
    dispatch(userActions.updateUser({ balance: res.data.balance }));
  } catch (err) {
    return rejectWithValue(err);
  } finally {
    dispatch(appActions.setLoadingStatus({ isLoading: false }));
  }
});

export const userReducer = slice.reducer;

export const selectUser = (state: { user: UserType }) => state.user;

export const userActions = slice.actions;

export const userPath = "user";

export const userThunks = { getUser, depositMoney };
