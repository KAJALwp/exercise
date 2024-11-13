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
import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';

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
		desc,
		descColor,
		btnText,
		bgColor,
		mediaURL,
		imageID,
		imageURL,
		imageAlt,
		imageWidth,
		imageHeight,
		bgPosition,
		gradientColor,
		audioURL,
		audioText
	} = attributes;

	const classes = classnames(
		className,
		'footer-audio',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);
	mediaURL && (blockStyle.backgroundImage = `url(${mediaURL})`);
	bgPosition && (blockStyle.backgroundPosition = bgPosition);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const descStyle = {};
	descColor && (descStyle.color = descColor);

	const gradientStyle = {};
	gradientColor && (gradientStyle.background = gradientColor);

	return (
		<div className={classes} id={blockID} style={blockStyle}>
			<span className='footer-audio-gradiant' style={gradientStyle}></span>
			<div className="container">
				<div className='footer-audio-inner'>
					<div className='footer-audio-inner__first-section'>
						{heading && (
							<RichText.Content
								value={heading}
								tagName="h2"
								className="footer-audio__heading"
								style={headingStyle}
							/>
						)}
						{desc && (
							<RichText.Content
								value={desc}
								tagName="h2"
								className="footer-audio__desc"
								style={descStyle}
							/>
						)}
					</div>
					<div className='footer-audio-inner__second-section'>
						<div className="footer-audio-player">
							{audioURL && <Fragment>
								<audio id="audio-block" src={audioURL}></audio>
								<button className="radio_player"
									title={__('Play WSM Radio', 'opry')}
									aria-label={__('Play WSM Radio', 'opry')}
									data-audio-src={audioURL}
									src={audioURL}
									id="play-wsm-radio">
									<svg className='playing' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="play-icon" fill="#FFFFFF" fill-rule="nonzero">
											<path id="play-icon-path" d="M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.3726708,40.3726708 C36.265528,44.4798137 30.8074534,46.7391304 25,46.7391304 C19.1925466,46.7391304 13.734472,44.4798137 9.62732919,40.3726708 C5.52018634,36.265528 3.26086957,30.8074534 3.26086957,25 C3.26086957,19.1925466 5.52018634,13.734472 9.62732919,9.62732919 C13.734472,5.52018634 19.1925466,3.26086957 25,3.26086957 C30.8074534,3.26086957 36.265528,5.52018634 40.3726708,9.62732919 C44.4798137,13.734472 46.7391304,19.1925466 46.7391304,25 C46.7391304,30.8074534 44.4798137,36.265528 40.3726708,40.3726708 Z M31.8831522,23.7358101 L22.1005435,17.6480669 C21.6032609,17.3360701 20.9592391,17.3056314 20.4293478,17.5719702 C19.8994565,17.8306992 19.5652174,18.3481574 19.5652174,18.9112736 L19.5652174,31.0867599 C19.5652174,31.6498761 19.8994565,32.1673343 20.4293478,32.4260634 C20.6657609,32.5478182 20.9347826,32.6086957 21.1956522,32.6086957 C21.513587,32.6086957 21.8315217,32.5249892 22.1005435,32.3499666 L31.8831522,26.2622235 C32.3396739,25.9806653 32.6086957,25.5012556 32.6086957,24.9990168 C32.6086957,24.496778 32.3396739,24.0173682 31.8831522,23.7358101 Z M22.826087,28.2608696 L22.826087,21.7391304 L28.2608696,25.0038228 L22.826087,28.2608696 Z"></path>
										</g>
									</svg>
									{audioText &&
										<RichText.Content
											value={audioText}
											tagName="p"
										/>
									}
								</button>

							</Fragment>
							}
						</div>
						<div className='footer-audio-inner__btn-section'>
							{btnText &&
								<RichText.Content
									value={btnText}
									tagName="p"
									className="btn-main footer-audio-inner__btn"

								/>
							}
						</div>
					</div>
					<div className='footer-audio-inner__third-section'>
						{(imageURL) && (
							<img className="footer-audio__img" data-img-id={imageID} src={imageURL} alt={imageAlt} width={imageWidth} height={imageHeight} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
