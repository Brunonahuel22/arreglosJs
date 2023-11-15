/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */



function esPar(numeroEntero) {
    if ((numeroEntero % 2) == 0) {
        document.write(`El numero ${numeroEntero} es par`);
    } else{
        document.write(`El numero ${numeroEntero} no es par`);
    }
}

let numero = parseInt(prompt("Ingrese un numero entero: "));

esPar(numero);