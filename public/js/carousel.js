
var angle = 0;
function galleryspin(elem) { 
    spinner = document.querySelector("#spinner");
    !elem ? angle -= 45 : angle += 45;
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

setInterval(() => {
    angle -= 45; 
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}, 5000)

const $ = (elem) => {
    return document.querySelector(elem)
}

let row__inner = $('.row__inner')
var move = new Hammer($('.row__inner'))
let count = 0
move.on('panleft', () => {
    if(row__inner.style.left !== '-74rem') {
            row__inner.style.left = `${count}rem`;
            count -= 1
    }
})
move.on('panright', () => {
    if(row__inner.style.left !== '0rem') {
        row__inner.style.left = `${count}rem`;
        count += 1
    }
})