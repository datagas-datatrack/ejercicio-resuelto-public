/**
 * Dado dos números devolver cuantos números impares, hay entre ellos
 *
 * Ejemplo:
 * impares(1, 100) // Devuelve: 49
 */

function impares(numeroUno, numeroDos) {
  let contador = 0;

  for (let i = numeroUno; i < numeroDos; i++) {
    if (i % 2 !== 0) contador++;
  }

  return contador;
}

console.log(impares(1, 100));
console.log(impares(51, 70));

/**
 *  Como hacerlo:
 * Bucle de numero 1 al numero2
 * Condición, si el resto es distinto a cero, es impar
 * Aumentar en uno el contador
 * Devolver el contador
 */
