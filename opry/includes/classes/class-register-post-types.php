<?php
/**
 * Register Post Types
 *
 * @package opry
 */

namespace OPRY\Includes;

use OPRY\Includes\Traits\Singleton;

/**
 * Class for register post types.
 */
class Register_Post_Types {
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
		add_action( 'init', array( $this, 'register_movie_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_event_cpt' ), 0 );
	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_movie_cpt() {

		$labels = array(
			'name'                  => _x( 'Movies', 'Post Type General Name', 'opry' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'opry' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'opry' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'opry' ),
			'archives'              => __( 'Movie Archives', 'opry' ),
			'attributes'            => __( 'Movie Attributes', 'opry' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'opry' ),
			'all_items'             => __( 'All Movies', 'opry' ),
			'add_new_item'          => __( 'Add New Movie', 'opry' ),
			'add_new'               => __( 'Add New', 'opry' ),
			'new_item'              => __( 'New Movie', 'opry' ),
			'edit_item'             => __( 'Edit Movie', 'opry' ),
			'update_item'           => __( 'Update Movie', 'opry' ),
			'view_item'             => __( 'View Movie', 'opry' ),
			'view_items'            => __( 'View Movies', 'opry' ),
			'search_items'          => __( 'Search Movie', 'opry' ),
			'not_found'             => __( 'Not found', 'opry' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'opry' ),
			'featured_image'        => __( 'Featured Image', 'opry' ),
			'set_featured_image'    => __( 'Set featured image', 'opry' ),
			'remove_featured_image' => __( 'Remove featured image', 'opry' ),
			'use_featured_image'    => __( 'Use as featured image', 'opry' ),
			'insert_into_item'      => __( 'Insert into Movie', 'opry' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'opry' ),
			'items_list'            => __( 'Movies list', 'opry' ),
			'items_list_navigation' => __( 'Movies list navigation', 'opry' ),
			'filter_items_list'     => __( 'Filter Movies list', 'opry' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'opry' ),
			'description'         => __( 'The movies', 'opry' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'movies', $args );
	}

	/**
	 * Register Custom Post Type Event.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_event_cpt() {

		$labels = array(
			'name'                  => _x( 'Events', 'Post Type General Name', 'opry' ),
			'singular_name'         => _x( 'Event', 'Post Type Singular Name', 'opry' ),
			'menu_name'             => _x( 'Events', 'Admin Menu text', 'opry' ),
			'name_admin_bar'        => _x( 'Event', 'Add New on Toolbar', 'opry' ),
			'archives'              => __( 'Event Archives', 'opry' ),
			'attributes'            => __( 'Event Attributes', 'opry' ),
			'parent_item_colon'     => __( 'Parent Event:', 'opry' ),
			'all_items'             => __( 'All Events', 'opry' ),
			'add_new_item'          => __( 'Add New Event', 'opry' ),
			'add_new'               => __( 'Add New', 'opry' ),
			'new_item'              => __( 'New Event', 'opry' ),
			'edit_item'             => __( 'Edit Event', 'opry' ),
			'update_item'           => __( 'Update Event', 'opry' ),
			'view_item'             => __( 'View Event', 'opry' ),
			'view_items'            => __( 'View Events', 'opry' ),
			'search_items'          => __( 'Search Event', 'opry' ),
			'not_found'             => __( 'Not found', 'opry' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'opry' ),
			'featured_image'        => __( 'Featured Image', 'opry' ),
			'set_featured_image'    => __( 'Set featured image', 'opry' ),
			'remove_featured_image' => __( 'Remove featured image', 'opry' ),
			'use_featured_image'    => __( 'Use as featured image', 'opry' ),
			'insert_into_item'      => __( 'Insert into Event', 'opry' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Event', 'opry' ),
			'items_list'            => __( 'Events list', 'opry' ),
			'items_list_navigation' => __( 'Events list navigation', 'opry' ),
			'filter_items_list'     => __( 'Filter Events list', 'opry' ),
		);
		$args   = array(
			'label'               => __( 'Event', 'opry' ),
			'description'         => __( 'The Events', 'opry' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-calendar',
			'supports'            => array(
				'title',
				'editor',
				'thumbnail',
				'revisions',
				'author',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
			'rewrite'             => array(
				'with_front' => false,
				'slug'       => ( 'events' ),
			),
		);

		register_post_type( 'events', $args );
	}
}
