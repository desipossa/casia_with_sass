$(function () {
    feather.replace();

    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });

    $('.MainVisual .arrows .left').on('click', () => {
        $('.main_visual_slide').slick('slickPrev');
    });
    $('.MainVisual .arrows .right').on('click', () => {
        $('.main_visual_slide').slick('slickNext');
    });


})