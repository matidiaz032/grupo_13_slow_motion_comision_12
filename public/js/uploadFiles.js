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
        duration.toggleAttribute('required')
        seasons.setAttribute("style", "display:block")
        // seasons.setAttribute("style", "width:70%")
        // seasons.setAttribute("style", "padding:.5em")
        seasons.toggleAttribute('required')
        //seasons.removeAttribute("hidden");
    } else if(movieSeries == 'movie') {
        duration.setAttribute("style", "display:block")
        // duration.setAttribute("style", "width:70%")
        // duration.setAttribute("style", "padding:.5em")
        duration.toggleAttribute('required')
        seasons.setAttribute("style", "display:none")
        // seasons.setAttribute("style", "width:0")
        // seasons.setAttribute("style", "padding:0")
        //seasons.setAttribute('hidden')
        //duration.toggleAttribute('hidden')
        seasons.toggleAttribute('required')
        console.log(movieSeries);
    };
}


function qs(element) {
    return document.querySelector(element)
};

window.addEventListener('load', function () {

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

    // Genre
    //let $genreCheck = qs('input[type=checkbox]');
    let $genreCheck = document.querySelectorAll("input[type=checkbox]");
    let $genreCheckErrors = qs('#genreErrors');
    // let emptyCheck = [].filter.call( $genreCheck, function( el ) {
    //     return !el.checked
    // });

    // Idiom
    let $idiom = qs('#idiom');
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
    let regExAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{3,50}$/;
    let regExAlphaText = /^[a-zA-Z0-9-\sñáéíóúü:=%&$·"!¿/[ª!?'¡].{3,500}$/;
    let regExNmbr = /^[0-9].{0,2}$/;
    let regExPrice = /^[0-9].{0,5}$/;

    let validationErrors = false;

    $name.addEventListener('blur', function(){
        if(!$name.value.trim()){
            $nameErrors.innerHTML = 'El título es obligatorio'
            $name.style.color = '#ff0000'
            $name.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlpha.test($name.value)){
            $nameErrors.innerHTML = 'El título no es válido'
            $name.style.color = '#ff0000'
            $name.toggleAttribute('required')
            validationErrors = true
        } else {
            $nameErrors.innerHTML = 'El título es valido'
            $name.style.color = '#2940D3'
            $name.style.backgroundColor = '#d8c371'
            $name.style.border = 'none'
            $name.toggleAttribute('required')
            validationErrors = false
        }
    })

    $description.addEventListener('blur', function(){
        if(!$description.value.trim()){
            $descriptionErrors.innerHTML = 'El comentario es obligatorio'
            $description.style.color = '#ff0000'
            $description.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlphaText.test($description.value)){
            $descriptionErrors.innerHTML = 'El comentario no es válido'
            $description.style.color = '#ff0000'
            $description.toggleAttribute('required')
            $description.onKeyPress('')
            validationErrors = true
        } else {
            $descriptionErrors.innerHTML = 'El comentario es valido'
            $description.style.color = '#2940D3'
            $description.style.backgroundColor = '#d8c371'
            $description.style.border = 'none'
            $description.toggleAttribute('required')
            validationErrors = false
        }
    })

    $seasons.addEventListener('blur', function(){
        if(!$seasons.value.trim()){
            $seasonsErrors.innerHTML = 'La temporada es obligatoria'
            $seasons.style.color = '#ff0000'
            $seasons.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($seasons.value)){
            $seasonsErrors.innerHTML = 'La temporada no es válida'
            $seasons.style.color = '#ff0000'
            $seasons.toggleAttribute('required')
            validationErrors = true
        } else {
            $seasonsErrors.innerHTML = 'La temporada es valida'
            $seasons.style.color = '#2940D3'
            $seasons.style.backgroundColor = '#d8c371'
            $seasons.style.border = 'none'
            $seasons.toggleAttribute('required')
            validationErrors = false
        }
    })

    $duration.addEventListener('blur', function(){
        if(!$duration.value.trim()){
            $durationErrors.innerHTML = 'La duracion es obligatoria'
            $duration.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($duration.value)){
            $durationErrors.innerHTML = 'La duracion no es válida'
            $duration.style.color = '#ff0000'
            $duration.toggleAttribute('required')
            validationErrors = true
        } else {
            $durationErrors.innerHTML = 'La duracion es valida'
            $duration.style.color = '#2940D3'
            $duration.style.backgroundColor = '#d8c371'
            $duration.style.border = 'none'
            $duration.toggleAttribute('required')
            validationErrors = false
        }
    })

    $appreciation.addEventListener('blur', function(){
        if(!$appreciation.value.trim()){
            $appreciationErrors.innerHTML = 'El comentario es obligatorio'
            $appreciation.style.color = '#ff0000'
            $appreciation.toggleAttribute('required')
            validationErrors = true
        } else if (!regExNmbr.test($appreciation.value)){
            $appreciationErrors.innerHTML = 'El comentario no es válido'
            $appreciation.style.color = '#ff0000'
            $appreciation.toggleAttribute('required')
            validationErrors = true
        } else {
            $appreciationErrors.innerHTML = 'El comentario es valido'
            $appreciation.style.color = '#2940D3'
            $appreciation.style.backgroundColor = '#d8c371'
            $appreciation.style.border = 'none'
            $appreciation.toggleAttribute('required')
            validationErrors = false
        }
    })

    $director.addEventListener('blur', function(){
        if(!$director.value.trim()){
            $directorErrors.innerHTML = 'El nombre es obligatorio'
            $director.style.color = '#ff0000'
            $director.toggleAttribute('required')
            validationErrors = true
        } else if (!regExAlpha.test($director.value)){
            $directorErrors.innerHTML = 'El nombre no es válido'
            $director.style.color = '#ff0000'
            $director.toggleAttribute('required')
            validationErrors = true
        } else {
            $directorErrors.innerHTML = 'El nombre es valido'
            $director.style.color = '#2940D3'
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
                $ageErrors.innerHTML = 'Esta fecha no es válida';
                $age.style.color = 'red';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;
            case yearMovie > actualYear:
                $ageErrors.innerHTML = 'La fecha seleccionada no puede ser mayor a la fecha actual';
                $age.style.color = 'red';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;  
            case yearMovie < 1900:
                $ageErrors.innerHTML = 'La fecha seleccionada no puede ser menor a 1900';
                $age.style.color = 'red';
                $age.toggleAttribute('required')
                validationErrors = true;
                break;  
            default:
                $ageErrors.innerHTML = 'al fin';
                $age.style.color = '#2940D3';
                $age.style.backgroundColor = '#d8c371';
                $age.style.border = 'none';
                $age.toggleAttribute('required')
                validationErrors = false;
                break;
        }
    })

    $subtitle.addEventListener('blur', function(){
        if($subtitle.value.trim() && $subtitle.value === "0"){
            $subtitleErrors.innerHTML = 'Es necesario seleccionar una opcion';
            $subtitle.style.color = 'red';
            $subtitle.toggleAttribute('required')
            validationErrors = true;
        } else {
            $subtitleErrors.innerHTML = 'Selección valida'
            $subtitle.style.color = '#2940D3'
            $subtitle.style.backgroundColor = '#d8c371'
            $subtitle.style.border = 'none'
            $subtitle.toggleAttribute('required')
            validationErrors = false
        }
    })

    $file.addEventListener('change', function acceptFile(){
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
    })

    $buyPrice.addEventListener('blur', function(){
        if($buyPrice.value.trim() && $buyPrice.value === 0 ){
            $buyPriceErrors.innerHTML = 'Es necesario colocar precio de venta';
            $buyPrice.style.color = 'red';
            $buyPrice.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExPrice.test($buyPrice.value)){
            $buyPriceErrors.innerHTML = 'El precio no es válido'
            $buyPrice.style.color = '#ff0000'
            $buyPrice.toggleAttribute('required')
            validationErrors = true;
        } else {
            $buyPriceErrors.innerHTML = 'El comentario es valido'
            $buyPrice.style.color = '#2940D3'
            $buyPrice.style.backgroundColor = '#d8c371'
            $buyPrice.style.border = 'none'
            $buyPrice.toggleAttribute('required')
            validationErrors = false;
        }
    })

    $rentalPrice.addEventListener('blur', function(){
        if($rentalPrice.value.trim() && $rentalPrice.value === 0 ){
            $rentalPriceErrors.innerHTML = 'Es necesario seleccionar un idioma';
            $rentalPrice.style.color = 'red';
            $rentalPrice.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExPrice.test($rentalPrice.value)){
            $rentalPriceErrors.innerHTML = 'El título no es válido'
            $rentalPrice.style.color = '#ff0000'
            $rentalPrice.toggleAttribute('required')
            validationErrors = true
        } else {
            $rentalPriceErrors.innerHTML = 'El comentario es valido'
            $rentalPrice.style.color = '#2940D3'
            $rentalPrice.style.backgroundColor = '#d8c371'
            $rentalPrice.style.border = 'none'
            $rentalPrice.toggleAttribute('required')
            validationErrors = false
        }
    })

    $discount.addEventListener('blur', function(){
        if($discount.value.trim() && $discount.value === 0 ){
            $discountErrors.innerHTML = 'Es necesario seleccionar un idioma';
            $discount.style.color = 'red';
            $discount.toggleAttribute('required')
            validationErrors = true;
        } else if (!regExNmbr.test($discount.value)){
            $discountErrors.innerHTML = 'El título no es válido'
            $discount.style.color = '#ff0000'
            $discount.toggleAttribute('required')
            validationErrors = true
        } else {
            $discountErrors.innerHTML = 'El comentario es valido'
            $discount.style.color = '#2940D3'
            $discount.style.backgroundColor = '#d8c371'
            $discount.style.border = 'none'
            $discount.toggleAttribute('required')
            validationErrors = false
        }
    })

    $formCharge.addEventListener('submit', function(event){
        let error = false;
        event.preventDefault();

        // let error = false;
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length; index++){
            if(elementsForm[index].value !== "on"){
                elementsForm[index].classList.add('submitErrors')
                elementsForm[index].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                elementsForm[index].submitErrors.style.color = 'red'
                elementsForm[index].submitErrors.innerHTML = 'Los campos señalados son obligatorios'
                error = true;
            }
        }

        if(!error && !validationErrors) {
            $formCharge.submit()
        }

    })

})