//funcion tradicional

function uppercase (char) {
return char === char.toUpperCase() && char !== char.toLowerCase()
}

function mayuscula(texto){

    for (let i = 0; i < texto.length ; i++){
        console.log(i)
        if(!uppercase(texto.charAt(i))){
            return false
        }
    }

    return true
}

function minuscula(texto){

    for (let i = 0; i < texto.length ; i++){
        console.log(i) //cicla caracter por caracter
        if(uppercase(texto.charAt(i))){
            return false
        }
    }

    return true
}

let texto =  prompt("Ingresa un texto: ")
if (mayuscula(texto)) {
    console.log("El texto esta solo en mayúsculas")
}else{
    if (minuscula(texto)){
        console.log("el texto esta solo en minúsculas")
    } else {
        console.log("el texto tiene minusculas y mayusculas")
    }
}

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML = texto