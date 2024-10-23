import {
  fetchingDataPromise,
  fetchingDataAsyncAway,
  fetchStarWarsPromise,
  fetchStarWarsAsync,
  getImageUrl,
} from "./helpers/script";

// fetchingDataPromise()
//   .then((users) => {
//     users.forEach(({ username, email }) => {
//       console.table({ username, email });
//     });
//   })
//   .catch((error) => console.error(error));

// fetchingDataAsyncAway()
//   .then((users) => {
//     users.forEach((user) => {
//       const { username, address } = user;
//       const { city } = address;
//       console.table({ username, city });
//     });
//   })
//   .catch((error) => console.error(error));

fetchStarWarsPromise()
  .then((data) => {
    data.results.forEach(({ name, height, url }) => {
      const characterId = getImageUrl(url);
      const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

      console.table({ name, height, imageUrl });
    });
  })
  .catch((error) => console.error(error));

// fetchStarWarsAsync()
//   .then((data) => {
//     data.results.forEach(({ name, height }) => {
//       console.table({ name, height });
//     });
//   })
//   .catch((error) => console.error(error));
