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



	 $('.next').click(function(){
	 	 //Efeito de Avanço
	 	 //===========Variaveis================//
	 	 var currentSlid = 1;
	 	 var slidList = $('.display li');
	 	 var numberOflist = (slidList.length);
	 	 var liWidth = $('.display li').outerWidth();
	 	 //===========Efeito===================//
	 	     if (numberOflist>currentSlid){
	 	      	 $('.display').css({"width":"99999%"}).animate({left:-liWidth}, 800, function(){
	 	      	 	 $('.display li').last().after($('.display li').first());
	 	      	 	 $(this).css({"left":"0", "width":"auto"});
	 	      	 });	 	 	  	
	 	 	 }else {
	 	 	  	 alert("Insira mais imagens para continuar!");
	 	 	  }

	 	 //Efeito de avançar descrição

	 	 //Efeito de desativar miniaturas

	 });


	 $('.prev').click(function(){
	 	 //Efeito de Avanço
	 	 //===========Variaveis================//
	 	 var currentSlid = 1;
	 	 var slidList = $('.display li');
	 	 var numberOflist = (slidList.length);
	 	 var liWidth = $('.display li').outerWidth();
	 	 //===========Efeito===================//
	 	     if (numberOflist>currentSlid){
	 	      	 
	 	      	 $('.display li').first().before($('.display li').last().css({"margin-left":-liWidth}));
                 $('.display').css({"width":"99999%"});
	 	      	 $('.display').animate({left:liWidth}, 800, function(){
	 	      	 	 $('.display li').css({"margin-left":"0"});
	 	      	 	 $('.display').css({"width":"auto"});
	 	      	 	 $(this).css({"left":"0", "width":"auto"});
	 	      	 });


		      	 


		      	 /*$('.display').css({"width":"99999%"}).animate({left:liWidth}, 800, function(){
	 	      	 	 $('.display').css({"left":"0"});
	 	      	 	 $(this).css({"left":"0", "width":"auto"});
	 	      	 });*/
	 	      	 	 	  	
	 	 	 }else {
	 	 	  	 alert("Insira mais imagens para continuar!");
	 	 	  }

	 	 //Efeito de avançar descrição

	 	 //Efeito de desativar miniaturas

	 });









	 




	







	

});

