$(document).ready(function(){	
	$('.menu-toggle ul a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
			targetOffset = $(id).offset().top;
			menuHeight = $('.menu-toggle').innerHeight();

		$('body, html').animate({
			scrollTop: targetOffset - 335 

		}, 900);

	});

	$('nav a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
			targetOffset = $(id).offset().top;
			menuHeight = $('nav').innerHeight();

		$('body, html').animate({
			scrollTop: targetOffset - 115  

		}, 900);

	});



});