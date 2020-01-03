$(document).ready(function () {
    $('body').css('background-image', 'url("images/background/back.png")');
    $('.slider-image').each(function () {
        $(this).click(function () {
            $("#exampleModalLong").modal();
        });
    });
    $('#start').click(function () {
        localStorage.setItem("imgPath", $('.active img:first').attr('src'));
        localStorage.setItem("piecesNumber", $('input[name=options]:checked').val());
        localStorage.setItem("timerValue", $('.form-control option:selected').val());
        window.open("game.html", "_self");
    });
});