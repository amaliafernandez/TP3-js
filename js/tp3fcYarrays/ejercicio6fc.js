
function perimetro(base, altura) {
    return 2 * (base + altura)
}

const base = parseFloat(prompt("ingrese la medida de la base: "))
const altura = parseFloat(prompt("ingrese la medida de la altura"))

console.log(perimetro(base, altura))

const pantalla = document.getElementById("pantalla")
pantalla.innerHTML = perimetro(base, altura)