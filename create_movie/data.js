const movieList = [];
const programList = [];

class Movie {
    constructor(movtitle, movlength, movgenre) {
        this.title = movtitle;
        this.length = movlength;
        this.genre = movgenre;

    }
    getData() {
        return `${this.title},${parseInt(this.length)},${this.genre}`;
    }

}

function createMovie(movtitle, movlength, movgenre) {
    const newmovie = new Movie(movtitle, movlength, movgenre);
    return newmovie;
}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.movieList = [];

    }

    totalNumbersOfMovie() {

        return this.movieList.length;
    };
    addmovie(movietitle) {
        this.movieList.push(movietitle);
    };
    getData() {
        let lengthofProgram = 0;

        this.movieList.forEach(function (curentMovie) {
            lengthofProgram += parseInt(curentMovie.length);

        });
        return `${this.date.getDate()},${this.date.getMonth()},${this.date.getFullYear()} program duration is , ${parseInt(lengthofProgram)}  min.`;


    }


}

function createProgram(date) {
    const newProgram = new Program(date);

    return newProgram;
}
