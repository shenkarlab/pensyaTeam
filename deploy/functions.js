//Variables...

var sexOfUser;
var ageOfUser;









//End Variables


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

var male = 0;
var relativeY = -150;

$(document).ready(function() {
 $(function() {
    $( "#slider" ).draggable({
  	  axis: "y",
      drag: function() {
        relativeY = $("#slider_wrapper").offset().top - $("#slider").offset().top;
  	  	console.log(relativeY);
  	  	
  	  	if (male == 1){
  	  		if (relativeY < -190){
  	  			$("#user").attr("src", "images/Screen 1/Age_boy_Hey.png");
  	  		}
  	  		if (relativeY < -85 && relativeY > -190){
  	  			$("#user").attr("src", "images/Screen 1/Age_Man_Hey.png");
  	  		}
  	  		if (relativeY > -85){
  	  			$("#user").attr("src", "images/Screen 1/Age_oldman_Hey.png");
  	  		}
  	  	}
  	  	else if (male == 2){
  	  		if (relativeY < -190){
  	  			$("#user").attr("src", "images/Screen 1/Age_girl_Hey.png");
  	  		}
  	  		if (relativeY < -85 && relativeY > -190){
  	  			$("#user").attr("src", "images/Screen 1/Age_woman_Hey.png");
  	  		}
  	  		if (relativeY > -85){
  	  			$("#user").attr("src", "images/Screen 1/Age_oldwoman_Hey.png");
  	  		}
  	  	}
  	  	
  	  	$('#slider_num').text(Math.round(relativeY/4) + 71);
  	  	ageOfUser = Math.round(relativeY/4) + 71;
      }
    });
    $( "#slider" ).draggable({ containment: "#slider_wrapper", scroll: false });
  });
});

$(document).ready(function(){
	$("#male").click(function(){
		$("#male").attr("src", "images/Screen 1/Boy_S.png");
		$("#female").attr("src", "images/Screen 1/Girl.png");
		$("#slider").css('background-image', 'url("images/Screen 1/Age_Button.png")');
		$("#slider_wrapper").css('background-image', 'url("images/Screen 1/Age_line.png")');
		if (relativeY < -190){
			$("#user").attr("src", "images/Screen 1/Age_boy_Hey.png");
		}
		if (relativeY < -85 && relativeY > -190){
			$("#user").attr("src", "images/Screen 1/Age_Man_Hey.png");
		}
		if (relativeY > -85){
			$("#user").attr("src", "images/Screen 1/Age_oldman_Hey.png");
		}
		male = 1;
		sexOfUser = "male";
	});
});
$(document).ready(function(){
	$("#female").click(function(){
		$("#female").attr("src", "images/Screen 1/Girl_S.png");
		$("#male").attr("src", "images/Screen 1/Boy.png");
		$("#slider").css('background-image', 'url("images/Screen 1/Age_Button.png")');
		$("#slider_wrapper").css('background-image', 'url("images/Screen 1/Age_line.png")');
		if (relativeY < -190){
			$("#user").attr("src", "images/Screen 1/Age_girl_Hey.png");
		}
		if (relativeY < -85 && relativeY > -190){
			$("#user").attr("src", "images/Screen 1/Age_woman_Hey.png");
		}
		if (relativeY > -85){
			$("#user").attr("src", "images/Screen 1/Age_oldwoman_Hey.png");
		}
		male = 2;
		sexOfUser = "female";
	});
	
});
/* --------sec 2 --------------------------------------------------------------------*/

var dragimg = document.createElement("img");
console.log('changing image');
dragimg.src = "images/Screen 2/Man_Up.png";

function dragStart(ev) {
   ev.dataTransfer.effectAllowed='move';
   ev.dataTransfer.setDragImage(dragimg, 100, 100);
   $('#office').attr("src", "images/Screen 2/Office_Empty.png");
   $('#sofa').attr("src", "images/Screen 2/Sofa_Empty.png");
   return true;
}

function dragEnter(ev) {
   ev.preventDefault();
   console.log("dragEnter");
   return true;
}

function dragOver(ev) {
	ev.preventDefault();
	console.log("dragOver");
	return false;
}

function dragDrop(ev) {
	if (ev.target.id == "office"){
		$('#office').attr("src", "images/Screen 2/Office_Man.png");
		$('aside').show();
	}
	else{
		$('#sofa').attr("src", "images/Screen 2/Sofa_Man.png");
	}
   return false;
}

/* --------sec 3 --------------------------------------------------------------------*/

$(document).ready(function(){

	$('#paycheck').on('change',function(){
	    $('#paycheck').animate({opacity:"0.7", zoom: '70%'}, 'slow');
	});
	$('#paycheck').on('click',function(){
	    $('#paycheck').animate({opacity:"1", zoom: '100%'}, 'slow');
	});
});

/* --------sec 4 --------------------------------------------------------------------*/

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
	}
	
