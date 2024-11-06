import { getAllPokemons } from "./getAllPokemon";

export const getByHabilidad = async (urlApi, habilidadesBuscada) => {
  try {
    const pokemons = await getAllPokemons(urlApi);

    const mapPokemon = new Map();
    const setHabilidades = new Set(habilidadesBuscada);

    pokemons.forEach((pokemon) => {
      const habilidadesPokemon = pokemon.habilidades.map(
        (habilidad) => habilidad.nombre
      );
      const habilidadesEncontradas = habilidadesPokemon.filter((habilidad) => {
        setHabilidades.has(habilidad);
      });

      if (habilidadesEncontradas.length > 0) {
        mapPokemon.set(pokemon.id, pokemon);
      }
    });
    return mapPokemon;
  } catch (error) {
    console.log(error);
  }
};
