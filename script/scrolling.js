$(document).ready(function() {

    var tofix1_height = $('#container-2-1').offset().top; //Reserve the original height
    var release1_height = $('#container3').offset().top;
    var release2_height = //$('#container4').offset().top;
    $(window).scroll(function() {
        var current_pos = $(this).scrollTop();
        console.log(current_pos);
        if (current_pos >= tofix1_height-150 && current_pos < release1_height-500) {
            $('#container-2-1').addClass('fixed');
        } else if(current_pos > release1_height-500){
            $('#container-2-1').removeClass('fixed');
        }
        else{
            $('#container-2-1').removeClass('fixed');
        }
        /*
        if (current_pos >= release1_height && current_pos < release2_height) {
            $('#container-3-1').addClass('fixed');
        }
        else{
            $('#container-3-1').removeClass('fixed');
        }
        */
    });

});

