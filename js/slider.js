$(document).ready(function(){	 
	 //Altera descrição e display ao clicar nas miniaturas
	 //Primeira Miniatura
	  $('.thumbnail li:nth-child(1)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(1)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(1)').fadeIn('slow');
	 });

	 //Segunda Miniatura
	  $('.thumbnail li:nth-child(2)').click(function(){
	     $('.display li').hide();
	 	 $('.display li:nth-child(2)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(2)').fadeIn('slow');
	 });

	 //Terceira Miniatura
	 $('.thumbnail li:nth-child(3)').click(function(){
	  	 $('.display li').hide();
	 	 $('.display li:nth-child(3)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(3)').fadeIn('slow');
	 });

	 //Quarta Miniatura
	 $('.thumbnail li:nth-child(4)').click(function(){
	   	 $('.display li').hide();
	 	 $('.display li:nth-child(4)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(4)').fadeIn('slow');
	 });

	 //Quinta Miniatura
	 $('.thumbnail li:nth-child(5)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(5)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(5)').fadeIn('slow');
	 });

	 //Sexta Miniatura
	 $('.thumbnail li:nth-child(6)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(6)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(6)').fadeIn('slow');
	 });

	 //Setima Miniatura
	 $('.thumbnail li:nth-child(7)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(7)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(7)').fadeIn('slow');
	 });

	 //Oitava Miniatura
	 $('.thumbnail li:nth-child(8)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(8)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(8)').fadeIn('slow');
	 });

	 //Nona Miniatura
	 $('.thumbnail li:nth-child(10)').click(function(){
	 	 $('.display li').hide();
	 	 $('.display li:nth-child(10)').show();
	 	 $('.text-order li').hide();
	 	 $('.text-order li:nth-child(10)').fadeIn('slow');
	 });

     

     //Efeito nos botoes de avanço
     //===========Botão Avançar================//	 
	 $('.next').click(function(){
	 	 //Efeito de Avanço
	 	 //===========Variaveis================//
	 	 var currentSlid = 1;
	 	 var slidList = $('.display li');
	 	 var descList = $('.text-order li');
	 	 var actList = $('.text-order .ativo');
	 	 var numberOflist = (slidList.length);
	 	 var numberOfdisc = (descList.length);
	 	 var numberOfact = (actList.length);
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
	 	 $('.text-order li').fadeIn('slow');

	 	
       
	 	


	 	 //Efeito de desativar miniaturas
         //===========Campo da Descrição================//
	 	 $('.text-order li:nth-child(1)').hide();
	 	 $('.text-order li:nth-child(2)').hide();
	 	 $('.text-order li:nth-child(3)').hide();
	 	 $('.text-order li:nth-child(4)').hide();
	 	 $('.text-order li:nth-child(5)').hide();
	 	 $('.text-order li:nth-child(6)').hide();
	 	 $('.text-order li:nth-child(7)').hide();
	 	 $('.text-order li:nth-child(8)').hide();
	 	 $('.text-order li:nth-child(9)').hide();
	 	 $('.text-order li:nth-child(10)').hide();
	 	 $('.text-order li').show();
	 	 //===========Campo da Display================//
	 	 $('.display li:nth-child(1)').hide();
	 	 $('.display li:nth-child(2)').hide();
	 	 $('.display li:nth-child(3)').hide();
	 	 $('.display li:nth-child(4)').hide();
	 	 $('.display li:nth-child(5)').hide();
	 	 $('.display li:nth-child(6)').hide();
	 	 $('.display li:nth-child(7)').hide();
	 	 $('.display li:nth-child(8)').hide();
	 	 $('.display li:nth-child(9)').hide();
	 	 $('.display li:nth-child(10)').hide();
	 	 $('.display li').show();
	 });

	 //===========Botão Voltar================//	
	 $('.prev').click(function(){
	 	 //Efeito de Retrocesso
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
	 	 	 }else {
	 	 	  	 alert("Insira mais imagens para continuar!");
	 	 	  }

	 	 //Efeito de avançar descrição





	 	 //Efeito de desativar miniaturas
         //===========Campo da Descrição================//
	 	 $('.text-order li:nth-child(1)').hide();
	 	 $('.text-order li:nth-child(2)').hide();
	 	 $('.text-order li:nth-child(3)').hide();
	 	 $('.text-order li:nth-child(4)').hide();
	 	 $('.text-order li:nth-child(5)').hide();
	 	 $('.text-order li:nth-child(6)').hide();
	 	 $('.text-order li:nth-child(7)').hide();
	 	 $('.text-order li:nth-child(8)').hide();
	 	 $('.text-order li:nth-child(9)').hide();
	 	 $('.text-order li:nth-child(10)').hide();
	 	 $('.text-order li').show();
	 	 //===========Campo da Display================//
	 	 $('.display li:nth-child(1)').hide();
	 	 $('.display li:nth-child(2)').hide();
	 	 $('.display li:nth-child(3)').hide();
	 	 $('.display li:nth-child(4)').hide();
	 	 $('.display li:nth-child(5)').hide();
	 	 $('.display li:nth-child(6)').hide();
	 	 $('.display li:nth-child(7)').hide();
	 	 $('.display li:nth-child(8)').hide();
	 	 $('.display li:nth-child(9)').hide();
	 	 $('.display li:nth-child(10)').hide();
	 	 $('.display li').show();

	 });









	 




	







	

});

