/**
 * @author Alvaro
 * @description Ejercicios del Examen
 */

import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  updatePokemon,
} from "./helpers/ejercicio01";

const urlApi = import.meta.env.VITE_URL_API;

const init = async () => {
  // -------------------- Ejercicio 01 ---------------
  // const ejercicio01 = await getAllPokemons(urlApi);
  // console.log("Ejercicio 1 ->", ejercicio01);

  // await deletePokemon(urlApi, "Squirtle");

  // await updatePokemon(urlApi, "Pikachu");

  // await createPokemon(urlApi, pokemon);

  // -------------------- Ejercicio 02 ---------------
};

init();
