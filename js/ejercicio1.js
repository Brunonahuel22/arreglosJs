/*  Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo. */
const meses = ['Enero','Febrero','Marzo' , 'Abril', 'Mayo','Junio','Julio','Agosto','Septiembre','Octrubre','Noviembre','Diciembre'];

let longitud = meses.length;

document.write("<h1>Lista de meses</h2>");
document.write("<ul>")
for (let i = 0; i < longitud ; i++) {
    document.write(`<li>${meses[i]}</li>`);
}
document.write("</ul>");