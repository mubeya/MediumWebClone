
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 450) {
          $(".menu-scroll").css("background" , "white");
        }
  
        else{
            $(".menu-scroll").css("background" , "#FFC017");  	
        }
    })
  })