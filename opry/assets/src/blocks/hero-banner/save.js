/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';

/**
  * React hook that is used to mark the packages element.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
*/
import { Fragment } from '@wordpress/element';
import {
	RichText,
} from '@wordpress/block-editor';

import classnames from "classnames";

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
		mediaType,
		mediaMime,
		mediaURL,
		mediaAlt,
		mediaWidth,
		mediaHeight,
		mediaCaption,
		showMediaCaption,
		videoPoster,
		videoAutplay,
		videoLoop,
		videoMuted,
		mediaAlign,
		heading,
		headingColor,
		btnOneText,
		btnTwoText
	} = attributes;

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const classes = classnames(
		className,
		'media',
		'align-' + mediaAlign,
	);
	return (
		<div className={classes} id={blockID}>
			<div className="container">
				<div className="media__body">
					{(mediaURL) && (
						<div className={'media__image'}>
							{'video' === mediaType ? (
								<Fragment>
									<div className="opry_video__wrap active">
										<video width={mediaWidth ? mediaWidth : 500} height={mediaHeight ? mediaHeight : 500} id={'video-' + blockID} controls={false} autoPlay={videoAutplay} loop={videoLoop} muted={videoMuted} poster={videoPoster ? videoPoster : false} playsinline preload="metadata">
											<source src={mediaURL} type={mediaMime}></source>
										</video>
										<a href="javascript:void(0);" data-id={'video-' + blockID} className="opry_video__play"></a>
									</div>
									<div className='panel_text'>
										<div className='item-body-heading'>
											{heading &&
												<RichText.Content
													tagName="h2"
													value={heading}
													style={headingStyle}
													className="hero-banner__title"
												/>
											}
										</div>
										<div className='btn-group'>
											{btnOneText &&
												<RichText.Content
													value={btnOneText}
													tagName="p"
													className="btn-main hero-banner__btn-one"
												/>
											}
											{btnTwoText &&
												<RichText.Content
													value={btnTwoText}
													tagName="p"
													className="btn-main hero-banner__btn-two"
												/>
											}
										</div>
									</div>
									{(showMediaCaption && mediaCaption) && <figcaption className="opry-img-caption">{mediaCaption}</figcaption>}
								</Fragment>
							) : (
								<Fragment>
									<img width={mediaWidth ? mediaWidth : 500} height={mediaHeight ? mediaHeight : 450} src={mediaURL} alt={mediaAlt ? mediaAlt : 'Thumbnail'} />
									{(showMediaCaption && mediaCaption) && <figcaption className="opry-img-caption">{mediaCaption}</figcaption>}
								</Fragment>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
