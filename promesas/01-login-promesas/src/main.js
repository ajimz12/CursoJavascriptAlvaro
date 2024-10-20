import { usersList, usersLogin } from "./data/data";
import { obtainUsers, obtainUsersv2, validateAccess } from "./helpers/script";

// obtainUsers()
//   .then((users) => {
//     users.forEach((user) => {
//       setTimeout(() => {
//         console.log(`Usuario: ${user.name} ----> ${user.age}`);
//       }, 1000);
//     });
//   })
//   .catch((error) => console.error(error));

// obtainUsersv2(usersList)
//   .then((users) => {
  //     users.forEach(({ username, age }) => {
    //       console.log(`${username} ---> ${age}`);
    //     });
    //   })
    //   .catch((error) => console.log(error));
    
    
    validateAccess("username1", "1234", usersLogin)
      .then(({username, password}) => { 
        const user = usersLogin[username];
        const date = new Date();
        const time = `Dia: ${date.getDay()}, Mes: ${date.getMonth()}, Año: ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
        user.access.push(time);
        console.log(`Bienvenido ${username}, Contraseña ${password} Acceso: ${time}`);
      })
      .catch((error) => console.error(error));