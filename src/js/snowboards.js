$(document).ready(function () {
    $('.snowboards__outer').slick ({
        arrows: true,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        prevArrow: $('.snowboards__prev'),
        nextArrow: $('.snowboards__next'),
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1  
              }
            }
        ]
    }) 
})