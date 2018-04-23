
(function($){
    console.log('loading custom.js');
    $('#menu .partners').on('click', function(e){

        e.preventDefault();
        e.stopPropagation();

        $(".panel-menu").addClass("panel-page-partners");
        $(".overlay-menu").fadeIn();

        $(".panel-menu-intern").fadeOut(500, function() {
            $(".content-page-partners").fadeIn();
            $("html").addClass("no-scroll");
        });

        $("#menu .close-page").on("click", function(a) {
            $(".panel-menu").removeClass("panel-page-partners");
            // $(".content-page-partners").hide();
        });

    });
}(jQuery));
