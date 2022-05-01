$(function() {
    
    let header = $('#header');
    let slider = $('#slider');
    let upbutton = $('#upbutton');
    let sliderH = slider.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on('scroll load resize', function() {
        scrollPos = $(this).scrollTop();
        


        if(scrollPos > sliderH + 100) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    })


    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();

        if(scrollPos > sliderH + 100) {
            upbutton.addClass('upbutton');
        } else {
            upbutton.removeClass('upbutton');
        }



    })


    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top - 10;


        $('html, body').animate({
            scrollTop: elementOffset
        })


    })

    

    
    


});