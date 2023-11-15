function  mostrarTablaMultiplicar(numero) {
    document.write(`<table class = "table text-center"><tbody>`);
    for (let i = 1; i <= 10; i++) {
     
        document.write(`<tr>`);
          document.write(`<td> ${numero} x ${i} </td> <td>  ${numero * i}  </td> `);
       document.write(`</tr>`);
    }
    document.write(`</table></tbody>`);
}

let numeroIngresado = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar hasta 10: "));

document.write(mostrarTablaMultiplicar(numeroIngresado));