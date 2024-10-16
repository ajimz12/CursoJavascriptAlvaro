// Ejercicio 2:
//  Dado un array de strings, usa reduce para concatenar todos los strings en una sola frase con espacios
// entre ellos.

const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];

const concatPalabras = palabras.reduce((acc, palabra) => {
  return `${acc} ${palabra}`
}, "");

console.log(concatPalabras);

// Ejercicio 3:
// Dado un array de números, usa some para verificar si existe algún número mayor a 100 y every para
// comprobar si todos los números son positivos

const numeros = [1, -50, 175, 99];


const greaterThanHundred = numeros
.some((n) => n > 100); 

const positiveNumbers = numeros
.every((n) => n >= 0);

console.log(greaterThanHundred, positiveNumbers);

// Ejercicio 4:
// Dado un array de números desordenados, usa sort para ordenarlos de mayor a menor.

const numeros2 = [5, 1, 8, 3, 10, 2];

const orderNumbers = numeros2.sort((a, b) => b - a)
console.log(`${numeros2} ordenados de mayor a menor: ${orderNumbers}`);

// Ejercicio 5:
// Usa el método find para obtener el primer número divisible por 3 de un array, y findIndex para
// obtener su índice.

const numeros3 = [4, 5, 9, 12, 7];

const numeroDivisiblePor3 = numeros3.find((n) => n % 3 === 0);
const encontrarIndice = numeros3.findIndex((n) => n % 3 === 0);


console.log(numeroDivisiblePor3, encontrarIndice);

// Ejercicio 7:
// Dado un array de números, usa slice para obtener los primeros 3 números y splice para eliminar los
// dos últimos elementos del array original.

const numeros4 = [10, 20, 30, 40, 50, 60];

const obtener3Primeros = numeros4.slice(0,3);
const eliminar2Ultimos = numeros4.splice(-2);

console.log(obtener3Primeros, eliminar2Ultimos, numeros4);









