// companies carousel
$('.companies-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        }
    }
})

// feedback carousel
$('.feedback-carousel').owlCarousel({
    loop:true,
    margin:false,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        }
    }
})