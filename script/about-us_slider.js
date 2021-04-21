var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


let mainElement = document.querySelectorAll('.block-number');
let hiddenElement = document.querySelectorAll('.block');

$(function() {
    $(mainElement).mouseenter(function() {
        $(hiddenElement).show(delay = 300);
    })
});


let mainElementTwo = document.querySelectorAll('.block-number1');
let hiddenElementTwo = document.querySelectorAll('.block3')
$(function() {
    $(mainElementTwo).mouseenter(function() {
        $(hiddenElementTwo).show(delay = 300);
    })
});


let mainElementThree = document.querySelectorAll('.block-number2');
let hiddenElementThree = document.querySelectorAll('.block5')
$(function() {
    $(mainElementThree).mouseenter(function() {
        $(hiddenElementThree).show(delay = 300);
    })
});