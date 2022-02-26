function $(elem) {
    return document.querySelector(elem)
}

window.addEventListener('load', function() {

    let $form = $('#form')
    let $submitErrors = $('#submitErrors')
    let $email = $('#email');
    let $emailErrors = $('#emailErrors')
    let $pass = $('#pass');
    let $passErrors = $('#passErrors')
    let regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

    let validationErrors = false;

    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                $email.style.color = 'red'
                validationErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'No es un email válido'
                $email.style.color = 'red'
                validationErrors = true
                break;
            default:
                $emailErrors.innerHTML = ''
                $email.style.color = '#2940D3'
                $email.style.backgroundColor = '#d8c371'
                $email.style.border = 'none'
                validationErrors = false
                break;
        }
    })

    $pass.addEventListener('blur', function(){
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.style.color = 'red'
                validationErrors = true
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'No es una contraseña válida'
                $pass.style.color = 'red'
                validationErrors = true
                break;
            default:
                $passErrors.innerHTML = ''
                $pass.style.color = '#2940D3'
                $pass.style.border = 'none'
                $pass.style.backgroundColor = '#d8c371'
                validationErrors = false
                break;
        }
    })

    $form.addEventListener('submit', function(e) {
        let error = false;
        e.preventDefault()

        let elementsForm = this.elements;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            if(elementsForm[i].value == '' && elementsForm[i].type !== 'checkbox'){
                elementsForm[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                $submitErrors.style.color = 'red'
                $submitErrors.innerHTML = 'Los campos indicados son obligatorios'
                error = true
            }
        }

        if(!error && !validationErrors) {
            $form.submit()
        }
    })

})