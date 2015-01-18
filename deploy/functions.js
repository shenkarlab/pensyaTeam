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

// function colorChange(colorId){
//       $('nav').animate({
//            backgroundColor: colorId
//       }, 1400); 
//       $('aside').animate({
//            backgroundColor: colorId
//       }, 1400); 
//       $('header').animate({
//            backgroundColor: colorId
//       }, 1400); 
//       
//     };

 $(window).resize(function(){
    onPageResize();
 });

 onPageResize();
 
 $(".navs").click(function(){
 	
 	  var element = $(".current");
 	  $(element).removeClass("current");
 	  $(this).addClass("current");
 	  
      scrollTo("#sec" + $(this).attr('data-sec'));
      // colorChange("#84c560");
    });
    
    
    /**Bind Keys to scroll**/
    
    $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        	var element = $(".current");
        	if (element.prev().length)
        	{
				var x = element.attr('data-sec');
				$(element).prev().addClass("current");
				$(element).removeClass("current");
				x--;
				scrollTo("#sec" + x);
				// colorChange($("#sec" + x).css('backgroundColor'));
			}
        break;

        case 39: // right
        break;

        case 40: // down
        	var element = $(".current");
        	if (element.next().length)
        	{
				var x = element.attr('data-sec');
				$(element).next().addClass("current");
				$(element).removeClass("current");
				x++;
				scrollTo("#sec" + x);
				// colorChange($("#sec" + x).css('backgroundColor'));
			}
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
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

/* -------------------------------------------------- PERCENTAGE PAGE -------------------------------------------------- */

/*
 * function for page which need to decide 5/6/7 percanetage of your salary you want to move to your pensya 
 */
var x = 9000;		 // salary
var per = 5;			// 5% 

var calculateContribution = function() {
	// getting data from user
	var y = 10000;		// initial amount
	var z = 4;				//
	var i = 0;
	var sum = 0;			// total amount after 40 years
	 
		// changing values to percentages
		per /= 100;
		z +=100;
		z /=100;
		// for loop calculating the total pensya amount after 40 years
		for ( ; i < 40; i++) {
			sum = Math.round((x*per*12+y)*z);
			y = sum;
		}
		return sum;
};
	
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}
function unCommaSeparate(val) {
	temp = val.replace(/\,/g,''); // val is a string type, so convert it to number
	temp = parseInt(temp,10);
	 if ( temp >=0 && temp <= 999) {
	 		temp = val;
	 } else if (temp < 0) {
	 	// handle error
	 }
	return temp;
}

function calcIt(valX,valPer) {
    	x = unCommaSeparate(valX);
    	per = valPer;
    	document.getElementById("totalAmout").value = commaSeparateNumber(calculateContribution());
    	document.getElementById("perMonth").value = commaSeparateNumber(x*valPer/100); 
    	document.getElementById("salary").value = commaSeparateNumber(x); 
	}
	
	function selectedButton(num) {
	if (num=="5") {
			document.getElementById("per5").style.textShadow = "0px 0px 6px rgba(255,255,255,0.7)";
			document.getElementById("per5").style.fontSize = "26px";
			document.getElementById("per6").style.textShadow = "none";
			document.getElementById("per6").style.fontSize = "20px";
			document.getElementById("per7").style.textShadow = "none";
			document.getElementById("per7").style.fontSize = "20px";
	} else if (num=="6") {
			document.getElementById("per6").style.textShadow = "0px 0px 6px rgba(255,255,255,0.7)";
			document.getElementById("per6").style.fontSize = "26px";
			document.getElementById("per5").style.textShadow = "none";
			document.getElementById("per5").style.fontSize = "20px";
			document.getElementById("per7").style.textShadow = "none";
			document.getElementById("per7").style.fontSize = "20px";
	} else if (num=="7") {
			document.getElementById("per7").style.textShadow = "0px 0px 6px rgba(255,255,255,0.7)";
			document.getElementById("per7").style.fontSize = "26px";
			document.getElementById("per5").style.textShadow = "none";
			document.getElementById("per5").style.fontSize = "20px";
			document.getElementById("per6").style.textShadow = "none";
			document.getElementById("per6").style.fontSize = "20px";
	}
};

// $(document).ready(function(){
// 		selectedButton("5"); 
// });

/* ------------------------------------------------------------------------------------------------------------------------------ */

	$(document).ready(function(){
	  $(window).scroll(function()
	  {
		//scroll precenage
		var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        console.log("Current scroll percent: " + scrollPercent);
	  });
	});

	
	/*
	<script type="text/javascript" src="deploy/parallax.min.js"></script>
	<script>

	// Pretty simple huh?
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	
	</script>
 
 
 
 
 
 
 */
 
 
//Disable scrolling

$(document).ready(function(){

	if (window.addEventListener) {
		  window.addEventListener('DOMMouseScroll', wheel, false);
	  }
	  window.onmousewheel = document.onmousewheel = wheel;

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
		  e.preventDefault();
	  e.returnValue = false;  
	}

	function wheel(e) {
	  preventDefault(e);
	}

});




/* --------sec 1 --------------------------------------------------------------------*/

// 
// $(document).ready(function() {
//  
//     $("#slider").slider({value:'',min: 0,max: 150,step: 1, range: 'min'});
//     
//     var thumb = $($('#slider').children('.ui-slider-handle'));   
//     setLabelPosition();    
//     
//     $('#slider').bind('slide', function () {        
//         $('#sliderValue').val($('#slider').slider('value'));
//         setLabelPosition();
//     });
//     
//     function setLabelPosition() {
//         var label = $('#sliderValue');
//         label.css('top', thumb.offset().top + label.outerHeight(true));
//         label.css('left', thumb.offset().left - (label.width() - thumb.width())/ 2);        
//     }
//     
// });

/* --------sec 2 --------------------------------------------------------------------*/

$(document).ready(function(){
	$("#sec2").click(function(){
	
	});
});



