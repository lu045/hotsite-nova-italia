<?php query_posts('post_type=lazer'); ?>
	<?php if(have_posts()): ?>
		<?php while(have_posts()): the_post(); ?>
			 <div class="altura-geral">
                 <section class="area-de-lazer" id="area-lazer">
 	                 <div class="cb1">
 	 	                 <div class="container">
 	 	 	                 <h1><?php the_title(); ?></h1>
 	 	                 </div>
 	                 </div>
 	 	 
 	                 <div class="container">
	 	                 <div class="conteudo-geral">
 	 	                     <div class="lazer-area">
 	 	                     	 <img src="<?php the_post_thumbnail_url(); ?>">
 	 	                     </div>
 	 	 
 	 	                     <div class="desclal">
 	 	                         <p><?php the_content(); ?></p>
 	 	                     </div> 	 	         
 	 	                 </div>
                     </div>
		<?php endwhile; ?>
	<?php else: ?>
		<p>Não tem nada para exibir</p>
	<?php endif; ?>
<?php wp_reset_query(); ?>


