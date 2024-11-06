/**
 * @author Alvaro
 * @description Ejercicio 01
 */

import { getAllPokemons } from "./getAllPokemon";

export const getAllPokemonMap = async (urlApi) => {
  try {
    const allPokemon = await getAllPokemons(urlApi);
    const mapPokemon = new Map();
    allPokemon.forEach((pokemon) => {
      mapPokemon.set(pokemon.nombre, pokemon);
    });

    return mapPokemon;
  } catch (error) {
    throw new Error(error);
  }
};
