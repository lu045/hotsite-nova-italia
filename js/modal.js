$(document).ready(function(){
	$('.mod-vend').hide();
	$('.maisinfo').click(function(){
		$('.mod-vend').fadeIn("slow");
	});

	$('.close-mod').click(function(){
		$('.mod-vend').fadeOut("slow");
	});

	$('.close-mod').mouseover(function(){
		$('.cm1, .cm2').css("background", "#323032");
	});

	$('.close-mod').mouseout(function(){
		$('.cm1, .cm2').css("background", "#fff");
	});

	$('.bg-mod').click(function(){
		$('.mod-vend').fadeOut("slow");
	});
});

$(window).on('load', function(){
	$('.mod-vend')
		.hide()
		.delay('10000')
		.fadeIn("slow");
});