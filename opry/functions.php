<?php
/**
 * Theme Functions.
 *
 * @package opry
 */

if ( ! defined( 'OPRY_THEME_VERSION' ) ) {
	define( 'OPRY_THEME_VERSION', '1.0' );
}

if ( ! defined( 'OPRY_THEME_PATH' ) ) {
	define( 'OPRY_THEME_PATH', __DIR__ );
}

if ( ! defined( 'OPRY_THEME_URL' ) ) {
	define( 'OPRY_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'OPRY_BUILD_URI' ) ) {
	define( 'OPRY_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'OPRY_BUILD_PATH' ) ) {
	define( 'OPRY_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'OPRY_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'OPRY_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

if ( ! defined( 'OPRY_BUILD_LIBRARY_URI' ) ) {
	define( 'OPRY_BUILD_LIBRARY_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/library' );
}

if ( ! defined( 'OPRY_BUILD_LIBRARY_DIR_PATH' ) ) {
	define( 'OPRY_BUILD_LIBRARY_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/library' );
}

/**
 * Load up the class autoloader.
 */
require_once OPRY_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function opry_get_theme_instance() {
	\OPRY\Includes\Opry::get_instance();
}

opry_get_theme_instance();

/**
 * Theme ACF field file.
 */
require_once OPRY_THEME_PATH . '/includes/theme-acf-fields.php';
