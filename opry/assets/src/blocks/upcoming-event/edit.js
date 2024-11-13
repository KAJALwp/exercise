/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import { useEffect, Fragment } from "@wordpress/element";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
	InspectorControls,
	RichText,
	PanelColorSettings,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	RangeControl,
	Button,
	GradientPicker,
} from "@wordpress/components";
import classnames from "classnames";
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
export default function Edit({ attributes, setAttributes, className, clientId }) {
	const {
		blockID,
		bgImage,
		bgGradient,
		heading,
		noOfEvent,
		viewAll,
		eventList,
		headingColor,
	} = attributes;

	if (!blockID) {
		setAttributes({ blockID: "upcoming-event" + clientId });
	}

	const headingStyle = {};
	headingColor && (headingStyle.color = headingColor);

	const blockStyle = {};
	bgImage &&
		bgImage.url &&
		(blockStyle.backgroundImage = `url(${bgImage.url})`);

	const bgOverlayStyle = {};
	bgGradient && (bgOverlayStyle.background = bgGradient);


	useEffect(() => {
		/**
		 * Fetch All Event
		 */
		wp.apiFetch({ path: `/wp/v2/upcoming-event-list?limit=999` }).then((items) => {
			const eventKey = [];
			items.map((item, index) => {
				eventKey.push({
					label: item.label,
					value: item.value,
					eventDate: item.eventdate,
					eventMonth: item.eventmonth,
					eventDay: item.eventday,
					eventDayName: item.eventdayname,
					eventTicketStatus: item.eventticketstatus,
					eventVenue: item.eventvenue,
					eventLink: item.eventlink,
					eventCat: item.artistcategory

				});
			});
			setAttributes({ alleventList: eventKey, eventList: eventKey });
		});
	}, [noOfEvent]);

	const eventItems = eventList?.slice(0, noOfEvent).map((event, index) => {
		return (
			<div key={index} className={`upcoming-event__item`}>
				{event.eventDate && (
					<div className="upcoming-event__date">
						<p>{event.eventMonth}</p>
						<p>{event.eventDay}</p>
						<p>{event.eventDayName}</p>
					</div>
				)}
				<div className="upcoming-event__venue-title-wrapper">
					{event.eventVenue && (
						<p className="upcoming-event__venue">{event.eventVenue}</p>
					)}
					<h3>{event.label}</h3>
					{event.eventTicketStatus && (
						<h4 className="event-tagline">{event.eventTicketStatus}</h4>
					)}
				</div>
			</div>
		);
	});

	var noSlides = eventList ? eventList.length : noOfEvent;
	var settings = {
		infinite: false,
		arrows: true,
		slidesToShow: 3 < noSlides ? 3 : noSlides,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: nextArrow,
		prevArrow: prevArrow,
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

	const classes = classnames(className, "upcoming-event");

	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
					<PanelBody title={__("Settings", "opry")}>
						<RangeControl
							label={__("Number of Event", "opry")}
							value={noOfEvent ? noOfEvent : 10}
							onChange={(noOfEvent) => setAttributes({ noOfEvent })}
							min={1}
							max={10}
						/>
					</PanelBody>
					<PanelBody title={__("Color Settings")} initialOpen={false}>
						<PanelColorSettings
							title={__("Colors", "opry")}
							colorSettings={[
								{
									value: headingColor,
									onChange: (value) => {
										setAttributes({ headingColor: value });
									},
									label: __("Heading Color", "opry"),
								}
							]}
						/>
					</PanelBody>
					<PanelBody
						title={__("Background Settings", "opry")}
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
				</div>
			</InspectorControls>
			<div id={blockID} className={classes} style={blockStyle}>
				<div className="container">
					<div className="upcoming-event-wrapper">
						<div className="upcoming-event__head">
							<RichText
								tagName="h2"
								value={heading}
								onChange={(heading) =>
									setAttributes({ heading: heading })
								}
								placeholder={__("Enter Heading", "opry")}
								style={headingStyle}
							/>
							<RichText
								tagName="p"
								className="upcoming-event__event-view btn-main"
								value={viewAll}
								onChange={(viewAll) =>
									setAttributes({ viewAll: viewAll })
								}
								placeholder={__("Enter Button Text", "opry")}
							/>
						</div>
						<div className="upcoming-event__row">
							{eventItems && eventItems.length > 0 ? (
								<>
									{eventItems && (
										<Slider ref={sliderRef} {...settings}>
											{eventItems}
										</Slider>
									)}
								</>
							) : (
								<p>{__("No Record Found.", "opry")}</p>
							)}
						</div>
					</div>
				</div>
				<div
					className="upcoming-event__overlay"
					style={bgOverlayStyle}
				></div>
			</div>
		</Fragment>
	);
}
