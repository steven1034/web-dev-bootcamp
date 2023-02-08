
$(document).ready(function name(params) {
    $("h1").css("color", "red");
});

$("input").keypress(function(event) {
    console.log(event.key);

    $("h1").text(event.key);
})