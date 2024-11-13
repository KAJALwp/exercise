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
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, Button, GradientPicker, Tooltip, SelectControl } from '@wordpress/components';

import { Fragment, useState, useRef } from '@wordpress/element';
import { backgroundPositions } from '../common';
import classnames from 'classnames';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes, setAttributes, clientId, className,
}) {
	const {
		blockID,
		heading,
		headingColor,
		desc,
		descColor,
		btnText,
		bgColor,
		mediaID,
		mediaURL,
		imageID,
		imageURL,
		imageAlt,
		imageWidth,
		imageHeight,
		bgPosition,
		gradientColor,
		audioID,
		audioURL,
		audioText
	} = attributes;

	setAttributes({ blockID: `footer-audio-${clientId}` });

	const classes = classnames(
		className,
		'footer-audio',
	);

	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleAudio = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

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

	const playIcon = (<svg
		className={isPlaying ? 'playing' : 'paused'}
		width="50px"
		height="50px"
		viewBox="0 0 50 50"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<g id="icon:-play-copy" fill="#FFFFFF" fill-rule="nonzero">
				{!isPlaying ? (
					<g fill="#FFFFFF" fill-rule="nonzero">
						<path id="play-icon-path" d="M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.3726708,40.3726708 C36.265528,44.4798137 30.8074534,46.7391304 25,46.7391304 C19.1925466,46.7391304 13.734472,44.4798137 9.62732919,40.3726708 C5.52018634,36.265528 3.26086957,30.8074534 3.26086957,25 C3.26086957,19.1925466 5.52018634,13.734472 9.62732919,9.62732919 C13.734472,5.52018634 19.1925466,3.26086957 25,3.26086957 C30.8074534,3.26086957 36.265528,5.52018634 40.3726708,9.62732919 C44.4798137,13.734472 46.7391304,19.1925466 46.7391304,25 C46.7391304,30.8074534 44.4798137,36.265528 40.3726708,40.3726708 Z M31.8831522,23.7358101 L22.1005435,17.6480669 C21.6032609,17.3360701 20.9592391,17.3056314 20.4293478,17.5719702 C19.8994565,17.8306992 19.5652174,18.3481574 19.5652174,18.9112736 L19.5652174,31.0867599 C19.5652174,31.6498761 19.8994565,32.1673343 20.4293478,32.4260634 C20.6657609,32.5478182 20.9347826,32.6086957 21.1956522,32.6086957 C21.513587,32.6086957 21.8315217,32.5249892 22.1005435,32.3499666 L31.8831522,26.2622235 C32.3396739,25.9806653 32.6086957,25.5012556 32.6086957,24.9990168 C32.6086957,24.496778 32.3396739,24.0173682 31.8831522,23.7358101 Z M22.826087,28.2608696 L22.826087,21.7391304 L28.2608696,25.0038228 L22.826087,28.2608696 Z"></path>
					</g>
				) : (
					<path id="play-icon-path" d="M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.1118012,40.1118012 C36.0046584,44.2189441 30.5465839,46.4782609 24.7391304,46.4782609 C18.931677,46.4782609 13.4736025,44.2189441 9.36645963,40.1118012 C5.25931677,36.0046584 3,30.5465839 3,24.7391304 C3,18.931677 5.25931677,13.4736025 9.36645963,9.36645963 C13.4736025,5.25931677 18.931677,3 24.7391304,3 C30.5465839,3 36.0046584,5.25931677 40.1118012,9.36645963 C44.2189441,13.4736025 46.4782609,18.931677 46.4782609,24.7391304 C46.4782609,30.5465839 44.2189441,36.0046584 40.1118012,40.1118012 Z M20.5,18 C21.3284271,18 22,18.6715729 22,19.5 L22,29.5 C22,30.3284271 21.3284271,31 20.5,31 C19.6715729,31 19,30.3284271 19,29.5 L19,19.5 C19,18.6715729 19.6715729,18 20.5,18 Z M28.5,18 C29.3284271,18 30,18.6715729 30,19.5 L30,29.5 C30,30.3284271 29.3284271,31 28.5,31 C27.6715729,31 27,30.3284271 27,29.5 L27,19.5 C27,18.6715729 27.6715729,18 28.5,18 Z"></path>
				)}
			</g>
		</g>
	</svg>);

	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
					<PanelBody title={__('Background Settings', 'opry')} initialOpen={false}>
						<GradientPicker
							value={gradientColor}
							onChange={
								(value) => {
									setAttributes({ gradientColor: value });
								}
							}
							gradients={[
								{
									name: __('Box Gradient 1', 'opry'),
									gradient: "linear-gradient(-57deg, #364493 0%, #3b1c3d 100%)",
									slug: 'partner-gradient-1',
								},
								{
									name: __('Box Gradient 2', 'opry'),
									gradient: 'linear-gradient(225deg, #3f51be 0%, #980000 100%)',
									slug: 'partner-gradient-2',
								},
							]}
						/>
						<div className="setting-row">
							<label>{__('Background Image', 'opry')}</label>
							{(!mediaURL) ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={item => {
											setAttributes({
												mediaID: item.id,
												mediaURL: item.url,
											});
										}}
										allowedTypes={['image']}
										value={mediaURL}
										render={({ open }) => (
											<Button
												onClick={open}
												className="button button-large"
											>
												{__('Upload Image', 'opry')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							) : (
								<Fragment>
									<div className="image-preview">
										<img src={mediaURL} alt={__('bg preview', 'opry')} />
									</div>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={item => {
												setAttributes({
													mediaID: item.id,
													mediaURL: item.url,
												});
											}}
											allowedTypes={['image']}
											value={mediaID}
											render={({ open }) => {
												return (
													<Button
														onClick={open}
														className="button is-secondary"
													>
														{__('Edit Image', 'opry')}
													</Button>
												)
											}}
										/>
										<Button
											onClick={() => {
												setAttributes({
													mediaID: '',
													mediaURL: '',
												});
											}}
											className="is-link is-destructive"
										>
											{__('Remove Image', 'opry')}
										</Button>
									</MediaUploadCheck>
								</Fragment>
							)}
						</div>
						<div className="setting-row">
							<SelectControl
								label={__('Background Position', 'opry')}
								value={bgPosition}
								options={backgroundPositions}
								onChange={(value) => { setAttributes({ bgPosition: value }) }}
							/>
						</div>
					</PanelBody>
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
								},
								{
									value: descColor,
									onChange: value => { setAttributes({ descColor: value }) },
									label: __('Description Color', 'opry')
								}
							]}
						/>
					</PanelBody>
					<PanelBody title={__('Audio Settings', 'opry')} initialOpen={false}>
						<div className="setting-row">
							<label>{__('Audio File', 'opry')}</label>
							{(!audioURL) ? (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={item => {
											setAttributes({
												audioID: item.id,
												audioURL: item.url,
											});
										}}
										allowedTypes={['audio']}
										value={audioURL}
										render={({ open }) => (
											<Button
												onClick={open}
												className="button button-large"
											>
												{__('Upload Audio', 'opry')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							) : (
								<Fragment>
									<audio controls>
										<source src={audioURL} type="audio/mpeg" />
										Your browser does not support the audio element.
									</audio>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={item => {
												setAttributes({
													audioID: item.id,
													audioURL: item.url,
												});
											}}
											allowedTypes={['audio']}
											value={audioID}
											render={({ open }) => {
												return (
													<Button
														onClick={open}
														className="button is-secondary"
													>
														{__('Edit Audio', 'opry')}
													</Button>
												)
											}}
										/>
										<Button
											onClick={() => {
												setAttributes({
													audioID: '',
													audioURL: '',
												});
											}}
											className="is-link is-destructive"
										>
											{__('Remove Audio', 'opry')}
										</Button>
									</MediaUploadCheck>
								</Fragment>
							)}
						</div>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} id={blockID} style={blockStyle}>
				<span className='footer-audio-gradiant' style={gradientStyle}></span>
				<div className="container">
					<div className='footer-audio-inner'>
						<div className='footer-audio-inner__first-section'>
							<RichText
								value={heading}
								tagName="h2"
								className="footer-audio__heading"
								placeholder={__('Enter Heading', 'opry')}
								onChange={(heading) => {
									setAttributes({ heading: heading });
								}}
								style={headingStyle}
							/>
							<RichText
								value={desc}
								tagName="p"
								className="footer-audio__desc"
								placeholder={__('Enter Description', 'opry')}
								onChange={(desc) => {
									setAttributes({ desc: desc });
								}}
								style={descStyle}
							/>
						</div>
						<div className='footer-audio-inner__second-section'>
							<div className='footer-audio-player'>
								{audioURL && (
									<audio controls style={{ display: 'none' }}>
										<source src={audioURL} type="audio/mpeg" />
										Your browser does not support the audio element.
									</audio>
								)}
								<Button onClick={toggleAudio}
									className="radio_player"
									title={isPlaying ? __('Pause WSM Radio', 'opry') : __('Play WSM Radio', 'opry')}
									aria-label={isPlaying ? __('Pause WSM Radio', 'opry') : __('Play WSM Radio', 'opry')}
									data-audio-src={audioURL}
									src={audioURL}
									id="play-wsm-radio"
								>{playIcon}
									<RichText
										value={audioText}
										tagName="p"
										placeholder={__('Audio Text', 'opry')}
										onChange={audioText => setAttributes({ audioText })}
									/>
								</Button>
								<audio ref={audioRef} src={audioURL} />
							</div>
							<div className='footer-audio-inner__btn-section'>
								<RichText
									value={btnText}
									tagName="p"
									placeholder={__('Button Text', 'opry')}
									onChange={btnText => setAttributes({ btnText })}
									className="btn-main footer-audio-inner__btn"
								/>
							</div>
						</div>
						<div className='footer-audio-inner__third-section'>
							{imageURL && (
								<div className="image-preview image-controle-visible-hover">
									<div className="image-controls small-icons icon-center-fixed">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={item => {
													setAttributes({
														imageID: item.id,
														imageURL: item.url,
														imageAlt: item.alt,
														imageHeight: item.height,
														imageWidth: item.width
													});
												}}
												allowedTypes={['image']}
												value={imageURL}
												render={({ open }) => {
													return (
														<Tooltip text={__('Edit Image', 'opry')}>
															<i
																className="dashicons dashicons-edit edit-image"
																onClick={open}
															>
															</i>
														</Tooltip>
													)
												}}
											/>
											<Tooltip text={__('Remove Image', 'opry')}>
												<i
													className="dashicons dashicons-no-alt remove-image"
													onClick={() => {
														let toDelete = confirm(__('Are you sure you want to remove this image?', 'opry'));
														if (true === toDelete) {

															setAttributes({
																imageID: "",
																imageURL: "",
																imageAlt: "",
																imageHeight: "",
																imageWidth: ""
															});
														}
													}}
												>
												</i>
											</Tooltip>
										</MediaUploadCheck>
									</div>
									{imageURL && (
										<>
											<img className="footer-audio__img" data-img-id={imageID} src={imageURL} alt={imageAlt} width={imageWidth} height={imageHeight} />
										</>
									)}
								</div>
							)}
							{(!imageURL) && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(item) => {
											setAttributes({
												imageID: item.id,
												imageURL: item.url,
												imageAlt: item.alt,
												imageHeight: item.height,
												imageWidth: item.width
											});
										}}
										allowedTypes={['image']}
										value={imageURL}
										render={({ open }) => (
											<div className="upload-image">
												<Button
													onClick={open}
													className="button"
												>
													{__('Select Image', 'opry')}
												</Button>
											</div>
										)}
									/>
								</MediaUploadCheck>
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment >
	);
}
