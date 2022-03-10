function $(elem) {
    return document.querySelector(elem);
}

window.addEventListener('load', () => {
    let btnAvatar = $('#btnAdd');
    let divAvatar = $('#divAvatar');
    let inputAvatar = $('#changeAvatar');
    let modal = $('#bg-modal');
    let btnCancel = $('#btnCancel');
    
    divAvatar.addEventListener('mouseover', e => {
        btnAvatar.classList.add('btn-change-avatar');
        btnAvatar.classList.remove('btn-hover');
    })

    divAvatar.addEventListener('mouseout', e => {
        btnAvatar.classList.add('btn-hover');
        btnAvatar.classList.remove('btn-change-avatar');
    })

    inputAvatar.addEventListener('change', e => {
        console.log('Cambio de img');
        modal.classList.remove('d-none');
        modal.classList.add('bg-modal');
    })

    btnCancel.addEventListener('click', e => {
        modal.style.display = "none"
    })
})