window.addEventListener("DOMContentLoaded",() => {
    // $slick = jQuery.noConflict();
    $('.card__img-slider').slick({
        dots: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow: $('.card__left-arr'),
        nextArrow: $('.card__right-arr'),
    });
  });