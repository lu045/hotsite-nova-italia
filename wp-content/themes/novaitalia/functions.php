<?php 
	//Ativando imagem destacada(Thumbnail)
	add_theme_support('post-thumbnails');

	//Posts types do site
	function register_posts_type(){
		//Teste
		/*register_post_type('habilidades',
			array(
				'labels' =>  array(
				  'name' => __('Habilidades'), 
				  'singular_name' => __('Habilidade')  
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-menu', 
				'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
			) 
		);*/

		//O Condomínio
		register_post_type('condominio',
			array(
				'labels' =>  array(
				  'name' => __('O Condomínio'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-admin-home', 
				'supports' => array('title', 'page-attributes'),
			) 
		);

	}

	add_action('init', 'register_posts_type');


 	 
 	 	     
 	     
 	 