jQuery(document).ready(function () {
	var backToTopBtn = document.getElementById('backToTopBtn');

	window.addEventListener('scroll', function () {
		var heroSection = document.querySelector('.opry_video__wrap');

		if (heroSection.getBoundingClientRect().bottom < 0) {
			backToTopBtn.classList.add('is-active');
		} else {
			backToTopBtn.classList.remove('is-active');
		}
	});

	backToTopBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Smooth scrolling behavior
		});
	});
});
