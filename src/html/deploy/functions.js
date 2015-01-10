$(document).ready(function() { 


$(".gallery_li").click(function() {

	$(this).addClass('current').siblings().removeClass('current');
	$(".gallery_page").addClass('hide').eq($(this).index()).removeClass('hide');
});

    
function scrollTo(elementId){
      $('html, body').animate({
          scrollTop: $(elementId).offset().top
      }, 1400); 
      
    };

function colorChange(colorId){
      $('nav').animate({
           backgroundColor: colorId
      }, 1400); 
      $('aside').animate({
           backgroundColor: colorId
      }, 1400); 
      $('footer').animate({
           backgroundColor: colorId
      }, 1400); 
      
    };

 $(window).resize(function(){
    onPageResize();
 });

 onPageResize();
 
 $("#one").click(function(){
 
      scrollTo("#sec1");
      colorChange("#2da491");
    });

$("#two").click(function(){

      scrollTo("#sec2");
      colorChange("#6666CC");
    });

$("#three").click(function(){
      
      scrollTo("#sec3");
    });

$("#four").click(function(){
      
      scrollTo("#sec4");
    });
});

/**LandingResize**/
function onPageResize(){
  $(".stretch").height(   $(window).height()  );
}

function showHeight(ele, h) {
      $("div").text("The height for the " + ele +
                    " is " + h + "px.");
    }
    $("#getw").click(function () {
      showHeight("window", $(window).height());
    });



