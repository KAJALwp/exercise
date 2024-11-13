<?php
/**
 * Registers the opry/upcoming-event block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package opry
 */

namespace opry\Blocks;

use opry\Includes\Block_Base;
use WP_Block;
use WP_Query;
use WP_REST_Request;
use DateTime;

/**
 *  Class for the opry/upcoming-event block.
 */
class Upcoming_Event extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'upcoming-event';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_action( 'rest_api_init', array( $this, 'opry_upcoming_event_list_endpoint' ) );
	}

	/**
	 * Register custom API endpoints to fetch event data.
	 *
	 * @since 1.0.0
	 */
	public function opry_upcoming_event_list_endpoint() {
		$version   = '2';
		$namespace = 'wp/v' . $version;
		$base      = 'upcoming-event-list';

		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'opry_get_upcoming_event' ),
				'permission_callback' => '__return_true',
			),
		);
	}

	/**
	 * Get event Release data.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response
	 */
	public function opry_get_upcoming_event( WP_REST_Request $request ) {
		$limit        = $request->get_param( 'limit' );
		$current_date = gmdate( 'Ymd' );

		$args = array(
			'post_type'              => 'events',
			'post_status'            => 'publish',
			'posts_per_page'         => ! empty( $limit ) ? $limit : 10,
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

		$event     = new WP_Query( $args );
		$event_arr = array();

		if ( $event->have_posts() ) {
			foreach ( $event->posts as $post ) {
				$event_ticket_status = get_field( 'event_ticket_status', $post->ID );
				$event_date          = get_field( 'event_date', $post->ID );
				$date                = DateTime::createFromFormat( 'M d Y g:i a', $event_date );
				$formatted_date      = $date->format( 'M d l g:i A' );
				$event_venue         = get_field( 'event_venue', $post->ID );
				$event_dates         = explode( ' ', $formatted_date );
				$event_month         = $event_dates[0];
				$event_day           = $event_dates[1];
				$event_day_name      = $event_dates[2];
				$event_link          = esc_url( get_permalink( $post->ID ) );
				$artist_category     = wp_get_post_terms( $post->ID, 'event-artist', array( 'fields' => 'names' ) );
				$event_arr[]         = array(
					'value'             => $post->ID,
					'label'             => html_entity_decode( $post->post_title ),
					'eventdate'         => $event_date,
					'eventmonth'        => $event_month,
					'eventday'          => $event_day,
					'eventdayname'      => $event_day_name,
					'eventticketstatus' => $event_ticket_status,
					'eventvenue'        => $event_venue,
					'eventlink'         => $event_link,
					'artistcategory'    => $artist_category,
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
		$block_id      = isset( $attributes['blockID'] ) ? $attributes['blockID'] : '';
		$bg_image      = isset( $attributes['bgImage'] ) ? $attributes['bgImage'] : '';
		$bg_gradient   = isset( $attributes['bgGradient'] ) ? $attributes['bgGradient'] : '';
		$heading       = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
		$heading_color = isset( $attributes['headingColor'] ) ? $attributes['headingColor'] : '';
		$no_of_event   = isset( $attributes['noOfEvent'] ) ? $attributes['noOfEvent'] : '10';
		$view_all      = isset( $attributes['viewAll'] ) ? $attributes['viewAll'] : '';
		$current_date  = gmdate( 'Ymd' );

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'id'    => esc_attr( $block_id ),
				'class' => 'upcoming-event',
				'style' => ( ! empty( $bg_image ) && $bg_image['url'] ) ? 'background-image: url(' . esc_url( $bg_image['url'] ) . ');' : '',
			)
		);

		$cache_key = 'event-list-' . $no_of_event;

		$query = get_transient( $cache_key );

		if ( false === $query || is_user_logged_in() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) :
			$args = array(
				'post_type'      => 'events',
				'post_status'    => 'publish',
				'posts_per_page' => $no_of_event,
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
			<div class="container">
				<div class="upcoming-event-wrapper">
					<div class="upcoming-event__head">
						<?php if ( ! empty( $heading ) ) : ?>
							<h2 <?php echo ! empty( $heading_color ) ? 'style="color:' . esc_attr( $heading_color ) . ';"' : ''; ?>><?php echo wp_kses_post( $heading ); ?></h2>
						<?php endif; ?>
						<?php if ( ! empty( $view_all ) ) : ?>
							<p class="upcoming-event__event-view btn-main"><?php echo wp_kses_post( $view_all ); ?></p>
						<?php endif; ?>
					</div>
					<div class="upcoming-event__row">
						<?php
						if ( $query->have_posts() ) {
							while ( $query->have_posts() ) {
								$query->the_post();

								$event_ticket_status = get_field( 'event_ticket_status' );
								$event_date          = get_field( 'event_date' );
								$date                = DateTime::createFromFormat( 'M d Y g:i a', $event_date );
								$formatted_date      = $date->format( 'M d l g:i A' );
								$event_dates         = explode( ' ', $formatted_date );
								$event_month         = $event_dates[0];
								$event_day           = $event_dates[1];
								$event_day_name      = $event_dates[2];
								$event_venue         = get_field( 'event_venue' );
								$artist_category     = wp_get_post_terms( get_the_ID(), 'event-artist', array( 'fields' => 'names' ) );
								?>
									<div class="upcoming-event__item">
										<?php if ( ! empty( $event_date ) ) : ?>
											<div class="upcoming-event__date">
												<p><?php echo esc_html( $event_month ); ?></p>
												<p><?php echo esc_html( $event_day ); ?></p>
												<p><?php echo esc_html( $event_day_name ); ?></p>
											</div>
										<?php endif; ?>
										<div class="upcoming-event__venue-title-wrapper">
											<?php if ( ! empty( $event_venue ) ) : ?>
												<p class="upcoming-event__venue"><?php echo esc_html( $event_venue ); ?></p>
											<?php endif; ?>
											<h3 class="upcoming-event__title">
												<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
											</h3>
											<?php if ( ! empty( $event_ticket_status ) ) : ?>
												<h4 class="upcoming-event__tagline"><?php echo esc_html( $event_ticket_status ); ?></h4>
											<?php endif; ?>
										</div>
										<div id="eventPopup_<?php echo get_the_ID(); ?>" class="eventPopup" style="display: none;">
											<div class="modal-top">
												<div class="modal-event-date">
													<p><?php echo esc_html( $event_month ); ?></p>
													<p><?php echo esc_html( $event_day ); ?></p>
													<p><?php echo esc_html( $event_day_name ); ?></p>
												</div>
												<p class="location"><?php echo esc_html( $event_venue ); ?></p>
												<h3 class="upcoming-event__title">
													<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
												</h3>
											</div>
											<div class="modal-bottom">
												<div class="info">
													<div class="event-teaser">
														<?php echo wp_kses_post( the_content( '...', 15 ) ); ?>
													</div>
													<div class="event-button">
														<a class="ticket" href="<?php the_permalink(); ?>"><?php echo esc_html( 'Get Tickets' ); ?></a>
													</div>
												</div>
												<div class="event_item_artists">
													<ul>
														<?php foreach ( $artist_category as $artist ) { ?>
															<li><a href=""><?php echo esc_html( $artist ); ?></a></li>
														<?php } ?>
													</ul>
												</div>
												<div class="close-modal">
													<svg class="icn_close" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
														<g stroke="none" stroke-width="1" fill-rule="evenodd">
															<g fill-rule="nonzero">
																<path d="M0.406091371,14.6199324 C0.659898477,14.8733108 0.989847716,15 1.29441624,15 C1.59898477,15 1.95431472,14.8733108 2.18274112,14.6199324 L7.51269036,9.29898649 L12.8426396,14.6199324 C13.0964467,14.8733108 13.4263959,15 13.7309645,15 C14.035533,15 14.3908629,14.8733108 14.6192893,14.6199324 C15.1269036,14.1131757 15.1269036,13.3277027 14.6192893,12.8209459 L9.2893401,7.5 L14.6192893,2.17905405 C15.1269036,1.6722973 15.1269036,0.886824324 14.6192893,0.380067568 C14.1116751,-0.126689189 13.3248731,-0.126689189 12.8172589,0.380067568 L7.48730964,5.70101351 L2.18274112,0.430743243 C1.6751269,-0.0760135135 0.888324873,-0.0760135135 0.38071066,0.430743243 C-0.126903553,0.9375 -0.126903553,1.72297297 0.38071066,2.22972973 L5.7106599,7.55067568 L0.406091371,12.8462838 C-0.101522843,13.3277027 -0.101522843,14.1385135 0.406091371,14.6199324 Z"></path>
															</g>
														</g>
													</svg>
												</div>
											</div>
										</div>
									</div>
								<?php
							}
						} else {
							?>
							<div class="upcoming-event__item">
								<p><?php echo __( 'No Upcoming Event Found', 'opry' ); ?></p>
							</div>
							<?php
						}
						?>
					</div>
				</div>
			</div>
			<div class="upcoming-event__overlay" <?php echo ! empty( $bg_gradient ) ? 'style="background:' . esc_attr( $bg_gradient ) . ';"' : ''; ?>></div>
		</div>
		<?php
		wp_reset_postdata();
		$html = ob_get_clean();
		return $html;
	}
}
