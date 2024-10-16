# Manual Promesas

### 1. Estado de las promesas

**Pending:** Ni esta rechazada ni esta cumplida.
**Cumplida (Fullfilled):** Accion realizada con exito.
**Rechazada (Reject):** Accion rechazada.

### 2. Tipos de Promesas

#### a) Creación de Promesas

- Creacion de la Promesa:

  ```javascript

      const miPromesa = new Promise((resolve, reject) => {
          // Aqui va el código asíncrono
          if(/* La condicion se resuelve correctamente*/) {
              resolve(valor); // Resuelve la promesa correctamente
          } else {
              reject(error); // Rechaza la promesa y devuelve error
          }
      });

  ```

- Consumo de la Promesa:

  ```javascript
  miPromesa
    .then((valor) => {
      // Aqui va el código si la promesa se resuelve correctamente
    })
    .catch((error) => {
      // Aqui va el código si se rechaza la promesa generando un error
    });
  ```
