const sumar = (n1 = 0, n2 = 0) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "Error: Debe ingresar valores numéricos.";
  }
  return n1 + n2;
};

const array = (numeros = []) => {
  if (!Array.isArray(numeros)) {
    return "Error: Debe ingresar un array.";
  }

  let max = Math.max(...numeros);
  let min = Math.min(...numeros);

  //let total = array.reduce((a, b) => a + b, 0);
  let total = 0;

  // Comprobacion y total

  numeros.forEach((numero) => {
    if (typeof numeros[numero] !== "number") {
      return "Error: Todos los elementos del array deben ser numéricos.";
    }
    total += numeros[numero];
  });

  // Mediana
  numeros = numeros.sort((a, b) => a - b);
  let mitad = Math.floor(numeros.length / 2);

  let mediana;

  if (!numeros.length % 2) {
    mediana = (numeros[mitad - 1] + numeros[mitad + 2]) / 2;
  } else {
    mediana = numeros[mitad];
  }

  let cadena =
    "Maximo: " +
    max +
    ", Minimo: " +
    min +
    ", Media: " +
    total / numeros.length +
    ", Mediana: " +
    mediana;

  return cadena;
};

const findData = (array, data) => {
  const found = array.find((number) => number == data);
  return found !== undefined ? true : false;
};

/**
 * @description Funcion que recibe array de nombres y devuelve un nuevo array con las iniciales en mayúscula.
 * @param {array} array
 * @returns {array}
 */
const generateInitials = (array = []) => {
  array.map((name) => name.charAt(0).toUpperCase());
};

/**
 * @description Funcion que recibe coeficientes de una ecuacion de segundo grado y devuelve las soluciones.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {array}
 */
const solveEcuation = (a, b = 0, c = 0) => {
  if (a === 0 || a === undefined) return "La ecuación no es de segundo grado.";

  let discriminante = Math.pow(b, 2) - 4 * a * c;
  let x1, x2;

  if (discriminante > 0) {
    x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  } else if (discriminante === 0) {
    x1 = x2 = -b / (2 * a);
  } else {
    return "La ecuación no tiene solución real.";
  }
  return [x1, x2];
};

// Dado el siguiente array de datos:

// a) Obtener nombre de los estudiantes ordenados por edad de menor a mayor
const getStudentsByAge = (students = []) => {
  return students.sort((a, b) => a.age - b.age).map((student) => student.name);
};

// b) Buscar los estudiantes mayores de 20 años
const getStudentsTwenty = (students = []) => {
  return students
    .filter((student) => student.age > 20)
    .sort((a, b) => a.age - b.age)
    .map((student) => student.name);
};

// Dado la siguiente estructura de datos obtenidas de transacciones de bitcoin se pide:

// a) Obtener las direcciones que tengan un monto superior a 14
const getAddressesWithHigherMont = (transacciones = []) => {
  return transacciones
    .filter((transaccion) => transaccion.mont > 14)
    .map((transaccion) => transaccion.direccion);
};

// b) Calcular la media aritmetica de los montos
const calculateAverageMont = (transacciones = []) => {
  let totalMont = 0;
  transacciones.forEach((transaccion) => (totalMont += transaccion.mont));
  return totalMont / transacciones.length;
};

// Dados los siguientes bloques de un hash se pide:
// a) Comprobar la integridad de la transaccion, una transaccion es correcta si el hash coincide con el previo hash
const checkTransactionIntegrity = (transacciones = []) => {
  let integrity = true;
  transacciones.forEach((transaccion, i) => {
    if (i > 0) {
      if (transaccion.prevHash !== transacciones[i - 1].hash) {
        integrity = false;
      }
    }
  });
  return integrity;
};

function getName(names, number, topNumber) {
  if (!Array.isArray(names)) return "Error: Debe ingresar un array.";
  if (names === undefined || number == undefined || names.length == 0)
    return "Faltan parametros";

  if (number < 1 && number > topNumber) return "Numero no valido";

  let randomNumber = Math.floor(Math.random() * number) + 1;
  return names[randomNumber - 1];
}

// Dado el siguiento objeto (params objeto), devolver aquellos objetos cuyo promedio sea igual al 75%
const servers = [
  {
    name: "Servidor 1",
    usage: [60, 80, 90],
  },
  {
    name: "Servidor 2",
    usage: [50, 50, 50],
  },
  {
    name: "Servidor 3",
    usage: [70, 80, 90],
  },
  {
    name: "Servidor 4",
    usage: [60, 40, 30],
  },
];

const getServersMedia = (servers = []) => {
  return (
    servers.filter((server) => {
      server.usage.reduce((acc, cpu) => {
        return (acc += cpu);
      }, 0) / server.usage.length;
    }) > 75
  );
};

// Dado un array de clientes genera un resumen total de facturacion para cada cliente
/**
 *
 * @param {Object} facturas
 * @return {Object}
 */
const generarFacturaTotal = (facturas) => {
  return facturas.reduce((acc, factura) => {
    acc[factura.nombre] = (acc[factura.nombre] || 0) + factura.total;
    return acc;
  }, {});
};





export {
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
  generarFacturaTotal,
};
