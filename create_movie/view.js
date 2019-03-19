
const $createmoviebutton = document.querySelector(".createbutton")
const $movieTitle = document.querySelector(".movietitle")
const $movieLength = document.querySelector(".movielength")
const $movieGenre = document.querySelector(".genre")
const $movieList = document.querySelector(".movieList")
const $movieForm = document.querySelector('.newform')
const $newprogram = document.querySelector(".dateprogram");

const $newProgrambutton = document.querySelector(".createprogram")
const $programList = document.querySelector(".programList")
const $secondForm = document.querySelector(".secondform")
const $choseProgram = document.querySelector(".choseprogram")
const $choseMovie = document.querySelector(".chosemovie");

const $addMovieButton = document.querySelector(".addmovietoprogram");





function renderMovie() {
    $movieList.textContent = '';
    movieList.forEach(function (currentMovie) {
        let $listItem = document.createElement("p");
        let listItemcontent = currentMovie.getData();
        $listItem.textContent = listItemcontent;
        $movieList.appendChild($listItem);
    });
}
function renderProgram() {
    $programList.textContent = '';
    programList.forEach(function (currentProgram) {
        const $listItem = document.createElement("p");
        const listItemcontent = currentProgram.getData();
        $listItem.textContent = listItemcontent;
        $programList.appendChild($listItem);
    });

}
function makeSelectOptionProgram(id, createProg) {

    const newoption = document.createElement("option");
    newoption.setAttribute('value', id);
    newoption.textContent = createProg.getData();

    $choseProgram.appendChild(newoption);

}
function makeSelectOptionMovie(id, createMovie) {

    const newoption = document.createElement("option");
    newoption.setAttribute('value', id);
    newoption.textContent = createMovie.getData();

    $choseMovie.appendChild(newoption);

}
