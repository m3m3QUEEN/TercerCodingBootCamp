/*
- Fecha de publicación: 16.04.2023
- Hora de publicación: 15:30pm
- Versión de su código: 64
- Autores: Ing(c):   Luisa Victoria, Lizeth Victoria, Andrea Zapata, Juan Manuel Hurtado, Santiago Castaño, Andres Jaramillo, Camilo
- Nombre del lenguaje utilizado: “ECMASCRIPT 6.0” (javascript 6.0)
- Versión del lenguaje utilizado: 6.0
- Universidad Tecnológica de Pereira
- Programa de Ingeniería de Sistemas y Computación
- Descripción de la funcionalidad del programa: 
    Imprimi un triangulo de diferentes con la letra P 
*/

function ImprimirP(){
    let i = -1
    let iAux;
    let j = 14
    let jAux = 14
    let k = 0 //Número de filas
    let o34Espacios = 0

    while (i < 6) {
        //aqui se ponen los espacios reiniciar variable
        o34Espacios = 0
        while (o34Espacios < 34){
            process.stdout.write(" ")
            o34Espacios++
        }

        i ++ 
        iAux = i

        while ( iAux > 0) {
            process.stdout.write(" ") //Crea los espacios hacia la derecha
            iAux--
        }

        j = jAux -= 2

        while (j >= 0){
        process.stdout.write("P")
        j--
        }
        console.log(' ')//Crea los espacios hacia la izquierda
        k++
    }
    jAux--
}
ImprimirP();



// P P P P P P P P
//  P P P P P P
//   P P P P
//    P P P
//     P P
//     P


