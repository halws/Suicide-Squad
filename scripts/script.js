$(function checkPosition() {
    if (window.matchMedia('(min-width: 767px)').matches) {
        var $banner = $('#banner');
        var $paralaxSpeed = $banner.data('speed');
        var $window = $(window);
        var $posY = '100vh' - ($window.scrollTop() / $paralaxSpeed);
        var $coords = '50% ' + $posY + 'px';
        $(this).scroll(function() {

            $($banner).css({
                backgroundPosition: $coords
            });

        });

    }
});

$(function() {
    var firstImageWidth = $('#tiles .row:first .col img').width();
    $('#tiles .row:first .col span').width(firstImageWidth);
    $('#tiles .row:first .col').first().css({
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start'
    });
    $('.hidden').css({
        'opacity': '0',
        'display': 'block'
    })
    $('.col', this).hover(
        function() {
            $('.hidden', this).fadeTo(500, 1);
        },
        function() {
            $('.hidden', this).fadeTo(500, 0);
        }

    );
})
