<?php
/**
 * Theme Sidebars.
 *
 * @package opry
 */

namespace OPRY\Includes;

use OPRY\Includes\Traits\Singleton;

/**
 * Class Sidebars
 */
class Sidebars {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {
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
		 * Actions
		 */
		add_action( 'widgets_init', array( $this, 'register_sidebars' ) );
	}

	/**
	 * Register widgets.
	 *
	 * @action widgets_init
	 * @return void
	 * @since 1.0.0
	 */
	public function register_sidebars() {

		register_sidebar(
			array(
				'name'          => esc_html__( 'Sidebar', 'opry' ),
				'id'            => 'sidebar-1',
				'description'   => esc_html__( 'Add widgets here.', 'opry' ),
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget'  => '</section>',
				'before_title'  => '<h2 class="widget-title">',
				'after_title'   => '</h2>',
			)
		);
	}
}
