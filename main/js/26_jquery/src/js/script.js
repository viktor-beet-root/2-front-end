import $ from 'jquery';
import 'slick-carousel';

const slider = $('.slider');
slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const map = $('#map').addClass('add')
    .append(`<div>
        dlfkglkdsfkklj
        </div>`)
    .attr('title', 'my title')
    .css({
        'color': 'red',
        'font-size': '25px',
        'padding': '10px',
        'margin': '25px 0'
    });

console.dir(map.eq(0))

console.log(
    map.outerHeight(),
    map.outerHeight(true),
    $('#map').attr('title')
);

map.removeClass('add');

const header = $('.header');
let hasFixed = false;

// $(window).on('scroll', function () {
//     setTimeout(() => {
//         if ($(this).scrollTop() > 150 && !hasFixed) {
//             header.addClass('fixed');
//             hasFixed = true;
//             console.log('add')
//         }

//         if ($(this).scrollTop() < 150 && hasFixed) {
//             header.removeClass('fixed');
//             hasFixed = false;
//             console.log('rem')
//         }
//     });
// });

// setTimeout(() => {
//     $(window).scrollTop(250);
//     //map.slideToggle(500)
// }, 300)

const accardion = $('.acardion');
let activeTab;

accardion.find('.acardion__title').on('click', function () {
    const elem = $(this);
    const oldOpen = activeTab ? activeTab : [];

    activeTab && activeTab.slideUp(500);
    activeTab = elem.next();

    if (oldOpen[0] !== activeTab[0]) activeTab.slideToggle(500);
});

