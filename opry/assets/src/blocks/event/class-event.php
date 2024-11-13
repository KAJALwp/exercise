<?php
/**
 * Registers the opry/event block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package opry
 */

namespace OPRY\Blocks;

use OPRY\Includes\Block_Base;
use WP_Block;
use WP_Query;
use DateTime;
use WP_REST_Request;

/**
 *  Class for the opry/event block.
 */
class Event extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'event';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'opry_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );

		add_action( 'rest_api_init', array( $this, 'opry_event_next_endpoint' ) );
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data( array $blocks_config ): array {
		// Merge your block data into blocks_config.
		return array_merge(
			$blocks_config,
			array(
				'sample_dynamic_block_config' => array(
					'data_key' => 'data_value',
				),
			)
		);
	}

		/**
		 * Register custom API endpoints to fetch event data.
		 *
		 * @since 1.0.0
		 */
	public function opry_event_next_endpoint() {
		$version   = '2';
		$namespace = 'wp/v' . $version;
		$base      = 'opry-event-detail';

		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'opry_get_next_event' ),
				'permission_callback' => '__return_true',
			),
		);
	}

	/**
	 * Get event Release data.
	 *
	 * @return WP_REST_Response
	 */
	public function opry_get_next_event() {
		$current_date = gmdate( 'Ymd' );

		$event_args = array(
			'post_type'              => 'events',
			'post_status'            => 'publish',
			'posts_per_page'         => 1,
			'no_found_rows'          => true,
			'update_post_meta_cache' => false,
			'meta_query'             => array( // phpcs:ignore
				array(
					'key'     => 'event_date',
					'value'   => $current_date,
					'compare' => '>=',
					'type'    => 'DATE',
				),
			),
			'orderby'                => 'meta_value',
			'meta_key'               => 'event_date', // phpcs:ignore
			'order'                  => 'ASC',
		);

		$event     = new WP_Query( $event_args );
		$event_arr = array();

		if ( $event->have_posts() ) {
			foreach ( $event->posts as $post ) {
				$event_date     = get_field( 'event_date', $post->ID );
				$date           = DateTime::createFromFormat( 'M d Y g:i a', $event_date );
				$formatted_date = $date->format( 'M d l g:i A' );
				$event_venue    = get_field( 'event_venue', $post->ID );
				$event_link     = esc_url( get_permalink( $post->ID ) );
				$artist_details = array();
				$artists        = wp_get_post_terms( $post->ID, 'event-artist' );
				foreach ( $artists as $artist ) {
					$image_url        = get_field( 'artist_image', 'event-artist_' . $artist->term_id );
					$artist_details[] = array(
						'name'      => $artist->name,
						'image_url' => $image_url ? $image_url['url'] : '',
					);
				}
				$event_arr[] = array(
					'value'          => $post->ID,
					'label'          => html_entity_decode( $post->post_title ),
					'eventdate'      => $formatted_date,
					'eventvenue'     => $event_venue,
					'eventlink'      => $event_link,
					'artistcategory' => $artist_details,
				);
			}
		}
		wp_reset_postdata();

		return rest_ensure_response( $event_arr );
	}

	/**
	 * Render block.
	 *
	 * @param array    $attributes   Block attributes.
	 * @param string   $content      Block content.
	 * @param WP_Block $block        Block object.
	 * @return string
	 */
	public function render_callback(
		// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		array $attributes,
		string $content,
		WP_Block $block
		// phpcs:enable
	): string {

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		// attributes.
		$block_id     = isset( $attributes['blockID'] ) ? $attributes['blockID'] : '';
		$bg_image     = isset( $attributes['bgImage'] ) ? $attributes['bgImage'] : '';
		$bg_gradient  = isset( $attributes['bgGradient'] ) ? $attributes['bgGradient'] : '';
		$current_date = gmdate( 'Ymd' );

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'id'    => esc_attr( $block_id ),
				'class' => 'opry-recent-event',
				'style' => ( ! empty( $bg_image ) && $bg_image['url'] ) ? 'background-image: url(' . esc_url( $bg_image['url'] ) . ');' : '',
			)
		);

		$cache_key = 'event-list-' . $block_id;

		$query = get_transient( $cache_key );

		if ( false === $query || is_user_logged_in() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) :
			$args = array(
				'post_type'      => 'events',
				'post_status'    => 'publish',
				'posts_per_page' => 1,
				'meta_query'     => array( // phpcs:ignore
					array(
						'key'     => 'event_date',
						'value'   => $current_date,
						'compare' => '>=',
						'type'    => 'DATE',
					),
				),
				'orderby'        => 'meta_value',
				'meta_key'       => 'event_date', // phpcs:ignore
				'order'          => 'ASC',
			);

			/* Query for dispaly posts */
			$query = new WP_query( $args );
			set_transient( $cache_key, $query, 30 * MINUTE_IN_SECONDS );
		endif;

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="opry-event__row">
				<?php
				if ( $query->have_posts() ) {
					while ( $query->have_posts() ) {
						$query->the_post();

						$event_date     = get_field( 'event_date' );
						$date           = DateTime::createFromFormat( 'M d Y g:i a', $event_date );
						$formatted_date = $date->format( 'M d l g:i A' );
						$event_venue    = get_field( 'event_venue' );
						$artist_details = array();
						$artists        = wp_get_post_terms( get_the_ID(), 'event-artist' );

						$artist_names = array();
						foreach ( $artists as $artist ) {
							$artist_names[] = $artist->name;
						}
						$count = count( $artist_names );
						if ( $count > 1 ) {
							// If there is more than one artist.
							$last_artist_name = array_pop( $artist_names );
							$tagline          = 'Featuring ' . implode( ', ', $artist_names ) . ' and ' . $last_artist_name;
						} else {
							// If there is only one artist.
							$tagline = 'Featuring ' . $artist_names[0];
						}

						foreach ( $artists as $artist ) {
							$image_url        = get_field( 'artist_image', 'event-artist_' . $artist->term_id );
							$artist_details[] = array(
								'name'      => $artist->name,
								'image_url' => $image_url ? $image_url['url'] : '',
							);
						}
						?>
							<div class="opry-event__item">
								<div class="event-cards">
									<div class="info">
										<div class="info-inner">
											<?php if ( ! empty( $event_venue ) ) : ?>
												<p class="opry-event__venue"><?php echo esc_html( $event_venue ); ?></p>
											<?php endif; ?>
											<?php if ( ! empty( $event_date ) ) : ?>
												<div class="opry-event__date">
													<p><?php echo esc_html( $formatted_date ); ?></p>
												</div>
											<?php endif; ?>
											<h3 class="opry-event__title">
												<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
											</h3>
											<p class="opry-event-tagline"><?php echo esc_html( $tagline ); ?></p>
											<a class="opry-get-ticket-anchor" href="<?php the_permalink(); ?>"><?php echo esc_html__( 'Get Tickets', 'opry' ); ?></a>
										</div>
									</div>
									</div>
									<div class="event-artist-card">
										<?php
										foreach ( $artist_details as $index => $artist ) {
											if ( $index < 3 ) {
												?>
												<a class="event-artist" href="#" key="<?php echo esc_attr( $index ); ?>">
													<?php if ( ! empty( $artist['image_url'] ) ) : ?>
														<div class="thumb">
															<img src="<?php echo esc_url( $artist['image_url'] ); ?>" alt="<?php echo esc_attr( $artist['name'] ); ?>">
														</div>
													<?php endif; ?>
													<div class="event-artist-name">
														<h4><?php echo esc_html( $artist['name'] ); ?></h4>
													</div>
												</a>
												<?php
											} elseif ( 3 === $index ) {
												?>
												<a href="#" key="<?php echo esc_attr( $index ); ?>" class="event-add-more">
													<h4><?php echo esc_html( '...And More' ); ?></h4>
												</a>
												<?php
											}
										}
										?>
									</div>	
							</div>
						<?php
					}
				} else {
					?>
					<div class="opry-event__item">
						<p><?php echo __( 'No Event Found', 'opry' ); ?></p>
					</div>
					<?php
				}
				?>
			</div>
			<div class="opry-event__overlay" <?php echo ! empty( $bg_gradient ) ? 'style="background:' . esc_attr( $bg_gradient ) . ';"' : ''; ?>></div>
		</div>
		<?php
		return ob_get_clean();
	}
}
