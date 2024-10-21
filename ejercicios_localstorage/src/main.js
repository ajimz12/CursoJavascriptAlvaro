import {
  changeLocalStorageAge,
  checkLocalStorage,
  deleteLocalStorage,
  getLocalStorageNames,
  saveLocalStorage,
  saveLocalStorageMap,
  saveLocalStorageSet,
  saveNewObjects,
  validateObject,
} from "./helpers/scripts";

const arrayObjetos = [
  { nombre: "Alvaro", edad: 10 },
  { nombre: "Paco", edad: 20 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Manolo", edad: 40 },
];

// ------------ Testing de funcion saveLocalStorage -----------

// 1
//saveLocalStorage(arrayObjetos);

// 2
//checkLocalStorage(arrayObjetos);

// 3
//changeLocalStorageAge("Alvaro", 100);

// 4
//deleteLocalStorage("Paco");

// 6
// const setNumeros = new Set([1,2,3,4,5]);
// saveLocalStorageSet(setNumeros);

// 7
// const mapNumeros = new Map();
// mapNumeros.set('a', 1);
// mapNumeros.set('b', 2);
// mapNumeros.set('c', 3);
// mapNumeros.set('d', 4);
// mapNumeros.set('e', 5);

// saveLocalStorageMap(mapNumeros);

// 8
// getLocalStorageNames(arrayObjetos);

// 9
//validateObject(arrayObjetos);

// 10
saveNewObjects(arrayObjetos);


