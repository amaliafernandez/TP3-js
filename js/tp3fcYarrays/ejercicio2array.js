//2- crear un srcrip que solicite al usuario mediante un prompt el nombre de ciudades
// y almacenarlas en un arreglo, cuando el usuario selecciona cancelar
// se debe mostrar el arreglo generado, luego realizar las siguientes
//acciones:
// * mostrar la longitud del arreglo
// * mostrar en el documento web los items de las posiciones primera,tercera y ultima.
// * añade en última posicion la ciudad de Paris
// * Escribe por pantalla el elemento que ocupa la segunda posicion
// * sustituye el elemento que ocupa la segunda posicion por la ciudad de `barcelona`

const mostrarCiudades = () => {
    let lista = `<h3 class="mt-4"> El arreglo de ciudades tiene:  ${ciudades.length}</h3>`
    lista += `<ul class = "list-group list-group-flush">`
    for (let i = 0; i < ciudades.length; i++) {
        lista += `<li class="list-group-item"> ${ciudades[i]} </li>`
    }
    lista += `</ul>`
    pantalla.innerHTML += lista
}
const ciudades = []
let ciudad = null
const pantalla = document.getElementById("pantalla")

do {
    ciudad = prompt("Ingrese el nombre de una cuidad: ")
    if (ciudad !== null) {
        ciudades.push(ciudad)
    }
} while (ciudad !== null);
mostrarCiudades()

pantalla.innerHTML += `<p>Primera ciudad: ${ciudades[0]}</p>`
pantalla.innerHTML += `<p>Tercera ciudad: ${ciudades[3]}</p>`
pantalla.innerHTML += `<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`

ciudades.push(`Paris`)
mostrarCiudades()

ciudades[2] = `Barcelona`
mostrarCiudades()