export const getAllPokemons = async (urlApi) => {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      throw new Error("No se puede acceder a los datos de la API");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};
