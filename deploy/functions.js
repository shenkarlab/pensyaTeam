//Variables...

var sexOfUser = "male";		// sex of the user with default value 
var ageOfUser = 27;			// age of the user with default value


var checkChanged = 1;



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
// 	      case 37: // left
//		   	  break;

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

 //   	   case 39: // right
//	      break;

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
  	  	imageHasChanged = 0;
  	  	sec9_imageHasChanged = 0;
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
		imageHasChanged = 0;
		sec9_imageHasChanged = 0;
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
		imageHasChanged = 0;
		sec9_imageHasChanged = 0;
	});
	
});
/* --------sec 2 --------------------------------------------------------------------*/

var dragimg = document.createElement("img");
var officeImg = "images/Screen 2/Office_Man.png";
var sofaImg = "images/Screen 2/Sofa_Man.png";
var imageHasChanged = 0;

$(document).ready(function(){
	$(window).scroll(function(){
		if (scrollPercent > 0){
			if(imageHasChanged == 0){
				if(sexOfUser == "male"){
					if(ageOfUser < 23){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Boy_Up.png";
						officeImg = "images/Screen 2/Office_Boy.png";
						sofaImg = "images/Screen 2/Sofa_Boy.png";
						imageHasChanged = 1;
					}
					if(ageOfUser > 23 && ageOfUser < 50){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Man_Up.png";
						officeImg = "images/Screen 2/Office_Man.png";
						sofaImg = "images/Screen 2/Sofa_Man.png";
						imageHasChanged = 1;
					}
					if(ageOfUser > 50){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Oldman_Up.png";
						officeImg = "images/Screen 2/Office_Oldman.png";
						sofaImg = "images/Screen 2/Sofa_Oldman.png";
						imageHasChanged = 1;
					}
				}
				else{
					if(ageOfUser < 23){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Girl_Up.png";
						officeImg = "images/Screen 2/Office_Girl.png";
						sofaImg = "images/Screen 2/Sofa_Girl.png";
						imageHasChanged = 1;
					}
					if(ageOfUser > 23 && ageOfUser < 50){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Woman_Up.png";
						officeImg = "images/Screen 2/Office_Woman.png";
						sofaImg = "images/Screen 2/Sofa_Woman.png";
						imageHasChanged = 1;
					}
					if(ageOfUser > 50){
						console.log('changing image');
						dragimg.src = "images/Screen 2/Oldwoman_Up.png";
						officeImg = "images/Screen 2/Office_Oldwoman.png";
						sofaImg = "images/Screen 2/Sofa_Oldwoman.png";
						imageHasChanged = 1;
					}
				}
				
				$('#sofa').attr("src", sofaImg);
				$('#office').attr("src", "images/Screen 2/Office_Empty.png");
			}
		}
    });
});


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
		$('#office').attr("src", officeImg);
		$('#gift').show();
		$('#gift_top').show();
		$('#gift_top').animate({
		  'top': '50%'
		},
		{
			duration: 500, 
			complete: function(){
				$("#gift").hide(400);
				$("#gift_top").hide(400);
				$("#gift_top").css('top', '63.35%');
			}
		});
		$('aside').show();
		$('#sec2_info').show(400);
	}
	else{
		$('#sofa').attr("src", sofaImg);
	}
   return false;
}


/* --------sec 3 --------------------------------------------------------------------*/

$(document).ready(function(){

	$('#paycheck').on('change',function(){
	    $('#paycheck').animate({opacity:"0.7", zoom: '70%'}, 'slow');
	    $("#percentage_second").css("visibility","hidden");
	    $("#per5,#per6,#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5,#per6,#per7").css("background-size","25%");
		$('#check_no_changed').val($('#check').val());
		
		$('#slider-wrapper5').css("display","none");	
		$('#envelope5_part').css("display","block");	
		$('#little_check2').css("top","-15%");
		$('#little_check2').css("display","none");	
		checkChanged = 1;
	});
	$('#paycheck').on('click',function(){
	    $('#paycheck').animate({opacity:"1", zoom: '100%'}, 'slow');
	});
	
});
/* --------sec 4 --------------------------------------------------------------------*/

