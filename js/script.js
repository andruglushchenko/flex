$(document).ready(function(){
    $("#owl-carousel-1").owlCarousel({
        nav:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            375:{
                items:2
            }

        },

    });

});

$(document).ready(function(){
    $("#owl-carousel-2").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            800:{
                items:3
            }

        },
        loop:true
    });

});
