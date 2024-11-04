import { fetchingDataPromise, fetchUserData } from "./helpers/script";

// fetchUserData()
// .then((data) => {
//     console.log(data);
// })
// .catch(err => console.log(err));

fetchingDataPromise()
.then((data) => {
    console.log(data);
})
.catch(err => console.log(err));