/*
 * function for page which need to decide 5/6/7 percanetage of your salary you want to move to your pensya 
 */
var sal = 9000;		 // salary
var per = 5;			// 5% 


$(document).ready(function(){

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
			sum = Math.round((sal*per*12+y)*z);
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
    	sal = unCommaSeparate(valX);
    	per = valPer;
   		str_total = commaSeparateNumber(calculateContribution()).toString();
   		str_month = commaSeparateNumber(sal*valPer/100).toString();
   		$("#totalAmout").text("₪ "+str_total);
    	$("#perMonth").text("₪ "+str_month);
    	$('#check_no_changed2').val(commaSeparateNumber(sal*valPer/100));
	}
	

	 $(window).scroll(function()
	  {
			if(scrollPercent >= 33 && scrollPercent < 41 ){
				console.log("Sec 4 reached");
				$('#little_check').css("display","block");
				$('#little_check').animate({ top:'0%' }, {
            		queue: false,
                    duration: 1000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
			}
	  });	

	$("#per5,#per6,#per7").click(function(){
		$("#percentage_second").css("visibility","visible");
		
		$('#slider-wrapper5').css("display","none");	
		$('#envelope5_part').css("display","block");	
		$('#little_check2').css("top","-15%");
		$('#little_check2').css("display","none");	
		checkChanged = 1;
	});
	
	$("#per5").click(function(){
		calcIt($("#check").val(),5);
		$("#img_per").attr("src","images/Screen_4/money5per.png");
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");
		$("#per6,#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per6,#per7").css("background-size","25%");
	});	
	$("#per6").click(function(){
		calcIt($("#check").val(),6);
		$("#img_per").attr("src","images/Screen_4/money6per.png");
		$(this).css("background","url(images/Screen_4/Selection_Active.png) no-repeat center top");
		$(this).css("background-size","25%");	
		$("#per5,#per7").css("background","url(images/Screen_4/Selection.png) no-repeat center top");
		$("#per5,#per7").css("background-size","25%");
	});	
	$("#per7").click(function(){
		calcIt($("#check").val(),7);
		$("#img_per").attr("src","images/Screen_4/money7per.png");
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
			if(scrollPercent >= 41 && scrollPercent < 49 && checkChanged){
				console.log("Sec 5 reached");
				$('#little_check2').fadeIn("1000","linear");				
				
				$('#little_check2').animate({ top:'36%' }, {
            		queue: false,
                    duration: 3000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
				
				setTimeout(function(){
					$('#envelope5_part').css("display","none");
					$('#slider-wrapper5').fadeIn("1200","linear");					
					}, 3020);
				checkChanged = 0;
			}
		
	  });	
	
	 $("#button-next").hover(function(){
			$("#button-next").css("background-image","url(images/Screen_5/button-arrow-right_hover.png)");
		},function() {
			$("#button-next").css("background-image","url(images/Screen_5/button-arrow-right.png)");
		});
	
	$("#button-previous").hover(function(){
			$("#button-previous").css("background-image","url(images/Screen_5/button-arrow-left_hover.png)");
		},function() {
			$("#button-previous").css("background-image","url(images/Screen_5/button-arrow-left.png)");
		});
		
		
		$("#Harel2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Harel";
		});	
		$("#Ayalon2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Ayalon";
		});		
		$("#Klal2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Klal";
		});		
		$("#Menorah2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Menorah";
		});		
		$("#Migdal2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Migdal";
		});		
		$("#Phoenix2").dblclick(function(){
			$('#drag_env').animate({ top:'45%'}, {
            		queue: false,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            dbl = 1;
            pensionKeren = "Phoenix";
		});		



	$('.sp').first().addClass('active');
	$('.sp').hide();    
	$('.active').show();
	
	$('.sp2').first().addClass('active2');
	$('.sp2').hide();    
	$('.active2').show();

	$(document).keydown(function(key){ 
		switch(key.which) {
        		case 37: // left
        				$('.active').removeClass('active').addClass('oldActive');    
					     if ( $('.oldActive').is(':first-child')) {
					      	   $('.sp').last().addClass('active');
					     }
					     else{
					    		$('.oldActive').prev().prev().addClass('active');
					     }
					    $('.oldActive').removeClass('oldActive');

					     $('.active2').removeClass('active2').addClass('oldActive2');    
					     if ( $('.oldActive2').prev().is(':first-child')) {
					      	   $('.sp2').last().addClass('active2');
					     }
					     else{
					    		$('.oldActive2').prev().prev().addClass('active2');
					     }
					    $('.oldActive2').removeClass('oldActive2');
					    
					    $('.sp').fadeOut();
					    $('.sp2').fadeOut();
					    $('.active').fadeIn();
					    $('.active2').fadeIn();
					 	
					    if(   $('.sp.active').attr('id') == "Harel" && (pensionKeren == "Harel")   ) {
								$("#drag_env").fadeIn();
					    }
					     else if(   $('.sp.active').attr('id') == "Ayalon" && (pensionKeren == "Ayalon")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Klal" && (pensionKeren == "Klal")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Menorah" && (pensionKeren == "Menorah")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Migdal" && (pensionKeren == "Migdal")) {
								$("#drag_env").fadeIn();
					    }
					      else if( $('.sp.active').attr('id') == "Phoenix"  && (pensionKeren == "Phoenix")) {
								$("#drag_env").fadeIn();
					    }
					    else {
					    	$("#drag_env").fadeOut();
					    }   
        		
        		break;
        	
        		case 39: //right
						$('.active').removeClass('active').addClass('oldActive');    
				        if ( $('.oldActive').next().is(':last-child')) {
				        		$('.sp').first().addClass('active');
				         }
				        else{
				       			$('.oldActive').next().next().addClass('active');
				        }
				    	$('.oldActive').removeClass('oldActive');
			
			
						$('.active2').removeClass('active2').addClass('oldActive2');    
					     if ( $('.oldActive2').is(':last-child')) {
				        		$('.sp2').first().addClass('active2');
				         }
				        else{
				       			$('.oldActive2').next().next().addClass('active2');
				        }
				    	$('.oldActive2').removeClass('oldActive2');
					    
					    $('.sp').fadeOut();
					    $('.sp2').fadeOut();
					    $('.active').fadeIn();
					    $('.active2').fadeIn();
					    
					    //alert(pensionKeren+"  "+$('.sp.active').attr('id'));
						
					    if(   $('.sp.active').attr('id') == "Harel" && (pensionKeren == "Harel")   ) {
								$("#drag_env").fadeIn();
					    }
					     else if(   $('.sp.active').attr('id') == "Ayalon" && (pensionKeren == "Ayalon")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Klal" && (pensionKeren == "Klal")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Menorah" && (pensionKeren == "Menorah")) {
								$("#drag_env").fadeIn();
					    }
					      else if(  $('.sp.active').attr('id') == "Migdal" && (pensionKeren == "Migdal")) {
								$("#drag_env").fadeIn();
					    }
					      else if( $('.sp.active').attr('id') == "Phoenix"  && (pensionKeren == "Phoenix")) {
								$("#drag_env").fadeIn();
					    }
					    else {
					    	$("#drag_env").fadeOut();
					    }
				break;
				default: return; // exit this handler for other keys
			}
	});
	
    $("#button-next").click(function(){

		    $('.active').removeClass('active').addClass('oldActive');    
	        if ( $('.oldActive').next().is(':last-child')) {
	        		$('.sp').first().addClass('active');
	         }
	        else{
	       			$('.oldActive').next().next().addClass('active');
	        }
	    	$('.oldActive').removeClass('oldActive');


			$('.active2').removeClass('active2').addClass('oldActive2');    
		     if ( $('.oldActive2').is(':last-child')) {
	        		$('.sp2').first().addClass('active2');
	         }
	        else{
	       			$('.oldActive2').next().next().addClass('active2');
	        }
	    	$('.oldActive2').removeClass('oldActive2');
		    
		    $('.sp').fadeOut();
		    $('.sp2').fadeOut();
		    $('.active').fadeIn();
		    $('.active2').fadeIn();
		    
		    //alert(pensionKeren+"  "+$('.sp.active').attr('id'));
			
		    if(   $('.sp.active').attr('id') == "Harel" && (pensionKeren == "Harel")   ) {
					$("#drag_env").fadeIn();
		    }
		     else if(   $('.sp.active').attr('id') == "Ayalon" && (pensionKeren == "Ayalon")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Klal" && (pensionKeren == "Klal")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Menorah" && (pensionKeren == "Menorah")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Migdal" && (pensionKeren == "Migdal")) {
					$("#drag_env").fadeIn();
		    }
		      else if( $('.sp.active').attr('id') == "Phoenix"  && (pensionKeren == "Phoenix")) {
					$("#drag_env").fadeIn();
		    }
		    else {
		    	$("#drag_env").fadeOut();
		    }
		    
    });
    
       $('#button-previous').click(function(){
  	
//			alert(pensionKeren+"  "+$('.sp.active').attr('id'));
			
		    $('.active').removeClass('active').addClass('oldActive');    
		     if ( $('.oldActive').is(':first-child')) {
		      	   $('.sp').last().addClass('active');
		     }
		     else{
		    		$('.oldActive').prev().prev().addClass('active');
		     }
		    $('.oldActive').removeClass('oldActive');
		    
		    
		     $('.active2').removeClass('active2').addClass('oldActive2');    
		     if ( $('.oldActive2').prev().is(':first-child')) {
		      	   $('.sp2').last().addClass('active2');
		     }
		     else{
		    		$('.oldActive2').prev().prev().addClass('active2');
		     }
		    $('.oldActive2').removeClass('oldActive2');
		    
		    $('.sp').fadeOut();
		    $('.sp2').fadeOut();
		    $('.active').fadeIn();
		    $('.active2').fadeIn();
		 	
		    if(   $('.sp.active').attr('id') == "Harel" && (pensionKeren == "Harel")   ) {
					$("#drag_env").fadeIn();
		    }
		     else if(   $('.sp.active').attr('id') == "Ayalon" && (pensionKeren == "Ayalon")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Klal" && (pensionKeren == "Klal")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Menorah" && (pensionKeren == "Menorah")) {
					$("#drag_env").fadeIn();
		    }
		      else if(  $('.sp.active').attr('id') == "Migdal" && (pensionKeren == "Migdal")) {
					$("#drag_env").fadeIn();
		    }
		      else if( $('.sp.active').attr('id') == "Phoenix"  && (pensionKeren == "Phoenix")) {
					$("#drag_env").fadeIn();
		    }
		    else {
		    	$("#drag_env").fadeOut();
		    }   
    });

});

