/* 
- Fecha de publicacion: 14 de abril de 2024
-Hora: 7:04 pm
-Version de su codigo: 1
-Autores: Ing(c): Andrea Zapata Bolivar, Lizeth Victoria Franco
-Nombre del lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
- Version del lengiaje utilizado 6.0
- Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
- El primer programa crea una variable que recibe un numero random de o a 99, le pide al usuario que aduvine el numero dandole a este la opcion de ingrsar otro, el programa le da oportinidad al usuario de intentar hasta que lo adivine, este le imprime la lejania del numero.
- El segundo programa calcula el nuemro factorial al ser recibido por un usuario.
- El tercerprograma cuenta cuantas vocales tiene una frase que va ser ingresada por el ussuario
- */
const prompt = require('prompt-sync')() //Llama a la función nativa de Node para poder hacer uso del prompt

function AdivinaNumero(){
    let randomNumber = Math.floor(Math.random()* 100); //el programa escoge un numero al azar
    let randomNumberUser = prompt('ingrese un numero: '); // le pide al usuario que ingrese un numero al azar para que adivine cual es el numero
    console.log(randomNumber);
    if(randomNumber == randomNumberUser){
        console.log("Acertaste, los numeros son iguales");
    }
    else if(randomNumber > randomNumberUser){
        console.log("El numero que debes adivinar es mas alto");
    }
    else {
        console.log("El numero que debes adivinar es mas bajo");
    }
}
function CalculadoraFactorial(){
    let LimiteFactorial = prompt("Ingrese un numero para calcular el factorial: "); // el usuario ingresa un numero que quiera ser calculado como factorial
    let factorial = 1;
    if(LimiteFactorial == 0){
        console.log("El Factorial de 0 es 1");
    }
    else {
        for(let i = LimiteFactorial; i > 0; i--){
            factorial = factorial * i;
        }
        console.log(`El factorial de ${LimiteFactorial} es: ${factorial}`);
    
    }
}
/* Salvedad: La funcion no evalua si es letra mayuscula o minuscula.
No reconoce vocales con tildes. */

function ContadorVocales(){
    let frase = prompt("Ingrese la frase: "); // le píde al usuario ingresar una frase.
    let vocalA = 0 // acumula la cantidad de cada vocal hay en la frase
    let vocalE = 0
    let vocalI = 0
    let vocalO = 0
    let vocalU = 0

    for(let i = 0; i < frase.length; i++){
        if(frase[i] == "a"){
            vocalA += 1;
        }
        else if(frase[i] == "e"){
            vocalE += 1;
        }
        else if(frase[i] == "i"){
            vocalI += 1;}

            else if(frase[i] == "O"){
                vocal0 += 1;
        }
        else if(frase[i] == "u"){
            vocalU += 1;
        }

    }
    console.log(`El total de la vocal a es: ${vocalA}`);
    console.log(`El total de la vocal e es: ${vocalE}`);
    console.log(`El total de la vocal i es: ${vocalI}`);
    console.log(`El total de la vocal o es: ${vocalO}`);
    console.log(`El total de la vocal u es: ${vocalU}`);
    
}

function Menu(){
    console.log("\nMenú:");
    console.log("1. Adivinar número");
    console.log("2. Calcular el factorial de un número");
    console.log("3. Conocer el total de vocales de una frase");
    console.log("5. Salir");
    let option = prompt("Seleccione una opción: "); //Pide al usuario la opción que quiere ejecutar del menú.
  
    switch(option) {
      case "1":
        AdivinaNumero();
        return Menu();
      case "2":
        CalculadoraFactorial();
        return Menu();
      case "3":
        ContadorVocales();
        return Menu();
      case "5":
        break;
      default:
        console.log("\nPor favor ingresa una opción válida");
        return Menu();
    }
  }
  
  Menu()
