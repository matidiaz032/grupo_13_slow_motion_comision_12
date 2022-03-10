function $(elem) {
    return document.querySelector(elem);
}

window.addEventListener('load', () => {
    let btnAvatar = $('#btnAdd');
    let divAvatar = $('#divAvatar');
    
    divAvatar.addEventListener('mouseover', e => {
        console.log("focus");
        btnAvatar.classList.add('btn-change-avatar');
        btnAvatar.classList.remove('btn-hover');
    })

    divAvatar.addEventListener('mouseout', e => {
        console.log("endfocus");
        btnAvatar.classList.add('btn-hover');
        btnAvatar.classList.remove('btn-change-avatar');
    })
})