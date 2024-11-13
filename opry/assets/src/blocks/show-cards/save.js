/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import { RichText } from '@wordpress/block-editor';
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
		boxList,
		bgMediaURL,
		bgColor,
		bgPosition,
		gradientColor,
		headingColor,
	} = attributes;

	const classes = classnames(
		className,
		'show-program-card',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);
	bgMediaURL && (blockStyle.backgroundImage = `url(${bgMediaURL})`);
	bgPosition && (blockStyle.backgroundPosition = bgPosition);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const gradientStyle = {};
	gradientColor && (gradientStyle.background = gradientColor);

	return (
		<div className={classes} id={blockID} style={blockStyle}>
			<span className='show-program-gradiant' style={gradientStyle}></span>
			<div className={`show-program-card__row`}>
				{boxList.map((box, index) => {
					const detailClass = classnames(
						'show-program-card__detail-item'
					);
					const boxStyle = {};
					box.boxBgPosition && (boxStyle.backgroundPosition = box.boxBgPosition);

					return (
						(box.title || box.description || box.mediaURL) && (
							<a key={index} className={detailClass} href={box.boxlink} target={box.boxlinkTarget ? '_blank' : false} style={boxStyle} rel="noopener">
								{box.mediaURL &&
									<img className='show-program-card__img' src={box.mediaURL} />
								}
								<span className='show-program-card__gradient' data-bg-img={box.mediaURL} ></span>
								<div className="show-program-card__box">
									<div className="show-program-card__cnt">
										{box.title && (
											<RichText.Content
												value={box.title}
												tagName="h3"
												style={headingStyle}
												className='show-program-card__title'
											/>
										)}
										{box.buttonText && (
											<div className="btn-main-border btn-secondary-gradient-blue-1 btn-has-right-arrow">
												<RichText.Content
													value={box.buttonText}
													className="btn-main show-program-card__btn-one"
													tagName="p"
												/>
											</div>
										)}
									</div>
								</div>
							</a>
						)
					)
				})}
			</div>
		</div>
	);
}
