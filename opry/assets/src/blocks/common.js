import { __ } from '@wordpress/i18n';

// background image sizes
export const backgroundSizes = (
	[
		{ label: __('Select Background Size', 'opry'), value: '' },
		{ label: __('auto', 'opry'), value: 'auto' },
		{ label: __('cover', 'opry'), value: 'cover' },
		{ label: __('contain', 'opry'), value: 'contain' },
		{ label: __('initial', 'opry'), value: 'initial' },
		{ label: __('inherit', 'opry'), value: 'inherit' }
	]
);

// background image positions
export const backgroundPositions = (
	[
		{ label: __('Select Position', 'opry'), value: '' },
		{ label: __('inherit', 'opry'), value: 'inherit' },
		{ label: __('initial', 'opry'), value: 'initial' },
		{ label: __('bottom', 'opry'), value: 'bottom' },
		{ label: __('center', 'opry'), value: 'center' },
		{ label: __('left', 'opry'), value: 'left' },
		{ label: __('right', 'opry'), value: 'right' },
		{ label: __('top', 'opry'), value: 'top' },
		{ label: __('unset', 'opry'), value: 'unset' },
		{ label: __('center center', 'opry'), value: 'center center' },
		{ label: __('left top', 'opry'), value: 'left top' },
		{ label: __('left center', 'opry'), value: 'left center' },
		{ label: __('left bottom', 'opry'), value: 'left bottom' },
		{ label: __('right top', 'opry'), value: 'right top' },
		{ label: __('right center', 'opry'), value: 'right center' },
		{ label: __('right bottom', 'opry'), value: 'right bottom' },
		{ label: __('center top', 'opry'), value: 'center top' },
		{ label: __('center bottom', 'opry'), value: 'center bottom' },
	]
);

export const backgroundBlendmodes = (
	[
		{ label: __('Normal', 'opry'), value: 'normal' },
		{ label: __('Multiply', 'opry'), value: 'multiply' },
		{ label: __('Screen', 'opry'), value: 'screen' },
		{ label: __('Overlay', 'opry'), value: 'overlay' },
		{ label: __('Darken', 'opry'), value: 'darken' },
		{ label: __('Lighten', 'opry'), value: 'lighten' },
		{ label: __('Color Dodge', 'opry'), value: 'color-dodge' },
		{ label: __('Color Burn', 'opry'), value: 'color-burn' },
		{ label: __('Hard Light', 'opry'), value: 'hard-light' },
		{ label: __('Soft Light', 'opry'), value: 'soft-light' },
		{ label: __('Difference', 'opry'), value: 'difference' },
		{ label: __('Exclusion', 'opry'), value: 'exclusion' },
		{ label: __('Hue', 'opry'), value: 'hue' },
		{ label: __('Saturation', 'opry'), value: 'saturation' },
		{ label: __('Color', 'opry'), value: 'color' },
		{ label: __('Luminosity', 'opry'), value: 'luminosity' },
	]
);