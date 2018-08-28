
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        var currentPos =  topOfWindow + windowHeight;
        if (currentPos > (thisPos + 150)) {
            $(this).addClass("fadein");
        }
    });
}

$(window).scroll(function() {
    showImages('.hid');
});

function showImages2(el) {
    $(el).each(function() {
        $(this).addClass("fadein2");
    });
}

$(window).on("load", function() {
    showImages2("#about-front");
})
