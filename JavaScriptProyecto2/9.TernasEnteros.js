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
    Utilizar ciclos anidados que generen ternas de enteros

*/

function ParejaEnteros(){
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
          console.log((i - 1) * 3 + j, i, j);
        }
    }
}
ParejaEnteros()
