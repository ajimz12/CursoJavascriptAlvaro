/**
 * @author Alvaro
 * @description Ejercicios con objetos
 */

// Ejercicio 8:
// Dado un objeto que representa un producto, usa Object.keys para obtener las claves del objeto y
// Object.values para obtener sus valores.

const producto = { nombre: "Laptop", precio: 1000, stock: 5 };
console.log(Object.keys(producto), Object.values(producto));

// Ejercicio 9:
// Dado un objeto que representa un coche, usa Object.entries para convertirlo en un array de pares
// clave-valor.

const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };
console.log(Object.entries(coche));

// Ejercicio 10:
// Dado un objeto de configuración, usa Object.assign para crear una copia del objeto con una
// propiedad adicional.

const configuracion = { tema: "oscuro", idioma: "español" };
const additional = { encriptacion: "UTF-8" };

console.log(Object.assign(configuracion, additional));

// Ejercicio 11:
// Crea un objeto que combine dos objetos dados usando el spread operator (...)

const usuario = { nombre: "Ana", edad: 30 };
const detalles = { ciudad: "Madrid", ocupacion: "Ingeniera" };

const combinadoConSpread = { ...usuario, ...detalles };
console.log(combinadoConSpread);

// Ejercicio 12:
// Dado un objeto con varias propiedades, usa delete para eliminar una propiedad específica

const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
delete libro.titulo;
console.log(libro);

// Ejercicio 13:
// Dado un objeto que representa una cuenta de usuario, usa hasOwnProperty para comprobar si tiene
// una propiedad específica.

const cuenta = { usuario: "Juan", email: "juan@mail.com" };
console.log(cuenta.hasOwnProperty("usuario"));

// Ejercicio 14:
// Dado un objeto que representa un pedido, convierte todas sus claves a mayúsculas utilizando
// Object.keys y reduce.

const pedido = { producto: "Silla", cantidad: 4, precio: 50 };
const convertToMayus = (pedido) => {
  const claves = Object.keys(pedido);
  return claves.reduce((acc, clave) => {
    acc[clave.toUpperCase()] = pedido[clave];
    return acc;
  }, {});
};

console.log(convertToMayus(pedido));

