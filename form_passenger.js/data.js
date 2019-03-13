var passangerList = [];

function Person(name, surname) {

    this.name = name;
    this.surname = surname;

    this.getFullName = function () {
        return this.name + "  " + this.surname;
    }


}
function Seat(seatnumb, category) {
    this.seatnumb = seatnumb;
    this.category = category;


}
function Passanger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {

        return person.getFullName() + ", " + "seat number is: " + seat.seatnumb + " at " + seat.category + " class.";

    }
}

function formSubmmit(name, surname, seatnumb, category) {
    if (name === "" || surname === "" || seatnumb === "" || category === "-") {
        return false;
    }
    return true;
}
