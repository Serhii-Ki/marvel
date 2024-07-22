import {createAsyncThunk} from "@reduxjs/toolkit";
import useRequest from "../services/useRequest.ts";
import {setCharacters} from "./charactersSlice.ts";


export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', (thunkAPI) => {
  useRequest().getAllCharacters()
   .then((characters) => {
     console.log('Response',characters)
     thunkAPI.dispatch(setCharacters(characters));
   });
})