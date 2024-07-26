import {createAsyncThunk} from "@reduxjs/toolkit";
import useRequest from "../services/useRequest.ts";
import {setCharacters} from "./charactersSlice.ts";
import {Character} from "../types/responseTypes.ts";


export const fetchCharacters = createAsyncThunk<
    Character[],         // Тип данных, которые возвращает thunk при успешном выполнении
    void,                // Тип аргумента, который передается в thunk (в данном случае ничего не передается)
    { rejectValue: string }  // Тип данных, которые возвращаются при ошибке
>(
    'characters/fetchCharacters',
    async (_, thunkAPI) => {
      try {
        const characters = await useRequest().getAllCharacters();
        thunkAPI.dispatch(setCharacters(characters));
        console.log('Response', characters);
      } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch characters');
      }
    }
);