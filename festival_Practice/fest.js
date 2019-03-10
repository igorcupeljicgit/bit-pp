"use strict"

var main=(function(){
console.log("HELLO")

function Genre(genre){
    this.genre=genre;

    this.getData=function(){
        var newGenre=((this.genre.slice(0,1))+(this.genre.slice(genre.length-1))).toUpperCase();
        
        return newGenre;
    }
    
}

function Movie(title,length, instanceofGenre){
    this.title=title;
    this.length=length;
    this.genre=instanceofGenre;

    this.getMovieData=function(){
        return " "+ this.title +" ,"+ this.length+ " "+this.genre.genre;
    }
}

function Program(date){
    this.date=date;
    this.movieList=[];
    
    this.totalNumbersOfMovie=function(){

    return this.movieList.length;
    };

    this.addmovie=function(movietitle){
        movieList.push(movietitle);
        return movieList;
    };
}


function Festival(){
    this.name=name;
    this.listOfPrograms=[];
    
    this.numbersOfMovies=listOfPrograms.length;   //////nastaviti ,not finished!!!

    this.addProgram=function(program){
        return listOfPrograms.push(program);
    }


}





var instanceofGenre=new Genre("action");
var opa=new Movie("Ko je pojeo kobascu",120, instanceofGenre);


console.log(instanceofGenre.getData());
console.log(opa.getMovieData());


})();