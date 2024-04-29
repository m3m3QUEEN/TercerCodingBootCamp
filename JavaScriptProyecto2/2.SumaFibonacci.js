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
Suma la serie de fibonacci hasta la posicion 10
*/

// Definición de la función SumaSerieFibonacci
function SumaSerieFibonacci() {
    // Inicialización de variables
    let n = 0; // Primer número de la serie Fibonacci
    let x = 1; // Segundo número de la serie Fibonacci
    let suma = 0; // Variable temporal para calcular el siguiente número en la serie Fibonacci
    let SumaFibonacci = 0; // Variable para almacenar la suma de los números de la serie Fibonacci
    console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100. Los números a sumar son:");

    // Bucle while para generar la serie Fibonacci y calcular su suma
    while (n <= 100) {
        // Imprimir el número actual de la serie Fibonacci sin salto de línea
        process.stdout.write(n.toString() + ",");
        
        // Sumar el valor actual de la serie al total
        SumaFibonacci += n;

        // Calcular el siguiente número en la serie Fibonacci
        suma = n + x;
        n = x;
        x = suma;
    }

    // Imprimir la suma de los números de la serie Fibonacci
    console.log(" y su suma es:", SumaFibonacci);
}

// Llamar a la función SumaSerieFibonacci para ejecutar el programa
SumaSerieFibonacci();

