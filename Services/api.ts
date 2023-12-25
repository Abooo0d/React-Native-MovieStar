import { MediaType, TrendingResult } from "@/Interfaces/apiresults";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const API = process.env.EXPO_PUBLIC_API_KEY;
export const getTrending = async ():Promise<TrendingResult> =>{
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=9dfd840e914a2c62795a7546d817bb3b&page=1`
  );
  const json  = await response.json();
  return json;
}
export const getSearchResult = async (query: string):Promise<TrendingResult> =>{
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const json  = await response.json();
  return json;
}
export const GetMovieDetails = async (id: number,type:MediaType):Promise<any> =>{
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=${API_KEY}`
  );
  const json  = await response.json();
  return json;
}