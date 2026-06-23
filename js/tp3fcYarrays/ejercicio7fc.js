

function tabla (numero) {
    for (let i = 1; i <= 10; i++ ){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }

}

let numero = parseInt(prompt("ingrese un numero"))
tabla(numero)