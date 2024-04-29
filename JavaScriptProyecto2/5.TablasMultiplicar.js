function TablasMultiplicar(){
    for(let i = 1; i < 11; i++){
        for(let j = 1; j < 11; j++){
            let multiplicacion = i * j
            console.log(`${i} x ${j} = ${multiplicacion}`)
        }
    }
}

TablasMultiplicar()