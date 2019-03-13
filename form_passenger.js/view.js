var $nameInput = document.querySelector(".passangername");
var $surnameInput = document.querySelector(".passangersurname");
var $seatInput = document.querySelector(".seatnumber");
var $categoryInput = document.querySelector(".category");
var $buttonSubmit = document.querySelector(".bookseat");
var $ckeckList = document.querySelector(".pasangerlist");
var $form = document.querySelector(".newform");
var $newWarning = document.querySelector(".warning");

function renderPass() {
    $ckeckList.textContent = "";
    $newWarning.textContent = "";
    passangerList.forEach(function (element) {
        var newP = document.createElement("p");
        newP.textContent = element.getData();
        $ckeckList.appendChild(newP);

    });
}

function renderError() {
    $newWarning.textContent = '';
    var newMsg = document.createElement("p");
    newMsg.textContent = "You need to fill all options!"
    $newWarning.prepend(newMsg);
}

