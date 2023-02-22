/**
 * Dado un número mostrar todo los números desde ese al 0 de 8
 * en una lista con guiones desde cada número debe empezar por n°
 *
 * Ejemplos:
 * hastaCero(100)
 * --- Del 100 al 0 ----
 * - n°100
 * - n°92
 * - n°84
 * - n°76
 * - n°68
 * - n°60
 * - n°52
 * - n°44
 * - n°36
 * - n°28
 * - n°20
 * - n°12
 * - n°4
 * --- Fin ----
 */

function hastaCero(numero) {
  let resultado = `--- Del ${numero} al 0 ----\n`;

  while (numero > 0) {
    resultado += `- n°${numero}\n`;
    numero -= 8;
  }

  resultado += "--- Fin ---";
  return resultado;
}

console.log(hastaCero(100));
console.log(hastaCero(160));
console.log(hastaCero(66));

/**
 *  Como hacerlo:
 * Inicializar variable con encabezado
 * Bucle del numero al cero
 * concatenar guion, N°, numero y salto de linea
 * restar 8
 * Retornar
 */
