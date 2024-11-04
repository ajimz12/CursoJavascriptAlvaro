/**
 * @description Funcion que devuelve todos los productos de la API
 * @param {string} urlApi
 * @returns <Promise>
 */

export const getAllProducts = async (urlApi) => {
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetching products", error);
  }
};
