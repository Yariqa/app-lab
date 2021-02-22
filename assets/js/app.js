// companies carousel
$('.companies-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        }
    }
})

// feedback carousel
$('.feedback-carousel').owlCarousel({
    loop: true,
    margin: false,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    },
    navContainer: ".feedback-nav",
    navText: [
        '<i class="far fa-long-arrow-left"></i>',
        '<i class="far fa-long-arrow-right"></i>',
    ],
})