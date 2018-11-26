<div class="container">
 <?php query_posts('post_type=geleria');?>
     <?php if(have_posts()): ?>
		 <div class="slider">
 	         <ul class="display">
 	 	         <?php 
 	 	            query_posts('post_type=geleria&posts_per_page=10'); 
 	 	            while(have_posts()): the_post();
 	 	         ?> 	 	
 	 	         <li>
 	 	             <img src="<?php the_post_thumbnail_url(); ?>" alt="Quisques">
 	 	         </li>
 	 	         <?php 
 	             endwhile;
 	             wp_reset_query(); 
 	 	         ?>	 	 	 	 	
 	         </ul>
 	 	     	 	 
 	         <div class="description">
 	 	         <div class="botoes">
 	 	             <div class="prev"><i class="fas fa-chevron-left"></i></div>
 	 	             <div class="next"><i class="fas fa-chevron-right"></i></div>
 	 	         </div>

 	 	         <div class="disc">	 	     	 	 
 	 	             <ul class="text-order">
 	 	                 <?php 
 	 	                    query_posts('post_type=geleria&posts_per_page=10'); 
 	 	                    while(have_posts()): the_post();
 	 	                 ?>
 	 	                 <li>
 	 	     	 	         <h2><?php the_title(); ?></h2>
 	 	     	 	         <p><?php the_content(); ?></p>
 	 	                 </li>
 	 	                 <?php 
 	                        endwhile;
 	                        wp_reset_query(); 
 	 	                 ?>	  	 	         	 	  	 	
 	 	             </ul>	 	     	 	 	     
 	 	         </div> 	 	     	 	 	 
 	        </div>
        </div>
     </div>
     <?php else: ?>
		<p>Insira imagens para a exbição da galeria!</p>
	 <?php endif; ?>
 <?php wp_reset_query(); ?>

 

