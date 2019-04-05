$(document).ready(function () {
    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger-active');
        $('.header__nav').toggleClass('header__nav-active');
        if ($('.header__burger').hasClass('header__burger-active')) {
            $('html').css({'overflow': 'hidden'})
        } else {
            $('html').css({'overflow': 'visible'})
        }
    })   
}) 