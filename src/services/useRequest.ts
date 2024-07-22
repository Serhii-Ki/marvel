import axios from "axios";
import {Character, CharacterDataWrapper} from "../types/responseTypes.ts";

function useRequest() {
  const API_KEY = 'apikey=f603d16d51a9428752c8a79909dec320'
  const instance = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
  })


  const getAllCharacters =  (): Promise<Character[]> => {
      return  instance.get<CharacterDataWrapper>(`/characters?${API_KEY}`)
          .then(data => data.data.data)
  }

  const getCharacter =  (characterId: number): Promise<Character[]> => {
      return instance.get<CharacterDataWrapper>(`/characters/${characterId}?${API_KEY}`)
          .then(data => data.data.data.results)
  }

  return {
    getAllCharacters,
    getCharacter
  }
}

export default useRequest