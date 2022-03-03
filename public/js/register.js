function $(elem) {
    return document.querySelector(elem)
}

window.addEventListener('load', function() {
    let $form = $('#form')
    let $submitErrors = $('#submitErrors')
    let $name = $('#name');
    let $nameErrors = $('#nameErrors')
    let $lastName = $('#lastName');
    let $lastNameErrors = $('#lastNameErrors')
    let $userName = $('#userName');
    let $userNameErrors = $('#userNameErrors')
    let $email = $('#email');
    let $emailErrors = $('#emailErrors')
    let $pass1 = $('#pass1');
    let $pass1Errors = $('#pass1Errors')
    let $pass2 = $('#pass2');
    let $pass2Errors = $('#pass2Errors')
    let $terms = $('#terms');
    let $termsErrors = $('#termsErrors')
    let $check = document.querySelectorAll('#checkOk')
    let regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

    let validationErrors = false;

    $name.addEventListener('blur', function(){
        switch (true) {
            case !$name.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $name.style.color = 'red'
                $check[0].style.display = 'none'
                validationErrors = true
                break;
            case !regExAlpha.test($name.value) || $name.value.length < 3:
                $nameErrors.innerHTML = 'No es un nombre válido'
                $name.style.color = 'red'
                $check[0].style.display = 'none'
                validationErrors = true
                break;
            default:
                $nameErrors.innerHTML = ''
                $name.style.color = '#2940D3'
                $name.style.backgroundColor = '#d8c371'
                $name.style.border = 'none'
                $check[0].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $lastName.addEventListener('blur', function(){
        switch (true) {
            case !$lastName.value.trim():
                $lastNameErrors.innerHTML = 'El campo apellido es obligatorio'
                $lastName.style.color = 'red'
                $check[1].style.display = 'none'
                validationErrors = true
                break;
            case !regExAlpha.test($lastName.value) || $lastName.value.length < 3:
                $lastNameErrors.innerHTML = 'No es un nombre válido'
                $lastName.style.color = 'red'
                $check[1].style.display = 'none'
                validationErrors = true
                break;
            default:
                $lastNameErrors.innerHTML = ''
                $lastName.style.color = '#2940D3'
                $lastName.style.backgroundColor = '#d8c371'
                $lastName.style.border = 'none'
                $check[1].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $userName.addEventListener('blur', function(){
        switch (true) {
            case !$userName.value.trim():
                $userNameErrors.innerHTML = 'El nombre de usuario es obligatorio'
                $userName.style.color = 'red'
                $check[2].style.display = 'none'
                validationErrors = true
                break;
            case !regExAlpha.test($userName.value) || $userName.value.length < 3:
                $lastNameErrors.innerHTML = 'No es un nombre válido'
                $userName.style.color = 'red'
                $check[2].style.display = 'none'
                validationErrors = true
                break;
            default:
                $userNameErrors.innerHTML = ''
                $userName.style.color = '#2940D3'
                $userName.style.backgroundColor = '#d8c371'
                $userName.style.border = 'none'
                $check[2].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                $email.style.color = 'red'
                $check[3].style.display = 'none'
                validationErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'No es un email válido'
                $email.style.color = 'red'
                $check[3].style.display = 'none'
                validationErrors = true
                break;
            default:
                $emailErrors.innerHTML = ''
                $email.style.color = '#2940D3'
                $email.style.backgroundColor = '#d8c371'
                $email.style.border = 'none'
                $check[3].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $pass1.addEventListener('blur', function(){
        switch (true) {
            case !$pass1.value.trim():
                $pass1Errors.innerHTML = 'El campo contraseña es obligatorio'
                $pass1.style.color = 'red'
                $check[4].style.display = 'none'
                validationErrors = true
                break;
            case !regExPass.test($pass1.value):
                $pass1Errors.innerHTML = 'La contraseña debe ser mayor a 6 caracteres y debe contener letras y numeros'
                $pass1.style.color = 'red'
                $check[4].style.display = 'none'
                validationErrors = true
                break;
            default:
                $pass1Errors.innerHTML = ''
                $pass1.style.color = '#2940D3'
                $pass1.style.border = 'none'
                $pass1.style.backgroundColor = '#d8c371'
                $check[4].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'El campo repetir contraseña es obligatorio'
                $pass2.style.color = 'red'
                $check[5].style.display = 'none'
                validationErrors = true
                break;
            case $pass2.value !== $pass1.value || $pass2.value.length < 6:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden'
                $pass2.style.color = 'red'
                $check[5].style.display = 'none'
                validationErrors = true
                break;
            default:
                $pass2Errors.innerHTML = ''
                $pass2.style.color = '#2940D3'
                $pass2.style.backgroundColor = '#d8c371'
                $pass2.style.border = 'none'
                $check[5].style.display = 'block'
                validationErrors = false
                break;
        }
    })

    $terms.addEventListener('click', function(){
        if(!$terms.checked) {
            $termsErrors.innerHTML = 'Debes aceptar los terminos y condiciones'
        } else {
            $termsErrors.innerHTML = ''
        }
    })

    $form.addEventListener('submit', function(e) {
        let error = false;
        e.preventDefault()

        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'file'){
                elementsForm[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                $submitErrors.style.color = 'red'
                $submitErrors.innerHTML = 'Los campos indicados son obligatorios'
                error = true
            }
        }

        if(!$terms.checked) {
            $terms.style.border = '3px solid red'
            $termsErrors.innerHTML = 'Debes aceptar los terminos y condiciones'
            error = true
        }

        if(!error && !validationErrors) {
            $form.submit()
        }
    })

})