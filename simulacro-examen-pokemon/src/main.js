/**
 * @author Alvaro
 * @description Ejercicios del Examen
 */

import { getAllPokemonMap } from "./helpers/ejercicio01";
import { addPokemonToCart, deletePokemon } from "./helpers/ejercicio02";
import { getByHabilidad } from "./helpers/ejercicio03";

const urlApi = import.meta.env.VITE_URL_API;

const init = async () => {
  // --------- Ejercicio 1 ---------
  // const allPokemonMap = await getAllPokemonMap(`${urlApi}/pokemons`);
  // localStorage.setItem("allPokemon", JSON.stringify([...allPokemonMap]));
  // console.log("Ejercicio 1 --> ", allPokemonMap);

  // ------- Ejercicio 2 --------

  // await addPokemonToCart(`${urlApi}/pokemons`, "10");
  // await deletePokemon(urlApi, "3");

  // ------- Ejercicio 3 -----
  const habilidades = ["Impactrueno", "Vuelo", "Latigazo"];

  const habilidadPokemons = getByHabilidad(`${urlApi}/pokemons`, habilidades);

  habilidadPokemons.forEach((pokemon, id) => {
    console.log(`ID: ${id}, Nombre: ${pokemon.nombre}`);
  });
};

init();
