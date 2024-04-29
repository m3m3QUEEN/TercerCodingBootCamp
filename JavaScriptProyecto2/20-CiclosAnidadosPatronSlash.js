/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 2:00 PM
- Versión de su codigo: 1
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
Crea una un patron con datos numericos columnas y filas pedidas por teclado por el usuario rectangulo con asteriscos y las esquinas con slash y back slash
*/
//Salvedad: Si y solo si se garantizan resultados cuando los datos ingresados son NUMEROS ENTEROS POSITIVOS


const prompt = require('prompt-sync')();
let rush = ()=> {
    
    let x = prompt('Por favor ingrese el numero de columnas: ')
    let y = prompt('Por favor ingrese el numero de filas: ')
        // se utiliza x auxiliar porque la primera x cambia su valor
        // y todo el codigo es dependiente de misma variable pero tiene
        // ciclos distintos
    let xAux = x
    let xAux2 = x
    let xAux3 = x
    let xaux4 = x
    //variable de la que depende la condicion
    let xcond = x

    
    //condicion cuando x es 1
    if (xcond == 1) {
        process.stdout.write('/')
    //condicion cuando x es diferente de 1
    }
    else {
        //impresion en x /
    process.stdout.write('/')
    while (x > 2 ) {
        //impresion en x *
        process.stdout.write('*')
        x--
    }
    //impresion en x \
    process.stdout.write('\\')
    }

    //impresion en y

    //condicion cuando y es  1
    if (xcond == 1) {
        
    }
    //el ciclo para en 2 porque los slash no estan en el ciclo
    while (y > 2) {
        //impresion de x repetida en y si x es 1
        if (xcond == 1) {
            //salto de linea
            console.log(' ')
            //impresion *
            process.stdout.write('*')
            //auxiliar de x para retornar al valor inicial
            xAux = x
            y--
        }
        //condicion cuando x es diferente d e1
        else {
            //salto de linea
        console.log(' ')
            //impresion asterisco
        process.stdout.write('*')
            //auxiliar de x para retornar al valor inicial
        xAux = x
        y--

        

        xAux3 = xaux4
        //
        while (xAux3 > 2) {
            //impresion en x para de los espacios de la mitad
            process.stdout.write(' ')
            xAux3--
        }
        //ultimo  asterisco
        process.stdout.write('*')}
    }
    console.log(' ')
    //impresion en x abajo
    
    //impresion si x o y es 1
    if ((xcond == 1) && (y == 1)) {
        return
    }
    //impresion ultima linea si x 1
    else if (x ==1) {
        process.stdout.write('\\')
    }

    //impresion ultima linea si y 1
    else if ((y == 1)) {
        return
    }

    else {

    //impresion ultima linea niguno es 1
    process.stdout.write('\\')
    while (xAux2 > 2 ) {
        process.stdout.write('*')
        xAux2--
    }
    process.stdout.write('/')}
}

rush (4,4)