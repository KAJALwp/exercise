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
	RichText,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	InnerBlocks
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
	TextControl,
	ToggleControl,
} from '@wordpress/components';

import { useEffect, Fragment, useState } from '@wordpress/element';
import classnames from 'classnames';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes, setAttributes, clientId, className,
}) {
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

	const initList = () => {
		setAttributes({
			venue: [
				...venue,
				{
					heading: '',
					title: '',
					desc: '',
					showHeadingText: '',
					showTitleText: '',
				},
			]
		});
	};

	useEffect(() => {
		if (0 === logos.length) {
			initList();
		}
	}, []);

	const addNewItem = () => {
		const attr = {
			heading: '',
			title: '',
			desc: '',
			showHeadingText: '',
			showTitleText: '',
		};
		setAttributes({
			venue: [...venue, attr],
		});
	};

	const moveItem = (oldIndex, newIndex) => {
		const arrayCopy = [...venue];
		arrayCopy[oldIndex] = venue[newIndex];
		arrayCopy[newIndex] = venue[oldIndex];
		setAttributes({ venue: arrayCopy });
	};

	const initLogo = () => {
		setAttributes({
			logos: [
				...logos,
				{
					logoID: '',
					logoURL: '',
					logoAlt: '',
					logoWidth: '',
					logoHeight: '',
					logolink: '',
					logolinkTarget: '',
				},
			]
		});
	};

	const addNewLogo = () => {
		const attr = {
			logoID: '',
			logoURL: '',
			logoAlt: '',
			logoWidth: '',
			logoHeight: '',
			logolink: '',
			logolinkTarget: '',
		};
		setAttributes({
			logos: [...logos, attr],
		});
	};

	useEffect(() => {
		if (0 === venue.length) {
			initList();
		}
		if (0 === logos.length) {
			initLogo();
		}
	}, []);

	const moveLogo = (oldIndex, newIndex) => {
		const arrayCopy = [...logos];
		arrayCopy[oldIndex] = logos[newIndex];
		arrayCopy[newIndex] = logos[oldIndex];
		setAttributes({ logos: arrayCopy });
	};

	const [openCardIndex, setOpenCardIndex] = useState(0);
	const [openLogoIndex, setOpenLogoIndex] = useState(0);

	setAttributes({ blockID: `footer-opry-venue-${clientId}` });

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
		<>
			<InspectorControls>
				<div className="opry-block-sidebar">
					{venue.map((detail, index) => {
						const isCardOpen = openCardIndex === index;
						return (
							isCardOpen && (
								<PanelBody key={index} title={__(`Venue ${index + 1} Settings`, 'opry')} initialOpen={true}>
									<ToggleControl
										label={__('Show Heading', 'opry')}
										checked={detail.showHeadingText}
										onChange={value => {
											let arrayCopy = [...venue];
											arrayCopy[index].showHeadingText = value;
											setAttributes({ venue: arrayCopy });
										}}
									/>
									<ToggleControl
										label={__('Show Title', 'opry')}
										checked={detail.showTitleText}
										onChange={value => {
											let arrayCopy = [...venue];
											arrayCopy[index].showTitleText = value;
											setAttributes({ venue: arrayCopy });
										}}
									/>

								</PanelBody>
							)
						)
					})}
					{logos.map((logo, index) => {
						const isLogoOpen = openLogoIndex === index;
						return (
							isLogoOpen && (
								<PanelBody key={index} title={__(`Logo ${index + 1} Settings`, 'opry')} initialOpen={true}>
									<TextControl
										type="url"
										label={__('Logo URL', 'opry')}
										placeholder={__('https://google.com', 'opry')}
										value={logo.logolink}
										onChange={value => {
											let arrayCopy = [...logos];
											arrayCopy[index].logolink = value;
											setAttributes({ logos: arrayCopy });
										}}
									/>
									<ToggleControl
										label={__('Open in New Tab', 'opry')}
										checked={logo.logolinkTarget}
										onChange={value => {
											let arrayCopy = [...logos];
											arrayCopy[index].logolinkTarget = value;
											setAttributes({ logos: arrayCopy });
										}}
									/>
								</PanelBody>
							)
						)
					})}
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
									value: titleColor,
									onChange: value => { setAttributes({ titleColor: value }) },
									label: __('Title Color', 'opry')
								},
								{
									value: descColor,
									onChange: value => { setAttributes({ descColor: value }) },
									label: __('Description Color', 'opry')
								}
							]}
						/>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} id={blockID} style={blockStyle}>
				<div className='footer-opry-venue-info__first-section opry-footer-bottom'>
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
									<img className="footer-logo__img" data-img-id={imageID} src={imageURL} alt={imageAlt} width={imageWidth} height={imageHeight} />
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
					<div className="social-links">
						<InnerBlocks
							allowedBlocks={['core/social-links']}
							template={[['core/social-links']]}
						/>
					</div>

					<RichText
						value={telNum}
						tagName="p"
						placeholder={__('Telephone Text', 'opry')}
						onChange={telNum => setAttributes({ telNum })}
						className="phone-container"
					/>
				</div>
				<div className='footer-opry-venue-info__second-section opry-footer-bottom'>
					<div className="footer-opry-venue__row">
						{venue.map((detail, index) => {
							return (
								<div key={index} className={`footer-opry-venue__item show-items-hover-wrap`}>
									<div className="item-action-wrap small-icons">
										<div className="move-item">
											{0 < index && (
												<Tooltip text={__('Move Down', 'opry')}>
													<span
														className="dashicons dashicons-arrow-down-alt2 move-up"
														aria-hidden="true"
														onClick={() => {
															moveItem(index, index - 1);
															setOpenCardIndex(index - 1);
														}}

													></span>
												</Tooltip>
											)}
											{index + 1 < venue.length && (
												<Tooltip text={__('Move UP', 'opry')}>
													<span
														className="dashicons dashicons-arrow-up-alt2 move-down"
														onClick={() => {
															moveItem(index, index + 1);
															setOpenCardIndex(index + 1);
														}}
													></span>
												</Tooltip>
											)}
										</div>
										{1 < venue.length && (
											<Tooltip text={__("Remove Item", 'opry')}>
												<i
													className="remove-item dashicons dashicons-no-alt"
													onClick={() => {
														let toDelete = confirm(__('Are you sure you want to delete this item?', 'opry'));
														if (true === toDelete) {
															let executiveArray = [...venue];
															setOpenCardIndex(index - 1);
															executiveArray.splice(index, 1);
															setAttributes({ venue: executiveArray });
														}
													}}
												></i>
											</Tooltip>
										)}
									</div>
									<div className={`footer-opry-venue__card`} onClick={() => setOpenCardIndex(index)}>
										{detail.showHeadingText &&
											<RichText
												value={detail.heading}
												tagName="h4"
												placeholder={__('Enter heading', 'opry')}
												onChange={(heading) => {
													let arrayCopy = [...venue];
													arrayCopy[index].heading = heading;
													setAttributes({ venue: arrayCopy });
												}}
												style={headingStyle}
												className='footer-opry-venue-card__heading'
											/>
										}
										{detail.showTitleText &&
											<RichText
												value={detail.title}
												tagName="p"
												placeholder={__('Enter Title', 'opry')}
												onChange={(title) => {
													let arrayCopy = [...venue];
													arrayCopy[index].title = title;
													setAttributes({ venue: arrayCopy });
												}}
												style={titleStyle}
												className='footer-opry-venue-card__title'
											/>
										}
										<RichText
											value={detail.desc}
											tagName="p"
											placeholder={__('Enter Descriptions', 'opry')}
											onChange={(title) => {
												let arrayCopy = [...venue];
												arrayCopy[index].desc = title;
												setAttributes({ venue: arrayCopy });
											}}
											style={descStyle}
											className='footer-opry-venue-card__description'
										/>
									</div>
								</div>
							);
						})}
					</div>
					<div className="add-item-wrap">
						<i
							onClick={() => {
								addNewItem();
							}}
							className="dashicons dashicons-plus add-new-item"
						>
						</i>
					</div>
				</div>
				<div className='footer-opry-venue-info__third-section opry-footer-bottom contact-btn'>
					<div className="footer-opry-venue-logos__row">
						{logos.map((executiveData, index) => {
							return (
								<div key={index} className={`footer-opry-venue-logos__item show-items-hover-wrap`}>
									<div className="item-action-wrap small-icons">
										<div className="move-item">
											{0 < index && (
												<Tooltip text={__('Move Up', 'opry')}>
													<span
														className="dashicons dashicons-arrow-up-alt2 move-up"
														aria-hidden="true"
														onClick={() => {
															moveLogo(index, index - 1);
															setOpenLogoIndex(index - 1);
														}}

													></span>
												</Tooltip>
											)}
											{index + 1 < logos.length && (
												<Tooltip text={__('Move Down', 'opry')}>
													<span
														className="dashicons dashicons-arrow-down-alt2 move-down"
														onClick={() => {
															moveLogo(index, index + 1);
															setOpenLogoIndex(index + 1);
														}}
													></span>
												</Tooltip>
											)}
										</div>
										{1 < logos.length && (
											<Tooltip text={__("Remove Item", 'opry')}>
												<i
													className="remove-item dashicons dashicons-no-alt"
													onClick={() => {
														let toDelete = confirm(__('Are you sure you want to delete this item?', 'opry'));
														if (true === toDelete) {
															let executiveArray = [...logos];
															setOpenLogoIndex(index - 1);
															executiveArray.splice(index, 1);
															setAttributes({ logos: executiveArray });
														}
													}}
												></i>
											</Tooltip>
										)}
									</div>
									<div className={`footer-opry-venue-logos__left`} onClick={() => setOpenLogoIndex(index)}>
										{executiveData.logoURL && (
											<div className="image-preview image-controle-visible-hover">
												<div className="image-controls small-icons icon-center-fixed">
													<MediaUploadCheck>
														<MediaUpload
															onSelect={(item) => {
																let arrayCopy = [...logos];
																arrayCopy[index].logoID = item.id;
																arrayCopy[index].logoURL = item.url;
																arrayCopy[index].logoAlt = item.alt;
																arrayCopy[index].logoWidth = item.width;
																arrayCopy[index].logoHeight = item.height;
																setAttributes({ logos: arrayCopy });
															}}
															allowedTypes={['image', 'gif']}
															value={executiveData.logoID}
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
																		let arrayCopy = [...logos];
																		arrayCopy[index].logoID = '';
																		arrayCopy[index].logoURL = '';
																		arrayCopy[index].logoAlt = '';
																		arrayCopy[index].logoWidth = '';
																		arrayCopy[index].logoHeight = '';
																		setAttributes({ logos: arrayCopy });
																	}
																}}
															>
															</i>
														</Tooltip>
													</MediaUploadCheck>
												</div>
												{executiveData.logoURL && (
													<>
														<img className="footer-opry-venue-logos__img" data-img-id={executiveData.logoID} src={executiveData.logoURL} alt={executiveData.logoAlt} width={executiveData.logoWidth} height={executiveData.logoHeight} />
													</>
												)}
											</div>
										)}
										{(!executiveData.logoURL) && (
											<MediaUploadCheck>
												<MediaUpload
													onSelect={(item) => {
														let arrayCopy = [...logos];
														arrayCopy[index].logoID = item.id;
														arrayCopy[index].logoURL = item.url;
														arrayCopy[index].logoAlt = item.alt;
														arrayCopy[index].logoWidth = item.width;
														arrayCopy[index].logoHeight = item.height;
														setAttributes({ logos: arrayCopy });
													}}
													allowedTypes={['image']}
													value={executiveData.logoURL}
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
							);
						})}
					</div>
					<div className="add-item-wrap">
						<i
							onClick={() => {
								addNewLogo();
							}}
							className="dashicons dashicons-plus add-new-item"
						>
						</i>
					</div>
				</div>
			</div>
		</>
	);
}
