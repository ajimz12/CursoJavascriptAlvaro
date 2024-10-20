import { saveTask } from "./helpers/scripts";
import { task1, key } from "./data/data.js";

saveTask(task1, key)
  .then((data) => {
    localStorage.setItem(key, JSON.stringify(task1));
    console.log("Tarea almacenada con exito!");
  })
  .catch((error) => console.log(error.message));
