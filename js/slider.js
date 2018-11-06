$(document).ready(function(){
	 //Efeito de alterar os atributos de src e display do elemento display
	 $('.thumbnail li img').click(function(){
	 	 var imageDisplay = $(this).attr('src');
	 	 var descriptText = $(this).attr('alt');

	 	 $('.display li img').attr('src', imageDisplay);
	 	 $('.display li img').attr('alt', descriptText);	 	
	 });
   
	 //Açoes dos Botoes


	 //Altera descrição ao clicar nas miniaturas

	  $('.thumbnail li:nth-child(1)').click(function(){
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(1)').fadeIn('slow');
	 });

	    $('.thumbnail li:nth-child(2)').click(function(){
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(2)').fadeIn('slow');
	 });

	  $('.thumbnail li:nth-child(3)').click(function(){
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(3)').fadeIn('slow');
	 });

	   $('.thumbnail li:nth-child(4)').click(function(){
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(4)').fadeIn('slow');
	 });

	 $('.thumbnail li:nth-child(5)').click(function(){
	 	 $('.disc li').hide();
	 	 $('.disc li:nth-child(5)').fadeIn('slow');
	 });



	 

	







	

});

