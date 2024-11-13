<?php
/**
 * Registers the opry/insta-blog block.
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
use WP_REST_Request;

/**
 *  Class for the opry/insta-blog block.
 */
class Insta_Blog extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'insta-blog';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_action( 'rest_api_init', array( $this, 'opry_register_instagram_posts_endpoint' ) );
	}

	/**
	 * Register custom API endpoints to fetch Insta Post.
	 *
	 * @since 1.0.0
	 */
	public function opry_register_instagram_posts_endpoint() {
		$version   = '2';
		$namespace = 'wp/v' . $version;
		$base      = 'instagram-posts';

		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'opry_get_instagram_posts' ),
				'permission_callback' => '__return_true',
			),
		);
	}

	/**
	 * Get Instagram Post.
	 *
	 * @param WP_REST_Request $request Request object.
	 * @return WP_REST_Response
	 */
	public function opry_get_instagram_posts( WP_REST_Request $request ) {
		$access_token = $request->get_param( 'accessToken' );

		$response = wp_safe_remote_get( 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=' . $access_token );
		$data     = wp_remote_retrieve_body( $response );
		$posts    = json_decode( $data );

		if ( $posts ) {
			$post_arr = array();
			foreach ( $posts->data as $post ) {
				$post_id   = $post->id;
				$permalink = $post->permalink;
				$media_url = $post->media_url;
				$caption   = isset( $post->caption ) ? $post->caption : '';

				$post_arr[] = array(
					'value'     => $post_id,
					'mediaurl'  => $media_url,
					'caption'   => $caption,
					'permalink' => $permalink,
				);
			}
		} else {
			echo 'No posts found.';
		}
		return rest_ensure_response( $post_arr );
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

		$block_id      = isset( $attributes['blockID'] ) ? $attributes['blockID'] : '';
		$bg_image      = isset( $attributes['bgImage'] ) ? $attributes['bgImage'] : '';
		$bg_color      = isset( $attributes['bgColor'] ) ? $attributes['bgColor'] : '';
		$bg_gradient   = isset( $attributes['bgGradient'] ) ? $attributes['bgGradient'] : '';
		$heading       = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
		$heading_color = isset( $attributes['headingColor'] ) ? $attributes['headingColor'] : '';
		$btn_text      = isset( $attributes['btnText'] ) ? $attributes['btnText'] : '';
		$access_token  = isset( $attributes['accessToken'] ) ? $attributes['accessToken'] : '';

		$background_styles = array();
		if ( ! empty( $bg_image ) && ! empty( $bg_image['url'] ) ) {
			$background_styles[] = 'background-image: url(' . esc_url( $bg_image['url'] ) . ');';
		}
		if ( ! empty( $bg_color ) ) {
			$background_styles[] = 'background-color: ' . esc_attr( $bg_color ) . ';';
		}

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'id'    => esc_attr( $block_id ),
				'class' => 'insta-blog',
				'style' => implode( ' ', $background_styles ),
			)
		);

		$overlay_styles = '';
		if ( ! empty( $bg_gradient ) ) {
			$overlay_styles = 'background:' . esc_attr( $bg_gradient ) . ';';
		}

		// Generate cache key based on the block ID.
		$cache_key = 'insta-blog-' . md5( $block_id );

		// Attempt to get cached posts.
		$posts = get_transient( $cache_key );

		// If cache miss or cache expired, fetch new posts.
		if ( false === $posts || is_user_logged_in() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
			// Fetch Instagram posts based on the access token.
			$posts = array();
			if ( $access_token ) {
				$response = wp_safe_remote_get( "https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=$access_token" );
				if ( 200 === $response['response']['code'] && ! is_wp_error( $response ) ) {
					$body = wp_remote_retrieve_body( $response );
					$data = json_decode( $body, true );
					if ( isset( $data['data'] ) && is_array( $data['data'] ) ) {
						$posts = $data['data'];
					}
					// Cache the posts for 30 min.
					set_transient( $cache_key, $posts, 30 * MINUTE_IN_SECONDS );
				}
			}
		}
		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="container">
				<div class="insta-blog__head">
					<?php if ( ! empty( $heading ) ) : ?>
						<h2 class="insta-blog-inner__header" <?php echo ! empty( $heading_color ) ? 'style="color:' . esc_attr( $heading_color ) . ';"' : ''; ?>><?php echo wp_kses_post( $heading ); ?></h2>
					<?php endif; ?>
					<?php if ( ! empty( $btn_text ) ) : ?>
						<p class="btn-main insta-blog-inner__btn"><?php echo wp_kses_post( $btn_text ); ?></p>
					<?php endif; ?>
				</div>
				<div class="insta-blog-inner__row">
					<?php if ( ! empty( $posts ) ) : ?>
						<?php foreach ( $posts as $post ) : ?>
							<div class="insta-blog__item">
								<a href="<?php echo esc_url( $post['permalink'] ); ?>" target="_blank" rel="noopener noreferrer">
									<img src="<?php echo esc_url( $post['media_url'] ); ?>" alt="<?php echo esc_attr( $post['caption'] ); ?>">
								</a>
								<p><?php echo wp_kses_post( $post['caption'] ); ?></p>
							</div>
						<?php endforeach; ?>
					<?php else : ?>
						<p><?php echo esc_html__( 'No Instagram posts found.', 'opry' ); ?></p>
					<?php endif; ?>
				</div>
			</div>
			<div class="insta-blog__overlay" style="<?php echo esc_attr( $overlay_styles ); ?>"></div>
		</div>
		<?php
		$html = ob_get_clean();
		return $html;
	}
}
