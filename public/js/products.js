let play = document.querySelector('#icon-play');
let trailer = document.querySelector('#trailer');

play.addEventListener('click', e => {
    window.open(trailer.href, '_blank');
})