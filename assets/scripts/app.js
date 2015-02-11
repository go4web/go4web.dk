var UI = {
    Device: 'small',

    Foundation: {
        init: function () {
            $(document).foundation();
        }
    },
    Viewport: {
        init: function () {
            UI.Device = UI.Viewport.check();
        },

        check: function () {
            if (window.matchMedia(Foundation.media_queries.small).matches) {
                viewport = 'small';
            }
            if (window.matchMedia(Foundation.media_queries.medium).matches) {
                viewport = 'medium';
            }
            if (window.matchMedia(Foundation.media_queries.large).matches) {
                viewport = 'large';
            }
            return viewport;
        }
    },
    Mobile: {
        init: function () {
            if(UI.Device == "small") {
                UI.Mobile.on();
            }
        },
        on: function () {
           
        },
        off: function () {
        },

        closeNav: function () {

        } 
    }
}


$(function () {
    UI.Foundation.init();
    UI.Viewport.init();
    UI.Mobile.init();


    $('#js-nav-trigger').on('click', function(e) {
        e.preventDefault();

        $this = $(this);
        $menu = $('#js-nav-menu');

        if($this.hasClass('nav-is-visible')) {
            $menu.removeClass('is-visible');
            $this.removeClass('nav-is-visible');
        } else {
            $menu.addClass('is-visible');
            $this.addClass('nav-is-visible');
        }        
    }); 




    // Throttled resize function
    $(window).on('resize', Foundation.utils.throttle(function(e){
        var viewport = UI.Viewport.check();

        if(viewport != UI.Device) {
            if(viewport == "small") {
                UI.Mobile.on();
            } else {
                UI.Mobile.off();
            }
        }

        UI.Device = viewport;

    }, 500));
});