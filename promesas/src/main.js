import { usersLogin } from "./data/data";
import { obtainUsers, validateAccess } from "./helpers/script";

obtainUsers()
  .then((users) => {
    users.forEach((user) => {
      setTimeout(() => {
        console.log(`Usuario: ${user.name} ----> ${user.age}`);
      }, 1000);
    });
  })
  .catch((error) => console.error(error));

validateAccess("username1", "1234")
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

  console.log(usersLogin);
