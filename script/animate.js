// Check if it's time to start the animation.
function checkZoomIn() {
    //var $elem1 = $('.text-emerge1');
    var $elem2 = $('.text-emerge2');
    var $elem3 = $('#container5');
    var $elem4 = $('#container5-index');
    var $elem5 = $('#container3-text');
    // If the animation has already been started
    //if ($elem.hasClass('start')) return;
    /*
    if (isScrolledIntoView($elem1)) {
        // Start the animation
        $elem1.addClass('text-emerge-animation');
    }
    else{
        $elem1.removeClass('text-emerge-animation');
    }
    */
    if (isScrolledIntoView($elem2)) {
        // Start the animation
        $elem2.addClass('text-emerge-animation-slow');
    }
    else{
        $elem2.removeClass('text-emerge-animation-slow');
    }
    if (isScrolledIntoView($elem3)) {
        // Start the animation
        $elem3.addClass('container-emerge-animation');
    }
    else{
        $elem3.removeClass('container-emerge-animation');
    }
    if (isScrolledIntoView($elem4)) {
        // Start the animation
        $elem4.addClass('container-emerge-animation');
    }
    else{
        $elem4.removeClass('text-emerge-animation-slow');
    }
    if (isScrolledIntoView($elem5)) {
        // Start the animation
        $elem5.addClass('text-emerge-animation-delay');
    }
    else{
        $elem5.removeClass('text-emerge-animation-delay');
    }
}


// Capture scroll events
$(window).scroll(function(){
    checkZoomIn();
    //checkZoomOut();
});

