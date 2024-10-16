import { countVotes, countWords, findDuplicated, getArrayWithoutDuplicated, groupUsersByRol } from "./helpers/script";

const numeros1 = [1, 2, 3, 4, 5];
const numeros2 = [6, 2, 9, 4, 7];

console.log(findDuplicated(numeros1, numeros2)); 

console.log(getArrayWithoutDuplicated(numeros1, numeros2));

const users = [
    { nombre: "Ana", rol: "admin" },
    { nombre: "Juan", rol: "usuario" },
    { nombre: "Luis", rol: "admin" },
    { nombre: "Marta", rol: "usuario" },
    { nombre: "Pedro", rol: "usuario" },
  ];

//   console.log(groupUsersByRol(users));

const txt = "Hola, adios, javascript, Hola, Hola, adios, adios";

console.log(countWords(txt));

const votes = ['a','c','b','b','c','c'];

console.log(countVotes(votes));