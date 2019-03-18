$(function () {

    var temp = localStorage.getItem("data-id");
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/" + temp,

    }).then(function (element) {
        var title = $("<h1>").text(element.title);
        $("body").prepend(title);
        title.css("text-align", "center");
        title.css("padding", "10px");
        var newp = $("<p>").text(element.body);

        $("body").append(newp);
        newp.css("border", "2px solid blue");
        newp.css("border-radius", "10px");






    });
    $.ajax({

        url: "https://jsonplaceholder.typicode.com/comments?postId=" + temp,

    }).then(function (element) {



        element.forEach(function (elem) {
            var newp = $("<p>").text(elem.body);
            $("body").append(newp);
            newp.css("border", "2px solid green");
            newp.css("border-radius", "10px");
            newp.css("padding", "8px");


        })

    })




});











