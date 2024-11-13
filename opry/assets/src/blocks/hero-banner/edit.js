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
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
} from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	Button,
	Tooltip,
	ToggleControl,
} from '@wordpress/components';

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { Fragment, useEffect } from '@wordpress/element';

import { leftAlign, centerAlign, rightAlign } from '../icons';
import classnames from 'classnames';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @param  root0.clientId
 * @param  root0.className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes,
	setAttributes,
	clientId,
	className,
}) {
	const {
		blockID,
		mediaType,
		mediaMime,
		mediaID,
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

	if (!blockID) {
		setAttributes({ blockID: `media-${clientId}` });
	}

	// Update the video source when mediaURL changes.
	useEffect(() => {
		if (mediaURL) {
			const videoElement = document.getElementById('video-' + blockID);
			if (videoElement) {
				videoElement.src = mediaURL;
			}
		}
	}, [mediaURL]);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const classes = classnames(className, 'media', 'align-' + mediaAlign);
	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
					<PanelBody
						title={__('Settings', 'opry')}
						initialOpen={true}
					>
						<ToggleControl
							label={__('Show Media Caption', 'opry')}
							checked={showMediaCaption}
							onChange={(showMediaCaption) =>
								setAttributes({ showMediaCaption })
							}
						/>
						<div className="inspector-field inspector-field-alignment">
							<label className="inspector-mb-0">
								{__('Media Alignment', 'opry')}
							</label>
							<div className="inspector-field-button-list inspector-field-button-list-fluid">
								<button
									className={
										'left' === mediaAlign
											? 'active inspector-button'
											: ' inspector-button'
									}
									onClick={() =>
										setAttributes({
											mediaAlign: 'left',
										})
									}
								>
									{leftAlign}
								</button>
								<button
									className={
										'center' === mediaAlign
											? 'active inspector-button'
											: ' inspector-button'
									}
									onClick={() =>
										setAttributes({
											mediaAlign: 'center',
										})
									}
								>
									{centerAlign}
								</button>
								<button
									className={
										'right' === mediaAlign
											? 'active inspector-button'
											: ' inspector-button'
									}
									onClick={() =>
										setAttributes({
											mediaAlign: 'right',
										})
									}
								>
									{rightAlign}
								</button>
							</div>
						</div>
					</PanelBody>
					{'video' === mediaType && (
						<PanelBody
							title={__('Column Video Settings', 'opry')}
							initialOpen={false}
						>
							<div className="setting-row">
								<label>
									{__('Poster Image', 'opry')}
								</label>
								<div>
									{!videoPoster ? (
										<MediaUpload
											onSelect={(item) => {
												setAttributes({
													videoPoster: item.url,
												});
											}}
											type="image"
											value={videoPoster}
											render={({ open }) => (
												<Button
													onClick={open}
													className="button button-large"
												>
													{__(
														'Upload Image',
														'opry'
													)}
												</Button>
											)}
										/>
									) : (
										<Fragment>
											<div className="image-preview">
												<img
													src={videoPoster}
													alt="video cover"
												/>
											</div>
											<Button
												onClick={() => {
													setAttributes({
														videoPoster: '',
													});
												}}
												className="is-link is-destructive"
											>
												{__(
													'Remove Image',
													'opry'
												)}
											</Button>
										</Fragment>
									)}
								</div>
							</div>
							<ToggleControl
								label={__('Autoplay', 'opry')}
								checked={videoAutplay}
								onChange={(videoAutplay) => {
									setAttributes({ videoAutplay });
								}}
							/>
							<ToggleControl
								label={__('Loop', 'opry')}
								checked={videoLoop}
								onChange={(videoLoop) => {
									setAttributes({ videoLoop });
								}}
							/>
							<ToggleControl
								label={__('Muted', 'opry')}
								checked={videoMuted}
								onChange={(videoMuted) => {
									setAttributes({ videoMuted });
								}}
							/>
						</PanelBody>
					)}
					<PanelBody title={__('Color Settings', 'opry')} initialOpen={false}>
						<PanelColorSettings
							title={__('Colors', 'opry')}
							colorSettings={[
								{
									value: headingColor,
									onChange: value => { setAttributes({ headingColor: value }) },
									label: __('Heading Color', 'opry')
								},
							]}
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} id={blockID}>
				<div className="container">
					<div className="media__body">
						{mediaURL && (
							<div className="opry-block-control image-preview image-controle-visible-hover">
								<div className="image-controls icon-center-fixed">
									<MediaUploadCheck>
										<MediaUpload
											onSelect={(item) => {
												setAttributes({
													mediaID: item.id,
													mediaURL: item.url,
													mediaAlt: item.alt,
													mediaWidth: item.width,
													mediaHeight: item.height,
													mediaType: item.type,
													mediaMime: item.mime,
													mediaCaption: item.caption,
												});
											}}
											allowedTypes={[
												'image',
												'video',
											]}
											value={mediaID}
											render={({ open }) => {
												return (
													<Tooltip
														text={__(
															'Edit Media',
															'opry'
														)}
													>
														<i
															className="dashicons dashicons-edit edit-image"
															onClick={open}
														></i>
													</Tooltip>
												);
											}}
										/>
									</MediaUploadCheck>
									<Tooltip
										text={__(
											'Remove Media',
											'opry'
										)}
									>
										<i
											className="dashicons dashicons-no-alt remove-image"
											onClick={() => {
												setAttributes({
													mediaID: '',
													mediaURL: '',
													mediaAlt: '',
													mediaWidth: '',
													mediaHeight: '',
													mediaType: '',
													mediaMime: '',
													mediaCaption: '',
												});
											}}
										></i>
									</Tooltip>
								</div>
								{'video' === mediaType ? (
									<Fragment>
										<div className="opry_video__wrap active">
											<video
												width={
													mediaWidth
														? mediaWidth
														: 500
												}
												height={
													mediaHeight
														? mediaHeight
														: 500
												}
												id={'video-' + blockID}
												controls={false}
												autoPlay={videoAutplay}
												loop={videoLoop}
												muted={videoMuted}
												poster={
													videoPoster
														? videoPoster
														: false
												}
												playsinline

											>
												<source
													src={mediaURL}
													type={mediaMime}
												></source>
											</video>
											<a
												href="javascript:void(0);"
												data-id={
													'video-' + blockID
												}
												className="opry_video__play"
											></a>
										</div>
										<div className='panel_text'>
											<div className='item-body-heading'>
												<RichText
													value={heading}
													tagName="h2"
													placeholder={__('Enter Heading', 'opry')}
													onChange={heading => setAttributes({ heading })}
													style={headingStyle}
													className="hero-banner__title"
												/>
											</div>
											<div className='btn-group'>
												<RichText
													value={btnOneText}
													tagName="p"
													placeholder={__('Button One Text', 'opry')}
													onChange={btnOneText => setAttributes({ btnOneText })}
													className="btn-main hero-banner__btn-one"
												/>
												<RichText
													value={btnTwoText}
													tagName="p"
													placeholder={__('Button Two Text', 'opry')}
													onChange={btnTwoText => setAttributes({ btnTwoText })}
													className="btn-main hero-banner__btn-two"
												/>
											</div>
										</div>
										{showMediaCaption && mediaCaption && (
											<figcaption className="opry-img-caption">
												{mediaCaption}
											</figcaption>
										)}
									</Fragment>
								) : (
									<Fragment>
										<img
											width={
												mediaWidth ? mediaWidth : 500
											}
											height={
												mediaHeight ? mediaHeight : 450
											}
											src={mediaURL}
											alt={
												mediaAlt
													? mediaAlt
													: 'Thumbnail'
											}
										/>
										{showMediaCaption && mediaCaption && (
											<figcaption className="opry-img-caption">
												{mediaCaption}
											</figcaption>
										)}
									</Fragment>
								)}
							</div>
						)}
						{!mediaURL && (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(item) => {
										setAttributes({
											mediaID: item.id,
											mediaURL: item.url,
											mediaAlt: item.alt,
											mediaWidth: item.width,
											mediaHeight: item.height,
											mediaType: item.type,
											mediaMime: item.mime,
											mediaCaption: item.caption,
										});
									}}
									allowedTypes={['image', 'video']}
									value={mediaURL}
									render={({ open }) => (
										<div className="upload-wrap">
											<Button
												onClick={open}
												className="button media__upload_btn"
											>
												{__(
													'Upload Media',
													'opry'
												)}
											</Button>
										</div>
									)}
								/>
							</MediaUploadCheck>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
