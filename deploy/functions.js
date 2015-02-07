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
      return false;
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

/* -------------------------------------------------- page 4 -------------------------------------------------- */

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
	
$(document).ready(function(){

	$("#sec4").css("background","#3a5f8d  url(images/Screen_4/money5per.png)");
	$("#per5").css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
	$("#per5").css("background-size","25%");

	$("#per5").click(function(){
		calcIt($("#salary").val(),5);
		$("#sec4").css("background","#3a5f8d  url(images/Screen_4/money5per.png)");
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");
		$("#per6").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per6").css("background-size","25%");
		$("#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per7").css("background-size","25%");	
	});	
	$("#per6").click(function(){
		calcIt($("#salary").val(),6);
		$("#sec4").css("background","#3a5f8d  url(images/Screen_4/money6per.png)"); 
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");	
		$("#per5").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5").css("background-size","25%");	
		$("#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per7").css("background-size","25%");	
	});	
	$("#per7").click(function(){
		calcIt($("#salary").val(),7);
		$("#sec4").css("background","#3a5f8d  url(images/Screen_4/money6per.png)");
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");	
		$("#per5").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5").css("background-size","25%");	
		$("#per6").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per6").css("background-size","25%");	
	});
});			
	
	
/*	
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

	var scrollPercent = 0;
	
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

$(document).ready(function() {
 $(function() {
    $( "#slider" ).draggable({
  	  axis: "y",
      drag: function() {
        var relativeY = $("#slider").offset().top - $("#slider_wrapper").offset().top;
  	  	console.log(relativeY);
      }
    });
    $( "#slider" ).draggable({ containment: "#slider_wrapper", scroll: false });
  });
});

$(document).ready(function(){
	$("#male").click(function(){
		$("#male").attr("src", "images/Screen 1/Boy_S.png");
		$("#female").attr("src", "images/Screen 1/Girl.png");
		$("#user").attr("src", "images/Screen 1/Age_Man.png");
		$("#slider").css('background-image', 'url("images/Screen 1/Age_Button.png")');
		$("#slider_wrapper").css('background-image', 'url("images/Screen 1/Age_line.png")');
	});
});
$(document).ready(function(){
	$("#female").click(function(){
		$("#female").attr("src", "images/Screen 1/Girl_S.png");
		$("#male").attr("src", "images/Screen 1/Boy.png");
		$("#user").attr("src", "images/Screen 1/Age_Man_Hey.png");
		$("#slider").css('background-image', 'url("images/Screen 1/Age_Button.png")');
		$("#slider_wrapper").css('background-image', 'url("images/Screen 1/Age_line.png")');
	});
	
});
/* --------sec 2 --------------------------------------------------------------------*/

$(document).ready(function(){
	$("#sec2").click(function(){
	
	});
});

/* --------sec 6 --------------------------------------------------------------------*/

$(document).ready(function(){
	  x = 0;
	  $(window).scroll(function()
	  {
		if(scrollPercent >= 51 && x == 0){
			console.log("Sec 6 reached");
			$('#no_idea').animate({ height:507, top:'0%' }, {
					queue: false,
                    duration: 600,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#medium').animate({ height:411, top:'0%' }, {
            		queue: false,
                    duration: 700,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#danger').animate({ height:543, top:'0%' }, {
            		queue: false,
                    duration: 800,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#solid').animate({ height:280, top:'0%' }, {
            		queue: false,
                    duration: 2400,
                    easing: 'easeOutBounce',
                    complete: function() { 
                    	$("#p1").delay(600).animate({ opacity: 1 }, 700)
                    	$("#p2").delay(600).animate({ opacity: 1 }, 700)
                    	$("#p3").delay(600).animate({ opacity: 1 }, 700)
                    	$("#p4").delay(600).animate({ opacity: 1 }, 700)
                    }
                });
			x = 1;
		}
	  });
	  
	$( "#p1" ).click(function() {
	  $( "#plus1" ).toggle( "fold" );
	  console.log("plus1");
	});
	$( "#p2" ).click(function() {
	  $( "#plus2" ).toggle( "fold" );
	  console.log("plus2");
	});
	$( "#p3" ).click(function() {
	  $( "#plus3" ).toggle( "fold" );
	  console.log("plus3");
	});
	$( "#p4" ).click(function() {
	  $( "#plus4" ).toggle( "fold" );
	  console.log("plus4");
	});
});

/* --------sec 7 --------------------------------------------------------------------*/









/* --------sec 8 --------------------------------------------------------------------*/








/* --------sec 9 --------------------------------------------------------------------*/
