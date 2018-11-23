<section class="informacoes">
 <div class="leeds">
 	 <div class="conteudo-final">
 	 	 <?php query_posts('post_type=info'); ?>
 	 	 	 <?php if(have_posts()): ?>
 	 	 	 	 <?php while(have_posts()): the_post(); ?>
 	 	 	 	 	 <div class="container">
 	 	 	             <h1><?php the_title();?></h1>
 	 	 	             <div class="lazer-area"><img src="<?php the_post_thumbnail_url();?>"></div>
 	 	 	             <p><?php the_content();?></p>
 	 	              </div>
 	 	 	 	 <?php endwhile; ?>
 	 	 	 <?php else: ?>
 	 	 	 	 <h1>Não tem nada para mostrar!</h1>
 	 	 	 <?php endif; ?>
 	 	 <?php wp_reset_query(); ?> 	 	 
 	 </div>
 </div>

 <div class="infovend">
 	 <div class="conteudo-final2">
 	 	 <div class="container">
 	 	 	 <h1>Quer mais informações?</h1>
 	 	 	 <p>Preencha o formulário abaixo, entraremos em contato com você!</p>

 	 	 	 <form>
 	 	 	 	 <label>
 	 	 	 	 	<input class="i1c"  type="text" name="Nome" placeholder="Nome">		
 	 	 	 	 </label>
 	 	 	 	 <label>
 	 	 	 	 	<input class="i2c" type="e-mail" name="E-mail" placeholder="E-mail">
 	 	 	 	 </label>

 	 	 	 	 <label>
 	 	 	 	 	<input class="i3c" type="text" name="Telefone" placeholder="Telefone">
 	 	 	 	 </label>

 	 	 	 	 <button class="envio">Enviar</button>
 	 	 	 </form>
 	 	 </div>
 	 </div>
 </div>		 	
</section>
