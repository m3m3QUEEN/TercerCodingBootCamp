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
Este programa recibe quince numeros por teclado y les saca promedio
*/

// Importar la biblioteca 'prompt-sync' para leer la entrada del usuario desde la consola
const prompt = require('prompt-sync')();

// Definición de una función llamada IngresarQuinceNumeros
function IngresarQuinceNumeros(){
    // Inicialización de variables
    let lista = []; // Una lista para almacenar los números ingresados
    let contador = 0; // Contador para los números mayores a 150
    let mayor = 0; // Variable para almacenar el número mayor ingresado
    let menor = 0; // Variable para almacenar el número menor ingresado
    let negativos = 0; // Contador para los números negativos
    let suma = 0; // Variable para almacenar la suma de los números positivos
    let positivos = 0; // Contador para los números positivos
    let promedio = 0; // Variable para almacenar el promedio de los números positivos

    // Bucle for para solicitar al usuario que ingrese 15 números
    for(let i = 0; i < 15; i++){
        // Leer un número ingresado por el usuario y convertirlo a entero
        let numero = parseInt(prompt("Ingrese un número: ")) ;
        // Agregar el número ingresado a la lista
        lista.push(numero);
    }

    // Bucle for para iterar sobre la lista de números ingresados
    for(let a = 0; a < lista.length; a++){
        // Verificar si el número es mayor que 150 y actualizar el contador si es así
        if(lista[a] > 150 ){
            contador++;
        }
        // Verificar si el número es mayor que el número mayor actual y actualizar si es así
        if(lista[a] > mayor){
            mayor = lista[a];
        }
        // Verificar si el número es menor que el número menor actual y actualizar si es así
        if(lista[a] < menor || a === 0){
            menor = lista[a];
        }
        // Verificar si el número es negativo y actualizar el contador si es así
        if(lista[a] < 0){
            negativos += 1;
        } 
        // Verificar si el número es positivo y actualizar el contador y la suma si es así
        if (lista[a] > 0) {
            positivos++;
            suma += lista[a];
        }
    }

    // Calcular el promedio de los números positivos si hay números positivos
    if (positivos > 0) { 
        promedio = suma / positivos;
    }

    // Imprimir los resultados
    console.log(`Cantidad de números mayores a 150: ${contador}`);
    console.log(`Número mayor: ${mayor}`);
    console.log(`Número menor: ${menor}`);
    console.log(`Cantidad de números negativos encontrados: ${negativos}`);
    console.log("Promedio de los números positivos encontrados:", promedio);
}

// Llamar a la función IngresarQuinceNumeros para ejecutar el programa
IngresarQuinceNumeros();
