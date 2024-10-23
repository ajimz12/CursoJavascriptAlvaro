// fetching --> funcion de js que permite hacer funciones HTTP
// Funcion asincrona que devuelve una promesa

const urlApi = import.meta.env.VITE_API_URL;
const urlApiSW = import.meta.env.VITE_API_URL_SW;

// export const fetchingData = () => {
//   const response = fetch(urlemail});

//   response
//     .then((data) => {
//         if(!data.ok){
//             throw new Error(`Error fetching data: ${data.status}`);
//         }
//         return data.json();
//     })
//     .catch((error) => console.log(error));
// };

/**
 *  @description Funcion que hace peticion a API y devuelve informacion
 * @returns {Promise<Array>}
 */
export const fetchingDataPromise = () => {
  return fetch(urlApi)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => console.error(error));
};

export const fetchingDataAsyncAway = async () => {
  try {
    const response = await fetch(urlApi);

    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error al realizar la peticion asincrona");
  }
};

// Crear funcion llamada fetchingStarWarsPromise y fetchingStarWarsAsyncAway que le pase como parametro la URL de la API de star wars y me devuelva nombre, altura y URL de la imagen del personaje (en una tabla) PISTA: hay un easter egg en las imagenes.

export const getImageUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

/**
 * @description Funcion que hace peticion a la API de starWars y devuelve nombre y altura
 * @returns {Promise<Array>}
 */
export const fetchStarWarsPromise = () => {
  return fetch(urlApiSW)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los datos de la API");
      }
      return response.json();
    })
    .catch((error) => console.error(error));
};

/**
 * @description Funcion que hace peticion a la API de starWars y devuelve nombre y altura
 * @returns {Promise<Array>}
 */
export const fetchStarWarsAsync = async () => {
  try {
    const response = await fetch(urlApiSW);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }

    return await response.json();
  } catch (error) {
    throw new Error("Error al realizar la peticion asincrona");
  }
};
