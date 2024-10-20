// Crear un TO-DO list que ejemplifique una tarea asincrona al guardar en el localStorage las tareas. Se pide crear una funcion que pase como parametro una tarea y la clave de localStorage que automaticamente la almacene dentro del localStorage en el nombre 'Tareas {nombre}'. Si la clave no existe se muestra mensaje de error.

export const saveTask = (task, key) => {
  return new Promise((resolve, reject) => {
    console.log("Almacenando tareas...");
    setTimeout(() => {
      if (!localStorage.hasOwnProperty(key)) {
        reject(new Error("La clave no existe"));
      }
      resolve(JSON.parse(localStorage.getItem(key)));
    }, 2000);
  });
};

// Crear otra funcion asincrona (params: nombre de la tarea y clave donde se guardara en localStorage) que si la tarea no existe la guarda en el localStorage, en caso de que si exista, preguntara si quiero completarla. Cada vez que insertemos o completemos una, mostraremos todas las tareas.
