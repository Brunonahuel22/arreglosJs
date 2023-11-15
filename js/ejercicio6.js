/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla. */

function PerimetroRectangulo(ladoA, ladoB) {
  let perimetro;

  perimetro = 2 * (ladoA + ladoB);

  return perimetro;
}


let PrimerLado = parseFloat(prompt("Ingrese el lado A de su rectangulo"));
let SegundoLado = parseFloat(prompt("Ingrese el lado B de su rectangulo"));



let per = PerimetroRectangulo (PrimerLado , SegundoLado);

document.write(`El perimetro del rectangulo es: ${per}`);