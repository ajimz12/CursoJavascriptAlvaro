import { fetchingDataJSON, getRandomNumber } from "./helpers/script";

const urlApi = import.meta.env.VITE_API_URL;
const arrayRandomNumbers = [];

for (let i = 1; i < 20; i++) {
  arrayRandomNumbers.push(getRandomNumber(1, 10));
}

document
  .getElementById("fetch-users-async")
  .addEventListener("click", async () => {
    for (const id of arrayRandomNumbers) {
      await fetchingDataJSON(urlApi, id);
    }
  });
