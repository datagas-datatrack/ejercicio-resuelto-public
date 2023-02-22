/**
 * Dibujar un cuadrado hueco con asteriscos
 * Ejemplo: cuadrado(4)
 * ****
 * *  *
 * *  *
 * ****
 *
 * Recuerde que puede ser cualquier tipo de numero
 * Retornar una variable que se va a mostrar en consola
 */

function getLado(numero) {
  let lado = "";

  for (let i = 0; i < numero; i++) {
    lado += "*";
  }

  return lado;
}

function cuadrado(numero) {
  let pintura = getLado(numero);

  for (let i = 2; i < numero; i++) {
    pintura += "\n";
    contenido = "*";

    for (let y = 2; y < numero; y++) {
      contenido += " ";
    }

    contenido += "*";

    pintura += contenido;
  }

  pintura += "\n";
  pintura += getLado(numero);

  return pintura;
}

console.log(cuadrado(4));
console.log(cuadrado(8));

/**
 * Recomendaciones a tomar:
 * Función para crear el lado de arriba y abajo del cuadrado
 * Función que haga los lados y el hueco del cuadrado
 * Bucle de 0 al tamaño del lado, menos 2 para equilibrar con el lado de arriba y abajo
 * Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izq y der
 * Ir concatenando en una variable "pintura" cada linea del cuadrado
 * Mostrar el cuadrado en la función principal
 *
 * Los saltos de linea en string son con "\n"
 */
