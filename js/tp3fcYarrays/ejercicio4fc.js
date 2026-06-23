// funcion tradicional

function parImpar(numero){
    if (numero % 2 === 0){
        return `El ${numero} es par`
    }else {
        return `El ${numero} es impar`
    }
}
console.log(parImpar(9))
console.log(parImpar(10))
console.log(parImpar(23))

//pido al usuario que ingrese un numero e invoco a la funcion
const numero = parseInt(prompt("Ingresar un numero entero: "))
console.log(numero)
console.log(parImpar(numero))


//arrow funtion que devuelve un booleano

const parImpar2 = (numero) => {
  return numero % 2 === 0
}
const num = 11
if (parImpar2(num)) {
    console.log("es par")
} else {
    console.log("es impar")
}

//arrow funtion que me devuelva un string
const parImpar3 = (numero) => {
    if (numero % 2 === 0) {
        return `El ${numero} es par`
    } else {
        return `El ${numero} es impar`
    }
}
console.log(parImpar3(18))