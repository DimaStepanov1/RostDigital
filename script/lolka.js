jQuery(function($) {
    $(".rd-orange").hover(
        function() {
            $(this).addClass('hover-eff');
            $(this).css('backround-size', '0% 100%');
        },
        function() {
            setTimeout(() => {
                $(this).removeClass('hover-eff');
                $(this).css('backround-size', '100% 100%');
            }, 1000);
        }
    );
});