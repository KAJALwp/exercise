/**
 * File custom-video-button.js.
 *
 * Handles video play button for different blocks.
 */
(function ($) {
	'use strict';

	$(document).on('click', '.opry_video__play', function () {
		var _this = $(this),
			videoId = _this.attr('data-id') || '',
			parentObj = _this.parents('.opry_video__wrap');
		if ('' != videoId) {
			if (!parentObj.hasClass('active')) {
				parentObj.addClass('active');
				$('#' + videoId).trigger('play');
			} else {
				parentObj.removeClass('active');
				$('#' + videoId).trigger('pause');
			}
		}
		return false;
	});

	jQuery(window).on('scroll', function () {
		var videoWraps = jQuery('.opry_video__wrap');

		videoWraps.each(function () {
			var videoWrap = jQuery(this);
			if (isInView(videoWrap)) {
				setTimeout(function () {
					videoWrap.addClass('active');
					videoWrap.find('video').trigger('play');
				}, 1000); // 1 seconds timeout.
			} else {
				videoWrap.removeClass('active');
				videoWrap.find('video').trigger('pause');
			}
		});
	});

	// Function to check if an element is in view
	function isInView(element) {
		var elementTop = element.offset().top;
		var elementBottom = elementTop + element.outerHeight();
		var viewportTop = jQuery(window).scrollTop();
		var viewportBottom = viewportTop + jQuery(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	}


})(jQuery);