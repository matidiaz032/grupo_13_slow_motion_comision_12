let genreBurguer = document.querySelector('.genresBurguer');
let h3 = document.querySelector('.genresBurguer h3');
let iconGenre = document.querySelector('.iconGenre');
let optionsGenre = document.querySelector('.genres-menu');
let containOptions = document.querySelector('.contain-options');

function genres () {
    if(!iconGenre.classList.contains("open")) {
        iconGenre.classList.add('open')
        /* h3.style.backgroundColor = 'rgba(0, 0, 0, 0.219)'; */
        h3.style.color = 'red'
        h3.innerText = 'X'
        iconGenre.style.display = 'none'
        optionsGenre.style.display = 'flex'
        containOptions.style.borderRadius = '15px';
    } else {
        iconGenre.classList.remove('open');
        iconGenre.innerHTML = '<i class="fas fa-align-justify" ></i>'
        iconGenre.style.display = 'block'
        optionsGenre.style.display = 'none'
        h3.style.color = '#2940D3'
        h3.innerText = 'Generos'
        containOptions.style.borderRadius = '120px';
    }
}