/* --------sec 6 --------------------------------------------------------------------*/

$(document).ready(function(){
	  Animation_happend = 0;
	  $(window).scroll(function()
	  {
		if(scrollPercent >= 49 && Animation_happend == 0){
			console.log("Sec 6 reached");
			$('#no_idea').animate({ height:507, top:'0%' }, {
					queue: false,
                    duration: 600,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#medium').animate({ height:411, top:'27.5%' }, {
            		queue: false,
                    duration: 700,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#danger').animate({ height:543, top:'6%' }, {
            		queue: false,
                    duration: 800,
                    easing: 'easeOutCubic',
                    complete: function() { /* Animation complete */ }
                });
            $('#solid').animate({ height:280, top:'48%' }, {
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


var sec9Backfull = "";
var sec9Backcut = "";
var sec9hair = "";
var helper = 0;
var sec9_imageHasChanged = 0;

$(document).ready(function(){
	$(window).scroll(function(){
		if (scrollPercent > 0){
			if(sec9_imageHasChanged == 0){
				$('#sec9').css("background-position-y", "79%");
				$('#B_no').css("top", "50%");
				$('#B_yes').css("top", "50%");
				$('#B_no').css("opacity", "1");
				$('#B_yes').css("opacity", "1");
				$('#hair').css("display", "none");
				$('#hair').css("top", "15.3%");
				$('#crown').css("display", "none");
				$('#crown_info').css("display", "none");
				$('#pull_info').css("display", "none");
				$('#scissors').css("left", "66%");
				
				if(sexOfUser == "male"){
					if(ageOfUser < 23){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/Boy_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/Boy_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 1;
					}
					if(ageOfUser > 23 && ageOfUser < 50){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/Man_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/Man_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 2;
					}
					if(ageOfUser > 50){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/Oldman_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/OldMan_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 3;
					}
				}
				else{
					if(ageOfUser < 23){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/Girl_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/Girl_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 4;
					}
					if(ageOfUser > 23 && ageOfUser < 50){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/Woman_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/Woman_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 5;
					}
					if(ageOfUser > 50){
						console.log('sec_9_changing image');
						$('#sec9').css('background-image','url("images/Screen 9/OldWoman_Box_full.png")');
						$('#hair').css('background-image','url("images/Screen 9/OldWoman_Box.png")');
						sec9_imageHasChanged = 1;
						helper = 6;
					}
				}
			}
		}
    });
});




$(document).ready(function(){
	$( "#B_no" ).click(function() {
	  	$('#sec9').animate({
		  'background-position-x': '50%',
		  'background-position-y': '-10%'
		},
		{
			duration: 2000, 
			complete: function(){
				$("#crown").show(400);
				$("#crown_info").show(400);
			}
		});
		
		$("#B_no").animate({
			top: '163%',
			opacity: '0'
        }, 1800);
        $("#B_yes").animate({
			top: '163%',
			opacity: '0'
        }, 1800);
        
        $("#sec9_header").text("!כל הכבוד, לא משכת");
	});
	
	$( "#B_yes" ).click(function() {
	  	$('#sec9').animate({
		  'background-position-x': '50%',
		  'background-position-y': '-10%'
		},
		{
			duration: 2000, 
			complete: function(){
				if(helper <= 1){
					$('#sec9').css('background-image', 'url("images/Screen 9/Boy_Box_cut.png")');
				}
				if(helper == 2){
					$('#sec9').css('background-image', 'url("images/Screen 9/Man_Box_cut.png")');
				}
				if(helper == 3){
					$('#sec9').css('background-image', 'url("images/Screen 9/OldMan_Box_cut.png")');
				}
				if(helper == 4){
					$('#sec9').css('background-image', 'url("images/Screen 9/Girl_Box_cut.png")');
				}
				if(helper == 5){
					$('#sec9').css('background-image', 'url("images/Screen 9/Woman_Box_cut.png")');
				}
				if(helper == 6){
					$('#sec9').css('background-image', 'url("images/Screen 9/OldWoman_Box_cut.png")');
				}
				$("#pull_info").show(400);
				$("#hair").show(0);
				$("#haircut_line").show(400);
				$("#scissors").show(400);
				$('#scissors').animate({
					left: "-=600"
					}, {
					complete: function(){
						$("#scissors").hide(400);
						$('#hair').animate({
							top: "-=30"
						});
						$("#haircut_line").hide(400);
					}
				});
			}
		});
		
		$("#B_no").animate({
			top: '163%',
			opacity: '0'
        }, 1800);
        $("#B_yes").animate({
			top: '163%',
			opacity: '0'
        }, 1800);
		
		$("#sec9_header").text("!משכת, חבל");
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





