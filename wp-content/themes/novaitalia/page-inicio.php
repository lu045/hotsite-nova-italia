<?php 
	/*
	   template name: Inicio
	*/
	   
	//Chama o cabeçalho da pagina
	get_header();

	//Chama a sessao condominio
	include('includes/organism/condominio.php');

	//Chama a sessao urbanistico
	include('includes/organism/urbanistico.php');

	//Chama a sessao area de lazer
	include('includes/organism/lazer.php');

	//Chama a galeria de imagens
	include('includes/molecules/slider.php');

	//Chama a sessão de localização
	include('includes/organism/localizacao.php');

	//Chama a sessão de informaçoes
	include('includes/organism/info.php');

	//Chama o rodape da pagina
	get_footer();
?>

	 
 	 
 	 


 	 
 	 	     
 	     
 	 