var parallax = {
    Init: () => {
        parallax.BindUiActions();
        parallax.startParallax();
        parallax.doParallax();
    },
    BindUiActions: () => {
        window.addEventListener("scroll", () => {
            parallax.doParallax();
        });
    },
    startParallax: () => {
        parallax.getParallaxElements();
    },
    getParallaxElements: () => {
        parallax.Elements = $('[parallax]');
    },
    doParallax: () => {
        let wscroll = $(window).scrollTop();
        $.each( parallax.Elements, function() {
            if($(this).data('parallax-speed') == undefined || $(this).data('parallax-speed') == null || $(this).data('parallax-speed') == "") {
                speed = $(this).attr('parallax-speed');
            }else{
                speed = 5;
            }
            height_plus = ($(window).height() - $(this).height())/2;
            let total_px = (wscroll - $(this).offset().top + height_plus )/speed;
            $(this).css('background-position', `center ${total_px}px`);
        } );
        
    }
}