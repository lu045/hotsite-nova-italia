$(document).ready(function(){	 
 	 //Efeito de reprodução automatica
 	 //===========Variaveis===================//
 	 var spped = 5500;
 	 var rotate = setInterval(loopslid, spped);		
     //Efeito nos botoes de ação
     //===========Botão Avançar====================//	 
	 $('.next').click(function(){
	 	 
	 	 //Efeito de Avanço
	 	 //===========Variaveis===================//
	 	 var currentSlid = 1;
	 	 var slidList = $('.display li');
	 	 var descList = $('.text-order li');
	 	 var actList = $('.text-order .ativo');
	 	 var thumbList = $('.thumbnail li');
	 	 var numberOflist = (slidList.length);
	 	 var numberOfdisc = (descList.length);
	 	 var numberOfact = (actList.length);
	 	 var numberOfthumb = (thumbList.length);
	 	 var liWidth = $('.display li').outerWidth();
	 	 //===========Efeito========================//
	 	 if (numberOflist>currentSlid){
	 	     $('.display').css({"width":"99999%"}).animate({left:-liWidth}, 800, function(){
	 	      	 $('.display li').last().after($('.display li').first());
	 	      	 $(this).css({"left":"0", "width":"auto"});
	 	      	 });	 	 	  	
	 	 }else {
	 	 	 alert("Insira mais imagens para continuar!");
	 	 }

	 	 //Efeito de avançar descrição
	 	 if(numberOfdisc>currentSlid){	 	 	
	 	 	 $('.text-order li').last().after($('.text-order li').first());
	 	 	 $('.text-order li').fadeIn('slow');
	 	 }else{
	 	 	 alert("Insira mais slides para avançar!");
	 	 } 	 
	 });

	 //===========Botão Voltar===================//	
	 $('.prev').click(function(){
	 	
	 	 //Efeito de Retrocesso
	 	 //===========Variaveis==================//
	 	 var currentSlid = 1;
	 	 var slidList = $('.display li');
	 	 var descList = $('.text-order li');
	 	 var actList = $('.text-order .ativo');
	 	 var thumbList = $('.thumbnail li');
	 	 var numberOflist = (slidList.length);
	 	 var numberOfdisc = (descList.length);
	 	 var numberOfact = (actList.length);
	 	 var numberOfthumb = (thumbList.length);
	 	 var liWidth = $('.display li').outerWidth();
	 	 //===========Efeito=======================//
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

	 	 //Efeito de retroceder descrição
	 	 if(numberOfdisc>currentSlid){	 	 	
	 	 	 $('.text-order li').first().before($('.text-order li').last());
	 	 	 $('.text-order li').fadeIn('slow');
	 	 }else{
	 	 	 alert("Insira mais slides para avançar!");
	 	 }
	 });

	 //Função do loop de animação do slider  
	 function loopslid(){
	 	$('.next').click();
	 }
});

