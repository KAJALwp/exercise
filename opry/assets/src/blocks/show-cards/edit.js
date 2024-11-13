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
import { RichText, InspectorControls, MediaUpload, MediaUploadCheck, PanelColorSettings } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, Button, Tooltip, GradientPicker, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { useEffect, Fragment, useState } from '@wordpress/element';

import classnames from 'classnames';
import { backgroundPositions } from '../common';
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
		boxList,
		bgMediaID,
		bgMediaURL,
		bgColor,
		bgPosition,
		gradientColor,
		headingColor,
	} = attributes;

	const [openCardIndex, setOpenCardIndex] = useState(0);

	const initBoxList = () => {
		setAttributes({
			boxList: [
				...boxList,
				{
					title: '',
					buttonText: '',
					mediaID: '',
					mediaURL: '',
					mediaAlt: '',
					mediaWidth: '',
					mediaHeight: '',
					boxBgPosition: '',
					boxlink: '',
					boxlinkTarget: '',

				},
			]
		});
	};

	const addNewItem = () => {
		const attr = {
			title: '',
			buttonText: '',
			mediaID: '',
			mediaURL: '',
			mediaAlt: '',
			mediaWidth: '',
			mediaHeight: '',
			boxBgPosition: '',
			boxlink: '',
			boxlinkTarget: '',
		};
		setAttributes({
			boxList: [...boxList, attr],
		});
	};

	useEffect(() => {
		if (0 === boxList.length) {
			initBoxList();
		}
	}, []);

	const moveItem = (oldIndex, newIndex) => {
		const arrayCopy = [...boxList];
		arrayCopy[oldIndex] = boxList[newIndex];
		arrayCopy[newIndex] = boxList[oldIndex];
		setAttributes({ boxList: arrayCopy });
	};

	if (!blockID) {
		setAttributes({ blockID: `show-program-card-${clientId}` });
	}

	const classes = classnames(
		className,
		'show-program-card',
		'show-program-card-edit',
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
									slug: 'show-gradient-1',
								},
								{
									name: __('Box Gradient 2', 'opry'),
									gradient: 'linear-gradient(225deg, #3f51be 0%, #980000 100%)',
									slug: 'show-gradient-2',
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
					{boxList.map((box, index) => {
						const isCardOpen = openCardIndex === index;
						return (
							<Fragment key={index}>
								{isCardOpen &&
									<PanelBody title={__(`Box ${index + 1} Settings`, 'opry')} initialOpen={true}>
										<TextControl
											type="url"
											label={__('box URL', 'opry')}
											placeholder={__('https://google.com', 'opry')}
											value={box.boxlink}
											onChange={value => {
												let arrayCopy = [...boxList];
												arrayCopy[index].boxlink = value;
												setAttributes({ boxList: arrayCopy });
											}}
										/>
										<ToggleControl
											label={__('Open in New Tab', 'opry')}
											checked={box.boxlinkTarget}
											onChange={value => {
												let arrayCopy = [...boxList];
												arrayCopy[index].boxlinkTarget = value;
												setAttributes({ boxList: arrayCopy });
											}}
										/>
										<div className="setting-row">
											<label>{__('Background Image', 'opry')}</label>
											<div>
												{!box.mediaURL ? (
													<MediaUploadCheck>
														<MediaUpload
															onSelect={item => {
																let arrayCopy = [...boxList];
																arrayCopy[index].mediaID = item.id;
																arrayCopy[index].mediaURL = item.url;
																arrayCopy[index].mediaAlt = item.alt;
																arrayCopy[index].mediaWidth = item.width;
																arrayCopy[index].mediaHeight = item.height;
																setAttributes({ boxList: arrayCopy });
															}}
															allowedTypes={['image']}
															value={box.mediaURL}
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
															<img src={box.mediaURL} alt={box.mediaAlt} width={box.mediaWidth} height={box.mediaHeight} />
														</div>
														<MediaUploadCheck>
															<MediaUpload
																onSelect={item => {
																	let arrayCopy = [...boxList];
																	arrayCopy[index].mediaID = item.id;
																	arrayCopy[index].mediaURL = item.url;
																	arrayCopy[index].mediaAlt = item.alt;
																	arrayCopy[index].mediaWidth = item.width;
																	arrayCopy[index].mediaHeight = item.height;
																	setAttributes({ boxList: arrayCopy });
																}}
																allowedTypes={['image']}
																value={box.mediaID}
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
																	let arrayCopy = [...boxList];
																	arrayCopy[index].mediaID = '';
																	arrayCopy[index].mediaURL = '';
																	arrayCopy[index].mediaAlt = '';
																	arrayCopy[index].mediaWidth = '';
																	arrayCopy[index].mediaHeight = '';
																	setAttributes({ boxList: arrayCopy });
																}}
																className="is-link is-destructive"
															>
																{__('Remove Image', 'opry')}
															</Button>
														</MediaUploadCheck>
													</Fragment>
												)}
											</div>
										</div>
										{box.mediaURL && (
											<div className='setting-row'>
												<SelectControl
													label={__('Background Position', 'opry')}
													value={box.boxBgPosition}
													options={backgroundPositions}
													onChange={(value) => {
														let arrayCopy = [...boxList];
														arrayCopy[index].boxBgPosition = value;
														setAttributes({ boxList: arrayCopy });
													}}
												/>
											</div>
										)}
									</PanelBody>
								}
							</Fragment>
						)
					})}
				</div>
			</InspectorControls>
			<div className={classes} id={blockID} style={blockStyle}>
				<span className='show-program-gradiant' style={gradientStyle}></span>
				<div className="show-program-card__row">
					{boxList.map((box, index) => {
						const boxDetailClass = classnames(
							'show-program-card__detail-item',
							'show-items-hover-wrap'
						);
						const boxStyle = {};
						box.boxBgPosition && (boxStyle.backgroundPosition = box.boxBgPosition);

						return (
							<a key={index} className={boxDetailClass} style={boxStyle}>
								{box.mediaURL &&
									<img className='show-program-card__img' src={box.mediaURL} />
								}
								<span className='show-program-card__gradient' data-bg-position={box.boxBgPosition} data-bg-img={box.mediaURL} onClick={() => setOpenCardIndex(index)}></span>
								<div className="item-action-wrap small-icons">
									<div className="move-item">
										{0 < index && (
											<Tooltip text={__('Move Left', 'opry')}>
												<span
													className="dashicons dashicons-arrow-left-alt2 move-left"
													aria-hidden="true"
													onClick={() => {
														moveItem(index, index - 1);
														setOpenCardIndex(index - 1);
													}}
												></span>
											</Tooltip>
										)}
										{index + 1 < boxList.length && (
											<Tooltip text={__('Move Right', 'opry')}>
												<span
													className="dashicons dashicons-arrow-right-alt2 move-right"
													onClick={() => {
														moveItem(index, index + 1);
														setOpenCardIndex(index + 1);
													}}
												></span>
											</Tooltip>
										)}
									</div>
									{1 < boxList.length && (
										<Tooltip text={__('Remove Item', 'opry')}>
											<i className='remove-item dashicons dashicons-no-alt'
												onClick={() => {
													let toDelete = confirm(__('Are you sure you want to delete this item?', 'opry'));
													if (true === toDelete) {
														let boxesArray = [...boxList];
														setOpenCardIndex(index - 1);
														boxesArray.splice(index, 1);
														setAttributes({ boxList: boxesArray });
													}
												}}
											></i>
										</Tooltip>
									)}
								</div>
								<div className="show-program-card__box" onClick={() => setOpenCardIndex(index)}>
									<div className="show-program-card__cnt">
										<RichText
											value={box.title}
											tagName="h3"
											placeholder={__('Enter Title', 'opry')}
											onChange={(title) => {
												let arrayCopy = [...boxList];
												arrayCopy[index].title = title;
												setAttributes({ boxList: arrayCopy });
											}}
											style={headingStyle}
											className='show-program-card__title h4'
										/>
										<div className="btn-main-border btn-secondary-gradient-blue-1 btn-has-right-arrow">
											<RichText
												tagName="p"
												className="btn-main show-program-card__btn-one"
												value={box.buttonText}
												onChange={(text) => {
													let arrayCopy = [...boxList];
													arrayCopy[index].buttonText = text;
													setAttributes({ boxList: arrayCopy });
												}}
												placeholder={__('Enter Button Text', 'opry')}
											/>
										</div>
									</div>
								</div>
							</a>
						)
					})}
				</div>
				<div
					className="add-item-wrap"
					onClick={() => {
						addNewItem();
					}}
				>
					<Tooltip text={__('Add New Contact', 'opry')}>
						<i
							className="add-new-item dashicons dashicons-plus"
							aria-hidden="true"
						></i>
					</Tooltip>
				</div>
			</div>
		</Fragment>
	);
}
