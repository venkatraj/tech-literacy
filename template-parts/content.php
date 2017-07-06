<?php
/**
 * @package Tech Literacy
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    
	<?php    
		$featured_image = get_theme_mod( 'featured_image',true );
	    $featured_image_size = get_theme_mod ('featured_image_size','1');
		if( $featured_image &&  has_post_thumbnail() ) : 
		        if ( $featured_image_size == '1' ) : ?> 
						<div class="post-thumb">
						  <?php	if( $featured_image && has_post_thumbnail() ) : 
								    the_post_thumbnail('tech-literacy-blog-large-width');
			                endif;?>
			            </div> <?php
		        else: ?>
		 	            <div class="post-thumb">
		 	                 <?php if( has_post_thumbnail() && ! post_password_required() ) :   
					               the_post_thumbnail('tech-literacy-small-featured-image-width');
								endif;?>
			             </div>  <?php				
	            endif; 
		endif; ?>   

		<div class="latest-content">
			<header class="entry-header">  
					<div class="title-meta">
						<?php the_title( sprintf( '<h3 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' ); ?>
						<?php tech_literacy_top_meta(); ?>
					</div>
		    </header><!-- .entry-header -->

			<div class="entry-content">   
				<?php
					/* translators: %s: Name of current post */
					the_content( sprintf(
						__( 'Read More', 'tech-literacy' ),
						the_title( '<span class="screen-reader-text">"', '"</span>', false )
					) );
				?>  
				 <?php
					wp_link_pages( array(
						'before' => '<div class="page-links">' . esc_html__( 'Pages: ', 'tech-literacy' ),
						'after'  => '</div>',
					) );
				?>			
			</div><!-- .entry-content -->

		   
     
		</div>
</article><!-- #post-## -->