import { fetchingDataJSON, getRandomNumber } from "./helpers/script";

const urlApi = import.meta.env.VITE_API_URL;
const arrayRandomNumbers = [];

for (let i = 1; i < 20; i++) {
  arrayRandomNumbers.push(getRandomNumber(1, 10));
}

arrayDataJSON = [];

arrayRandomNumbers.forEach((id) => {
    
});

fetchingDataJSON(urlApi, 1)
  .then((user) => {
    const { username, address, company } = user;
    const { city } = address;
    const { name } = company;
    console.table({ username, city, name });
  })
  .catch((err) => console.error(err));
