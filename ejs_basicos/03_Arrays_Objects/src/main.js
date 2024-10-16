console.log("hola mundo");

// Ejercicio 15:
// Dado un array de objetos que representan estudiantes, usa filter y map para obtener los nombres de
// los estudiantes que tienen una calificación mayor o igual a 85. Métodos sugeridos: filter, map

const estudiantes = [
  { nombre: "Carlos", calificacion: 80 },
  { nombre: "Ana", calificacion: 90 },
  { nombre: "Luis", calificacion: 88 },
  { nombre: "María", calificacion: 70 },
];

const v1 = estudiantes
  .filter((estudiante) => estudiante.calificacion >= 85)
  .map((estudiante) => estudiante.nombre);

console.log(v1);

// v2.0

const v2 = estudiantes.reduce((acc, estudiante) => {
  estudiante.calificacion >= 85 ? acc.push(estudiante.nombre) : null;
  return acc;
}, []);

console.log(v2);

// Ejercicio 16:
// Dado un array de productos, usa reduce para calcular el costo total de todos los productos
// multiplicando el precio por la cantidad. Métodos sugeridos: reduce

const productos = [
  { nombre: "Teclado", precio: 25, cantidad: 2 },
  { nombre: "Mouse", precio: 15, cantidad: 3 },
  { nombre: "Monitor", precio: 200, cantidad: 1 },
];

const totalCost = productos.reduce((acc, producto) => {
  return acc + producto.precio * producto.cantidad;
}, 0);

console.log(totalCost);

// Ejercicio 17:
// Dado un array de números y un objeto que clasifique esos números en pares e impares, usa forEach
// para llenar el objeto con los números correspondientes. Métodos sugeridos: forEach

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const clasificacion = { pares: [], impares: [] };

numeros.forEach((numero) => {
  numero % 2 == 0
    ? clasificacion.pares.push(numero)
    : clasificacion.impares.push(numero);
});

console.table(clasificacion);

// Ejercicio 18:
// Dado un objeto de empleados con sus salarios, usa Object.entries y reduce para calcular el salario
// promedio. Métodos sugeridos: Object.entries, reduce

const empleados = {
  Juan: 1000,
  Maria: 1200,
  Pedro: 1500,
  Ana: 1100,
};

const salarioPromedio =
  Object.entries(empleados).reduce((acc, [nombre, salario]) => {
    return acc + salario;
  }, 0) / Object.entries(empleados).length;

console.log(salarioPromedio);

// Ejercicio 19:
// Dado un array de strings, usa reduce y split para contar cuántas veces aparece una letra específica en
// todos los strings. Métodos sugeridos: reduce, split

const palabras = ["hola", "mundo", "javascript", "es", "genial"];
const letraABuscar = "a";

const buscarLetra = palabras.reduce((acc, palabra) => {
  const ocurrencias = palabra
    .split("")
    .filter((letra) => letra === letraABuscar).length;
  return acc + ocurrencias;
}, 0);

console.log(buscarLetra);

// Ejercicio 20:
// Dado un array de objetos que representan compras con propiedades fecha y monto, usa sort para
// ordenar las compras por fecha (más reciente primero). Métodos sugeridos: sort

const compras = [
  { fecha: new Date(2023, 9, 21), monto: 200 },
  { fecha: new Date(2022, 1, 13), monto: 300 },
  { fecha: new Date(2023, 5, 10), monto: 150 },
];

const ordenarCompras = compras.sort((a, b) => {
  return b.fecha - a.fecha;
});

console.log(ordenarCompras);

// Ejercicio 21:
// Dado un array de objetos que representan tareas con una propiedad completada, usa some y every
// para verificar si hay alguna tarea incompleta y si todas están completas. Métodos sugeridos: some, every

const tareas = [
  { tarea: "Lavar los platos", completada: true },
  { tarea: "Sacar la basura", completada: true },
  { tarea: "Comprar comida", completada: true },
];

const checkTasks1 = tareas.some((tarea) => {
  return !tarea.completada;
});

const checkTasks2 = tareas.every((tarea) => {
  return tarea.completada;
});

console.log(checkTasks1, checkTasks2);

// Ejercicio 22:
// Dado un array de objetos con propiedades nombre y puntuacion, usa reduce para encontrar el objeto
// con la puntuación más alta. Métodos sugeridos: reduce

const jugadores = [
  { nombre: "Carlos", puntuacion: 200 },
  { nombre: "Ana", puntuacion: 180 },
  { nombre: "Luis", puntuacion: 150 },
];

const getHigherScore = jugadores.reduce((acc, jugador) => {
  return jugador.puntuacion > acc.puntuacion ? jugador : acc;
}, jugadores[0]);

console.log(getHigherScore);

// Ejercicio 23:
// Dado un objeto que contiene arrays como valores, usa Object.values y flat para obtener todos los
// elementos de esos arrays en un solo array. Métodos sugeridos: Object.values, flat

const categorias = {
  frutas: ["manzana", "plátano", "pera"],
  verduras: ["lechuga", "tomate"],
  carnes: ["pollo", "cerdo"],
};

const juntarArrays = Object.values(categorias).flat();

console.log(juntarArrays);

// Ejercicio 24
// Dado un array de objetos con propiedades nombre y edad, usa filter, map y reduce para obtener la
// suma de las edades de las personas cuyo nombre empieza con una vocal. Métodos sugeridos: filter,
// map, reduce

const personas = [
  { nombre: "Oscar", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 28 },
  { nombre: "Elena", edad: 22 },
];

const edadesInicialMayus = personas.reduce((acc, persona) => {
  persona.filter((letra) => {});
});
