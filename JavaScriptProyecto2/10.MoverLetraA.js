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
    Mueve las letras A de los extrremos al medio
*/

function ImprimirAs() {
    let espacios = 6
    let espaciosAux = 6

    for (let i = 0 ; i <= 6 ; i ++)   {

        process.stdout.write("A")

        espacios = espaciosAux
        while (espacios > 0) {
            process.stdout.write(" ")
            espacios -= 1
        }
        espaciosAux -= 1
        process.stdout.write("A\n")
    }
}
ImprimirAs()
