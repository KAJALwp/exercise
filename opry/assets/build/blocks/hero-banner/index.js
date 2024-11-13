/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/hero-banner/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/hero-banner/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./src/blocks/icons.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/hero-banner/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */


/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */


/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */





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
function Edit({
  attributes,
  setAttributes,
  clientId,
  className
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
    setAttributes({
      blockID: `media-${clientId}`
    });
  }

  // Update the video source when mediaURL changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (mediaURL) {
      const videoElement = document.getElementById('video-' + blockID);
      if (videoElement) {
        videoElement.src = mediaURL;
      }
    }
  }, [mediaURL]);
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'media', 'align-' + mediaAlign);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry-block-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'opry'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Media Caption', 'opry'),
    checked: showMediaCaption,
    onChange: showMediaCaption => setAttributes({
      showMediaCaption
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inspector-field inspector-field-alignment"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "inspector-mb-0"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Alignment', 'opry')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inspector-field-button-list inspector-field-button-list-fluid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'left' === mediaAlign ? 'active inspector-button' : ' inspector-button',
    onClick: () => setAttributes({
      mediaAlign: 'left'
    })
  }, _icons__WEBPACK_IMPORTED_MODULE_5__.leftAlign), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'center' === mediaAlign ? 'active inspector-button' : ' inspector-button',
    onClick: () => setAttributes({
      mediaAlign: 'center'
    })
  }, _icons__WEBPACK_IMPORTED_MODULE_5__.centerAlign), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: 'right' === mediaAlign ? 'active inspector-button' : ' inspector-button',
    onClick: () => setAttributes({
      mediaAlign: 'right'
    })
  }, _icons__WEBPACK_IMPORTED_MODULE_5__.rightAlign)))), 'video' === mediaType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Video Settings', 'opry'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Poster Image', 'opry')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !videoPoster ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        videoPoster: item.url
      });
    },
    type: "image",
    value: videoPoster,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'opry'))
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: videoPoster,
    alt: "video cover"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        videoPoster: ''
      });
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'opry'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Autoplay', 'opry'),
    checked: videoAutplay,
    onChange: videoAutplay => {
      setAttributes({
        videoAutplay
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loop', 'opry'),
    checked: videoLoop,
    onChange: videoLoop => {
      setAttributes({
        videoLoop
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Muted', 'opry'),
    checked: videoMuted,
    onChange: videoMuted => {
      setAttributes({
        videoMuted
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'opry'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'opry'),
    colorSettings: [{
      value: headingColor,
      onChange: value => {
        setAttributes({
          headingColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Color', 'opry')
    }]
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media__body"
  }, mediaURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-controls icon-center-fixed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        mediaID: item.id,
        mediaURL: item.url,
        mediaAlt: item.alt,
        mediaWidth: item.width,
        mediaHeight: item.height,
        mediaType: item.type,
        mediaMime: item.mime,
        mediaCaption: item.caption
      });
    },
    allowedTypes: ['image', 'video'],
    value: mediaID,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Media', 'opry')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "dashicons dashicons-edit edit-image",
        onClick: open
      }));
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Media', 'opry')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-no-alt remove-image",
    onClick: () => {
      setAttributes({
        mediaID: '',
        mediaURL: '',
        mediaAlt: '',
        mediaWidth: '',
        mediaHeight: '',
        mediaType: '',
        mediaMime: '',
        mediaCaption: ''
      });
    }
  }))), 'video' === mediaType ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry_video__wrap active"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    width: mediaWidth ? mediaWidth : 500,
    height: mediaHeight ? mediaHeight : 500,
    id: 'video-' + blockID,
    controls: false,
    autoPlay: videoAutplay,
    loop: videoLoop,
    muted: videoMuted,
    poster: videoPoster ? videoPoster : false,
    playsinline: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: mediaURL,
    type: mediaMime
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:void(0);",
    "data-id": 'video-' + blockID,
    className: "opry_video__play"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "panel_text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-body-heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: heading,
    tagName: "h2",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Heading', 'opry'),
    onChange: heading => setAttributes({
      heading
    }),
    style: headingStyle,
    className: "hero-banner__title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: btnOneText,
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button One Text', 'opry'),
    onChange: btnOneText => setAttributes({
      btnOneText
    }),
    className: "btn-main hero-banner__btn-one"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: btnTwoText,
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Two Text', 'opry'),
    onChange: btnTwoText => setAttributes({
      btnTwoText
    }),
    className: "btn-main hero-banner__btn-two"
  }))), showMediaCaption && mediaCaption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: "opry-img-caption"
  }, mediaCaption)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    width: mediaWidth ? mediaWidth : 500,
    height: mediaHeight ? mediaHeight : 450,
    src: mediaURL,
    alt: mediaAlt ? mediaAlt : 'Thumbnail'
  }), showMediaCaption && mediaCaption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: "opry-img-caption"
  }, mediaCaption))), !mediaURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        mediaID: item.id,
        mediaURL: item.url,
        mediaAlt: item.alt,
        mediaWidth: item.width,
        mediaHeight: item.height,
        mediaType: item.type,
        mediaMime: item.mime,
        mediaCaption: item.caption
      });
    },
    allowedTypes: ['image', 'video'],
    value: mediaURL,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "upload-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button media__upload_btn"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Media', 'opry')))
  }))))));
}

