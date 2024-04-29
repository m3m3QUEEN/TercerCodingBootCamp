// Fecha y Hora de publicación: [20 de Abril de 2024 8:20am]
// Versión de su código: [1.0]
// Autores: Ing(c) [Victoria, Lizeth, Ándres, Santiago, Camilo y Andrea]
// Nombre del lenguaje utilizado: JavaScript
// Versión del lenguaje utilizado: [6.0]
// Universidad Tecnológica de Pereira
// Programa de Ingeniería de Sistemas y Computación
// Un descriptivo de qué hace el programa:
// Este programa imprime un patrón de letras 'P' en la consola, utilizando bucles anidados para controlar la cantidad de espacios en blanco y letras 'P' en cada fila.
//La cantidad de columnas en el patrón está determinada por el parámetro columnas.
//En la primera fila se imprimen todas las 13 letras "P".
//En la segunda fila se imprimen 11 letras "P".
//En la tercera fila se imprimen 9 letras "P".
//En la cuarta fila se imprimen 7 letras "P".
//En la quinta fila se imprimen 5 letras "P".
//En la sexta fila se imprimen 3 letras "P".
//En la séptima fila se imprime 1 letra "P".


function letraColumna(columnas) {
  let fila, espacio, letra; //Se abren tres espacios de memoria
  for (fila = 0; fila < columnas; fila++) {//Columnas es mayor que fila, entonce fila = 1
    for (espacio = 0; espacio < fila; espacio++) { //Fila es mayor que espacio, por lo tanto espacio = 1 y imprime un espacio
      process.stdout.write("  ");//Imprime un espacio antes de cada columna de letra "P"
    }

    for (letra = 0; letra < columnas - fila - fila; letra++) { // Columnas es mayor entonce se le restan dos filas lo que quiere decir que se aumentan dos espacios, entonces letra = 1
      process.stdout.write("P "); //Imprime una fila de 13 y le resta dos filas, lo que quiere decir que le resta dos espacios, pues la variable espacio depende fila
    }
    if (letra > 1) {//Se ha impreso más de una letra en esa fila, por lo que se ejecuta console.log(), imprimiendo una nueva línea
      console.log();//Si se ha impreso más de una letra, se imprime una nueva línea (console.log()), de lo contrario, no se imprime una nueva línea.
    }
  }
}
letraColumna(13); // Primera ejecución: Al llamar a la función letraColumna(13), lo primero que sucede es que se ejecuta la función letraColumna
