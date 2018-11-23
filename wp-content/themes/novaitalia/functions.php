<?php 
	//Ativando imagem destacada(Thumbnail)
	add_theme_support('post-thumbnails');

	//Posts types do site
	function register_posts_type(){
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

		//Urbanistico
		register_post_type('urbanistico',
			array(
				'labels' =>  array(
				  'name' => __('Urbanístico'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-index-card', 
				'supports' => array('title', 'thumbnail', 'page-attributes'),
			) 
		);

		//Area de Lazer
		register_post_type('lazer',
			array(
				'labels' =>  array(
				  'name' => __('Area de Lazer'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-palmtree', 
				'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
			) 
		);

		//Galeria de Imagens
		register_post_type('geleria',
			array(
				'labels' =>  array(
				  'name' => __('Galeria de Imagens'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-format-gallery', 
				'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
			) 
		);

		//Informaçoes
		register_post_type('local',
			array(
				'labels' =>  array(
				  'name' => __('Localização'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-location', 
				'supports' => array('title', 'editor', 'page-attributes'),
			) 
		);

		//Informaçoes
		register_post_type('info',
			array(
				'labels' =>  array(
				  'name' => __('Informações'), 
				),

				'public' => true,
				'has_archive' => true,
				'menu_icon' => 'dashicons-admin-users', 
				'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
			) 
		);
	}

	add_action('init', 'register_posts_type');


 	 
 	 	     
 	     
 	 