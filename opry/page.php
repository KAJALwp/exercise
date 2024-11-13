<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package opry
 */

get_header();
?>

	<main id="primary" class="site-main opry-main u-padding-t80">
		<div class="container">
			<div class="main-section">
				<div class="inner-section">
					<?php
					while ( have_posts() ) :
						the_post();

						get_template_part( 'template-parts/content', 'page' );

					endwhile; // End of the loop.
					?>
				</div>
			</div>
		</div>	
		<button id="backToTopBtn" aria-label="Back to Top" class="back-to-top">
			<span class="text"><?php echo esc_html__( 'Top', 'opry' ); ?></span>
		</button>
	</main><!-- #main -->

<?php
get_footer();
