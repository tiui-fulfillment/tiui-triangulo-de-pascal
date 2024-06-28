/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

/**
 * El triángulo se puede construir de la siguiente manera: en la fila 0 (la fila superior), hay una entrada única distinta de cero 1.
 * Cada entrada de cada fila posterior se construye sumando el número de arriba y a la izquierda con el número de arriba y a la derecha, tratando las entradas en blanco como 0.
 * Por ejemplo, el número inicial en la primera (o cualquier otra) fila es 1 (la suma de 0 y 1), mientras que los números 1 y 3 en la tercera fila se suman para producir el número 4 en la cuarta fila.
 *     1 ---------- linea 0
 *    1 1 --------- linea 1
 *   1 2 1 -------- linea 2
 *  1 3 3 1 ------- linea 3
 * 1 4 6 4 1 ------ linea 4  <----- hasta aquí se genera (lineNumber) y eso se devuelve
 */

const pascalTriangle = (lineNumber) => {
  // La línea cero siempre tiene el coeficiente 1
  let triangle = [[1]];

  // Construye el triángulo hasta la línea 'lineNumber'
  for (let currentLine = 1; currentLine <= lineNumber; currentLine++) {
    let previousLine = triangle[currentLine - 1];
    let currentLinePositions = [1]; // La primera posición de cada línea siempre es 1

    // Llena el medio de la línea actual (1 ...x,x,x... 1)
    for (let position = 1; position < currentLine; position++) {
      // Establecela posición como la suma de los dos valores previos encima de él en la línea previa
      currentLinePositions[position] =
        previousLine[position - 1] + previousLine[position];
    }

    currentLinePositions.push(1); // La última posición de cada línea siempre es 1
    triangle.push(currentLinePositions);
  }

  // Devuelve la línea 'lineNumber' del triángulo
  return triangle[lineNumber];
};

module.exports = pascalTriangle;
