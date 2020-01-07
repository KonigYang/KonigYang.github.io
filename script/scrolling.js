$(document).ready(function () {

var height = $(window).height();
var tofix1_height = $('#container-2-2').offset().top; //Reserve the original height
var tofix0_height = $('#event3').offset().top;
console.log(tofix0_height);
var release1_height = $('#container3').offset().top;
var tofix2_height = $('#map').offset().top;
$(window).scroll(function () {
    var current_pos = $(this).scrollTop();

    // bar-height+margin bottom of last row = 57+5=62
    if (current_pos >= tofix1_height +50 && current_pos < release1_height - height*2/3) {
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
    
    if (current_pos >= tofix2_height-100) {
        $('#map').addClass('fixed_2');
    }
    else{
        $('#map').removeClass('fixed_2');
    }
});
/*
if (current_pos >= release1_height && current_pos < release2_height) {
    $('#container-3-1').addClass('fixed');
}
else{
    $('#container-3-1').removeClass('fixed');
}
*/
});

$('#container-1').scroll(function () {
    $('#container-1').scrollTop($(this).scrollTop());
})
