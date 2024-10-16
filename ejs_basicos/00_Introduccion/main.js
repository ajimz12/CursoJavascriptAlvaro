import {
  sumar,
  array,
  findData,
  generateInitials,
  solveEcuation,
  getStudentsByAge,
  getStudentsTwenty,
  getAddressesWithHigherMont,
  calculateAverageMont,
  checkTransactionIntegrity,
  getName,
  getServersMedia,
  generarFacturaTotal
} from "./helpers/script.js";

//console.log(sumar(1,2));
//console.log(array([1, 2, 3, 4, 5]));
//let nombres = ["DESDES", "FRGT", "ERERFE"];

//console.log(generateInitials(nombres));
//console.log(solveEcuation(1 ,2,1));

const students = [
  { name: "Carlos", age: 18 },
  { name: "Juan", age: 20 },
  { name: "Maria", age: 45 },
  { name: "John", age: 25 },
];

console.log(getStudentsTwenty(students));
console.log(getStudentsByAge(students));

const transacciones = [
  { id: 1, mont: 8, direccion: "0xabc" },
  { id: 2, mont: 15, direccion: "0xdef" },
  { id: 3, mont: 22, direccion: "0xjkl" },
  { id: 4, mont: 11, direccion: "0xmnop" },
];

console.log(getAddressesWithHigherMont(transacciones));
console.log(calculateAverageMont(transacciones));

const transaccionesHash = [
  { id: 1, hash: "1bhgx", prevHash: null },
  { id: 2, hash: "0oifg", prevHash: "1bhgx" },
  { id: 3, hash: "9ibhf", prevHash: "0oifg" },
  { id: 4, hash: "4gyfg", prevHash: "9ibhf" },
];

console.log(checkTransactionIntegrity(transaccionesHash));

const names = ["Paco", "Jesus", "Manuel", "Jose", "Fran"];

console.log(getName(names, 3));

const facturas = [
  {
    nombre: "Luis",
    total: 300,
  },
  {
    nombre: "Sara",
    total: 100,
  },
  {
    nombre: "Sara",
    total: 100,
  },
  {
    nombre: "Luis",
    total: 300,
  },
]

console.log(generarFacturaTotal(facturas));