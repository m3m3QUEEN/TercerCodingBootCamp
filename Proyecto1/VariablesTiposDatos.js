/* 
- Fecha de publicacion: 13 de abril de 2024
-Hora: 7:04 pm
-Version de su codigo: 1
-Autores: Ing(c): Andrea Zapata Bolivar, Lizeth Victoria Franco
-Nombre del lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
- Version del lengiaje utilizado 6.0
- Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
- Este Programa convierte la temperatura de grados Celsius a Fahrenheit. l usuario debe poder ingresar la temperatura en grados celsius.
*/


const prompt = require('prompt-sync')();



function Convertion(){
  console.log("Convertir Celsius a Fahrenheit");
  let  celcius = prompt("Por favor digite los centigrados a convertir a Fahrenheit: "); //el usuario debe ingresar el valor en grados celsius
  let fahrenheit = (9 / 5 * celcius) + 32; //define que el resultado en fahrenhe en una ecuacion que convierte los grados.
  console.log(`${celcius}ºC son ${fahrenheit} grados en Fahrenheit`);
}

/* Funcion en donde el usuario solicita que le calculen el indice de masa muscular, entonces el programa le solicita un datos primero para porder calcularlo.
*/

function IndiceMasaCorporal(){
    console.log("Calcula el Indice de Masa Corporal");
    let kilogramos = prompt("Por favor, ingresa tu peso en kilogramos: ");//recibe el peso en kilogramos
    let altura = prompt("Por favor, ingresa tu altura en metros: "); //recibe la altura en metros
    let TotalCalculoMasaCorporal = kilogramos /( altura ** 2); //calcula el indice corporal utilizando los datos ingresadi (peso, altura)
    let DecimalesCalculoMasaCorporal = TotalCalculoMasaCorporal.toFixed(2)
    console.log(`Tu indice de masa corporal (IMC) es: ${DecimalesCalculoMasaCorporal}`)
  }


/* Una funcion que por medio de unos datos solicitados al ususario le va devolver un numero de ususario que basicamente es la suma de estos strings
*/
  function GeneradorNombreUsuario(){
    console.log ("Generardor nombre de usuario");
    let nombre = prompt("Nombre:"); //recibe nombre
    let apellido = prompt("Apellido:");// recibe el nombre
    let AnioNacimiento = prompt("Año de nacimiento:");// recibe el año de nacimiento
    let NombreUsuario = nombre + apellido + AnioNacimiento ;// junta todos lo datos para crear el usuario
    console.log(`Nombre de usuario combinado: ${NombreUsuario}`);
}

/* Funcion que arroja la posicion que la persona pida de la sucesion de fibonacci 
*/

function FibonacciCiclos(){;
    console.log ("Funcion de fibonacci.");
    let n = prompt("Ingrese el valor de n:"); // recibe el valor de la posicion que quiere que se imprima al final
    let primpos = 0;
    let second = 1;
    let suma = primpos + second;
    if (n == 1){
        console.log ("La primera posicion es igual a 0")
    }
    else {
         for(let i = 2 ; i < n; i++){;
        suma = primpos + second;
    primpos = second;
second = suma };
console.log (`El ${n}-esimo numero de Fibonacci es: ${second}`);

    }
   
}



function Menu(){
  console.log("Welcome");
  console.log("\nMenú:");
  console.log("1. Convertir Celsius a Fahrenheit ");
  console.log("2. Calcular IMC ");
  console.log("3. Generar nombre de usuario")
  console.log("4 Funcion de Fibonacci")
  console.log("5. Salir");
  let option = prompt("Seleccione una opción: ") //el usuario ingrese la opcion que quiera hacer 
  console.log(typeof(option))
  switch(option) {
    case "1":
      Convertion();
      Menu()
    case "2":
      IndiceMasaCorporal()
      Menu()
      case "3":
        GeneradorNombreUsuario(); 
        Menu()
    case "4":
        FibonacciCiclos()
        Menu()
    case "5":
        break;
        default:
            console.log("Por favor ingresa una opcion valida")
            Menu()

        

  }
}
Menu()
