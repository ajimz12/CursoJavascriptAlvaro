/**
 * @author Alvaro
 * @description Repaso Examen 06/10/24
 */

import { getAllProducts } from "./a";

// a) Crear una funcion que le pase como parametro los productos (array de productos) y que devuelva un Map de todos los productos cuya clave sea el nombre del producto y que almacene el precio del producto, la cantidad, un array con las tallas y otro array con los colores.

const urlProducts = `${import.meta.env.VITE_URL_API}/productos`;

const dataProducts = getAllProducts(urlProducts)
  .then((productos) => productos)
  .catch((error) => console.log(error));

export const generateProductsMap = async () => {
  const mapProductos = new Map();
  dataProducts.forEach(({ nombre, precio, stock, detalles }) => {
    const clave = nombre;
    const valor = {
      precio: precio,
      cantidad: stock.cantidad,
      tallas: detalles["tallas disponibles"],
      colores: detalles.colores,
    };
    mapProductos.set(clave, valor);
  });
  return mapProductos;
};

// b) Crear una funcion que le pase como parametro un Map y una clave y almacene el Map dentro del localStorage con esa clave siempre y cuando la clave no exista ya.
