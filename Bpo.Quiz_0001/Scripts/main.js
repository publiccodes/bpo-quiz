$(function () {
    $("#button_01").hover(function () {
        $("#q01_img").css("background-position", "0px -500px");
    }, function () {
        $("#q01_img").css("background-position", "0px 0px");
    });
    $("#button_01").click(function () {
        playSound("click_sound");
    });
    $("#button_01").mouseover(function () {
        playSound("hover_sound");
    });
});

function playSound(id) {
    if (true) {
        document.getElementById(id).load();
        document.getElementById(id).play();
    }
}