/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

function QueLetraTiene(oracion) {
  if (oracion === oracion.toUpperCase()) {
    document.write("Toda la oracion esta en mayusculas");
  } else if (oracion === oracion.toLowerCase()) {
    document.write("La cadena está en minúsculas.");
  } else {
    document.write("La cadena tiene combinación de mayúsculas y minúsculas.");
  }
}


let texto = prompt("Ingrese aqui su oracion: ");


QueLetraTiene(texto);
