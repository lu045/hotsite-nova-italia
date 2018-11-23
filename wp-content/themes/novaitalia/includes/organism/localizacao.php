     </section>
</div>

<div class="altura-geral">
 <section class="localizacao" id="localizacao">
 	 <?php query_posts('post_type=local'); ?>
 	     <?php if(have_posts()): ?>
			 <?php while(have_posts()): the_post(); ?>
				 <div class="cb2">
 	 	             <div class="container">
 	 	 	             <h1><?php the_title(); ?></h1>
 	 	             </div>
 	             </div>

	             <div id="map"></div>

	             <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/mapa.js"></script>
	             <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY2AsV7LjkOWuG7Fbqez9ASh-clDO1B9I&callback=initMap">
                 </script>

 	             <div class="container">
 	 	             <article>
 	 	 	             <p class="p1"><?php the_content(); ?></p>
 	 	             </article>
 	             </div>
			 <?php endwhile; ?>	     
 	     <?php else: ?>
 	     	 <h1>Não tem nada para exibir</h1>
 	     <?php endif; ?>
 	 <?php wp_reset_query(); ?>	 
 </section>
</div>

