/**
 * @author Alvaro
 * @description Ejercicio 02
 */

import { getAllPokemons } from "./getAllPokemon";

const urlCarrito = `${import.meta.env.VITE_URL_API}/carrito`;

export const addPokemonToCart = async (urlApi, idPokemon) => {
  try {
    const pokemons = await getAllPokemons(urlApi);
    const response = await fetch(urlCarrito);
    if (!response.ok) throw new Error("Error al obtener datos del carrito");

    const carrito = await response.json();

    const pokemonEnCarrito = carrito.items.find(
      (item) => item.id === idPokemon
    );

    if (pokemonEnCarrito) {
      pokemonEnCarrito.cantidad += 1;
      pokemonEnCarrito.precioTotal =
        pokemonEnCarrito.precioUnitario * pokemonEnCarrito.cantidad;

      carrito.totalCarrito += pokemonEnCarrito.precioUnitario;

      console.log(
        `La cantidad del Pokémon ${pokemonEnCarrito.nombre} ha sido aumentada.`
      );
    } else {
      const pokemon = pokemons.find((pokemon) => pokemon.id === idPokemon);
      if (!pokemon) {
        console.error(`No se encontró el Pokémon con ID ${idPokemon}`);
        return;
      }

      const nuevoItem = {
        id: pokemon.id,
        nombre: pokemon.nombre,
        cantidad: 1,
        precioUnitario: pokemon.precio,
        precioTotal: pokemon.precio,
      };

      carrito.items.push(nuevoItem);
      carrito.totalCarrito += nuevoItem.precioTotal;

      console.log(`El Pokémon ${pokemon.nombre} ha sido agregado al carrito.`);
    }

    const actualizarCarrito = await fetch(urlCarrito, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carrito),
    });

    if (!actualizarCarrito.ok)
      throw new Error("Error al actualizar el carrito");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deletePokemon = async (urlApi, idPokemon) => {
  try {
    const allPokemon = await getAllPokemons(urlApi);

    const pokemonToDelete = allPokemon.find(
      (pokemon) => pokemon.id === idPokemon
    );

    if (pokemonToDelete) {
      const response = await fetch(`${urlApi}/${idPokemon}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("No se ha podido eliminar al pokemon");
      }
      console.log("Pokemon eliminado con exito");
    }
  } catch (err) {
    console.log(err);
  }
};


