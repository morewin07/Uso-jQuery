$(document).ready(function() {
    $("li").mouseover(function() {
        $(this).animate({ marginLeft: '15px' }, 500);
        $(this).css('color', 'white');

    });
    $("li").mouseout(function() {
        $(this).animate({ marginLeft: '0' }, 500);
        $(this).css('color', 'black');

    });
});