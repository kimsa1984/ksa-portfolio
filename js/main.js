
var currentScrollTop = 0;
$(document).ready(function () {
    scrollController();
    $(window).scroll(function () {
        scrollController();
    });
});

function scrollController() {
    currentScrollTop = $(window).scrollTop();
    if (currentScrollTop > 100) {
        $("nav").addClass("fixed");
        $("nav a").addClass("txtCh");
    } else {
        $("nav").removeClass("fixed");
        $("nav a").removeClass("txtCh");
    }
}

$(function () {
    $('.popbox1').hide();
    $('.popbox2').hide();
    $('.popbox3').hide();
    $('.popbox4').hide();

    $(".port_box1").click(function () {
        $(".bottom, .popbox1").fadeIn();
    });
    $(".bottom").click(function () {
        $(".bottom, .popbox1").fadeOut();
    });

    $(".port_box2").click(function () {
        $(".bottom, .popbox2").fadeIn();
    });
    $(".bottom").click(function () {
        $(".bottom, .popbox2").fadeOut();
    });

    $(".port_box3").click(function () {
        $(".bottom, .popbox3").fadeIn();
    });
    $(".bottom").click(function () {
        $(".bottom, .popbox3").fadeOut();
    });

    $(".port_box4").click(function () {
        $(".bottom, .popbox4").fadeIn();
    });
    $(".bottom").click(function () {
        $(".bottom, .popbox4").fadeOut();
    });
});