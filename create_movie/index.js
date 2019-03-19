function createMovieHandler(event) {

    event.preventDefault();
    let movtitle = $movieTitle.value;
    let movlength = $movieLength.value;
    let movgenre = $movieGenre.value;

    let newMovie = createMovie(movtitle, movlength, movgenre);
    let id = movieList.push(newMovie) - 1;


    makeSelectOptionMovie(id, newMovie);

    renderMovie();
    $movieForm.reset();
}
function createProgramHandler(event) {
    event.preventDefault();
    let date = $newprogram.value;
    let createProg = createProgram(date);
    let id = programList.push(createProg) - 1;


    makeSelectOptionProgram(id, createProg);

    renderProgram();
    $secondForm.reset();
}

function addMovieHandler(event) {
    event.preventDefault();
    let optionMovie = $choseMovie.value;
    let optionProgram = $choseProgram.value;

    const selcectedProgrem = programList[optionProgram];
    const selcectedMovie = movieList[optionMovie];
    selcectedProgrem.addmovie(selcectedMovie);


    renderProgram();

}



$addMovieButton.addEventListener("click", addMovieHandler);

$newProgrambutton.addEventListener("click", createProgramHandler);

$createmoviebutton.addEventListener("click", createMovieHandler);