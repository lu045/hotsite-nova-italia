<div class="altura-geral">
 <section class="urbanistico" id="urbanistico">
 	 <?php query_posts('post_type=urbanistico'); ?>
		 <?php if(have_posts()): ?>	
             <?php while(have_posts()): the_post(); ?>
                 <div class="cb2">
 	 	             <div class="container">
 	 	 	             <h1><?php the_title(); ?></h1>
 	 	             </div>
 	             </div>

 	             <div class="conturb">
 	 	             <a href="imagens/urbanistico-nova-italia.png" target="_blank">
 	 	             <img src="<?php the_post_thumbnail_url(); ?>" class="urbimg" alt="<?php the_title(); ?>">
 	 	         </a>
 	             </div>
             <?php endwhile; ?>
         <?php else: ?>
         	 <h1>Não tem nada para exibir</h1>
          <?php endif; ?>
 	 <?php wp_reset_query(); ?>
 	 

 	 <div class="container">	 	    
 	 	 <div class="esp-emp">
 	 	     <div class="row">
 	 	         <div class="col-sm-4">
 	 	         	 <div class="e-item-1">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/lotes.png" alt="Lotes">
 	 	         	     <h2>Lotes a partir de 360 m²</h2>
 	 	         	</div>
 	 	         </div>

 	 	         <div class="col-sm-4">
 	 	         	 <div class="e-item-2">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/area-verde.png" alt="Área Verde">
 	 	         	     <h2>Área verde de 27.388,88 m²</h2>
 	 	         	 </div>
 	 	         </div>

 	 	         <div class="col-sm-4">
 	 	         	 <div class="e-item-3">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/unidades.png" alt="Unidades">
 	 	         	     <h2>296 Unidades</h2>
 	 	         	 </div>
 	 	         </div>
 	 	     </div>
 	 	 </div>
 	 	     
 	 	 <div class="botoes-urbcom">
 	 	     <a href="condominio-nova-italia-urbanistico.pdf" target="_blank">
 	 	         <button class="urbbax">Baixar Urbanistico</button>
 	 	     </a>
 	 	     <a href="condominio-nova-italia-planta.pdf" target="_blank">
 	 	         <button class="plabbax">Baixar a Planta</button>
 	 	     </a> 	 	           
 	 	 </div>
 	 </div>
 </section>
</div>