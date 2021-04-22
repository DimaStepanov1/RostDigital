$(window).load(function() {
    $(".preloader").delay(5700).fadeOut();
});
var skroll = new Skroll();
$(document).ready(function() {
    $("a[href*=#]").on("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
});
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    speed: 800,
    rtl: true,
//     autoplay: {
//         delay: 500,
//         disableOnInteraction: false,
//     },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    }
});

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');
let el = document.querySelector('#fixed');
new Skroll()
    .add(".left", {
        animation: "customNew",
        duration: 5000,
        delay: 7000
    })
    .add(".rd", {
        animation: "newAnimation",
        duration: 5000,
        triggerBottom: 1,
        triggerTop: 1,
        delay: 3000
    })
    .add(".new-first", {
        animation: "custom2",
        duration: 1500,
        triggerBottom: 1,
        triggerTop: 1,
        delay: 3000
    })
.add(".on-front", {
        animation: "slideInLeft",
        duration: 1500,
        
        delay: 1000
    })
    .add(".on-back", {
        animation: "slideInRight",
        duration: 1500,
        
        delay: 1000
    })
    .addAnimation("newAnimation", {
        start: function(el) {
            $(el).css({
                top: "0%"
            });
        },
        end: function(el) {
            $(el).css({
                top: "95%",
            });
        }
    })
    .addAnimation("customNew", {
        start: function(el) {
            $(el).css({
                left: 0,
            });
        },
        end: function(el) {
            $(el).css({
                left: "50%",
                transform: "translate(-40%, 0)"
            });
        },
    })
    .addAnimation("custom2", {
        start: function(el) {
            $(el).css({
                "margin-right": "15%"
            });
        },
        end: function(el) {
            $(el).css({
                "margin-right": "27%"
            })
        }
    })
    .init();
