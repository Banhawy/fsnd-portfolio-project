$(document).ready(function () {
    //Hide projects
    $('.col-sm-4').hide();

    //Hide Hero Banner and slide off screen
    $(".hero").hide().animate({
        right: 1000
    }).show("fast", function () {
        //Show Hero Banner and Slide into screen
        $(this).show().animate({
            left: 0
        });
        //Display each project
        $('.col-sm-4').first().show("fast", function showNext() {
            $(this).next().show("fast", showNext);
        });
    });

});