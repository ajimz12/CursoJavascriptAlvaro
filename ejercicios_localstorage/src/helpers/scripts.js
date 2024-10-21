/**
 * @author Alvaro
 */

// 1. Guardar y Recuperar un Array de Objetos: Crea una función que acepte
// un array de objetos (con nombre y edad), guarde este array en
// LocalStorage y luego lo recupere. Verifica si el array ya está guardado y
// evita duplicados.

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
  localStorage.hasOwnProperty("arrayObjects")
    ? console.log(JSON.parse(localStorage.getItem("arrayObjects")))
    : console.log("La clave no existe");
};

// 2. Validar Datos antes de Guardar en LocalStorage: Crea una función que
// acepte un array de objetos, donde cada objeto tiene nombre y edad .
// Valida que nombre sea una cadena no vacía y edad sea un número
// mayor que 0 antes de almacenarlo en LocalStorage

export const checkLocalStorage = (arrayObjetos) => {
  if (!Array.isArray(arrayObjetos)) {
    throw new Error("El argumento no es un array");
  }

  arrayObjetos.forEach((objeto) => {
    if (objeto.nombre === undefined || objeto.edad <= 0) {
      throw new Error("Nombre o edad son incorrectos");
    }
  });

  let message = "";
  localStorage.hasOwnProperty("arrayObjects")
    ? (message = "La clave ya existe")
    : localStorage.setItem("arrayObjects", JSON.stringify(arrayObjetos));
  message ? console.log(message) : console.log("Guardado correctamente");
};

// 3. Actualizar un Objeto dentro del Array en LocalStorage: Crea una
// función que permita actualizar la edad de una persona en un array de
// objetos almacenado en LocalStorage , buscando a la persona por
// nombre.

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

// 4. Eliminar un Objeto del Array en LocalStorage: Crea una función que
// permita eliminar un objeto del array almacenado en LocalStorage ,
// buscando por el nombre de la persona

export const deleteLocalStorage = (nombre = "") => {
  if (!localStorage.hasOwnProperty("arrayObjects")) {
    throw new Error("El argumento no es un array");
  }
  const object = JSON.parse(localStorage.getItem("arrayObjects"));

  const newObject = object.filter((persona) => persona.nombre !== nombre);
  localStorage.setItem("arrayObjects", JSON.stringify(newObject));
};

// 6. Guardar un Set en LocalStorage: Crea una función que acepte un Set
// de números, lo convierta a un array para almacenarlo en LocalStorage ,
// y luego lo recupere y lo convierta nuevamente en un Set.

export const saveLocalStorageSet = (setNumeros) => {
  localStorage.setItem("setNumeros", JSON.stringify(Array.from(setNumeros)));

  localStorage.hasOwnProperty("setNumeros")
    ? console.log(JSON.parse(localStorage.getItem("setNumeros")))
    : console.log("La clave no existe");
};

// 7. Guardar y Recuperar un Map en LocalStorage: Crea una función que
// acepte un Map , lo convierta a un array de pares clave-valor, lo almacene en
// LocalStorage y luego lo recupere y vuelva a convertir en Map.

export const saveLocalStorageMap = (mapNumeros) => {
  localStorage.setItem(
    "mapNumeros",
    JSON.stringify(Array.from(mapNumeros.entries()))
  );

  localStorage.hasOwnProperty("mapNumeros")
    ? console.log(JSON.parse(localStorage.getItem("mapNumeros")))
    : console.log("La clave no existe");
};

// 8. Desestructuración de Objetos desde LocalStorage: Crea una función
// que recupere un array de objetos desde LocalStorage y use la
// destructuración para acceder a los nombres de las personas y mostrar solo
// los nombres en el DOM.

export const getLocalStorageNames = (arrayObjetos) => {
  if (!Array.isArray(arrayObjetos)) {
    throw new Error("El argumento no es un array");
  }
  const personas = JSON.parse(localStorage.getItem("arrayObjects"));

  personas.forEach(({ nombre }) => {
    console.log(nombre);
  });
};

// 9. Validación de Datos con Operadores Ternarios: Crea una función que
// acepte un array de objetos, donde cada objeto tiene nombre y edad . Si
// algún objeto tiene un nombre vacío o una edad menor a 18, no lo
// almacena en LocalStorage y devuelve un mensaje indicando qué
// objetos son inválidos

export const validateObject = (arrayObjetos) => {
  if (!Array.isArray(arrayObjetos)) {
    throw new Error("El argumento no es un array");
  }

  const invalidos = arrayObjetos.filter(
    ({ nombre, edad }) => nombre === "" || edad < 18
  );

  const validos = arrayObjetos.filter(
    ({ nombre, edad }) => nombre !== "" && edad >= 18
  );

  invalidos.forEach(({ nombre, edad }) => {
    throw new Error(`Objeto inválido: nombre: ${nombre}, edad: ${edad}`);
  });

  if (validos.length) {
    localStorage.setItem("objetosValidos", JSON.stringify(validos));
    console.log("Objetos válidos guardados en localStorage");
  }

  if (invalidos.length) {
    return false;
  }

  return true;
};

// 10. Actualización Condicional en LocalStorage con Funciones: Crea una
// función que acepte un array de objetos y almacene solo aquellos objetos
// cuyo nombre no esté ya almacenado en LocalStorage . Usa una función
// para verificar la existencia y almacenar los nuevos objetos.

export const saveNewObjects = (arrayObjetos) => {
  if (!Array.isArray(arrayObjetos))
    throw new Error("El argumento no es un array");

  arrayObjetos.forEach(({ nombre, edad }) => {
    if (localStorage.getItem(nombre) === null) {
      localStorage.setItem(nombre, JSON.stringify({ nombre, edad }));
      console.log(`Objeto almacenado: nombre: ${nombre}, edad: ${edad}`);
    } else {
      throw new Error(`El objeto con nombre: ${nombre} ya existe.`);
    }
  });
};
