/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

export default function Save({ attributes, className }) {
	const {
		blockID,
		headingColor,
		titleColor,
		descColor,
		bgColor,
		imageID,
		imageURL,
		imageAlt,
		imageWidth,
		imageHeight,
		telNum,
		venue,
		logos,
	} = attributes;

	const classes = classnames(
		className,
		'footer-opry-venue-info',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const descStyle = {};
	descColor && (descStyle.color = descColor);

	const titleStyle = {};
	titleColor && (titleStyle.color = titleColor);

	return (
		<div className={classes} id={blockID} style={blockStyle}>
			<div className='footer-opry-venue-info__first-section opry-footer-bottom'>
				{imageURL && (
					<a className='footer-logo__href' href='/'>
						<img className="footer-logo__img" data-img-id={imageID} src={imageURL} alt={imageAlt} width={imageWidth} height={imageHeight} />
					</a>
				)}
				<div className="social-links">
					<InnerBlocks.Content />
				</div>

				<RichText.Content
					value={telNum}
					tagName="p"
					className="phone-container"
				/>
			</div>
			<div className='footer-opry-venue-info__second-section opry-footer-bottom'>
				<div className="footer-opry-venue__row">
					{venue.map((detail, index) => {
						return (
							<div key={index} className={`footer-opry-venue__item show-items-hover-wrap`}>
								<div className={`footer-opry-venue__card`}>
									{detail.heading &&
										<RichText.Content
											value={detail.heading}
											tagName="h4"
											style={headingStyle}
											className='footer-opry-venue-card__heading'
										/>
									}
									{detail.title &&
										<RichText.Content
											value={detail.title}
											tagName="p"
											style={titleStyle}
											className='footer-opry-venue-card__title'
										/>
									}
									{detail.desc &&
										<RichText.Content
											value={detail.desc}
											tagName="p"
											style={descStyle}
											className='footer-opry-venue-card__description'
										/>
									}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='footer-opry-venue-info__third-section opry-footer-bottom contact-btn'>
				<div className="footer-opry-venue-logos__row">
					{logos.map((executiveData, index) => {
						return (
							<div key={index} className={`footer-opry-venue-logos__item`}>
								<div className={`footer-opry-venue-logos__left`}>
									{executiveData.logoURL && (
										executiveData.logolink ? (
											<a href={executiveData.logolink} target={executiveData.logolinkTarget ? '_blank' : false} rel="noopener">
												<img className="footer-opry-venue-logos__img" data-img-id={executiveData.logoID} src={executiveData.logoURL} alt={executiveData.logoAlt} width={executiveData.logoWidth} height={executiveData.logoHeight} />
											</a>
										) : (
											<img className="footer-opry-venue-logos__img" data-img-id={executiveData.logoID} src={executiveData.logoURL} alt={executiveData.logoAlt} width={executiveData.logoWidth} height={executiveData.logoHeight} />
										)
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	)
}
