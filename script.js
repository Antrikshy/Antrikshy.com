$(document).ready(function() {
    $('.header_button').hide().slideDown('slow');
    $('.content').delay(500).hide().fadeIn('slow');
    
    $('.header_button').mouseenter(function() {
        $(this).clearQueue().animate({height: '140px'}, 'fast');
    });
    $('.header_button').mouseleave(function() {
        $(this).clearQueue().animate({height: '130px'}, 'fast');
    });

    $('.home_button').mouseenter(function() {
        $(this).clearQueue().animate({height: '150px'}, 'fast');
    });
    $('.home_button').mouseleave(function() {
        $(this).clearQueue().animate({height: '140px'}, 'fast');
    });
});