<?php
/**
 * Registers the opry/show-cards block.
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
 *  Class for the opry/show-cards block.
 */
class Show_Cards extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'show-cards';
	}
}
