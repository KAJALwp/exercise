// Styles
import '../scss/theme-option.scss';

jQuery(document).ready(function ($) {
	//upload logo button
	$(document).on('click', '.opry_img_upload', function (e) {
		e.preventDefault();
		const currentParent = $(this);
		const customUploader = wp
			.media({
				title: 'Select Image',
				button: {
					text: 'Use This Image',
				},
				multiple: false, // Set this to true to allow multiple files to be selected
			})
			.on('select', function () {
				const attachment = customUploader
					.state()
					.get('selection')
					.first()
					.toJSON();
				currentParent
					.siblings('.opry_img')
					.attr('src', attachment.url);
				currentParent.siblings('.opry_img').attr('width', '250');
				currentParent.siblings('.opry_img').attr('height', '140');
				currentParent.siblings('.opry_img_url').val(attachment.url);
			})
			.open();
	});

	//remove logo button
	$(document).on('click', '.opry_img_remove', function (e) {
		e.preventDefault();
		const currentParent = $(this);
		currentParent.siblings('.opry_img').removeAttr('src');
		currentParent.siblings('.opry_img').removeAttr('width');
		currentParent.siblings('.opry_img').removeAttr('height');
		currentParent.siblings('.opry_img_url').removeAttr('value');
	});

	//color picker custom js.
	$('[class="color-picker"]').wpColorPicker({
		hide: false,
	});
});
