$(document).ready(function ($) {
    $(window).on('scroll', function (){
        if ($('.wrapper').outerHeight() < $(window).scrollTop() + $(window).outerHeight()) {
            $('body').addClass('tight');
            console.log('tight');
        } else {
            $('body').removeClass('tight');
            console.log('untight');
        }

        $("html").on("click", "body.tight .wrapper", function() {
            $('html, body').animate({
                scrollTop: $('.wrapper').outerHeight() - $(window).height()
            }, 500);
        });
    });
});
