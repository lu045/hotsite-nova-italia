$(document).ready(function(){	

	//Clique nas imagens para mostrar no display
	$('.thumbnail li img').click(function(){
		var imageUrl = $(this).attr('src');
		var descAlt = $(this).attr('alt');

		$('#ex1').attr('src', imageUrl);
		$('#ex1').attr('alt', descAlt);
	});

	//Botoes em funcionamento





});