/**
 * @author Alvaro
 */

const urlApi = import.meta.env.VITE_URL_API;

const arrayPokemons = [
  "Pikachu",
  "Charmander",
  "Bulbasaur",
  "Squirtle",
  "Mewtwo",
];

// Dado un array de nombres, usar PromiseAll para obtener de cada pokemon la habilidad que tiene la puntuacion mas alta.
export const getPokemonPromiseAll = async (arrayPokemonsName) => {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) throw new Error("Error al obtener los pokemons");
    const dataPokemon = await response.json();

    const promises = arrayPokemonsName.map(async (name) => {
      const findPokemon = dataPokemon.find((pokemonData) => {
        pokemonData.nombre.toLowerCase() === name.toLowerCase();
      });

      if (!findPokemon) throw new Error("Error al obtener el pokemon");
    //   const response = await fetch(`${urlApi}pokemons/${findPokemon.id}`);
    });

    const resolvedPromises = await Promise.all(promises);
    console.log(resolvedPromises);
  } catch (error) {
    throw new Error(error);
  }
};

// export const getPokemonPromiseAllSettled = async (arrayPokemonsName) => {
  
// };
