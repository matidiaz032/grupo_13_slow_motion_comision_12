let menu = document.querySelector('.menu');
let iconBurguer = document.querySelector('.iconBurguer');
let optionsBurguer = document.querySelector('.options-menu')

function burguer () {
    if(!iconBurguer.classList.contains("desactive")) {
        console.log('activo opciones')
        iconBurguer.classList.add('desactive')
        optionsBurguer.classList.add("active")
    } else {
        console.log('desactivo opciones')
        iconBurguer.classList.remove('desactive');
        optionsBurguer.classList.remove("active")
    }
}