/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import { RichText, InspectorControls, PanelColorSettings, InnerBlocks } from '@wordpress/block-editor';
/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import classnames from 'classnames';
import "./editor.scss";
import { Fragment } from 'react';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId, className }) {
	const {
		blockID,
		heading,
		headingColor,
		bgColor,
	} = attributes;

	if (!blockID) {
		setAttributes({ blockID: `newsletter-${clientId}` });
	}

	const classes = classnames(
		className,
		'newsletter',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
					<PanelBody title={__('Color Settings', 'opry')} initialOpen={false}>
						<PanelColorSettings
							title={__('Colors', 'opry')}
							colorSettings={[
								{
									value: bgColor,
									onChange: value => { setAttributes({ bgColor: value }) },
									label: __('Background Color', 'opry')
								},
								{
									value: headingColor,
									onChange: value => { setAttributes({ headingColor: value }) },
									label: __('Heading Color', 'opry')
								}
							]}
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} id={blockID} style={blockStyle}>
				<div className='newsletter-row'>
					<RichText
						value={heading}
						tagName="h4"
						placeholder={__('Enter Heading', 'opry')}
						onChange={heading => setAttributes({ heading })}
						className="newsletter__header"
						style={headingStyle}
					/>

					<div className='newsletter-form'>
						<InnerBlocks allowedBlocks={['mailchimp-for-wp/form']}></InnerBlocks>
					</div>
				</div>
			</div>
		</Fragment>
	)
}