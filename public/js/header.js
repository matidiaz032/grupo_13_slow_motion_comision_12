let menu = document.querySelector('.menu');
let iconBurguer = document.querySelector('.iconBurguer');
let optionsBurguer = document.querySelector('.options-menu')

function burguer () {
    if(!iconBurguer.classList.contains("desactive")) {
        iconBurguer.classList.add('desactive')
        optionsBurguer.classList.add("active")
    } else {
        iconBurguer.classList.remove('desactive');
        optionsBurguer.classList.remove("active")
    }
}

/* searchBar.addEventListener('submit', e => searchInput.value == '' && e.preventDefault()) */
