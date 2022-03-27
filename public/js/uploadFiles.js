function showHide() {
    let movieSeries = document.querySelector('#movieSeries').value;
    let seasons = document.querySelector('#seasons');
    let duration = document.querySelector('#duration')

    if (movieSeries == 'serie') {
        duration.setAttribute("style", "display:none")
        // duration.setAttribute("style", "width:0")
        // duration.setAttribute("style", "padding:0")
        //duration.setAttribute('hidden')
        //seasons.toggleAttribute('hidden')
        seasons.setAttribute("style", "display:block")
        // seasons.setAttribute("style", "width:70%")
        // seasons.setAttribute("style", "padding:.5em")
        //seasons.removeAttribute("hidden");
    } else if(movieSeries == 'movie') {
        duration.setAttribute("style", "display:block")
        // duration.setAttribute("style", "width:70%")
        // duration.setAttribute("style", "padding:.5em")
        seasons.setAttribute("style", "display:none")
        // seasons.setAttribute("style", "width:0")
        // seasons.setAttribute("style", "padding:0")
        //seasons.setAttribute('hidden')
        //duration.toggleAttribute('hidden')
        console.log(movieSeries);
    };
}


function qs(element) {
    return document.querySelector(element)
};

window.addEventListener('load', function () {

    // Errors
    //let submitErrors = qs('.text-errors')

    // Formulary of charge
    let $formCharge = qs('#form');

    // Name
    let $name = qs('#name');
    let $nameErrors = qs('#nameErrors');

    // Comment
    let $description = qs('#description');
    let $descriptionErrors = qs('#descriptionErrors');

    // Seasons
    let $seasons = qs('#seasons');
    let $seasonsErrors = qs('#seasonsErrors');

    // Duration
    let $duration = qs('#duration');
    let $durationErrors = qs('#durationErrors');

    // Appreciation
    let $appreciation = qs('#appreciation');
    let $appreciationErrors = qs('#appreciationErrors');

    // Director
    let $director = qs('#director');
    let $directorErrors = qs('#directorErrors');

    // Age
    let $age = qs('#age');
    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let $ageErrors = qs('#ageErrors');

    let $genreCheck = document.querySelectorAll('#genre');
    let $genreCheckErrors = qs('#genreErrors');

    let $idiom = document.querySelectorAll('#idiom');
    let $idiomErrors = qs('#idiomErrors');

    // Subtitle
    let $subtitle = qs('#subtitle');
    let $subtitleErrors = qs('#subtitleErrors');

    // File => img
    let $file = qs('#file');
    let $imagePreview = qs('#imgPreview');
    let $fileErrors = qs('#fileErrors');

    // Url
    let $video = qs('#video');
    let $videoErrors = qs('#videoErrors');

    // Price
    let $buyPrice = qs('#buyPrice');
    let $buyPriceErrors = qs('#buyPriceErrors');

    // Rental
    let $rentalPrice = qs('#rentalPrice');
    let $rentalPriceErrors = qs('#rentalPriceErrors');

    // Discount
    let $discount = qs('#discount');
    let $discountErrors = qs('#discountErrors');

    // Regular expressions
    let regExAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{5,50}$/;
    let regExAlphaText = /^[a-zA-Z0-9-\sñáéíóúü:=%&$·"!¿/[ª!?'¡].{20,500}$/;
    let regExNmbr = /^[0-9].{0,2}$/;
    let regExPrice = /^[0-9].{0,5}$/;

    let validationErrors = false;

    $name.addEventListener('blur', function(){
        if(!$name.value.trim()){
            $nameErrors.innerHTML = 'Es necesario un titulo'
            $nameErrors.style.color = '#ff0000'
            $name.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlpha.test($name.value)){
            $nameErrors.innerHTML = 'No es un titulo valido'
            $nameErrors.style.color = '#ff0000'
            $name.toggleAttribute('required')
            validationErrors = true
        } else {
            $nameErrors.innerHTML = 'El título es valido'
            $nameErrors.style.color = '#2940D3'
            $name.style.backgroundColor = '#d8c371'
            $name.style.border = 'none'
            $name.toggleAttribute('required')
            validationErrors = false
        }
    })

    $description.addEventListener('blur', function(){
        if(!$description.value.trim()){
            $descriptionErrors.innerHTML = 'La descripcion es obligatoria'
            $descriptionErrors.style.color = '#ff0000'
            $description.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlphaText.test($description.value)){
            $descriptionErrors.innerHTML = 'La descripcion no es válida'
            $descriptionErrors.style.color = '#ff0000'
            $description.toggleAttribute('required')
            $description.onKeyPress('')
            validationErrors = true
        } else {
            $descriptionErrors.innerHTML = 'La descripcion es valida'
            $descriptionErrors.style.color = '#2940D3'
            $description.style.backgroundColor = '#d8c371'
            $description.style.border = 'none'
            $description.toggleAttribute('required')
            validationErrors = false
        }
    })

    $seasons.addEventListener('blur', function(){
        if(!$seasons.value.trim()){
            $seasonsErrors.innerHTML = 'Debe ingresar temporadas'
            $seasonsErrors.style.color = '#ff0000'
            $seasons.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($seasons.value)){
            $seasonsErrors.innerHTML = 'No es una cantidad de temporadas valida'
            $seasonsErrors.style.color = '#ff0000'
            $seasons.toggleAttribute('required')
            validationErrors = true
        } else {
            $seasonsErrors.innerHTML = 'La cantidad de temporadas es valida'
            $seasonsErrors.style.color = '#2940D3'
            $seasons.style.backgroundColor = '#d8c371'
            $seasons.style.border = 'none'
            $seasons.toggleAttribute('required')
            validationErrors = false
        }
    })

    $duration.addEventListener('blur', function(){
        if(!$duration.value.trim()){
            $durationErrors.innerHTML = 'Debe ingresar una duracion'
            $durationErrors.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($duration.value)){
            $durationErrors.innerHTML = 'La duracion no es valida'
            $durationErrors.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else {
            $durationErrors.innerHTML = 'La duracion es valida'
            $durationErrors.style.color = '#2940D3'
            $duration.style.backgroundColor = '#d8c371'
            $duration.style.border = 'none'
            $duration.toggleAttribute('required')
            validationErrors = false
        }
    })

    $appreciation.addEventListener('blur', function(){
        if(!$appreciation.value.trim()){
            $appreciationErrors.innerHTML = 'La calificacion es obligatoria'
            $appreciationErrors.style.color = '#ff0000'
            $appreciation.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($appreciation.value)){
            $appreciationErrors.innerHTML = 'La calificacion no es válida'
            $appreciationErrors.style.color = '#ff0000'
            $appreciation.toggleAttribute('required')
            validationErrors = true
        } else {
            $appreciationErrors.innerHTML = 'La calificacion es valida'
            $appreciationErrors.style.color = '#2940D3'
            $appreciation.style.backgroundColor = '#d8c371'
            $appreciation.style.border = 'none'
            $appreciation.toggleAttribute('required')
            validationErrors = false
        }
    })

    $director.addEventListener('blur', function(){
        if(!$director.value.trim()){
            $directorErrors.innerHTML = 'El director es obligatorio'
            $directorErrors.style.color = '#ff0000'
            $director.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlpha.test($director.value)){
            $directorErrors.innerHTML = 'El director no es válido'
            $directorErrors.style.color = '#ff0000'
            $director.toggleAttribute('required')
            validationErrors = true
        } else {
            $directorErrors.innerHTML = 'El nombre de director es valido'
            $directorErrors.style.color = '#2940D3'
            $director.style.backgroundColor = '#d8c371'
            $director.style.border = 'none'
            $director.toggleAttribute('required')
            validationErrors = false
        }
    })

    $age.addEventListener('blur', function(){
        let dateMovie = new Date($age.value);
        let yearMovie = dateMovie.getFullYear();
        switch (true) {
            case !regExAlpha.test($age.value):
                $ageErrors.innerHTML = 'Debe ingresar una fecha';
                $ageErrors.style.color = '#ff0000';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;
            case yearMovie > actualYear:
                $ageErrors.innerHTML = 'La fecha seleccionada no puede ser mayor a la fecha actual';
                $ageErrors.style.color = '#ff0000';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;  
            case yearMovie < 1900:
                $ageErrors.innerHTML = 'La fecha seleccionada no puede ser menor a 1900';
                $ageErrors.style.color = '#ff0000';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;  
            default:
                $ageErrors.innerHTML = 'La fecha es correcto';
                $ageErrors.style.color = '#2940D3';
                $age.style.backgroundColor = '#d8c371';
                $age.style.border = 'none';
                $age.toggleAttribute('required')
                validationErrors = false;
                break;
        }
    })

    function genreValid() {
        let suma=0;

        for (let i = 0; i < $genreCheck.length; i++) {
            $genreCheck[i].addEventListener("click", genreValid);
            if($genreCheck[i].checked != true){
                suma=suma+1;
            }
        }
        if(suma == 13) {
            $genreCheckErrors.innerHTML= 'Necesario al menos 1 genero';
            $genreCheckErrors.style.color = '#ff0000';
            validationErrors = true
        } else {
            $genreCheckErrors.innerHTML= '';
            $genreCheckErrors.style.color = '#2940D3'
            validationErrors = false
        }       
    }
    genreValid()

    function idiomValid() {
        let suma=0;

        for (let i = 0; i < $idiom.length; i++) {
            $idiom[i].addEventListener("click", idiomValid);
            if($idiom[i].checked != true){
                suma=suma+1;
            }
        }
        if(suma == 7) {
            $idiomErrors.innerHTML= 'Necesario al menos un idioma';
            $idiomErrors.style.color = '#ff0000';
            validationErrors = true
        } else {
            $idiomErrors.innerHTML= '';
            validationErrors = false
        }       
    }
    idiomValid()

    $subtitle.addEventListener('blur', function(){
        if($subtitle.value.trim() && $subtitle.value === "0"){
            $subtitleErrors.innerHTML = 'Es necesario seleccionar una opcion';
            $subtitleErrors.style.color = '#ff0000';
            $subtitle.toggleAttribute('required')
            validationErrors = true;
        } else {
            $subtitleErrors.innerHTML = 'Selección valida'
            $subtitleErrors.style.color = '#2940D3'
            $subtitle.style.backgroundColor = '#d8c371'
            $subtitle.style.border = 'none'
            $subtitle.toggleAttribute('required')
            validationErrors = false
        }
    })

    /* $file.addEventListener('change', function acceptFile(){
        let typeFile = $file.value;
        let extenssionFile = /(.jpg|.jpeg|.png|.gif|.web)$/i;
        if(!extenssionFile.exec(typeFile)){
            $fileErrors.innerHTML = 'Es necesario colocar una imagen valida';
            $file.style.color = 'red';
            $file.value = "";
            $imagePreview = "";
            return false
        } else {
            if($file.files && $file.files[0]){
                let readerImg = new FileReader();
                readerImg.onload = function(e){
                    $imagePreview.innerHTML = `<img src="${e.target.result}" alt="">`
                };
                readerImg.readAsDataURL($file.files[0]);
                $fileErrors.innerHTML = 'Imagen subida';
            }
        }
    }) */

    $video.addEventListener('blur', function(){
        if(!$video.value.trim()){
            $videoErrors.innerHTML = 'Debe ingresar el link del trailer'
            $videoErrors.style.color = '#ff0000'
            $video.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlpha.test($name.value)){
            $videoErrors.innerHTML = 'El trailer no es válido'
            $videoErrors.style.color = '#ff0000'
            $video.toggleAttribute('required')
            validationErrors = true
        } else {
            $videoErrors.innerHTML = 'El trailer es valido'
            $videoErrors.style.color = '#2940D3'
            $video.style.backgroundColor = '#d8c371'
            $video.style.border = 'none'
            $video.toggleAttribute('required')
            validationErrors = false
        }
    })

    $buyPrice.addEventListener('blur', function(){
        if($buyPrice.value.trim() && $buyPrice.value === 0 ){
            $buyPriceErrors.innerHTML = 'Debe ingresar un precio';
            $buyPriceErrors.style.color = '#ff0000';
            $buyPrice.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExPrice.test($buyPrice.value)){
            $buyPriceErrors.innerHTML = 'El precio no es válido'
            $buyPriceErrors.style.color = '#ff0000'
            $buyPrice.toggleAttribute('required')
            validationErrors = true;
        } else {
            $buyPriceErrors.innerHTML = 'El precio es valido'
            $buyPriceErrors.style.color = '#2940D3'
            $buyPrice.style.backgroundColor = '#d8c371'
            $buyPrice.style.border = 'none'
            $buyPrice.toggleAttribute('required')
            validationErrors = false;
        }
    })

    $rentalPrice.addEventListener('blur', function(){
        if($rentalPrice.value.trim() && $rentalPrice.value === 0 ){
            $rentalPriceErrors.innerHTML = 'Debe ingresar un precio';
            $rentalPriceErrors.style.color = '#ff0000';
            $rentalPrice.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExPrice.test($rentalPrice.value)){
            $rentalPriceErrors.innerHTML = 'El precio no es válido'
            $rentalPriceErrors.style.color = '#ff0000'
            $rentalPrice.toggleAttribute('required')
            validationErrors = true
        } else {
            $rentalPriceErrors.innerHTML = 'El precio es valido'
            $rentalPriceErrors.style.color = '#2940D3'
            $rentalPrice.style.backgroundColor = '#d8c371'
            $rentalPrice.style.border = 'none'
            $rentalPrice.toggleAttribute('required')
            validationErrors = false
        }
    })

    $discount.addEventListener('blur', function(){
        if($discount.value.trim() && $discount.value === 0 ){
            $discountErrors.innerHTML = 'Debe ingresar el descuento';
            $discountErrors.style.color = '#ff0000';
            $discount.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExNmbr.test($discount.value)){
            $discountErrors.innerHTML = 'El descuento no es válido'
            $discountErrors.style.color = '#ff0000'
            $discount.toggleAttribute('required')
            validationErrors = true
        } else {
            $discountErrors.innerHTML = 'El descuento es valido'
            $discountErrors.style.color = '#2940D3'
            $discount.style.backgroundColor = '#d8c371'
            $discount.style.border = 'none'
            $discount.toggleAttribute('required')
            validationErrors = false
        }
    })

    $formCharge.addEventListener('submit', function(event){
        
        event.preventDefault();

        let error = false;
        let elementsForm = this.elements;


        for (let index = 0; index < elementsForm.length; index++){


            if(document.querySelector('#movieSeries').value == 'movie') {
                if(elementsForm[index].value == "" && elementsForm[index].type !== 'file' && elementsForm[index].id !== 'seasons'){
                    elementsForm[index].classList.add('text-errors')
                    elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                    submitErrors.style.color = 'red'
                    submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                    error = true;
                }
            } else {
                if(elementsForm[index].value.trim() && elementsForm[index].type !== 'file' && elementsForm[index].id !== 'duration'){
                    elementsForm[index].classList.add('text-errors')
                    elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                    submitErrors.style.color = 'red'
                    submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                    error = true;
                }
            }

        }
        console.log(error)
        console.log(validationErrors)

        if(!error && !validationErrors) {
            $formCharge.submit()
        }

    })

})