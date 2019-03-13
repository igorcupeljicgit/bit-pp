var movieList = [];

function Movie(movtitle, movlength, movgenre) {
    this.title = movtitle;
    this.length = movlength;
    this.genre = movgenre;

    this.getData = function () {
        return this.title + "," + this.length + "," + this.genre;
    }
}
function createMovie(movtitle, movlength, movgenre) {
    var newmovie = new Movie(movtitle, movlength, movgenre);
    return newmovie;
}

