const apiUrl = import.meta.env.VITE_URL_API;

export async function fetchAllUsersWithPromiseAll(arrayId) {
  console.time("Tiempo de ejecucion de todas las promesas All");
  const arrayPromise = [];
  arrayId.forEach((id) => {
    arrayPromise.push(
      fetch(`${apiUrl}${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error:", error);
        })
    );
  });

  const results = await Promise.all(arrayPromise);
  console.log(results);
}

export async function fetchAllUsersWithPromiseSettled(arrayId) {
  console.time("Tiempo de ejecucion de todas las promesas AllSettled");
  const arrayPromise = [];
  arrayId.forEach((id) => {
    arrayPromise.push(
      fetch(`${apiUrl}${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error("Error:", error);
        })
    );
  });

  const results = await Promise.allSettled(arrayPromise);
  console.log(`Resultado de todas las promesas AllSettled: ${results}`);
}
