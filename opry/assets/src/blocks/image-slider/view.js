/**
 * image Slider
 *
 * @param $
 */
(function ($) {
	'use strict';

	function initSlick() {
		jQuery.noConflict();
		jQuery(document).ready(function ($) {
			const autoplay = jQuery('.opry-image-slider').attr(
				'data-slide-autoplay'
			),
				arrows = jQuery('.opry-image-slider').attr(
					'data-slide-arrows'
				),
				dots = jQuery('.opry-image-slider').attr(
					'data-slide-dots'
				),
				slideInfinite = jQuery('.opry-image-slider').attr(
					'data-slide-infinite'
				);

			const sliderObj = $('.opry-image-slider')
				.not('.slick-initialized')
				.slick({
					autoplay: 'true' === autoplay ? true : false,
					arrows: 'true' === arrows ? true : false,
					dots: 'true' === dots ? true : false,
					touchMove: true,
					centerMode: false,
					infinite: 'true' === slideInfinite ? true : false,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 100,
				});
		});
	}

	initSlick();
})(jQuery);
