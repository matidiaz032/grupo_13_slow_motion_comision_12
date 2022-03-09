function $(elem) {
    return document.querySelector(elem);
}

window.addEventListener('load', function() {
    let $form = $('#form-auth');
    let $submitErrors = $('#submitErrors');

    let $firstName = $('#first_name');
    let $firstNameErrors = $('#first_nameErrors');

    let $lastName = $('#last_name');
    let $lastNameErrors = $('#last_nameErrors');

    let $userName = $('#user_name');
    let $userNameErrors = $('#user_nameErrors');

    let $email = $('#email');
    let $emailErrors = $('#emailErrors');

    let $actualPassword = $('#actualPassword');
    let $actualPasswordErrors = $('#actualPasswordErrors');

    let $newPassword = $('#newPassword');
    let $newPasswordErrors = $('#newPasswordErrors');
    
    let regExText = /^[a-zA-Z\sñáéíóúü ]*$/;
    let regExAlpha = /^[a-zA-Z0-9_]*$/;
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

    let validationErrors = false;

    $firstName.addEventListener('blur', function(){
        switch (true) {
            case !regExText.test($firstName.value):
                $firstNameErrors.innerHTML = 'Debe ingresar un nombre válido';
                $firstName.style.color = 'red';
                validationErrors = true;
                break;
            case $firstName.value.length < 3:
                $firstNameErrors.innerHTML = 'El nombre debe contener mas de 3 caracteres';
                $firstName.style.color = 'red';
                validationErrors = true;
                break;
            default:
                $firstNameErrors.innerHTML = '';
                $firstName.style.color = '#2940D3';
                $firstName.style.backgroundColor = '#d8c371';
                $firstName.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $lastName.addEventListener('blur', function(){
        switch (true) {
            case !regExText.test($lastName.value):
                $lastNameErrors.innerHTML = 'Debe ingresar un nombre válido';
                $lastName.style.color = 'red';
                validationErrors = true;
                break;
            case $lastName.value.length < 3:
                $lastNameErrors.innerHTML = 'El nombre debe contener mas de 3 caracteres';
                $lastName.style.color = 'red';
                validationErrors = true;
                break;
            default:
                $lastNameErrors.innerHTML = '';
                $lastName.style.color = '#2940D3';
                $lastName.style.backgroundColor = '#d8c371';
                $lastName.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $userName.addEventListener('blur', function(){
        switch (true) {
            case !regExAlpha.test($userName.value):
                $userNameErrors.innerHTML = 'Debe ingresar un nombre alfanumérico';
                $userName.style.color = 'red';
                validationErrors = true;
                break;
            case $userName.value.length < 3:
                $userNameErrors.innerHTML = 'El nombre debe contener mas de 3 caracteres';
                $userName.style.color = 'red';
                validationErrors = true;
                break;
            default:
                $userNameErrors.innerHTML = '';
                $userName.style.color = '#2940D3';
                $userName.style.backgroundColor = '#d8c371';
                $userName.style.border = 'none';
                validationErrors = false;
                break;
        }
    })

    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                $email.style.color = 'red'
                validationErrors = true
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido'
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

    $actualPassword.addEventListener('blur', function(){
        switch (true) {
            case !$actualPassword.value.trim():
                $actualPasswordErrors.innerHTML = 'El campo contraseña actual es obligatorio'
                $actualPassword.style.color = 'red'
                validationErrors = true
                break;
            case !regExPass.test($actualPassword.value):
                $actualPasswordErrors.innerHTML = 'La contraseña debe contener entre 6 y 16 caracteres, al menos una mayúscula, una minúscula y un número'
                $actualPassword.style.color = 'red'
                validationErrors = true
                break;
            default:
                $actualPasswordErrors.innerHTML = ''
                $actualPassword.style.color = '#2940D3'
                $actualPassword.style.border = 'none'
                $actualPassword.style.backgroundColor = '#d8c371'
                validationErrors = false
                break;
        }
    })

    $newPassword.addEventListener('blur', function(){
        if ($newPassword.value !== "") {
            switch (true) {
                case !regExPass.test($newPassword.value):
                    $newPasswordErrors.innerHTML = 'La contraseña debe contener al menos 6 caracteres, una mayúscula, una minúscula y un número'
                    $newPassword.style.color = 'red'
                    validationErrors = true
                    break;
                default:
                    $newPasswordErrors.innerHTML = ''
                    $newPassword.style.color = '#2940D3'
                    $newPassword.style.border = 'none'
                    $newPassword.style.backgroundColor = '#d8c371'
                    validationErrors = false
                    break;
            }
        } else {
                $newPasswordErrors.innerHTML = ''
                $newPassword.style.color = '#2940D3'
                $newPassword.style.border = 'none'
                $newPassword.style.backgroundColor = '#d8c371'
                validationErrors = false
        }
    })

    $form.addEventListener('submit', function(e) {
        let error = false;
        e.preventDefault();

        let elementsForm = [...this.elements].splice(0,4)

        for (let i = 0; i < elementsForm.length; i++) {
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