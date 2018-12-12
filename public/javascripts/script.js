const map = function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

let scrollHeight = 0;
let topSectionHeight = $("#firstImpression").height();

$(window).scroll(function () {
    scrollHeight = $(window).scrollTop();
    introFlyOn();
});

window.onresize = function() {
    topSectionHeight = $("#firstImpression").height();
    reshapePanel();
};

reshapePanel();

function menu() {
    $("#hamburger").toggleClass("spinHide");
    $("#closeHamburger").toggleClass("spinShow");
    $("#darkenScreen").toggleClass("darken");
    $("#mainMenu")
        .toggleClass("slideOn")
        .css({pointerEvents: "auto"});
}

function introFlyOn() {
    let distance = topSectionHeight - scrollHeight;
    let fraction = 1 - distance / topSectionHeight;
    console.log(fraction);
    if (fraction <= 1) {
        $("#introPanel")
            .css("transform", `perspective(1000px) rotateY(${360 - fraction * 360}deg) scale(${fraction * 0.5})`)
            .css("left", `${-100 + fraction * 110}vw`);
    } else {
        $("#introPanel")
            .css("transform", `perspective(1000px) rotateY(0deg) scale(${fraction / 2})`)
            .css("left", `10vw`);
    }
    // Turn hamburger menu white
    if (fraction > 0.9) {
        $(".menu").css("color", "white");
    } else {
        $(".menu").css("color", "black");
    }
}

function reshapePanel() {
    if (window.innerWidth < window.innerHeight) {
        $(".leftSide")
            .css("width", "100%")
            .css("font-size", "3vh");
        $(".rightSide").hide();
    } else {
        $(".leftSide")
            .css("width", "calc(50% - 5vw)")
            .css("font-size", "1.6vw");
        $(".rightSide").show();
    }
}