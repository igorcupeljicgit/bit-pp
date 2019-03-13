var $createmoviebutton = document.querySelector(".createbutton");
var $movieTitle = document.querySelector(".movietitle");
var $movieLength = document.querySelector(".movielength");
var $movieGenre = document.querySelector(".genre");
var $movieList = document.querySelector(".movieList");
var $form = document.querySelector('.newform');



function render() {
    $movieList.textContent = '';
    movieList.forEach(function (currentMovie) {
        var $listItem = document.createElement("p");
        var listItemcontent = currentMovie.getData();
        $listItem.textContent = listItemcontent;
        $movieList.appendChild($listItem);
    });

}
