import { users, usersLogin } from "../data/data";

// Obtener datos de los usuarios
export const obtainUsers = () => {
  return new Promise((resolve, reject) => {
    // Simular que se tardan 2 secs en obtener los datos
    console.log("Cargando...");
    setTimeout(() => {
      if (!Array.isArray(users)) {
        reject("Error al obtener los usuarios");
      } else {
        resolve(users);
      }
    }, 0);
  });
};

// Se pide crear promesa que permita validar el acceso a mi pagina web si la respuesta es correcta muestre 'bienvenido [nombre]' y añadira en  accesos hora minuto y segundo a la que acaba de entrar, si password es incorrecta, da un mensaje de contraseña incorrecta.

export const validateAccess = (username, password) => {
  return new Promise((resolve, reject) => {
    const user = usersLogin[username];
    if (!user) {
      reject("Usuario no encontrado");
    } else if (user.password === password) {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      user.access.push(time);
      resolve(`Bienvenido ${username}, hora de acceso: ${time}`);
    } else {
      reject("Contraseña incorrecta");
    }
  });
};
