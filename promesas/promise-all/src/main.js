import { fetchAllUsersWithPromiseAll, fetchAllUsersWithPromiseSettled } from "./helpers/script";

const array = [1,2,3,4,5,6,7,8,9,10];

fetchAllUsersWithPromiseAll(array);
// fetchAllUsersWithPromiseSettled(array);