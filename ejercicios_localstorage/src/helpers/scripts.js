/**
 * @author Alvaro
 */

// 1. Crear una funcion que reciba array de objetos, cada objeto tiene de clave nombre y edad, se pide guardar ese objeto en el localstorage, cargar ese objeto del locastorage y print en el console.log. Asegurate de verificar que el objeto este almacenado en localstorage antes de guardarlo

/**
 * @description hola
 * @param {Array<Object>} arrayObjetos
 * @returns {void}
 */
export const saveLocalStorage = (arrayObjetos) => {
  if (!Array.isArray(arrayObjetos)) {
    throw new Error("El argumento no es un array");
  }

  let message = "";
  localStorage.hasOwnProperty("arrayObjects")
    ? (message = "La clave ya existe")
    : localStorage.setItem("arrayObjects", JSON.stringify(arrayObjetos));
  message ? console.log(message) : console.log("Guardado correctamente");

  // Cargar objeto del locastorage y print en el console.log
  //   localStorage.hasOwnProperty("arrayObjects")
  //     ? console.log(JSON.parse(localStorage.getItem("arrayObjects")))
  //     : console.log("La clave no existe");
};

// 2. Crear una funcion que le pase como parametro un nombre y una edad, busque en localstorage ese nombre y que le cambie la edad.

export const changeLocalStorageAge = (nombre, edad) => {
  if (!localStorage.hasOwnProperty("arrayObjects")) {
    throw new Error("El argumento no es un array");
  }
  const obj = JSON.parse(localStorage.getItem("arrayObjects"));

  const objMap = obj.map((objeto) => {
    if (objeto.nombre === nombre) {
      return { ...objeto, edad: edad };
    }
    return objeto;
  });
  localStorage.setItem("arrayObjects", JSON.stringify(objMap));
};
