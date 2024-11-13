<?php
/**
 * Registers the opry/opry-venue block.
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

/**
 *  Class for the opry/opry-venue block.
 */
class Opry_Venue extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'opry-venue';
	}
}
