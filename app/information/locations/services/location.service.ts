

import { Locations } from "../models";
export const getLocations = ():Promise<Locations[]>=>{
    const url = 'https://rickandmortyapi.com/api/location';
    return fetch(url)
     .then((response) => response.json())
     .then((data)=> data.results);
}