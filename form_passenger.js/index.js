function createReservationHandler(event) {
    event.preventDefault();
    var name = $nameInput.value;
    var surname = $surnameInput.value;
    var seatnumb = $seatInput.value;
    var category = $categoryInput.value;

    var isInputValid = formSubmmit(name, surname, seatnumb, category);
    if (isInputValid) {
        var person = new Person(name, surname);
        var seat = new Seat(seatnumb, category);
        passangerList.push(new Passanger(person, seat));

        renderPass();
        $form.reset();
    } else {
        renderError();
    }
}

$buttonSubmit.addEventListener("click", createReservationHandler);