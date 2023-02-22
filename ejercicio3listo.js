/**
 * Dado un numero entero, inviértelo y devuelve de nuevo el entero
 *
 * Ejemplo:
 * invertirNumero(67)  // Devuelve: 76
 */

function invertirNumero(numero) {
  return parseInt(numero.toString().split("").reverse().join(""));
}

console.log(invertirNumero(67));
console.log(invertirNumero(49));

/**
 *  Como hacerlo:
 * Convertir numero en string
 * Convertir string a array (un array por cada letra)
 * Darle la vuelta al array
 * Convertir array a un string
 * convertir string a un numero
 *
 * Retornar numero
 */
