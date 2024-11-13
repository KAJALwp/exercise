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
	Button,
	GradientPicker,
} from "@wordpress/components";
import classnames from "classnames";
import "./editor.scss";

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
		eventList
	} = attributes;

	if (!blockID) {
		setAttributes({ blockID: "opry-recent-event" + clientId });
	}

	const blockStyle = {};
	bgImage &&
		bgImage.url &&
		(blockStyle.backgroundImage = `url(${bgImage.url})`);

	const bgOverlayStyle = {};
	bgGradient && (bgOverlayStyle.background = bgGradient);

	const classes = classnames(className, "opry-recent-event");


	useEffect(() => {
		/**
		 * Fetch Event
		 */
		wp.apiFetch({ path: `/wp/v2/opry-event-detail` }).then((items) => {
			const eventKey = [];
			items.map((item, index) => {
				eventKey.push({
					label: item.label,
					value: item.value,
					eventDate: item.eventdate,
					eventVenue: item.eventvenue,
					eventLink: item.eventlink,
					eventCat: item.artistcategory

				});
			});
			setAttributes({ alleventList: eventKey, eventList: eventKey });
		});
	}, []);

	const eventItems = eventList?.map((event, index) => {
		return (
			<div key={index} className={`opry-event__item`}>
				<div className="event-cards">
					<div className="info">
						<div className="info-inner">
							{event.eventVenue && (
								<p className="opry-event__venue">{event.eventVenue}</p>
							)}
							{event.eventDate && (
								<div className="opry-event__date">
									<p>{event.eventDate}</p>
								</div>
							)}
							<h3 className="opry-event__title"><a href={event.eventLink}>{event.label}</a></h3>

							{event.eventCat && (
								<p className="opry-event-tagline">{`Featuring ${event.eventCat.map(artist => artist.name).join(', ').replace(/,([^,]*)$/, ' and$1')}.`}</p>
							)}
							{event.eventLink && (
								<a className="opry-get-ticket-anchor" href={event.eventLink}>{`Get Tickets`}</a>
							)}
						</div>
					</div>
				</div>
				<div className="event-artist-card">
					{event.eventCat && (
						<>
							{event.eventCat.slice(0, 3).map((artist, index) => {
								return (
									<a className="event-artist" key={index} href="#">
										<div className="thumb">
											{artist.image_url && <img src={artist.image_url} alt={artist.name} />}
										</div>
										<div className="event-artist-name">
											<h4>{artist.name}</h4>
										</div>
									</a>
								);
							})}
							{event.eventCat.slice(3, 4).map((artist, index) => {
								return (
									<a key={index} href="#" className="event-add-more">
										<h4>{`...And More`}</h4>
									</a>
								);
							})}
						</>
					)}
				</div>
			</div>
		);
	});

	return (
		<Fragment>
			<InspectorControls>
				<div className="opry-block-sidebar">
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
									}
								]}
							/>
						</div>
					</PanelBody>
				</div>
			</InspectorControls>
			<div className={classes} style={blockStyle} id={blockID}>
				<div className="opry-event__row">
					{eventItems && eventItems.length > 0 ? (
						<>
							{eventItems && (
								eventItems
							)}
						</>
					) : (
						<p>{__("No Record Found.", "opry")}</p>
					)}
				</div>
				<div
					className="opry-event__overlay"
					style={bgOverlayStyle}
				></div>
			</div>
		</Fragment>
	);
}
