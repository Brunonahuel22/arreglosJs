/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones: */

const ciudades = [];
let i = 0;
do {
  ciudades[i] = prompt(
    "Ingrese el nombre de una ciudad y su pais correspondiente"
  );
  i++;
} while (confirm("Quiere agregar otra ciudad?"));

document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos </p>`
);
document.write("<ul>")
document.write(`<li>Elemento 1er posicion: ${ciudades[0]} </li>`);
document.write(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`);
let ultimo = ciudades.length - 1;
document.write(`<li>Elemento ultima posicion: ${ciudades[ultimo]}</li>`);
ciudades.push("Paris");
ultimo = ciudades.length - 1;
document.write("<br>");
document.write(`<li>Elemento ultima posicion: ${ciudades[ultimo]}</li>`);
document.write("</ul>")
document.write("<h3>Arreglo de ciudades</h3>");

document.write("<ul>")
for (let j = 0; j < ciudades.length; j++) {
  document.write(`<li>Elemento: ${ciudades[j]}</li>`);
}
document.write("</ul>")
