<?php
/**
 * Admin ACF Page.
 *
 * @package opry
 */

if ( function_exists( 'acf_add_options_page' ) ) {

	acf_add_options_page(
		array(
			'page_title' => __( 'Opry Settings', 'opry' ),
			'menu_title' => __( 'Opry Settings', 'opry' ),
			'menu_slug'  => 'opry-settings',
			'capability' => 'edit_posts',
			'redirect'   => false,
			'position'   => '20',
		)
	);

}
