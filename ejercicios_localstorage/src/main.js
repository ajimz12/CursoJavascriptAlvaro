import { changeLocalStorageAge, saveLocalStorage } from "./helpers/scripts";

const arrayObjetos = [
  { nombre: "Alvaro", edad: 34 },
  { nombre: "Paco", edad: 20 },
];

// ------------ Testing de funcion saveLocalStorage -----------

saveLocalStorage(arrayObjetos);
changeLocalStorageAge("Alvaro", 100);

//saveLocalStorage();
