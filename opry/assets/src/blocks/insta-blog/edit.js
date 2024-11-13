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
import { PanelBody, Button, GradientPicker, Spinner, TextControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

import classnames from 'classnames';
import { nextArrow, prevArrow } from '../icons';
import React, { useRef } from "react";
import "./editor.scss";

import Slider from "react-slick";

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
export default function Edit({ attributes, setAttributes, clientId, className }) {
	const {
		blockID,
		heading,
		headingColor,
		btnText,
		bgImage,
		bgGradient,
		bgColor,
		accessToken,
		postList
	} = attributes;

	const [loading, setLoading] = useState(false);
	const [tokenError, setTokenError] = useState(false);

	useEffect(() => {
		/**
		 * Fetch All Insta Posts
		 */
		if (accessToken) {
			setLoading(true);
			wp.apiFetch({ path: `/wp/v2/instagram-posts?accessToken=${accessToken}` }).then((items) => {
				const postKey = items.map((item) => ({
					value: item.value,
					mediaurl: item.mediaurl,
					caption: item.caption,
					permalink: item.permalink
				}));
				setAttributes({ allPostList: postKey, postList: postKey });
				setTokenError(false);
			}).catch((error) => {
				setTokenError(true);
				console.error('Error fetching Instagram posts:', error);
			}).finally(() => {
				setLoading(false);
			});
		}
	}, [accessToken]);

	const instaPosts = postList?.map((post, index) => {
		return (
			<div key={index} className={`insta-blog__item`}>
				<a href={post.permalink} target="_blank" rel="noopener noreferrer">
					<img src={post.mediaurl} alt={post.caption} />
				</a>
			</div>
		);
	});


	if (!blockID) {
		setAttributes({ blockID: `image-slider-${clientId}` });
	}

	const classes = classnames(
		className,
		'insta-blog',
	);

	var settings = {
		dots: false,
		infinite: false,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,

				},
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1,

				},
			},
		],
	};

	const sliderRef = useRef(null);

	const blockStyle = {};
	bgImage &&
		bgImage.url &&
		(blockStyle.backgroundImage = `url(${bgImage.url})`);
	bgColor && (blockStyle.backgroundColor = bgColor);

	const bgGradientStyle = {};
	bgGradient && (bgGradientStyle.background = bgGradient);

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
					<PanelBody title={__('Instagram Settings', 'opry')} initialOpen={true}>
						<TextControl
							type="text"
							label={__('Your Access Token', 'opry')}
							value={accessToken}
							onChange={accessToken => {
								setAttributes({ accessToken });
							}}
							help={__('Please add Instagram Access Token of Public account to view Instagram Post.', 'opry')}
						/>
					</PanelBody>
					<PanelBody title={__("Background Settings", "opry")}
						initialOpen={false}
					>
						<div className="setting-row">
							<label>{__("Background Image", "opry")}</label>
							{!bgImage.url ? (
								<MediaUploadCheck>
									<MediaUpload
										allowedTypes={["image"]}
										onSelect={(image) => {
											const newImage = {};
											newImage.id = image.id;
											newImage.url = image.url;
											newImage.alt = image.alt;
											newImage.width = image.width;
											newImage.height = image.height;
											setAttributes({
												bgImage: newImage,
											});
										}}
										value={bgImage.id}
										render={({ open }) => (
											<Button
												className="button"
												onClick={open}
											>
												{__("Upload Image", "opry")}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							) : (
								<>
									<div className="image-preview">
										<img src={bgImage.url} alt="Preview" />
									</div>
									<MediaUploadCheck>
										<MediaUpload
											title={__("Edit Image", "opry")}
											value={bgImage.id}
											onSelect={(image) => {
												const newImage = {};
												newImage.id = image.id;
												newImage.url = image.url;
												newImage.alt = image.alt;
												newImage.width = image.width;
												newImage.height = image.height;
												setAttributes({
													bgImage: newImage,
												});
											}}
											allowedTypes={["image"]}
											render={({ open }) => (
												<Button
													className="button"
													onClick={open}
												>
													{__("Edit Image", "opry")}
												</Button>
											)}
										/>
										<Button
											className="is-link is-destructive"
											onClick={() => {
												setAttributes({
													bgImage: "",
												});
											}}
										>
											{__("Remove Image", "opry")}
										</Button>
									</MediaUploadCheck>
								</>
							)}
						</div>
						<div className="setting-row">
							<label>{__("Background Gradient", "opry")}</label>
							<GradientPicker
								value={bgGradient}
								onChange={(bgGradient) =>
									setAttributes({ bgGradient: bgGradient })
								}
								gradients={[
									{
										name: "Default",
										gradient:
											"linear-gradient(-57deg, #364493 0%, #3b1c3d 100%)",
										slug: "default",
									},
									{
										name: "Default 2",
										gradient:
											"linear-gradient(225deg, #3f51be 0%, #980000 100%)",
										slug: "default-2",
									},
								]}
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
				</div>
			</InspectorControls >
			<div className={classes} id={blockID} style={blockStyle}>
				<div className='container'>
					<div className='insta-blog__head'>
						<RichText
							value={heading}
							tagName="h2"
							placeholder={__('Enter Heading', 'opry')}
							onChange={heading => setAttributes({ heading })}
							className="insta-blog-inner__header"
							style={headingStyle}
						/>
						<RichText
							value={btnText}
							tagName="p"
							placeholder={__('Enter Button Text', 'opry')}
							onChange={btnText => setAttributes({ btnText })}
							className="btn-main insta-blog-inner__btn"
						/>
					</div>
					<div className='insta-blog-inner__row'>
						{loading ? (
							<Spinner />
						) : tokenError ? (
							<p>{__("Invalid Access Token. Please add a valid access token to view Instagram posts.", "opry")}</p>
						) : accessToken ? (
							instaPosts ? (
								<Slider ref={sliderRef} {...settings}>
									{instaPosts}
								</Slider>
							) : (
								<p>{__("No Instagram Posts Found", "opry")}</p>
							)
						) : (
							<p>{__("Please add access token for seeing Instagram Posts.", "opry")}</p>
						)}
					</div>
				</div>
				<div
					className="insta-blog__overlay"
					style={bgGradientStyle}
				></div>
			</div>
		</Fragment>
	);
}