/***/ }),

/***/ "./src/blocks/hero-banner/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/hero-banner/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/hero-banner/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/hero-banner/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/hero-banner/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/hero-banner/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/hero-banner/save.js":
/*!****************************************!*\
  !*** ./src/blocks/hero-banner/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/


/**
  * React hook that is used to mark the packages element.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
*/




/**
  * The save function defines the way in which the different attributes should
  * be combined into the final markup, which is then serialized by the block
  * editor into `post_content`.
  *
  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
  *
  * @return {WPElement} Element to render.
*/
function save(props) {
  const {
    attributes,
    className
  } = props;
  const {
    blockID,
    mediaType,
    mediaMime,
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
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'media', 'align-' + mediaAlign);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media__body"
  }, mediaURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'media__image'
  }, 'video' === mediaType ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry_video__wrap active"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    width: mediaWidth ? mediaWidth : 500,
    height: mediaHeight ? mediaHeight : 500,
    id: 'video-' + blockID,
    controls: false,
    autoPlay: videoAutplay,
    loop: videoLoop,
    muted: videoMuted,
    poster: videoPoster ? videoPoster : false,
    playsinline: true,
    preload: "metadata"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: mediaURL,
    type: mediaMime
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:void(0);",
    "data-id": 'video-' + blockID,
    className: "opry_video__play"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "panel_text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-body-heading"
  }, heading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "h2",
    value: heading,
    style: headingStyle,
    className: "hero-banner__title"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "btn-group"
  }, btnOneText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    value: btnOneText,
    tagName: "p",
    className: "btn-main hero-banner__btn-one"
  }), btnTwoText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    value: btnTwoText,
    tagName: "p",
    className: "btn-main hero-banner__btn-two"
  }))), showMediaCaption && mediaCaption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: "opry-img-caption"
  }, mediaCaption)) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    width: mediaWidth ? mediaWidth : 500,
    height: mediaHeight ? mediaHeight : 450,
    src: mediaURL,
    alt: mediaAlt ? mediaAlt : 'Thumbnail'
  }), showMediaCaption && mediaCaption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
    className: "opry-img-caption"
  }, mediaCaption))))));
}

/***/ }),

/***/ "./src/blocks/icons.js":
/*!*****************************!*\
  !*** ./src/blocks/icons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   centerAlign: () => (/* binding */ centerAlign),
