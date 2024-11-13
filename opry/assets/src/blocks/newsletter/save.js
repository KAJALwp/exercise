/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	const { attributes, className } = props;
	const {
		blockID,
		heading,
		headingColor,
		bgColor,
	} = attributes;

	const classes = classnames(
		className,
		'newsletter',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	return (
		<div className={classes} id={blockID} style={blockStyle}>
			<div className='newsletter-row'>
				{heading && (
					<RichText.Content
						value={heading}
						tagName="h4"
						className="newsletter__header"
						style={headingStyle}
					/>
				)}
				<div className='newsletter-form'>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	)
}
