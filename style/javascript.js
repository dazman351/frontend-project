$(function() {
    
    let header = $('#header');
    let slider = $('#slider');
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

    

    
    


});