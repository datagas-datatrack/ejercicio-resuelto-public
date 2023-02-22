/**
 * Dado un número, mostrar una escalera con escalones de "[-]"
 * usando el número para los niveles de la escalera
 *
 * Ejemplos:
 * escalera(4) // Devuelve
 * [-]
 * [-][-]
 * [-][-][-]
 * [-][-][-][-]
 */

function pintarEscalera(numero) {
  let escalera = "";

  for (let nivel = 1; nivel <= numero; nivel++) {
    let escalones = "";

    for (let escalon = 1; escalon <= nivel; escalon++) {
      escalones += "[-]";
    }

    escalones += "\n";
    escalera += escalones;
  }

  return escalera;
}

console.log(pintarEscalera(4));
console.log(pintarEscalera(8));

/**
 *  Como hacerlo:
 * Recorrer el numero de niveles de la escalera
 * en cada iteración pintar los escalones de ese nivel (hacer un bucle para los escalones)
 * haciendo un bucle desde 1 hasta el nivel en el que estamos
 *
 * retornar un String con el dibujo de la escalera
 */
