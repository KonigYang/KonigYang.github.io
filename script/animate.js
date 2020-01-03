// Check if it's time to start the animation.
function checkZoomIn() {
    var $elem1 = $('.text-emerge1');
    var $elem2 = $('.text-emerge2');
    // If the animation has already been started
    //if ($elem.hasClass('start')) return;

    if (isScrolledIntoView($elem1)) {
        // Start the animation
        $elem1.addClass('text-emerge-animation');
    }
    else{
        $elem1.removeClass('text-emerge-animation');
    }
    if (isScrolledIntoView($elem2)) {
        // Start the animation
        $elem2.addClass('text-emerge-animation-slow');
    }
    else{
        $elem2.removeClass('text-emerge-animation-slow');
    }
}


// Capture scroll events
$(window).scroll(function(){
    checkZoomIn();
    //checkZoomOut();
});

