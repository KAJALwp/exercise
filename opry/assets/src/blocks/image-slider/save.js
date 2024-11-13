import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
export default function save(props) {
	const { attributes, className } = props;
	const {
		blockID,
		autoplay,
		arrows,
		dots,
		slideInfinite,
		repeatItems,
		bgColor,
		bgMediaURL,
		bgPosition,
		gradientColor
	} = attributes;

	const classes = classnames(
		className,
		'opry-media-slider',
	);

	const blockStyle = {};
	bgColor && (blockStyle.backgroundColor = bgColor);
	bgMediaURL && (blockStyle.backgroundImage = `url(${bgMediaURL})`);
	bgPosition && (blockStyle.backgroundPosition = bgPosition);

	const gradientStyle = {};
	gradientColor && (gradientStyle.background = gradientColor);

	return (
		<div {...useBlockProps.save()} className={classes} id={blockID} style={blockStyle} >
			<span className='show-image-gradiant' style={gradientStyle}></span>
			<div className="opry-image-container">
				<div
					className="opry-image-slider"
					data-slide-autoplay={autoplay}
					data-slide-arrows={arrows}
					data-slide-dots={dots}
					data-slide-infinite={slideInfinite}
				>
					{repeatItems.map((data, index) => (
						data.imageURL && (
							<div className={'image-slider-item'} key={index} >

								<div className="image-slider-content">
									<div className="image-slider-image">
										<img
											src={data.imageURL}
											alt={data.imageAlt}
											width={data.imageWidth}
											height={data.imageHeight}
										/>
									</div>
								</div>

							</div>
						)
					))}
				</div>
			</div>
		</div>
	);
}
