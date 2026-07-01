const pantalla = document.getElementById("pantalla")

// Array para contar apariciones de cada suma (índices 0 a 12, aunque 0 y 1 no se usan)
const conteoSumas = [0,0,0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1
    const dado2 = Math.floor(Math.random() * 6) + 1
    const suma = dado1 + dado2

    conteoSumas[suma]++
}

// Armar la tabla
let tabla = `<table class="table table-bordered">`
tabla += `<thead><tr><th>Suma</th><th>Apariciones</th></tr></thead>`
tabla += `<tbody>`

for (let suma = 2; suma <= 12; suma++) {
    tabla += `<tr><td>${suma}</td><td>${conteoSumas[suma]}</td></tr>`
}

tabla += `</tbody></table>`

pantalla.innerHTML += tabla