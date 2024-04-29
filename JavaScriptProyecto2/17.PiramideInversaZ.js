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
Crea una una imagen de una piramide invertida, con la letra z y en la cantidad de lineas solicitadas
*/
function piramideInvertida () {
    let letra = "Z"; // Es la letra que se usa para armar la piramide
    let filas = 10; // Es la cantida de lineas que va estar conformada la piramide

    // El for ejecuta desde el numero total de filas hasta 1, disminuyendo cada interación
    for (let i = filas; i > 0; i--) {
        let linea = '';  // Almacena la linea que vamos a impirmir al final
        // El for agrrga espacios que se necesiten en cada linea antes de las letras
        // La cantidad de espacios es igual a la diferencia entre el numero total de filas y el contador i
        for (let j = 0; j < filas - i; j++) {
            linea += " "
        }
        // Este for construye el resto de linea con la letra z mas espacios
        // (2 * i) -1 es el número total de caracteres en la linea, incluyendo espacios y letras
        for (let h = 0; h < (2 * i) -1; h++) {
            // En la condición es para colocar la z al principio y al final de la linea
            // h == 0 es para el inicio y (2 * i) -2 es para el final
            if (h == 0 || h== (2 * i) -2) {
                linea += letra
                // Si no cumple ninguna de las condiciones de if, agraga un espacio
            } else {
                linea += ' ';
            }
        }
        // Imprime la linea en la consola 
        console.log(linea)
    }
}
// Se llama la función para ejecutar el código 
piramideInvertida();