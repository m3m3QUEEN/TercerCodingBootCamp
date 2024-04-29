/*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su codigo: 15
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Este programa recibe un numero como texto y lo va regresar como su lectura al reves
*/

// Importar la biblioteca 'prompt-sync' para leer la entrada del usuario desde la consola
const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número entero y almacenarlo en la variable 'numero'
let numero = prompt("Este programa lee desde el teclado un número entero y lo imprime al revés. Entre el número:");

// Definir una función llamada RevertirTexto que toma un texto como entrada y devuelve el texto invertido
function RevertirTexto(texto) {
    // Utilizar el método split() para dividir el texto en un array de caracteres, reverse() para invertir el orden de los elementos del array, y join() para unir los elementos en una cadena de texto nuevamente
    return texto.split("").reverse().join("");
}

// Imprimir el resultado de llamar a la función RevertirTexto con el número ingresado por el usuario como argumento
console.log(RevertirTexto(numero));
