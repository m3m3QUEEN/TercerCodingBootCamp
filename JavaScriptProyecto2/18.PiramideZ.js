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
Este programa imprime una piramide que va ser dibujada por z's
*/
function piramide() {
    let espacios = " "; // Inicializa una variable para representar un espacio en blanco
    let letra = "z"; // Inicializa una variable para la letra que se utilizará para construir la pirámide
    let filas = 10; // Inicializa el número total de filas de la pirámide

    for (let i = 0; i < 10; i++) { // Bucle para iterar sobre cada fila de la pirámide
        let linea = ""; // Inicializa una cadena de texto vacía para almacenar la fila actual de la pirámide
        for (let j = 1; j <= filas; j++) { // Bucle para iterar sobre cada columna de la fila actual
            linea += espacios; // Agrega espacios en blanco a la fila actual
            if (j == filas) { // Comprueba si estamos en la última columna de la fila actual
                linea += letra; // Agrega la letra al final de la fila actual
                filas = filas - 1; // Reduce el número de filas restantes para la pirámide
                for (let h = 2; h <= i; h++) { // Bucle para agregar espacios en blanco adicionales después de la letra
                    linea += espacios;
                }
                for (let h = 1; h <= i; h++) { // Bucle para agregar espacios en blanco y la letra al final de la fila
                    linea += espacios;
                    if (h == i) {
                        linea += letra;
                    }
                }

            }
        }
        console.log(linea); // Imprime la fila actual de la pirámide
    }

}

piramide(); // Llama a la función piramide para ejecutar el código
