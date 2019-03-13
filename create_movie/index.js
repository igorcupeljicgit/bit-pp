function createMovieHandler(event) {
    event.preventDefault();
    var movtitle = $movieTitle.value;
    var movlength = $movieLength.value;
    var movgenre = $movieGenre.value;

    movieList.push(createMovie(movtitle, movlength, movgenre));

    render();
    $form.reset();
}

$createmoviebutton.addEventListener("click", createMovieHandler);