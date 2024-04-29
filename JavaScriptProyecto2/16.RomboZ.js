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
Este programa imprime un rombo dibujado de z's y rellenado de z's
*/

// Definición de la función Rombo
function Rombo() {
    // Definición de la altura del rombo
    let Altura = 4;

    // Cálculo del número de espacios en la primera mitad del rombo
    let espacio = Altura - 1;

    // Inicialización del número de caracteres en la primera fila del rombo
    let Numerito = 1;

    // Variable para almacenar la forma del rombo
    let Forma = '';

    // Bucle para construir la primera mitad del rombo
    for (let i = 0; i < Altura; i++) {
        // Agregar espacios en blanco antes de los caracteres en la fila actual
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }
        // Agregar caracteres 'Z' a la forma del rombo
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }
        // Actualizar el número de espacios y caracteres para la siguiente fila
        espacio--;
        Numerito += 2;
        // Imprimir la fila actual del rombo
        console.log(Forma);
        // Reiniciar la variable 'Forma' para la próxima fila
        Forma = '';
    }

    // Reinicialización de variables para construir la segunda mitad del rombo
    espacio = 1;
    Numerito = Altura * 2 - 3;

    // Bucle para construir la segunda mitad del rombo
    for (let i = 0; i < Altura - 1; i++) {
        // Agregar espacios en blanco antes de los caracteres en la fila actual
        for (let j = 0; j < espacio; j++) {
            Forma += ' ';
        }
        // Agregar caracteres 'Z' a la forma del rombo
        for (let j = 0; j < Numerito; j++) {
            Forma += 'Z';
        }
        // Actualizar el número de espacios y caracteres para la siguiente fila
        espacio++;
        Numerito -= 2;
        // Imprimir la fila actual del rombo
        console.log(Forma);
        // Reiniciar la variable 'Forma' para la próxima fila
        Forma = '';
    }
}

// Llamar a la función Rombo para ejecutar el programa y dibujar el rombo
Rombo();
