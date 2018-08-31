
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        var currentPos =  topOfWindow + windowHeight;
        if (currentPos > (thisPos + 150)) {
            $(this).removeClass("hid1");
            $(this).addClass("fadein");
        }
    });
}

$(window).scroll(function() {
    showImages('.hid1');
});


function showImages4(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        var currentPos =  topOfWindow + windowHeight;
        if (currentPos > (thisPos + 150)) {
            $(this).removeClass("hid4");
            $(this).addClass("fadein4");
        }
    });
}

$(window).scroll(function() {
    showImages4('.hid4');
});

function showImages2(el) {
    $(el).each(function() {
        $(this).removeClass("hid2");
        $(this).addClass("fadein2");
    });
}

$(window).on("load", function() {
        // showImages2(".about-front");
        // showImages2(".carousel-inner");
        showImages2(".hid2");
});


function showImages5(el) {
    $(el).each(function() {
        $(this).removeClass("hid5");
        $(this).addClass("fadein4");
    });
}

$(window).on("load", function() {
        // showImages2(".about-front");
        // showImages2(".carousel-inner");
        showImages5(".hid5");
});

function showImages3(el) {
    $(el).each(function() {
        $(this).removeClass("hid3").addClass("fadein3");
    });
}

$(window).on("load", function() {
    showImages3(".hid3");
});