import { fetchingDataJSON, getRandomNumber } from "./helpers/script";

const urlApi = import.meta.env.VITE_API_URL;
const arrayRandomNumbers = [];

for (let i = 0; i < 20; i++) {
  arrayRandomNumbers.push(getRandomNumber(1, 10));
}

document
  .getElementById("fetch-users-async")
  .addEventListener("click", async () => arrayRandomNumbers.forEach((user) => {
    console.log(user);
    fetchingDataJSON(urlApi, user);
  }));
