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
    }, 2000);
  });
};

// obtainUsersv2 (param = array usuarios almacenado en data) crear promesa que si no es un array o la logitud del array es 0, que genere un error (No hay usuarios), en caso contrario, que muestre nombre y edad.

export const obtainUsersv2 = (usuarios = []) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray || usuarios.length === 0) {
      reject(new Error("No hay usuarios"));
    }
    resolve(usuarios);
  });
};

// Se pide crear promesa que permita validar el acceso a mi pagina web si la respuesta es correcta muestre 'bienvenido [nombre]' y añadira en  accesos hora minuto y segundo a la que acaba de entrar, si password es incorrecta, da un mensaje de contraseña incorrecta.  dia mes año hora:minutos

export const validateAccess = (username, password, objUsuarios) => {
  console.log("Validando acceso...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      objUsuarios[username] && objUsuarios[username].password === password
        ? resolve({ username, password })
        : reject(new Error("Usuario o contraseña incorrecta"));
    }, 2000);
  });
};

