import axios from "axios";
import { IPokemonPage, IPokemonData } from "../interfaces/interface";

export async function getPokemons(): Promise<IPokemonPage> {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  );
  return data;
}

export async function getPokemonPagination(url: string): Promise<IPokemonPage> {
  const { data } = await axios.get(url);
  return data;
}

export async function getPokemonData(url:string): Promise<IPokemonData> {
  const { data } = await axios.get(url);
  return data;
}
