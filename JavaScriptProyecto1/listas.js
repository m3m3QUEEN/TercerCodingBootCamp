/* 
- Fecha de publicacion: 14 de abril de 2024
-Hora: 7:04 pm
-Version de su codigo: 1
-Autores: Ing(c): Andrea Zapata Bolivar, Lizeth Victoria Franco
-Nombre del lenguaje utilizado: ECMASCRIPT 6.0 (javascript 6.0)
- Version del lengiaje utilizado 6.0
- Universidad Tecnológica de Pereira
-Programa de Ingeniería de Sistemas y Computación
- El primer programa al tener un conjunto de numeros evalua cual es el mayor y cual es el menor 
*/
function ListaNumeros(){
    let lista = [2, 3, 7, 14, 4, 4];
    let max = lista[0]; // Inicializa max con el primer elemento de la lista
    let min = lista[0]; // Inicializa min con el primer elemento de la lista
    for(number of lista){
        if(number > max) {
            max = number; // Actualiza max si encontramos un número mayor
        }
        if(number < min) {
            min = number; // Actualiza min si encontramos un número menor
        }
    }
    console.log("Máximo:", max);
    console.log("Mínimo:", min);
}

ListaNumeros();

// El programa tiene dos litas que luego las va juntar ordenadamente de menor a mayor

function ConcatenarListar(){
    let lista1 = [4, 9, 2]
    let lista2 = [7, 5, 1]
    let ListasConcatenadas = lista1.concat(lista2)
    let OrdenarLista = ListasConcatenadas.sort()
    console.log(lista1)
    console.log(lista2)
    console.log("Lista concatenada y ordenada")
    console.log(OrdenarLista)

}

// El programa ordena una lista de mayor a menor

function InvertirLista(){
    let lista = [2, 3, 7, 4, 1, 9];
    let reverseList = [...lista].reverse();
    console.log(typeof(reverseList))
    console.log(`Lista original [${lista}]`)
    console.log(`Lista invertida [${reverseList}]`)
}