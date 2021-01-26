$(document).ready(function() {
    // $slick = jQuery.noConflict();
    $('.card__img-slider').not('.slick-initialized').slick({
        dots: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
    });

    $('.card__img-slider-arr').not('.slick-initialized').slick({
        dots: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow: $('.card__left-arr'),
        nextArrow: $('.card__right-arr'),
    });
  });