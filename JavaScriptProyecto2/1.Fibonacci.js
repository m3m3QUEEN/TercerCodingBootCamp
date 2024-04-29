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
Este programa muestra la serie de los numeros de fibonacci poniendo como limite que no se pase de 10.000 por consecuente va mostrar la serie 67..
*/
// Definición de una función llamada SerieFibonacci
function SerieFibonacci() {
    let n = 0; // Inicialización del primer número de la serie Fibonacci
    let x = 1; // Inicialización del segundo número de la serie Fibonacci
    let suma = 0; // Variable para almacenar la suma de los dos números anteriores

    // Bucle while que se ejecutará mientras el número actual (n) sea menor o igual a 10000
    while (n <= 10000) {
        // Imprimir el número actual (n) en la serie Fibonacci sin salto de línea
        process.stdout.write(", " + n.toString());

        // Calcular el siguiente número en la serie Fibonacci sumando los dos números anteriores
        suma = n + x;
        
        // Actualizar el primer número (n) con el valor del segundo número (x)
        n = x;
        
        // Actualizar el segundo número (x) con el valor de la suma de los dos números anteriores
        x = suma;
    } 
}

// Imprimir un mensaje explicativo sobre la serie de Fibonacci y los límites de la serie
console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34....... Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000: ");

// Llamar a la función SerieFibonacci para generar la serie Fibonacci hasta llegar a 10000
SerieFibonacci();

