// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.text-emerge');

    // If the animation has already been started
    //if ($elem.hasClass('start')) return;

    if (isScrolledIntoView($elem)) {
        // Start the animation
        $elem.addClass('text-emerge-animation');
    }
    else{
        $elem.removeClass('text-emerge-animation');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});