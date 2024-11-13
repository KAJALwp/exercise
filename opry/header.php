<?php
/**
 * The header for our theme
 *
 * @package opry
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php
if ( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
}

if ( function_exists( 'get_field' ) ) {
	$header_logo          = get_field( 'header_logo', 'option' );
	$header_logo_link     = ( $header_logo && is_array( $header_logo ) && isset( $header_logo['url'] ) ) ? $header_logo['url'] : '';
	$header_logo_alt_text = ( $header_logo && is_array( $header_logo ) && isset( $header_logo['alt'] ) ) ? $header_logo['alt'] : 'Header Logo';

	$header_sub_menu               = get_field( 'header_sub_menu', 'option' );
	$header_our_brand_detail       = get_field( 'header_our_brand_detail', 'option' );
	$header_our_brand_detail_title = $header_our_brand_detail['title'];
	$header_our_brand_detail_logo  = $header_our_brand_detail['header_our_brand'];

}
?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'opry' ); ?></a>

	<header id="masthead" class="opry-header site-header u-bg-white">
		<div class="container">
			<div class="u-flex-columns u-align-items-center u-justify-content-space-between">
				<div class="u-flex-column u-flex-basis-30 u-flex-basis-60@max-767">
					<div class="site-branding u-padding-t10 u-padding-b10">
					<?php
					if ( $header_logo_link ) :
						?>
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<img width="200" height="50" class="header-logo" src="<?php echo esc_url( $header_logo_link ); ?>" alt="<?php echo esc_attr( $header_logo_alt_text ); ?>" />
						</a>
					<?php endif; ?>
					</div><!-- .site-branding -->
				</div>
				<div class="u-flex-column u-flex-basis-90 u-flex-basis-40@max-767">
				<div class="opry-header__sub-menu">
					<?php
					foreach ( $header_sub_menu as $sub_menu ) {
						$sub_menu = $sub_menu['sub_menu'];
						if ( $sub_menu ) {
							$sub_menu_url    = $sub_menu['url'];
							$sub_menu_title  = $sub_menu['title'];
							$sub_menu_target = $sub_menu['target'] ? $sub_menu['target'] : '_self';
							?>
							<a id="header-secondary-menu" class="header-secondary-menu" href="<?php echo esc_url( $sub_menu_url ); ?>" target="<?php echo esc_attr( $sub_menu_target ); ?>"><?php echo esc_html( $sub_menu_title ); ?></a>
							<?php
						}
					}
					?>
					<div class="header-search-icon" id="header-search-icon">
						<i class="fa fa-magnifying-glass fa-search"></i>
					</div>
					<div class="search-app is-overlay" id="header-search-form">
						<i class="fas fa-times close-icon"></i>
						<div class="header-search">
							<?php get_search_form(); ?>
						</div>
					</div>
					<div class="header-our-brand">
						<p class="header-our-brand-title"><?php echo esc_html( $header_our_brand_detail_title ); ?></p>
						<ul class="brand-logo-list">
							<?php
							foreach ( $header_our_brand_detail_logo as $brand ) {
								?>
								<li>
									<?php
									$brand_url = isset( $brand['brand_link'] ) ? esc_url( $brand['brand_link'] ) : '';
									if ( $brand_url ) {
										?>
										<a id="header-secondary-menu" class="header-secondary-menu" href="<?php echo esc_url( $brand_url ); ?>" target="_blank">
									<?php } ?>
									<?php if ( ! empty( $brand['brand_image'] ) ) { ?>
										<img src="<?php echo esc_url( $brand['brand_image']['url'] ); ?>" alt="<?php echo esc_attr( $brand['brand_image']['alt'] ); ?>" />
									<?php } ?>
									<?php if ( $brand_url ) { ?>
										</a>
									<?php } ?>
								</li>
								<?php
							}
							?>
						</ul>
					</div>
				</div>
					<nav id="site-navigation" class="main-navigation">
						<button class="menu-toggle " aria-label="Menu" aria-controls="primary-menu" aria-expanded="false"><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg></button>
						<div class="opry-menu">
							<?php
								wp_nav_menu(
									array(
										'theme_location' => 'menu-1',
										'menu_id'        => 'primary-menu',
									)
								);
								?>
						</div>
					</nav><!-- #site-navigation -->
				</div>
			</div>
		</div>
	</header><!-- #masthead -->
