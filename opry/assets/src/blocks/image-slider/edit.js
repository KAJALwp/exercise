/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-alert */
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import './editor.scss';
import Slider from 'react-slick';
import { useRef } from 'react';
import classnames from 'classnames';
import { backgroundPositions } from '../common';

import { Fragment, useEffect } from '@wordpress/element';
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	Tooltip,
	PanelRow,
	FormToggle,
	GradientPicker,
	SelectControl
} from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId, className }) {
	const sliderRef = useRef(null);
	const {
		blockID,
		autoplay,
		arrows,
		dots,
		slideInfinite,
		repeatItems,
		bgColor,
		bgMediaID,
		bgMediaURL,
		bgPosition,
		gradientColor
	} = attributes;

	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots,
		arrows,
		autoplay,
		infinite: false,
		centerMode: false,
		centerPadding: '10px',
		speed: 100,
	};

	useEffect(() => {
		if (0 === repeatItems.length) {
			initList();
		}
	}, [repeatItems]);
	const initList = () => {
		setAttributes({
			repeatItems: [
				...repeatItems,
				{
					index: repeatItems.length,
					imageID: '',
					imageURL: '',
					imageAlt: '',
					imageWidth: '',
					imageHeight: '',
				},
			],
		});
	};

	if (!blockID) {
		setAttributes({ blockID: `image-slider-${clientId}` });
	}

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

	const repeatItemsList = (data, index) => {
		return (
			<>
				{repeatItems.length > 0 && (
					<div className="image-preview">
						<div className="image-controls small-icons image-action-wrap">
							<Tooltip text={__("Remove Slide", 'opry')}>
								<i
									className="remove-image dashicons dashicons-no-alt"
									onClick={() => {
										let toDelete = confirm(__('Are you sure you want to delete this item?', 'opry'));
										if (true === toDelete) {
											let newObj = [...repeatItems];
											newObj.splice(index, 1);
											setAttributes({
												repeatItems: newObj,
											});
										}
									}}></i>
							</Tooltip>
						</div>
					</div>
				)
				}
				<div className="opry-image-slider-content">
					<div className="opry-image-slider">
						{data.imageURL ? (
							<Fragment>
								<div className="image-preview image-controle-visible-hover">
									<div className="image-controls small-icons image-action-wrap icon-center-fixed">
										<MediaUploadCheck>
											<MediaUpload
												onSelect={(item) => {
													const arrayCopy = [
														...repeatItems,
													];
													arrayCopy[index].imageID =
														item.id;
													arrayCopy[
														index
													].imageURL = item.url;
													arrayCopy[
														index
													].imageAlt = item.alt;
													arrayCopy[
														index
													].imageWidth = item.width;
													arrayCopy[
														index
													].imageHeight = item.height;
													setAttributes({
														repeatItems: arrayCopy,
													});
												}}
												allowedTypes={['image']}
												value={data.imageID}
												render={({ open }) => {
													return (
														<Tooltip
															text={__(
																'Edit Image',
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
												'Remove Image',
												'opry'
											)}
										>
											<i
												className="dashicons dashicons-no-alt remove-image"
												onClick={() => {
													const imgDelete = confirm(
														__(
															'Are you sure you want to delete this item?',
															'opry'
														)
													);
													if (true === imgDelete) {
														const arrayCopy = [
															...repeatItems,
														];
														arrayCopy[
															index
														].imageID = '';
														arrayCopy[
															index
														].imageURL = '';
														arrayCopy[
															index
														].imageAlt = '';
														arrayCopy[
															index
														].imageWidth = '';
														arrayCopy[
															index
														].imageHeight = '';
														setAttributes({
															repeatItems:
																arrayCopy,
														});
													}
												}}
											></i>
										</Tooltip>
									</div>
									<img
										src={data.imageURL}
										alt={data.imageAlt}
										width={data.imageWidth}
										height={data.imageHeight}
									/>
								</div>
							</Fragment>
						) : (
							<div className="upload-image">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(item) => {
											const arrayCopy = [
												...repeatItems,
											];
											arrayCopy[index].imageID =
												item.id;
											arrayCopy[index].imageURL =
												item.url;
											arrayCopy[index].imageAlt =
												item.alt;
											arrayCopy[index].imageWidth =
												item.width;
											arrayCopy[index].imageHeight =
												item.height;
											setAttributes({
												repeatItems: arrayCopy,
											});
										}}
										allowedTypes={['image']}
										value={data.imageURL}
										render={({ open }) => (
											<div className="upload-wrap">
												<Button
													onClick={open}
													className="button"
												>
													{__(
														'Select Image',
														'opry'
													)}
												</Button>
											</div>
										)}
									/>
								</MediaUploadCheck>
							</div>
						)}
					</div>
				</div>
			</>
		);
	};

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
									gradient: 'linear-gradient(-57deg, #364493 0%, #3b1c3d 100%)',
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
							{(!bgMediaURL) ? (
								<bgMUploadCheck>
									<MediaUpload
										onSelect={item => {
											setAttributes({
												bgMediaID: item.id,
												bgMediaURL: item.url,
											});
										}}
										allowedTypes={['image']}
										value={bgMediaURL}
										render={({ open }) => (
											<Button
												onClick={open}
												className="button button-large"
											>
												{__('Upload Image', 'opry')}
											</Button>
										)}
									/>
								</bgMUploadCheck>
							) : (
								<Fragment>
									<div className="image-preview">
										<img src={bgMediaURL} alt={__('bg preview', 'opry')} />
									</div>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={item => {
												setAttributes({
													bgMediaID: item.id,
													bgMediaURL: item.url,
												});
											}}
											allowedTypes={['image']}
											value={bgMediaID}
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
													bgMediaID: '',
													bgMediaURL: '',
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
					<PanelBody
						title={__('Slider Settings', 'opry')}
						initialOpen={false}
					>
						<PanelRow>
							<label htmlFor="Display Mode">
								{__('Autoslide', 'opry')}
							</label>
							<FormToggle
								label="auto"
								checked={autoplay}
								onChange={() =>
									setAttributes({
										autoplay: !autoplay,
									})
								}
							/>
						</PanelRow>
						<PanelRow>
							<label htmlFor="Display Mode">
								{__('Dots Visibility', 'opry')}
							</label>
							<FormToggle
								checked={dots}
								onChange={() =>
									setAttributes({
										dots: !dots,
									})
								}
							/>
						</PanelRow>
						<PanelRow>
							<label htmlFor="Display Mode">
								{__('Arrows Visibility', 'opry')}
							</label>
							<FormToggle
								checked={arrows}
								onChange={() =>
									setAttributes({
										arrows: !arrows,
									})
								}
							/>
						</PanelRow>
						<PanelRow>
							<label htmlFor="Infinite Mode">
								{__('Infinite Mode', 'opry')}
							</label>
							<FormToggle
								checked={slideInfinite}
								onChange={() =>
									setAttributes({
										slideInfinite: !slideInfinite,
									})
								}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Color Settings', 'opry')} initialOpen={false}>
						<PanelColorSettings
							title={__('Colors', 'opry')}
							colorSettings={[
								{
									value: bgColor,
									onChange: value => { setAttributes({ bgColor: value }) },
									label: __('Background Color', 'opry')
								}
							]}
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} id={blockID} style={blockStyle}>
				<span className='show-image-gradiant' style={gradientStyle}></span>
				<div className="opry-image-container">
					<div className="opry-image-slider">
						<Slider {...settings} ref={sliderRef}>
							{repeatItems.map((data, index) => (
								<div
									className={'image-slider-item'}
									key={index}
								>
									{repeatItemsList(data, index)}
								</div>
							))}
						</Slider>
						<div className="add-item-wrap">
							<Tooltip text="Add item">
								<i
									className="dashicons dashicons-plus add-new-item"
									onClick={() => {
										const newIndex = repeatItems.length;
										setAttributes({
											repeatItems: [
												...repeatItems,
												{
													index: newIndex,
													imageID: '',
													imageURL: '',
													imageAlt: '',
													imageWidth: '',
													imageHeight: '',
												},
											],
										});
										if (sliderRef.current) {
											sliderRef.current.slickGoTo(
												newIndex
											);
										}
									}}
								>
								</i>
							</Tooltip>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
