$(document).ready(function () {

var height = $(window).height();
var tofix1_height = $('#container-2-index').offset().top; 
tofix1_height = 1837.6;
//Reserve the original height
var tofix0_height = $('#event3').offset().top;
var release1_height = $('#container3').offset().top;
var release2_height =
$('#container4-end').offset().top;    
var tofix2_height = $('#map').offset().top;
    
$(window).scroll(function () {
    var current_pos = $(this).scrollTop();
    // bar-height+margin bottom of last row = 57+5=62
    console.log(tofix1_height);
    if (current_pos >= tofix1_height && current_pos < release1_height - height*2/3) {
        $('#container-2-1').addClass('fixed');
        $('#container-2-1').removeClass('zoomout-animation');
        $('#container-2-2').removeClass('zoomout-animation');
    } else if (current_pos >= release1_height - height*2/3 && current_pos < release1_height) {
        $('#container-2-1').addClass('zoomout-animation');
        $('#container-2-2').addClass('zoomout-animation');
    } else {
        $('#container-2-1').removeClass('fixed');
        $('#container-2-1').removeClass('zoomout-animation');
        $('#container-2-2').removeClass('zoomout-animation');
    }

    //container4 to container5
    if (current_pos >= tofix2_height-100 && current_pos < release2_height-200) {
        $('#map').addClass('fixed_2');
        $('#container4').removeClass('zoomout-fast');
    }
    else if (current_pos >= release2_height-200 && current_pos < release2_height + 1000) {
        $('#container4').addClass('zoomout-fast');
    }
    else{
        $('#map').removeClass('fixed_2');
        $('#container4').removeClass('zoomout-fast');
    }
});
});

$('#container-1').scroll(function () {
    $('#container-1').scrollTop($(this).scrollTop());
})
