function $(elem) {
    return document.querySelector(elem);
}

window.addEventListener('load', function() {

    let $form = $('#form');
    let $submitErrors = $('#submitErrors');
    
    let $phone = $('#phone');
    let $phoneErrors = $('#phoneErrors');
    let regExPhone = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;

    let $date = $('#date');
    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let $dateErrors = $('#dateErrors');
    let regExDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;

    let $genre = $('#genre');
    let $genreErrors = $('#genreErrors');

    let $address = $('#address');
    let $addressErrors = $('#addressErrors');
    let regExAddress = /^\D+\s\D?\s?\d{1,5}$/gim;

    let $country = $('#country');
    let $countryErrors = $('#countryErrors');
    let $province = $('#province');
    let $provinceErrors = $('#provinceErrors');
    let $city = $('#city');
    let $cityErrors = $('#cityErrors');
    let regExText = /^\D+$/gim;

    let validationErrors = false;

    $phone.addEventListener('blur', function(){
        switch (true) {
            case !regExPhone.test($phone.value):
                $phoneErrors.innerHTML = 'Este teléfono no es válido';
                $phone.style.color = 'red';
                validationErrors = true;
                break;
            default:
                $phoneErrors.innerHTML = '';
                $phone.style.color = '#2940D3';
                $phone.style.backgroundColor = '#d8c371';
                $phone.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $date.addEventListener('blur', function(){
        let dateUser = new Date($date.value);
        let yearUser = dateUser.getFullYear();
        switch (true) {
            case !regExDate.test($date.value):
                $dateErrors.innerHTML = 'Esta fecha no es válida';
                $date.style.color = 'red';
                validationErrors = true;
                break;
            case yearUser > actualYear:
                $dateErrors.innerHTML = 'La fecha seleccionada no puede ser mayor a la fecha actual';
                $date.style.color = 'red';
                validationErrors = true;
                break;    
            default:
                $dateErrors.innerHTML = '';
                $date.style.color = '#2940D3';
                $date.style.backgroundColor = '#d8c371';
                $date.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $genre.addEventListener('blur', function() {
        switch (true) {
            case $genre.value == 'masculino':
                $genreErrors.innerHTML = '';
                $genre.style.color = '#2940D3';
                $genre.style.backgroundColor = '#d8c371';
                $genre.style.border = 'none';
                validationErrors = false;
                break;

             case $genre.value == "femenino":
                $genreErrors.innerHTML = '';
                $genre.style.color = '#2940D3';
                $genre.style.backgroundColor = '#d8c371';
                $genre.style.border = 'none';
                validationErrors = false;
                break;

            case $genre.value == "otro":
                $genreErrors.innerHTML = '';
                $genre.style.color = '#2940D3';
                $genre.style.backgroundColor = '#d8c371';
                $genre.style.border = 'none';
                validationErrors = false;
                break; 
        
            default:
                $genreErrors.innerHTML = 'Debe seleccionar un género del listado';
                $genre.style.color = 'red';
                validationErrors = true;
                break;
        }
    })

    $address.addEventListener('blur', function(){
        if (regExAddress.test($address.value)) {
            $addressErrors.innerHTML = ''
            $address.style.color = '#2940D3'
            $address.style.backgroundColor = '#d8c371'
            $address.style.border = 'none'
            validationErrors = false
        } else if (!regExAddress.test($address.value)) {
            $addressErrors.innerHTML = 'La direccion debe contener calle y numero'
            $address.style.color = 'red'
            validationErrors = true
        }
    })

    $country.addEventListener('blur', function(){
        if (regExText.test($country.value)) {
            console.log("if");
            $countryErrors.innerHTML = '';
                $country.style.color = '#2940D3';
                $country.style.backgroundColor = '#d8c371';
                $country.style.border = 'none';
                validationErrors = false;
        } else if(!regExAddress.test($address.value)) {
            console.log("else");
            $countryErrors.innerHTML = 'Debe seleccionar un país válido';
                $country.style.color = 'red';
                validationErrors = true;
        }
    })

    $province.addEventListener('blur', function(){
        if (regExText.test($province.value)) {
            console.log("if");
            $provinceErrors.innerHTML = '';
                $province.style.color = '#2940D3';
                $province.style.backgroundColor = '#d8c371';
                $province.style.border = 'none';
                validationErrors = false;
        } else if(!regExAddress.test($address.value)) {
            console.log("else");
            $provinceErrors.innerHTML = 'Debe seleccionar un país válido';
                $province.style.color = 'red';
                validationErrors = true;
        }
    })

    $city.addEventListener('blur', function(){
        if (regExText.test($city.value)) {
            console.log("if");
            $cityErrors.innerHTML = '';
                $city.style.color = '#2940D3';
                $city.style.backgroundColor = '#d8c371';
                $city.style.border = 'none';
                validationErrors = false;
        } else if(!regExAddress.test($address.value)) {
            console.log("else");
            $cityErrors.innerHTML = 'Debe seleccionar un país válido';
                $city.style.color = 'red';
                validationErrors = true;
        }
    })

    $form.addEventListener('submit', function(e) {
        let error = false;
        e.preventDefault();

        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'checkbox'){
                elementsForm[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                $submitErrors.style.color = 'red';
                $submitErrors.innerHTML = 'Los campos indicados son obligatorios';
                error = true;
            }
        }

        if(!error && !validationErrors) {
            $form.submit();
        }
    })

})