<section class="condominio" id="condominio">
 <?php query_posts('post_type=condominio'); ?>
 	 <?php if(have_posts()): ?>	
 	 	 <?php while(have_posts()): the_post(); ?>
			  <div class="cb1">
 	             <div class="container">
 	 	             <h1><?php the_title(); ?></h1>	 	 	     
 	             </div>
             </div>

             <div class="conteudo-geral">
 	             <div class="container">	 	 
 	 	             <div class="condominio-desc">	 	            
 	 	                 <div class="vl">
 	 	 	                 <div class="normal">
 	 	 	                     <?php the_field('video'); ?>	
 	 	 	                 </div>
 	 	 	             </div>
 	 	                 <article>
 	 	 	                 <h1><?php the_field('titulo'); ?></h1>
 	 	 	                 <p><?php the_field('texto'); ?></p>	 	 	
 	 	                 </article>	 	             
 	 	             </div>	 	     	 
 	 	 <?php endwhile; ?>
     <?php else: ?>
         Não tem nada cadastrado 
 	 <?php endif; ?>
 <?php wp_reset_query(); ?>


 	 	 <div class="atributos-emp">
 	 	     <div class="row">
 	 	         <div class="col-sm-4">
 	 	         	 <div class="a-item-1">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/area-lazer.png" alt="Área de lazer">
 	 	         	     <h2>Área de lazer completa</h2>
 	 	         	 </div>
 	 	         </div>

 	 	         <div class="col-sm-4">
 	 	         	 <div class="a-item-2">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/seguranca.png" alt="Segurança">
 	 	         	     <h2>Comodidade e segurança</h2>
 	 	         	 </div>
 	 	         </div>

 	 	         <div class="col-sm-4">
 	 	         	 <div class="a-item-3">
 	 	         	     <img src="<?php bloginfo('template_url'); ?>/imagens/localizacao.png" alt="Localização Privilegiada">
 	 	         	     <h2>Localização privilegiada</h2>
 	 	         	 </div>
 	 	         </div>
 	 	     </div>
 	 	 </div> 	 	         

 	 	 <div class="area-botao">
 	 	     <button class="maisinfo">Quero saber mais</button>
 	 	 </div>
 	 </div>
 </div>
</section>