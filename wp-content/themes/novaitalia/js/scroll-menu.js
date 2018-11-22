$(document).ready(function(){	

$('.menu-responsivo').hide();
$('body').css('height', '5000px')
	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		if(topo<=500){			
			$('.menu-responsivo').fadeOut('slow');
			$('.menu-toggle').fadeOut('slow');
		}else{
			$('.menu-responsivo').fadeIn('slow');
			$('.menu-toggle').fadeIn('slow');
		}
		

	});


});