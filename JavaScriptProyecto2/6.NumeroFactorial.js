const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt

function CalculadoraFactorial(){
    let LimiteFactorial = prompt("Ingrese un número para calcular el factorial: ");//Pide el dato al usuario
    let factorial = 1; //Va a acumular el valor del factorial

    if(LimiteFactorial >= 0){
        if(LimiteFactorial == 0){
            console.log("El factorial de 0 es 1");
        }
        else {
            for(let i = LimiteFactorial; i > 0; i--){
                factorial = factorial * i;
            }
            console.log(`El factorial de ${LimiteFactorial} es: ${factorial}`); 
        }
    }
    else {
        console.log("Ingrese un número positivo");
        return CalculadoraFactorial()
    }
}
CalculadoraFactorial()