<?php
/**
 * Register Menus.
 *
 * @package opry
 */

namespace OPRY\Includes;

use OPRY\Includes\Traits\Singleton;

/**
 * Class Menus
 */
class Menus {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_menus' ) );
	}

	/**
	 * Register Menus
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_menus() {
		register_nav_menus(
			array(
				'menu-1'         => esc_html__( 'Primary', 'opry' ),
				'footer-special' => esc_html__( 'Footer Special', 'opry' ),
				'footer-plan'    => esc_html__( 'Footer Plan', 'opry' ),
				'footer-story'   => esc_html__( 'Footer Story', 'opry' ),
				'footer-artist'  => esc_html__( 'Footer Artist', 'opry' ),
				'footer-about'   => esc_html__( 'Footer About', 'opry' ),
				'footer-other'   => esc_html__( 'Footer Other', 'opry' ),
			)
		);
	}
}
