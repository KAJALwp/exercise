/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
	'use strict';

	$('.menu-toggle').click(function () {
		$('header .main-navigation').toggleClass('toggled');
	});

	// responsive menu css
	$('.main-navigation ul.menu>li.menu-item-has-children').on(
		'click',
		function () {
			const windowWidth = $(window).width();
			if (767 > windowWidth) {
				$(this).find('.sub-menu,.children').slideToggle();
				$(this).toggleClass('active-sub');
			}
		}
	);

	// Sticky Header
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 67) {
			$('.opry-header').addClass('fixed-header');
		} else {
			$('.opry-header').removeClass('fixed-header');
		}
	});

	jQuery(document).ready(function ($) {
		$('.header-our-brand-title').click(function () {
			$('.brand-logo-list').slideToggle();
		});
	});

	function addStyles() {
		// Add the custom-styles class to the document body
		document.querySelector('.opry-header').classList.add('custom-styles');
	}

	// Function to remove CSS styles
	function removeStyles() {
		// Remove the custom-styles class from the document body
		document.querySelector('.opry-header').classList.remove('custom-styles');
	}

	document.addEventListener('DOMContentLoaded', function () {
		var elements = document.querySelectorAll('.opry-submenu');

		elements.forEach(function (element) {
			element.addEventListener('mouseover', addStyles);
			element.addEventListener('mouseout', removeStyles);
		});
	});


	$(document).ready(function () {
		// When the search icon is clicked
		$('.header-search-icon').click(function () {
			// Toggle the class 'is-overlay' on search-app
			$('.search-app').toggleClass('active');

			// If search-app is now open
			if ($('.search-app').hasClass('active')) {
				$('.opry-menu').css('display', 'none');
				$('.header-secondary-menu').css('display', 'none');
				$('.header-our-brand').css('display', 'none');
			}
		});

		$('.close-icon').click(function () {
			// Hide the search form
			$('#header-search-form').removeClass('active');
			$('.opry-menu').css('display', 'block');
			$('.header-secondary-menu').css('display', 'block');
			$('.header-our-brand').css('display', 'block');
		});
	});


})(jQuery);
