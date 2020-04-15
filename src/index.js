import * as $ from 'jquery'
import 'bootstrap'
import 'owl.carousel';
import '@fancyapps/fancybox'
import './sass/libs.sass'
import './sass/app.sass'
import './sass/media.sass'

$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
$(document).ready(function () {
    let arrow_prev = "<svg width='39' height='22' viewBox='0 0 39 22' xmlns='http://www.w3.org/2000/svg'><path d='M37.7365 11.2526H1.15186M1.15186 11.2526L10.8818 1.52271M1.15186 11.2526L10.8818 20.9825'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>",
        arrow_next = "<svg width='40' height='22' viewBox='0 0 40 22' xmlns='http://www.w3.org/2000/svg'><path d='M1.9707 11.2526H38.5553M38.5553 11.2526L28.8254 1.52271M38.5553 11.2526L28.8254 20.9825'  stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"

    // sertificate slider
    $('.sertificate__slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // news slider
    $('.news__slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow_prev", "slider-arrow_next"],
        navContainerClass: 'slider-arrow',
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})

$(() => {
    $('.hamburger').on('click', function headerHambClick() {
        $(this).toggleClass('is-active')
        $('.layout-menu')
            .toggleClass('menu-open')
            .removeClass('feed-open');
    });
});
