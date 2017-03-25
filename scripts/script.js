$(function checkPosition() {
    if (window.matchMedia("(min-width: 767px)").matches) {
        var $banner = $("#banner");
        var $paralaxSpeed = $banner.data("speed");
        var $window = $(window);
        var $posY = "100vh" - $window.scrollTop() / $paralaxSpeed;
        var $coords = "50% " + $posY + "px";
        $(this).scroll(function() {
            $($banner).css({
                backgroundPosition: $coords
            });
        });
    }
});

$(function() {
    var Span = $("#tiles .row .col span");
    Span.width($("#tiles .row .col img").width());
});
