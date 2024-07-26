import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Character} from "../types/responseTypes.ts";
import {fetchCharacters} from "./charactersThunk.ts";

const initialState: Character[] = [];

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.push(...action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
     .addCase(fetchCharacters.fulfilled, (state: Character[], action) => {
       state.push(...action.payload);
      });
  }
});

export const {setCharacters} = charactersSlice.actions

export default charactersSlice.reducer;

