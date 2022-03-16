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

const selec = (elem) => {
    return document.getElementsByClassName(elem)
}

let row__inner = selec('row__inner')
let count = 0

var movies = new Hammer(row__inner[0])
movies.on('panleft', () => {
    let width = window.screen.width;
    if(width <= 320) {
        if(row__inner[0].style.left !== '-74rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 425 && width > 320) {
        if(row__inner[0].style.left !== '-67rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 768 && width > 425) {
        if(row__inner[0].style.left !== '-46rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1024 && width > 768) {
        if(row__inner[0].style.left !== '-32rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1440 && width > 1024) {
        if(row__inner[0].style.left !== '-29rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1920 && width > 1440) {
        if(row__inner[0].style.left !== '-20rem') {
                row__inner[0].style.left = `${count}rem`;
                count -= 1
        }
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
    let width = window.screen.width;
    if(width <= 320) {
        if(row__inner[1].style.left !== '-74rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 425 && width > 320) {
        if(row__inner[1].style.left !== '-67rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 768 && width > 425) {
        if(row__inner[1].style.left !== '-46rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1024 && width > 768) {
        if(row__inner[1].style.left !== '-32rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1440 && width > 1024) {
        if(row__inner[1].style.left !== '-29rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1920 && width > 1440) {
        if(row__inner[1].style.left !== '-20rem') {
                row__inner[1].style.left = `${count}rem`;
                count -= 1
        }
    }
})
series.on('panright', () => {
    if(row__inner[1].style.left !== '0rem') {
        row__inner[1].style.left = `${count}rem`;
        count += 1
    }
})

let popular = new Hammer(row__inner[2])
popular.on('panleft', () => {
    let width = window.screen.width;
    if(width <= 768 && width > 425) {
        if(row__inner[2].style.left !== '-46rem') {
                row__inner[2].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1024 && width > 768) {
        if(row__inner[2].style.left !== '-32rem') {
                row__inner[2].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1440 && width > 1024) {
        if(row__inner[2].style.left !== '-29rem') {
                row__inner[2].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1920 && width > 1440) {
        if(row__inner[2].style.left !== '-20rem') {
                row__inner[2].style.left = `${count}rem`;
                count -= 1
        }
    }
})
popular.on('panright', () => {
    if(row__inner[2].style.left !== '0rem') {
        row__inner[2].style.left = `${count}rem`;
        count += 1
    }
})

let ofers = new Hammer(row__inner[3])
ofers.on('panleft', () => {
    let width = window.screen.width;
    if(width <= 1024 && width > 768) {
        if(row__inner[3].style.left !== '-32rem') {
                row__inner[3].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1440 && width > 1024) {
        if(row__inner[3].style.left !== '-29rem') {
                row__inner[3].style.left = `${count}rem`;
                count -= 1
        }
    }
    if(width <= 1920 && width > 1440) {
        if(row__inner[3].style.left !== '-20rem') {
                row__inner[3].style.left = `${count}rem`;
                count -= 1
        }
    }
})
ofers.on('panright', () => {
    if(row__inner[3].style.left !== '0rem') {
        row__inner[3].style.left = `${count}rem`;
        count += 1
    }
})






var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


let elemCarousel = document.querySelector('.slideshow-container')
var carousel = new Hammer(elemCarousel)


carousel.on('panleft', (event) => {
    if(event.isFinal) {
        plusSlides(1)
    }
})
carousel.on('panright', (event) => {
    if(event.isFinal) {
        plusSlides(-1)
    }
})


