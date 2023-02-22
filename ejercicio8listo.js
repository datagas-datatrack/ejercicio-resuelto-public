/**
 * Dado un array, dividirlo en tantos sub-arrays
 * como sea necesario basándonos en un número que indique su tamaño
 *
 * Dividirlo en array x elementos
 *
 * Ejemplo
 * divideArray([7,8,9,10,5], 2)  // Devuelve: [[7,8],[9,10],[5]]
 */

function divideArray(arreglo_principal, numero_elementos) {
  let resultado = [];

  for (const elemento of arreglo_principal) {
    const ultimo = resultado[resultado.length - 1];

    if (!ultimo || ultimo?.length === numero_elementos) {
      resultado.push([elemento]);
    } else {
      resultado[resultado.length - 1].push(elemento);
    }
  }

  return resultado;
}

console.log(divideArray([7, 8, 9, 10, 5], 2));
console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5], 4));
console.log(divideArray([5, 2, 6, 8, 3, 1], 3));

/**
 *  Como hacerlo:
 * Inicializar variable con encabezado
 * Bucle del numero al cero
 * concatenar guion, N°, numero y salto de linea
 * restar 8
 * Retornar
 */
