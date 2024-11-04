/**
 * @author Alvaro
 */

const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchUserData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Error al obtener los usuarios de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchingDataPromise = () => {
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al obtener los datos: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
};
