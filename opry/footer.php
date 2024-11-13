<?php
/**
 * The template for displaying the footer
 *
 * @package opry
 */

if ( function_exists( 'get_field' ) ) {
	$presented_by_text = get_field( 'presented_by_text', 'option' );
	$presented_company = get_field( 'presented_company', 'option' );
	$sponsor_text      = get_field( 'sponsor_text', 'option' );
	$sponsor_company   = get_field( 'sponsor_company', 'option' );
	$copyright_text    = get_field( 'copyright_text', 'option' );
	$footer_menu       = get_field( 'footer_menu', 'option' );
}
?>

	<footer id="colophon" class="site-footer">
		<div class="footer-inner__bg">
			<div class="footer-menu-widgets">
				<?php if ( is_active_sidebar( 'footer-menu-widget' ) ) : ?>
					<?php dynamic_sidebar( 'footer-menu-widget' ); ?>
				<?php endif; ?>
			</div>
		</div>
		<div class="footer-widgets">
			<?php if ( is_active_sidebar( 'footer-area-1' ) ) : ?>
				<?php dynamic_sidebar( 'footer-area-1' ); ?>
			<?php endif; ?>
		</div>
		<div class="global-footer">
			<div class="presented-by">
				<?php if ( $presented_by_text ) { ?>
					<span class="label"><?php echo esc_html( $presented_by_text ); ?></span>
					<?php
				}
				?>
				<?php
				foreach ( $presented_company as $presented ) {
					if ( ! empty( $presented['company_url'] ) ) {
						echo '<a href="' . esc_url( $presented['company_url'] ) . '" class="presented_by_logo" target="_blank" id="presented_by_humana">';
					}
					if ( ! empty( $presented['company_logo'] ) ) {
						?>
							<img class="presented-logo" src="<?php echo esc_url( $presented['company_logo']['url'] ); ?>" alt="<?php echo esc_attr( $presented['company_logo']['alt'] ); ?>">
							<?php
					}
					if ( ! empty( $presented['company_url'] ) ) {
						echo '</a>';
					}
				}
				?>

			</div>
			<div class="presented-by footer-sponsor">
				<?php if ( $sponsor_text ) { ?>
					<span class="label"><?php echo esc_html( $sponsor_text ); ?></span>
					<?php
				}
				?>
					<?php
					foreach ( $sponsor_company as $sponsor ) {
						if ( ! empty( $sponsor['company_url'] ) ) {
							echo '<a href="' . esc_url( $sponsor['company_url'] ) . '" class="sponsor_by_logo" target="_blank" id="sponsor_by_humana">';
						}
						if ( ! empty( $sponsor['company_logo'] ) ) {
							?>
							<img class="footer-sponsor-logo" src="<?php echo esc_url( $sponsor['company_logo']['url'] ); ?>" alt="<?php echo esc_attr( $sponsor['company_logo']['alt'] ); ?>">
							<?php
						}
						if ( ! empty( $sponsor['company_url'] ) ) {
							echo '</a>';
						}
					}
					?>
			</div>		
			<div class="site-info"> 
				<?php
				if ( ! empty( $copyright_text ) ) {
					?>
						<span><?php echo esc_html( $copyright_text ); ?></span>
						<span class="delimiter">|</span>
					<?php
				}
				?>
				<?php
				foreach ( $footer_menu as $index => $footer ) {
					$cta_link = $footer['footer_menu_name'];
					if ( $cta_link ) {
						$cta_link_url    = $cta_link['url'];
						$cta_link_title  = $cta_link['title'];
						$cta_link_target = $cta_link['target'] ? $cta_link['target'] : '_self';
						?>
							<a class="footer-menu-name" href="<?php echo esc_url( $cta_link_url ); ?>" target="<?php echo esc_attr( $cta_link_target ); ?>"><?php echo esc_html( $cta_link_title ); ?></a>
					<?php } ?>
					<?php if ( $index < count( $footer_menu ) - 1 ) { ?>
						<span class="delimiter">|</span>
						<?php
					}
				}
				?>
							</div>
	</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
