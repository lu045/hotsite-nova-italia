$(document).ready(function(){	 
	 //Oculta a tela de destaque
	 $('.descript-active').hide();
	 $('#ex1').hide();
	 //Da destaque a miniatura clicada
	 $('.thumbnail li img').click(function(){
	 	 //========Variaveis=================
	 	 var imageUrl = $(this).attr('src');
	 	 var imageAlt = $(this).attr('alt');
	 	 //=======Açoes da função============
	 	 $('.display li').hide();
	 	 $('#ex1').show();
	 	 $('.descript-active').show();
	 	 $('#ex1').attr('src', imageUrl);
	 	 $('#ex1').attr('alt', imageAlt);
	 });
	
     //Efeito de reprodução automatica	

     



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

	 	 //Efeito de avançarr miniaturas
	 	 if(numberOfthumb>currentSlid){
	 	 	 $('.thumbnail').css({"width":"99999%"}).animate({"margin-left":"-222px"}, 300, function(){
	 	 	 	 $('.thumbnail li').last().after($('.thumbnail li').first());
	 	 	 	 $(this).css({"margin-left":"0", "width":"auto"});
	 	 	 });	 	 	 
	 	 }else{
	 	 	 alert("Insira mais imagens para avançar!");
	 	 }

	 	 //Efeito de desativar ação das miniatueas
         //===========Campo da Descrição================//
	 	 $('.text-order li').first().show();
	 	 //===========Campo da Display=================//
	 	 $('.display li').show();
	 	 //=========Oculta a tela de destaque=========//
	 	 $('#ex1').hide();
	 	 $('.descript-active').hide();	 	 
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

	 	 //Efeito de retroceder miniaturas
	 	 if(numberOfthumb>currentSlid){
	 	 	 $('.thumbnail li').first().before($('.thumbnail li').last().css({"margin-left":"-222px"}));
	 	 	 $('.thumbnail').css({"width":"99999%"}).animate({"margin-left":"222px"}, 300, function(){
	 	 	 	 $('.thumbnail li').css({"margin-left":"0"});
	 	      	 $('.thumbnail').css({"width":"auto"});
	 	      	 $(this).css({"margin-left":"0", "width":"auto"});	 	 	 	
	 	 	 }); 
	 	 }else{
	 	 	 alert("Deu Erro");
	 	 }

	 	 //Efeito de desativar ação das miniatueas
         //===========Campo da Descrição================//
	 	 $('.text-order li').first().show();
	 	 //===========Campo da Display=================//
	 	 $('.display li').show();
	 	 //=========Oculta a tela de destaque=========//
	 	 $('#ex1').hide();
	 	 $('.descript-active').hide();
	 });

	  
});

