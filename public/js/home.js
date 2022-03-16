let h3Home = document.querySelector('.genresBurguer h3');
let iconGenre = document.querySelector('.iconGenre');
let optionsGenre = document.querySelector('.genres-menu');
let containOptions = document.querySelector('.contain-options');

function genres () {
    if(!iconGenre.classList.contains("open")) {
        iconGenre.classList.add('open')
        h3Home.style.color = 'red'
        h3Home.innerText = 'X'
        iconGenre.style.display = 'none'
        optionsGenre.style.display = 'flex'
        containOptions.style.borderRadius = '15px';
    } else {
        iconGenre.classList.remove('open');
        iconGenre.innerHTML = '<i class="fas fa-align-justify" ></i>'
        iconGenre.style.display = 'block'
        optionsGenre.style.display = 'none'
        h3Home.style.color = '#2940D3'
        h3Home.innerText = 'Generos'
        containOptions.style.borderRadius = '120px';
    }
}