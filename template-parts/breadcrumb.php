<?php
/**
 * The template used for displaying page breadcrumb
 *
 * @package Tech Literacy
 */


/* search box */
if( !is_front_page() ) : ?>
	<div id="search-style" class="search-box-wrapper">
	    <?php get_search_form(); ?>
	</div><?php 
endif; 

 $breadcrumb = get_theme_mod( 'breadcrumb',true ); 
if( !is_front_page() ): ?>
	<div class="breadcrumb"> 
		<div class="container"><?php
		    if( !is_search() && !is_archive() && !is_404() ) : ?>
				<div class="breadcrumb-left eight columns">
					<?php the_title('<h4>','</h4>');?>			
				</div><?php
			endif; ?>
			<?php if( $breadcrumb ) : ?>
				<div class="breadcrumb-right eight columns">
					<?php tech_literacy_breadcrumbs(); ?>
				</div>
			<?php endif; ?>
		</div>
	</div><?php  
endif;