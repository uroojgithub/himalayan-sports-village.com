window.onload = () => {
    hamburger.Init();
    opener.Init();
    parallax.Init();
};   

$(function(){
    
    $(window).on("scroll", function() {
        // console.log($(window).scrollTop(), $(".cm-header").height());
        if($(window).scrollTop() > 10) {
            $(".cm-header").addClass('affix');
        }else{
            $(".cm-header").removeClass('affix');
        }
    });

});