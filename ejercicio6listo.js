/**
 * Dado un texto una búsqueda, censurar toda las coincidencias de la búsqueda en el texto con [-CENSURADO-]
 *
 * Si el texto y la búsqueda están vacíos mostrar
 * "no puedes leer el texto y la búsqueda" en caso de que ambos parámetros no lleguen
 *
 * Ejemplos:
 * censurado("hola hola", "hola") // Devuelve: [-CENSURADO-] [-CENSURADO-]
 *
 * censurado() // Devuelve No puedes leer el texto y la búsqueda
 */

function censurado(texto, busqueda) {
  let resultado = "";

  if (!texto && !busqueda) return "Es necesario leer el texto y la búsqueda";
  else if (!texto) return "Es necesario el texto";
  else if (!busqueda) return "Es necesario la búsqueda";

  // resultado = texto.replace(busqueda, "[-CENSURADO-]");
  resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");
  return resultado;
}

console.log(censurado("hola hola", "hola"));
console.log(censurado());
console.log(censurado("hola hola"));
console.log(censurado(null, "hola"));
console.log(censurado("Datagas Datatrack Rutia", "Rutia"));

/**
 * Como hacerlo:
 * Condiciones en el caso de que algún parámetro de false
 * Remplazar la búsqueda por [-CENSURADO-] en el texto
 * retornar resultado
 */
