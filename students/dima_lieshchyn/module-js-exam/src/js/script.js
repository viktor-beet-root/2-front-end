import $ from 'jquery';
$('.carousel').carousel({
    interval: 3000,
});

$(function () {
    $(".arrow").click(function () {
        $("html:not(:animated),body:not(:animated)")
            .animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1000);
        return false;
    });
});
// const nav = document.querySelector('nav');
// const arrow = document.querySelector('.arrow');
// scrollTo(arrow, nav, 5000);
