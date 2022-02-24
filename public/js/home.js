let genreBurguer = document.querySelector('.genresBurguer');
let h5 = document.querySelector('.genresBurguer h3');
let iconGenre = document.querySelector('.iconGenre');
let optionsGenre = document.querySelector('.genres-menu');
let containOptions = document.querySelector('.contain-options');

function genres () {
    if(!iconGenre.classList.contains("open")) {
        iconGenre.classList.add('open')
        h5.style.backgroundColor = 'rgba(0, 0, 0, 0.219)';
        h5.style.color = 'red'
        iconGenre.innerHTML = ''
        optionsGenre.style.display = 'flex'
        optionsGenre.style.backgroundColor = 'rgba(0, 0, 0, 0.219)'
        containOptions.style.borderRadius = '15px';
    } else {
        iconGenre.classList.remove('open');
        iconGenre.innerHTML = '<i class="fas fa-align-justify" ></i>'
        optionsGenre.style.display = 'none'
        h5.style.color = '#2940D3'
        h5.style.backgroundColor = 'none';
        containOptions.style.borderRadius = '120px';
    }
}