
(function($){
    $('#menu .partners').on('click', function(e){

        e.preventDefault();
        e.stopPropagation();

        $(".panel-menu").addClass("panel-page-partners");

        $(".panel-menu-intern").fadeOut(500, function() {
            $(".content-page-partners").fadeIn();
            $("html").addClass("no-scroll");
        });

    });

    $('.strip__close--all').on("click", function(e){
        $(".panel-menu").removeClass("panel-page-partners");
        $(".content-page-partners").fadeOut(300, function(){
            $(".panel-menu-intern").fadeIn();
        });
    });


}(jQuery));
