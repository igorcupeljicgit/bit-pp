var request = $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
}).then(function (msg) {



    msg.forEach(function (element) {
        var newparagraf = $("<a>").text(element.title).attr('data-post-id', element.id);
        $("body").append(newparagraf);
        newparagraf.css("border", "1px solid red");

        newparagraf.css("border-radius", "5px");

    })
    $("a").on("click", function () {
        console.log($(this).attr('data-post-id'));
        var temp = $(this).attr('data-post-id');
        $("a").attr("href", "prac2.html")
        localStorage.setItem("data-id", temp);

        console.log(localStorage);
    })


})










