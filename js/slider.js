$(document).ready(function(){	 
	 //Altera descrição e display ao clicar nas miniaturas
	 //Primeira Miniatura
	  $('.thumbnail li:nth-child(1)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(1)').show();
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(1)').fadeIn('slow');
	 });

	 //Segunda Miniatura
	  $('.thumbnail li:nth-child(2)').click(function(){
	     $('.display li').hide();
	 	 $('.display li:nth-child(2)').show();
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(2)').fadeIn('slow');
	 });

	 //Terceira Miniatura
	 $('.thumbnail li:nth-child(3)').click(function(){
	  	 $('.display li').hide();
	 	 $('.display li:nth-child(3)').show();
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(3)').fadeIn('slow');
	 });

	 //Quarta Miniatura
	 $('.thumbnail li:nth-child(4)').click(function(){
	   	 $('.display li').hide();
	 	 $('.display li:nth-child(4)').show();
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(4)').fadeIn('slow');
	 });

	 //Quinta Miniatura
	 $('.thumbnail li:nth-child(5)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(5)').show();
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(5)').fadeIn('slow');
	 });








	 $('.display li:last').insertBefore('.dislplay li:first');
	 $('.next').click(function(){
	 	 //Efeito de avanço
	 	 $('.display li').animate({"left":"-100%"}, 900, function(){
	 	 	

	 	 	
	 	 });

	 	 //Efeito de avançar descrição

	 	 //Efeito de desativar miniaturas

	 });







	 




	







	

});

