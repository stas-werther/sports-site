$('.hero__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.school__img').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 860,
        settings: {
            slidesToShow: 2,
            dots: false,
        }
    }, {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            dots: false,
        }
    }]


});
//burger
const menu = document.querySelector(".header__menu");
const burger = document.querySelector(".header__burger");
burger.addEventListener('click', function () {
    menu.classList.toggle('menu__active');
    if (menu.classList.contains('menu__active')) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    };
});


//link
$(function () {
    $('a[href^="#"]').click(function () {
        let item = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(item).offset().top });
        return false;
    });
});