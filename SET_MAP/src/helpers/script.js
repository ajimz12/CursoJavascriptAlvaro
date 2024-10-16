/**
 * @author Alvaro
 */

// MAPS

// 1. Array de usuarios | Agrupar usuarios por su rol (map)
export const groupUsersByRol = (users = []) => {
  const usersByRol = new Map();

  users.forEach((user) => {
    usersByRol.get(user.rol).push(user);
    return users;
  });
};

// 2. Dado una cadena de texto, usa map para contar cuantas veces aparece cada palabra
export const countWords = (string = "") => {
  const mapaPalabras = new Map();

  const palabras = string.toLowerCase().match(/\b\w+\b/g);

  palabras.forEach((palabra) => {
    if (mapaPalabras.has(palabra)) {
      mapaPalabras.set(palabra, mapaPalabras.get(palabra) + 1);
    } else {
      mapaPalabras.set(palabra, 1);
    }
  });

  return mapaPalabras;
};

// 3. Dado un array de votos [a,c,b,b,c...], usa map para contar cuantos votos tiene cada opcion
export const countVotes = (votes = []) => {
  const mapVotes = new Map();

  votes.forEach((vote) => {
    if (mapVotes.has(vote)) {
      mapVotes.set(vote, mapVotes.get(vote) + 1);
    } else {
      mapVotes.set(vote, 1);
    }
  });

  return mapVotes;
};


// SETS

// 4. Dados dos arrays de numeros, encuentra los numeros duplicados en ambos arrays
export const findDuplicated = (arr1 = [], arr2 = []) => {
  const set = new Set(arr1);
  const set2 = new Set(arr2);

  return [...set].filter((numero) => set2.has(numero));
};

// 5. Dados dos arrays de numeros, genera nuevo array que contenga ambos arrays sin duplicados
export const getArrayWithoutDuplicated = (arr1 = [], arr2 = []) => {
  return [...new Set([...arr1, ...arr2])];
};
