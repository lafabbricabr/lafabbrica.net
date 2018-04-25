var Expand = (function() {
    var tile = $('.strips__strip');
    // var tileLink = $('.strips__strip > .strip__content');
    var tileLink = $('.strips__strip .open-inner-text');
    var tileText = tileLink.find('.strip__inner-text');
    var stripClose = $('.strip__close');
    var expanded  = false;

    var open = function() {

        var tile = $($(this).attr('data-href'));

        if (!expanded) {
            tile.parent().parent().addClass('strips__strip--expanded');
            tile.addClass('strip__inner-text--expanded');
            // add delay to inner text
            tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
            stripClose.addClass('strip__close--show');
            stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
            expanded = true;
        }
    };

    var close = function(e) {
        if (expanded) {
            $('.strips__strip--expanded').removeClass('strips__strip--expanded');
            $('.strip__inner-text--expanded').removeClass('strip__inner-text--expanded');
            // remove delay from inner text
            tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
            stripClose.removeClass('strip__close--show');
            stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
            expanded = false;
        }
    }

    var bindActions = function() {
      tileLink.on('click', open);
      stripClose.on('click', close);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

 }());

Expand.init();
