<?php
/**
 * Registers the opry/hero-banner block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package opry
 */

namespace OPRY\Blocks;

use OPRY\Includes\Block_Base;

/**
 * hero-banner class.
 */
class Hero_Banner extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'hero-banner';

	}
}
