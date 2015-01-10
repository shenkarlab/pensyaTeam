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
      colorChange("#CE404A");
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
	

$(document).ready(function(){
		[].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
			new DotNav( nav, {
				callback : function( idx ) {
					//console.log( idx )
				}
			} );
		} );
		});

	
	/*
	<script type="text/javascript" src="deploy/parallax.min.js"></script>
	<script>

	// Pretty simple huh?
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	
	</script>
 
 
 
 
 
 
 */