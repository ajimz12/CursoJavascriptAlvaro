/**
 * @author Alvaro
 * @description Ejercicio 1: Desarrolla una función que recupere todas las cartas de Pokémon utilizando async/await y almacénalas en un Map para un acceso rápido por nombre.
 */

/**
 *
 * @param {String} urlApi
 * @returns {Map} Map de Pokemons
 */
export const getAllPokemons = async (urlApi) => {
  try {
    const mapNames = new Map();
    const response = await fetch(`${urlApi}pokemons`);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.status}`);
    }

    const dataPokemons = await response.json();
    dataPokemons.forEach((pokemon) => {
      mapNames.set(pokemon.nombre, pokemon);
    });
    return mapNames;
  } catch (err) {
    throw new Error(`Error al obtener los datos: ${err}`);
  }
};

export const deletePokemon = async (urlApi, name) => {
  try {
    const response = await fetch(`${urlApi}pokemons`);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.status}`);
    }

    const dataPokemons = await response.json();

    const findPokemon = dataPokemons.find(
      (pokemon) => pokemon.nombre.toLowerCase() === name.toLowerCase()
    );

    if (!findPokemon) {
      console.log("No se encuentra el pokemon especificado");
      return;
    }

    const { id: idToDelete } = findPokemon;
    const responseDelete = await fetch(`${urlApi}pokemons/${idToDelete}`, {
      method: "DELETE",
    });

    if (responseDelete.ok) {
      console.log("Pokemon eliminado con exito");
    }
  } catch (error) {
    console.log("Error al eliminar Pokemon");
  }
};

export const updatePokemon = async (urlApi, name) => {
  try {
    const response = await fetch(`${urlApi}pokemons`);
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${response.status}`);
    }

    const dataPokemons = await response.json();

    const findPokemon = dataPokemons.find(
      (pokemon) => pokemon.nombre.toLowerCase() === name.toLowerCase()
    );

    if (!findPokemon) {
      console.log("No se encuentra el pokemon especificado");
      return;
    }

    const { id: idToUpdate } = findPokemon;
    const newPrice = findPokemon.precio + 10;
    const responseUpdate = await fetch(`${urlApi}pokemons/${idToUpdate}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...findPokemon, precio: newPrice }),
    });

    if (responseUpdate.ok) {
      console.log("Pokemon actualizado con exito");
    }

    console.log(responseUpdate);
  } catch (error) {
    throw new Error(error);
  }
};

export const createPokemon = async (urlApi, pokemonInsert) => {
  try {
    const responsePokemons = await fetch(`${urlApi}pokemons`);
    if (!responsePokemons.ok) throw new Error("Error al obtener los pokemons");

    const allPokemons = await responsePokemons.json();
    const repeatedPokemon = allPokemons.find((pokemon) => {
      pokemon.nombre === pokemonInsert.nombre;
    });

    if (repeatedPokemon) {
      console.log("El pokemon ya existe");
      return;
    }

    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonInsert),
    });

    if (!response.ok) throw new Error("Error al insertar el pokemon");

    console.log("Pokemon insertado correctamente");
    
  } catch (error) {
    throw new Error(error);
  }
};
