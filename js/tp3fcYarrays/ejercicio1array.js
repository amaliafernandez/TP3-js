//crear un array llamado meses y que almacene el nombre de los doce meses del año.
// mostrar por pantalla en forma de lista los doce nombres del arreglo.


const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log(typeof (meses))
console.log(meses)


const pantalla = document.getElementById("pantalla")
//pantalla.textContent = "prueba de texto" //ES SOLO PARA MOSTRAR TEXTO
pantalla.innerHTML += `<h1>Lista de meses</h1>` // pantalla.innerHTML = pantalla.innerHTML + `<p>prueba texto </p>`

let lista = `<ul class = "list-group list-group-flush">`
for (let i = 0; i < meses.length; i++) {
lista += `<li class="list-group-item"> ${meses[i]} </li>`
}
lista +=`</ul>`
pantalla.innerHTML += lista