/* harmony export */   leftAlign: () => (/* binding */ leftAlign),
/* harmony export */   nextArrow: () => (/* binding */ nextArrow),
/* harmony export */   prevArrow: () => (/* binding */ prevArrow),
/* harmony export */   rightAlign: () => (/* binding */ rightAlign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const prevArrow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
  "aria-label": "Previous",
  class: "prev"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "31",
  height: "31",
  viewBox: "0 0 31 31"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  d: "M17.38,29.5795583 L29.619,16.4945583 C29.629,16.4845583 29.636,16.4705583 29.645,16.4595583 C29.696,16.4035583 29.74,16.3405583 29.784,16.2765583 C29.811,16.2385583 29.839,16.2035583 29.863,16.1635583 C29.907,16.0895583 29.942,16.0095583 29.977,15.9295583 C29.992,15.8935583 30.012,15.8595583 30.026,15.8225583 C30.061,15.7265583 30.086,15.6245583 30.108,15.5215583 C30.114,15.4955583 30.124,15.4715583 30.128,15.4445583 C30.151,15.3145583 30.164,15.1795583 30.164,15.0415583 C30.164,14.9025583 30.151,14.7675583 30.128,14.6375583 C30.124,14.6115583 30.114,14.5875583 30.108,14.5615583 C30.086,14.4575583 30.061,14.3565583 30.026,14.2595583 C30.012,14.2225583 29.992,14.1895583 29.977,14.1535583 C29.942,14.0725583 29.907,13.9925583 29.863,13.9195583 C29.839,13.8795583 29.811,13.8445583 29.785,13.8065583 C29.74,13.7425583 29.696,13.6795583 29.645,13.6225583 C29.636,13.6115583 29.629,13.5985583 29.619,13.5875583 L17.38,0.50255826 C16.704,-0.22044174 15.661,-0.15544174 15.052,0.64655826 C14.442,1.45055826 14.497,2.68755826 15.174,3.41055826 L24.222,13.0845583 L1.648,13.0845583 C0.738,13.0845583 0,13.9605583 0,15.0415583 C0,16.1215583 0.738,16.9975583 1.648,16.9975583 L24.222,16.9975583 L15.174,26.6715583 C14.812,27.0585583 14.628,27.5915583 14.628,28.1265583 C14.628,28.5935583 14.768,29.0615583 15.052,29.4355583 C15.661,30.2385583 16.704,30.3025583 17.38,29.5795583"
})));
const nextArrow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
  "aria-label": "Next",
  class: "next"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "31",
  height: "31",
  viewBox: "0 0 31 31"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  d: "M17.38,29.5795583 L29.619,16.4945583 C29.629,16.4845583 29.636,16.4705583 29.645,16.4595583 C29.696,16.4035583 29.74,16.3405583 29.784,16.2765583 C29.811,16.2385583 29.839,16.2035583 29.863,16.1635583 C29.907,16.0895583 29.942,16.0095583 29.977,15.9295583 C29.992,15.8935583 30.012,15.8595583 30.026,15.8225583 C30.061,15.7265583 30.086,15.6245583 30.108,15.5215583 C30.114,15.4955583 30.124,15.4715583 30.128,15.4445583 C30.151,15.3145583 30.164,15.1795583 30.164,15.0415583 C30.164,14.9025583 30.151,14.7675583 30.128,14.6375583 C30.124,14.6115583 30.114,14.5875583 30.108,14.5615583 C30.086,14.4575583 30.061,14.3565583 30.026,14.2595583 C30.012,14.2225583 29.992,14.1895583 29.977,14.1535583 C29.942,14.0725583 29.907,13.9925583 29.863,13.9195583 C29.839,13.8795583 29.811,13.8445583 29.785,13.8065583 C29.74,13.7425583 29.696,13.6795583 29.645,13.6225583 C29.636,13.6115583 29.629,13.5985583 29.619,13.5875583 L17.38,0.50255826 C16.704,-0.22044174 15.661,-0.15544174 15.052,0.64655826 C14.442,1.45055826 14.497,2.68755826 15.174,3.41055826 L24.222,13.0845583 L1.648,13.0845583 C0.738,13.0845583 0,13.9605583 0,15.0415583 C0,16.1215583 0.738,16.9975583 1.648,16.9975583 L24.222,16.9975583 L15.174,26.6715583 C14.812,27.0585583 14.628,27.5915583 14.628,28.1265583 C14.628,28.5935583 14.768,29.0615583 15.052,29.4355583 C15.661,30.2385583 16.704,30.3025583 17.38,29.5795583"
})));
const leftAlign = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "21",
  height: "18",
  viewBox: "0 0 21 18",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(-29 -4) translate(29 4)",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 .708v15.851",
  className: "inspector-svg-stroke",
  "stroke-linecap": "square"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  className: "inspector-svg-fill",
  x: "5",
  y: "5",
  width: "16",
  height: "7",
  rx: "1"
})));
const centerAlign = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16",
  height: "18",
  viewBox: "0 0 16 18",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(-115 -4) translate(115 4)",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 .708v15.851",
  className: "inspector-svg-stroke",
  "stroke-linecap": "square"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  className: "inspector-svg-fill",
  y: "5",
  width: "16",
  height: "7",
  rx: "1"
})));
const rightAlign = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "21",
  height: "18",
  viewBox: "0 0 21 18",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  transform: "translate(0 1) rotate(-180 10.5 8.5)",
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 .708v15.851",
  className: "inspector-svg-stroke",
  "stroke-linecap": "square"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  className: "inspector-svg-fill",
  fillRule: "nonzero",
  x: "5",
  y: "5",
  width: "16",
  height: "7",
  rx: "1"
})));

/***/ }),

/***/ "./src/blocks/hero-banner/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/hero-banner/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/hero-banner/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/hero-banner/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/hero-banner/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/hero-banner/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"opry/hero-banner","version":"0.1.0","title":"Hero Banner","category":"opry","icon":"index-card","description":"The Hero Banner block includes Video, and Image elements.","keywords":["Hero Banner","Image"],"supports":{"html":false},"textdomain":"opry","attributes":{"blockID":{"type":"string","default":""},"mediaType":{"type":"string","default":""},"mediaMime":{"type":"string","default":""},"mediaID":{"type":"number","default":""},"mediaURL":{"type":"string","default":""},"mediaAlt":{"type":"string","default":""},"mediaWidth":{"type":"number","default":""},"mediaHeight":{"type":"number","default":""},"mediaCaption":{"type":"string","default":""},"showMediaCaption":{"type":"boolean","default":false},"videoPoster":{"type":"string","default":""},"videoAutplay":{"type":"boolean","default":false},"videoLoop":{"type":"boolean","default":false},"videoMuted":{"type":"boolean","default":false},"mediaAlign":{"type":"string","default":"left"},"heading":{"type":"string","default":""},"headingColor":{"type":"string","default":""},"btnOneText":{"type":"string","default":""},"btnTwoText":{"type":"string","default":""}},"editorScript":["file:./index.js","file:./view.js"],"viewScript":"file:./view.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/hero-banner/index": 0,
/******/ 			"blocks/hero-banner/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkopry"] = globalThis["webpackChunkopry"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/hero-banner/style-index"], () => (__webpack_require__("./src/blocks/hero-banner/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map