import { getAllProducts } from "./helpers/a";
import { generateProductsMap } from "./helpers/ejercicio01";

const urlProducts = `${import.meta.env.VITE_URL_API}/productos`;

const dataProducts = getAllProducts(urlProducts)
  .then((productos) => productos)
  .catch((error) => console.log(error));

const map = generateProductsMap(dataProducts);
console.log(map);

localStorage.setItem("mapProductos", JSON.stringify([...map]));
