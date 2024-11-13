/**
 * Newsletter block.
 *
 * Handles Newsletter block.
 */
(function ($) {
	'use strict';

	showMsg();

	function showMsg() {
		$.noConflict();
		document.addEventListener('DOMContentLoaded', function () {
			var mc4wpResponse = document.querySelector('.mc4wp-response');
			var heading = document.querySelector('.newsletter__header');
			if (mc4wpResponse.innerHTML.trim() !== '') {
				heading.style.display = 'none';
			} else {
				heading.style.display = 'block';
			}
		})
	}
})(jQuery);