$(document).ready(function(){

	 $(window).scroll(function()
	  {
			if(scrollPercent > 26 && scrollPercent < 34 ){
				console.log("Sec 4 reached");
		//		$('#little_check').slideDown('100','linear');
				$('#little_check').css("display","block");
				$('#little_check').animate({ top:'0%' }, {
            		queue: false,
                    duration: 1000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
				$('#check_no_changed').val( $('#check').val());
				$('#check_no_changed2').val( $('#check').val());
			}
			else if (scrollPercent >= 35 || scrollPercent <= 25){
	//			$('#little_check').slideUp('fast','linear');
			}
	  });	

	$("#per5,#per6,#per7").click(function(){
		$("#percentage_first").css("visibility","hidden");
		$("#percentage_second").css("visibility","visible");
	});

	$("#per5").click(function(){
		calcIt($("#check").val(),5);
		$("#img_per").attr("src","images/Screen_4/money5per.png")
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");
		$("#per6,#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per6,#per7").css("background-size","25%");
	});	
	$("#per6").click(function(){
		calcIt($("#check").val(),6);
		$("#img_per").attr("src","images/Screen_4/money6per.png")
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");	
		$("#per5,#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5,#per7").css("background-size","25%");
	});	
	$("#per7").click(function(){
		calcIt($("#check").val(),7);
		$("#img_per").attr("src","images/Screen_4/money7per.png")
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");	
		$("#per5,#per6").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5,#per6").css("background-size","25%");
	});
	
	
});			

/* --------sec 5 --------------------------------------------------------------------*/

$(document).ready(function(){

	$(window).scroll(function()
	  {
			var flagPage5 = 0;	  	
			if(scrollPercent >= 33 && flagPage5 == 0){
				console.log("Sec 5 reached");
			//	$('#little_check2').css("display","block");
				$('#little_check2').fadeIn("1000","linear");				
			
				$('#little_check2').animate({ top:'36%' }, {
            		queue: false,
                    duration: 3000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
				
				setTimeout(function(){
					$('#envelope5_part').css("display","none");
				//	$('#envelope5_part').fadeOut("slow");
					$('#slider-wrapper5').fadeIn("1200","linear");					
					}, 3020);
				flagPage5 = 1;
				
			}
	  });	
	
	$('.sp').first().addClass('active');
	$('.sp').hide();    
	$('.active').show();

    $("#button-next").click(function(){
		    $('.active').removeClass('active').addClass('oldActive');    
		                   if ( $('.oldActive').is(':last-child')) {
		        $('.sp').first().addClass('active');
		        }
		        else{
		        $('.oldActive').next().addClass('active');
		        }
		    $('.oldActive').removeClass('oldActive');
		    $('.sp').fadeOut();
		    $('.active').fadeIn();
    });
    
       $('#button-previous').click(function(){
			    $('.active').removeClass('active').addClass('oldActive');    
			           if ( $('.oldActive').is(':first-child')) {
			        $('.sp').last().addClass('active');
			        }
			           else{
			    $('.oldActive').prev().addClass('active');
			           }
			    $('.oldActive').removeClass('oldActive');
			    $('.sp').fadeOut();
			    $('.active').fadeIn();
    });
  
});


/* --------sec 6 --------------------------------------------------------------------*/

$(document).ready(function(){
	  Animation_happend = 0;
	  $(window).scroll(function()
	  {
		if(scrollPercent >= 41 && Animation_happend == 0){
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
			Animation_happend = 1;
		}
	  });
	  
	$( "#p1" ).hover(function() {
	  $( "#plus1" ).toggle( "fold" );
	  console.log("plus1");
	});
	$( "#p2" ).hover(function() {
	  $( "#plus2" ).toggle( "fold" );
	  console.log("plus2");
	});
	$( "#p3" ).hover(function() {
	  $( "#plus3" ).toggle( "fold" );
	  console.log("plus3");
	});
	$( "#p4" ).hover(function() {
	  $( "#plus4" ).toggle( "fold" );
	  console.log("plus4");
	});
});

/* --------sec 7 --------------------------------------------------------------------*/









/* --------sec 8 --------------------------------------------------------------------*/








/* --------sec 9 --------------------------------------------------------------------*/


$(document).ready(function(){
	$( "#B_no" ).click(function() {
	  	$('#sec9').animate({
		  'background-position-x': '50%',
		  'background-position-y': '0%'
		}, 2000, 'linear');
		
		$("#B_no").animate({
			top: '123%',
			opacity: '0'
        }, 2250);
        $("#B_yes").animate({
			top: '103.5%',
			opacity: '0'
        }, 2250);
        
	});
	
	$( "#B_yes" ).click(function() {
	  	$('#sec9').animate({
		  'background-position-x': '50%',
		  'background-position-y': '0%'
		}, 2000, 'linear');
		
		$("#B_no").animate({
			top: '123%',
			opacity: '0'
        }, 2250);
        $("#B_yes").animate({
			top: '103.5%',
			opacity: '0'
        }, 2250);
	});
	
});


/* --------sec 10 --------------------------------------------------------------------*/


var clicks = 0;

$(document).ready(function(){

	$( "#sec10" ).click(function() {
		clicks++;
		
		if (clicks == 3){
			$(".progressbar-value").css("background-color", "#4771a5");
			$(".progressbar-value").css("height", "130px");
			$(".progressbar-value").css("top", "85px");
			$('#progressbar-per').css('background-image','url("images/Screen 10/80per.png")');
			$('#progressbar-per').css("top", "32%");
			$('#boss_face').css('background-image','url("images/Screen 10/Bos_Face_2.png")');
		}
		if (clicks == 6){
			$(".progressbar-value").css("background-color", "#84c560");
			$(".progressbar-value").css("height", "190px");
			$(".progressbar-value").css("top", "25px");
			$('#progressbar-per').css('background-image','url("images/Screen 10/95per.png")');
			$('#progressbar-per').css("top", "5%");
			$('#boss_face').css('background-image','url("images/Screen 10/Bos_Face_3.png")');
		}
		if (clicks == 9){
			$('#boss_face').css('background-image','url("images/Screen 10/Bos_Face_4.png")');
		}
	});
});


/* --------sec 11 --------------------------------------------------------------------*/






/* --------sec 12 --------------------------------------------------------------------*/





