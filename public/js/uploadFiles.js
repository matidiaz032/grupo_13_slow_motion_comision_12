function showHide() {
    let movieSeries = document.querySelector('#movieSeries').value;
    let seasons = document.querySelector('#seasons');
    let duration = document.querySelector('#duration')

    if (movieSeries == 'serie') {
        duration.setAttribute("style", "display:none")
        seasons.setAttribute("style", "display:block")
        seasons.removeAttribute("hidden");
    } else if(movieSeries == 'movie') {
        duration.setAttribute("style", "display:block")
        seasons.setAttribute("style", "display:none")
        console.log(movieSeries);
    };
}

