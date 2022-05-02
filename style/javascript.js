$(function() {
    
    let header = $('#header');
    let slider = $('#slider');
    let upbutton = $('#upbutton');
    let sliderH = slider.innerHeight();
    let scrollPos = $(window).scrollTop();
    

    CheckPos(scrollPos, sliderH);


    $(window).on('scroll resize', function() {
        let sliderH = slider.innerHeight();
        scrollPos = $(this).scrollTop();

        CheckPos(scrollPos, sliderH);
        
    })

    function CheckPos (scrollPos, sliderH) {
        if(scrollPos > sliderH + 100) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }


    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if(scrollPos > sliderH + 100) {
            upbutton.addClass('upbutton');
        } else {
            upbutton.removeClass('upbutton');
        }



    });


    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top - 10;

        nav.removeClass('show');

        $('html, body').animate({
            scrollTop: elementOffset
        }, 1000)


    });

    let nav = $('#nav');
    let navToggle = $("#navToggle");

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');

       
    });

    
    


});