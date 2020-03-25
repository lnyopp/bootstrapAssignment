 $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll < 300){
            $('.fixed-top').css('background', 'transparent');
        } else{
            $('.fixed-top').css('background', 'url(Tiny-Horse-Marketing-Agency-Contacy.jpg)');
        }
    });
