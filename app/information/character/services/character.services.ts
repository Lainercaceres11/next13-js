import { Character } from "../models";

export const getCharacter = ():Promise<Character[]>=>{
    const url = 'https://rickandmortyapi.com/api/character';
    return fetch(url)
     .then((response) => response.json())
     .then((data)=> data.results);
}