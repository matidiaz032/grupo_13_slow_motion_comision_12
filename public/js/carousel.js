
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
    return document.getElementsByClassName(elem)
}

let row__inner = $('row__inner')
let count = 0

var movies = new Hammer(row__inner[0])
movies.on('panleft', () => {
    if(row__inner[0].style.left !== '-74rem') {
            row__inner[0].style.left = `${count}rem`;
            count -= 1
    }
})
movies.on('panright', () => {
    if(row__inner[0].style.left !== '0rem') {
        row__inner[0].style.left = `${count}rem`;
        count += 1
    }
})

let series = new Hammer(row__inner[1])
series.on('panleft', () => {
    if(row__inner[1].style.left !== '-74rem') {
        row__inner[1].style.left = `${count}rem`;
        count -= 1
    }
})
series.on('panright', () => {
    if(row__inner[1].style.left !== '0rem') {
        row__inner[1].style.left = `${count}rem`;
        count += 1
    }
})
