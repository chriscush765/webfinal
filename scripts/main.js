
let sidebarOpen = false;
let delayMS = 0



$('.experience').hide();
$('.sidebar').hide();

//prehide the sidebar contents so they can be faded in with an animation. only if less than 1000 pix
if($(window).width() < 1000)
    $('.sidebarContents').find('*').not('div').not('span').hide();


$(".js-introEnter").click(function(){
    $('.experience').show();
    $('.sidebar').show();
    $(".welcome").fadeOut();
});

$('.sidebarIcon').click(function(){
    if($(window).width() < 1000){
        if(sidebarOpen){
        $($('.sidebarContents').find('*').not('div').not('span').get().reverse()).each(function() {
            $(this).delay(delayMS).queue( function(next){
                $(this).fadeOut();
                next();
            });
            delayMS = delayMS +25;
        });

        $('.sidebar').delay(350).queue( function(next){
            console.log("go")
            $('.sidebar').animate({width: '70px'}, 750, 'easeInOutQuad');
            next();
        });
        delayMS = 0
        sidebarOpen = false;
        }
        else{ //open
            delayMS = 250
            $($('.sidebarContents').find('*').not('div').not('span').get()).each(function() {
                $(this).delay(delayMS).queue( function(next){
                    $(this).fadeIn();
                    next();
                });
                delayMS = delayMS +25;
            });

            // jquery animate doesnt like going from a fixed (pixel) to a relative (100vw) width, so use pixel just for animation then switch.
            // otherwise the animation starts at 0 px instead of 70px for some reason
            $('.sidebar').animate({width: $(window).width()}, 750, 'easeInOutQuad', function(){
                $('.sidebar').css({width: '100vw'});
            });
            delayMS = 0
            sidebarOpen = true;
        }
    }
                

});