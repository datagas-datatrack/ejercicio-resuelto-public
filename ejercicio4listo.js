/**
 * Dado dos arrays, devolver array con solo los elementos comunes entre ambos sin repetirlos y en orden ascendente
 *
 * Ejemplo:
 * elementosComunes([4, 5, 6, 7], [7, 8, 9, 7, 5, 5, 9, 4]) // Devuelve: [4, 5, 7]
 */

function elementosComunes(arrayUno, arrayDos) {
  const comunes = arrayUno.filter((uno) => arrayDos.includes(uno));

  return comunes.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
}

console.log(elementosComunes([6, 5, 4, 7], [7, 8, 9, 7, 5, 5, 9, 4]));
console.log(
  elementosComunes(
    ["Datagas", "Dager", "Barros", "Rutia", "Datatrack"],
    ["Rutia", "Datagas", "Datatrack"]
  )
);

/**
 *  Como hacerlo:
 * filtrar el primer array
 * usar includes con el segundo array usando cada valor del filter del primer array
 * hacer un sort para el orden
 *
 * Retornar los comunes
 */
