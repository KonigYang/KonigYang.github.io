$(document).ready(function() {

    var tofix1_height = $('#container-2-1').offset().top; //Reserve the original height
    var release1_height = $('#container3').offset().top;
    $(window).scroll(function() {
        var current_pos = $(this).scrollTop();

        if (current_pos >= tofix1_height-150 && current_pos < release1_height-750) {
            $('#container-2-1').addClass('fixed');
            $('#container-2-1').removeClass('absolute_position_1');
        } else if(current_pos > release1_height-750){
            $('#container-2-1').removeClass('fixed');
            $('#container-2-1').addClass("absolute_position_1");
        }
        else{
            $('#container-2-1').removeClass('fixed');
            $('#container-2-1').removeClass('absolute_position_1');
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

