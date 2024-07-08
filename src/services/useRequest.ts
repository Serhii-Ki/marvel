import axios from "axios";
import {Character, CharacterDataWrapper} from "../types/responseTypes.ts";
import {useState} from "react";

function useRequest() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const API_KEY = 'apikey=f603d16d51a9428752c8a79909dec320'
  const instance = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public",
  })

  const startRequest = () => {
    setIsLoading(true);
    setIsError(false)
  }

  const getAllCharacters = async (): Promise<Character[]> => {
    try{
      startRequest()
      return await instance.get<CharacterDataWrapper>(`/characters?${API_KEY}`)
          .then(data => data.data.data.results)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  const getCharacter = async (characterId: number): Promise<Character[]> => {
    try{
      startRequest()
      return await instance.get<CharacterDataWrapper>(`/characters/${characterId}?${API_KEY}`)
          .then(data => data.data.data.results)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isError,
    getAllCharacters,
    getCharacter
  }
}

export default useRequest