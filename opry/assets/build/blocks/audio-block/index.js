/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/audio-block/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/audio-block/edit.js ***!
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "./src/blocks/common.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/audio-block/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */







/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
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
  setAttributes({
    blockID: `footer-audio-${clientId}`
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, 'footer-audio');
  const audioRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const [isPlaying, setIsPlaying] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
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
  const playIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: isPlaying ? 'playing' : 'paused',
    width: "50px",
    height: "50px",
    viewBox: "0 0 50 50",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Symbols",
    stroke: "none",
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "icon:-play-copy",
    fill: "#FFFFFF",
    "fill-rule": "nonzero"
  }, !isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#FFFFFF",
    "fill-rule": "nonzero"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "play-icon-path",
    d: "M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.3726708,40.3726708 C36.265528,44.4798137 30.8074534,46.7391304 25,46.7391304 C19.1925466,46.7391304 13.734472,44.4798137 9.62732919,40.3726708 C5.52018634,36.265528 3.26086957,30.8074534 3.26086957,25 C3.26086957,19.1925466 5.52018634,13.734472 9.62732919,9.62732919 C13.734472,5.52018634 19.1925466,3.26086957 25,3.26086957 C30.8074534,3.26086957 36.265528,5.52018634 40.3726708,9.62732919 C44.4798137,13.734472 46.7391304,19.1925466 46.7391304,25 C46.7391304,30.8074534 44.4798137,36.265528 40.3726708,40.3726708 Z M31.8831522,23.7358101 L22.1005435,17.6480669 C21.6032609,17.3360701 20.9592391,17.3056314 20.4293478,17.5719702 C19.8994565,17.8306992 19.5652174,18.3481574 19.5652174,18.9112736 L19.5652174,31.0867599 C19.5652174,31.6498761 19.8994565,32.1673343 20.4293478,32.4260634 C20.6657609,32.5478182 20.9347826,32.6086957 21.1956522,32.6086957 C21.513587,32.6086957 21.8315217,32.5249892 22.1005435,32.3499666 L31.8831522,26.2622235 C32.3396739,25.9806653 32.6086957,25.5012556 32.6086957,24.9990168 C32.6086957,24.496778 32.3396739,24.0173682 31.8831522,23.7358101 Z M22.826087,28.2608696 L22.826087,21.7391304 L28.2608696,25.0038228 L22.826087,28.2608696 Z"
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "play-icon-path",
    d: "M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.1118012,40.1118012 C36.0046584,44.2189441 30.5465839,46.4782609 24.7391304,46.4782609 C18.931677,46.4782609 13.4736025,44.2189441 9.36645963,40.1118012 C5.25931677,36.0046584 3,30.5465839 3,24.7391304 C3,18.931677 5.25931677,13.4736025 9.36645963,9.36645963 C13.4736025,5.25931677 18.931677,3 24.7391304,3 C30.5465839,3 36.0046584,5.25931677 40.1118012,9.36645963 C44.2189441,13.4736025 46.4782609,18.931677 46.4782609,24.7391304 C46.4782609,30.5465839 44.2189441,36.0046584 40.1118012,40.1118012 Z M20.5,18 C21.3284271,18 22,18.6715729 22,19.5 L22,29.5 C22,30.3284271 21.3284271,31 20.5,31 C19.6715729,31 19,30.3284271 19,29.5 L19,19.5 C19,18.6715729 19.6715729,18 20.5,18 Z M28.5,18 C29.3284271,18 30,18.6715729 30,19.5 L30,29.5 C30,30.3284271 29.3284271,31 28.5,31 C27.6715729,31 27,30.3284271 27,29.5 L27,19.5 C27,18.6715729 27.6715729,18 28.5,18 Z"
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry-block-sidebar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Settings', 'opry'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
    value: gradientColor,
    onChange: value => {
      setAttributes({
        gradientColor: value
      });
    },
    gradients: [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Gradient 1', 'opry'),
      gradient: "linear-gradient(-57deg, #364493 0%, #3b1c3d 100%)",
      slug: 'partner-gradient-1'
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Gradient 2', 'opry'),
      gradient: 'linear-gradient(225deg, #3f51be 0%, #980000 100%)',
      slug: 'partner-gradient-2'
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'opry')), !mediaURL ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        mediaID: item.id,
        mediaURL: item.url
      });
    },
    allowedTypes: ['image'],
    value: mediaURL,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'opry'))
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: mediaURL,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('bg preview', 'opry')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        mediaID: item.id,
        mediaURL: item.url
      });
    },
    allowedTypes: ['image'],
    value: mediaID,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button is-secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image', 'opry'));
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        mediaID: '',
        mediaURL: ''
      });
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'opry'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Position', 'opry'),
    value: bgPosition,
    options: _common__WEBPACK_IMPORTED_MODULE_5__.backgroundPositions,
    onChange: value => {
      setAttributes({
        bgPosition: value
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'opry'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'opry'),
    colorSettings: [{
      value: bgColor,
      onChange: value => {
        setAttributes({
          bgColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'opry')
    }, {
      value: headingColor,
      onChange: value => {
        setAttributes({
          headingColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Color', 'opry')
    }, {
      value: descColor,
      onChange: value => {
        setAttributes({
          descColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description Color', 'opry')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Audio Settings', 'opry'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Audio File', 'opry')), !audioURL ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        audioID: item.id,
        audioURL: item.url
      });
    },
    allowedTypes: ['audio'],
    value: audioURL,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Audio', 'opry'))
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("audio", {
    controls: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: audioURL,
    type: "audio/mpeg"
  }), "Your browser does not support the audio element."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        audioID: item.id,
        audioURL: item.url
      });
    },
    allowedTypes: ['audio'],
    value: audioID,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button is-secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Audio', 'opry'));
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        audioID: '',
        audioURL: ''
      });
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Audio', 'opry')))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "footer-audio-gradiant",
    style: gradientStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__first-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: heading,
    tagName: "h2",
    className: "footer-audio__heading",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Heading', 'opry'),
    onChange: heading => {
      setAttributes({
        heading: heading
      });
    },
    style: headingStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: desc,
    tagName: "p",
    className: "footer-audio__desc",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Description', 'opry'),
    onChange: desc => {
      setAttributes({
        desc: desc
      });
    },
    style: descStyle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__second-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-player"
  }, audioURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("audio", {
    controls: true,
    style: {
      display: 'none'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: audioURL,
    type: "audio/mpeg"
  }), "Your browser does not support the audio element."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: toggleAudio,
    className: "radio_player",
    title: isPlaying ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pause WSM Radio', 'opry') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play WSM Radio', 'opry'),
    "aria-label": isPlaying ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pause WSM Radio', 'opry') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play WSM Radio', 'opry'),
    "data-audio-src": audioURL,
    src: audioURL,
    id: "play-wsm-radio"
  }, playIcon, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: audioText,
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Audio Text', 'opry'),
    onChange: audioText => setAttributes({
      audioText
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("audio", {
    ref: audioRef,
    src: audioURL
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__btn-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: btnText,
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Text', 'opry'),
    onChange: btnText => setAttributes({
      btnText
    }),
    className: "btn-main footer-audio-inner__btn"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__third-section"
  }, imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-controls small-icons icon-center-fixed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        imageID: item.id,
        imageURL: item.url,
        imageAlt: item.alt,
        imageHeight: item.height,
        imageWidth: item.width
      });
    },
    allowedTypes: ['image'],
    value: imageURL,
    render: ({
      open
    }) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Image', 'opry')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "dashicons dashicons-edit edit-image",
        onClick: open
      }));
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image', 'opry')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "dashicons dashicons-no-alt remove-image",
    onClick: () => {
      let toDelete = confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to remove this image?', 'opry'));
      if (true === toDelete) {
        setAttributes({
          imageID: "",
          imageURL: "",
          imageAlt: "",
          imageHeight: "",
          imageWidth: ""
        });
      }
    }
  })))), imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "footer-audio__img",
    "data-img-id": imageID,
    src: imageURL,
    alt: imageAlt,
    width: imageWidth,
    height: imageHeight
  }))), !imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: item => {
      setAttributes({
        imageID: item.id,
        imageURL: item.url,
        imageAlt: item.alt,
        imageHeight: item.height,
        imageWidth: item.width
      });
    },
    allowedTypes: ['image'],
    value: imageURL,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "upload-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image', 'opry')))
  })))))));
}

/***/ }),

/***/ "./src/blocks/audio-block/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/audio-block/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/audio-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/audio-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/audio-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/audio-block/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/audio-block/save.js":
/*!****************************************!*\
  !*** ./src/blocks/audio-block/save.js ***!
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
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
    heading,
    headingColor,
    desc,
    descColor,
    btnText,
    bgColor,
    mediaURL,
    imageID,
    imageURL,
    imageAlt,
    imageWidth,
    imageHeight,
    bgPosition,
    gradientColor,
    audioURL,
    audioText
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'footer-audio');
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "footer-audio-gradiant",
    style: gradientStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__first-section"
  }, heading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: heading,
    tagName: "h2",
    className: "footer-audio__heading",
    style: headingStyle
  }), desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: desc,
    tagName: "h2",
    className: "footer-audio__desc",
    style: descStyle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__second-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-player"
  }, audioURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("audio", {
    id: "audio-block",
    src: audioURL
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "radio_player",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play WSM Radio', 'opry'),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Play WSM Radio', 'opry'),
    "data-audio-src": audioURL,
    src: audioURL,
    id: "play-wsm-radio"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "playing",
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "play-icon",
    fill: "#FFFFFF",
    "fill-rule": "nonzero"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "play-icon-path",
    d: "M42.6796875,7.3203125 C37.953125,2.6015625 31.6796875,0 25,0 C18.3203125,0 12.046875,2.6015625 7.3203125,7.3203125 C2.6015625,12.046875 0,18.3203125 0,25 C0,31.6796875 2.6015625,37.953125 7.3203125,42.6796875 C12.046875,47.3984375 18.3203125,50 25,50 C31.6796875,50 37.953125,47.3984375 42.6796875,42.6796875 C47.3984375,37.953125 50,31.6796875 50,25 C50,18.3203125 47.3984375,12.046875 42.6796875,7.3203125 Z M40.3726708,40.3726708 C36.265528,44.4798137 30.8074534,46.7391304 25,46.7391304 C19.1925466,46.7391304 13.734472,44.4798137 9.62732919,40.3726708 C5.52018634,36.265528 3.26086957,30.8074534 3.26086957,25 C3.26086957,19.1925466 5.52018634,13.734472 9.62732919,9.62732919 C13.734472,5.52018634 19.1925466,3.26086957 25,3.26086957 C30.8074534,3.26086957 36.265528,5.52018634 40.3726708,9.62732919 C44.4798137,13.734472 46.7391304,19.1925466 46.7391304,25 C46.7391304,30.8074534 44.4798137,36.265528 40.3726708,40.3726708 Z M31.8831522,23.7358101 L22.1005435,17.6480669 C21.6032609,17.3360701 20.9592391,17.3056314 20.4293478,17.5719702 C19.8994565,17.8306992 19.5652174,18.3481574 19.5652174,18.9112736 L19.5652174,31.0867599 C19.5652174,31.6498761 19.8994565,32.1673343 20.4293478,32.4260634 C20.6657609,32.5478182 20.9347826,32.6086957 21.1956522,32.6086957 C21.513587,32.6086957 21.8315217,32.5249892 22.1005435,32.3499666 L31.8831522,26.2622235 C32.3396739,25.9806653 32.6086957,25.5012556 32.6086957,24.9990168 C32.6086957,24.496778 32.3396739,24.0173682 31.8831522,23.7358101 Z M22.826087,28.2608696 L22.826087,21.7391304 L28.2608696,25.0038228 L22.826087,28.2608696 Z"
  }))), audioText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: audioText,
    tagName: "p"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__btn-section"
  }, btnText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: btnText,
    tagName: "p",
    className: "btn-main footer-audio-inner__btn"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-audio-inner__third-section"
  }, imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "footer-audio__img",
    "data-img-id": imageID,
    src: imageURL,
    alt: imageAlt,
    width: imageWidth,
    height: imageHeight
  })))));
}

/***/ }),

/***/ "./src/blocks/common.js":
/*!******************************!*\
  !*** ./src/blocks/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundBlendmodes: () => (/* binding */ backgroundBlendmodes),
/* harmony export */   backgroundPositions: () => (/* binding */ backgroundPositions),
/* harmony export */   backgroundSizes: () => (/* binding */ backgroundSizes)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


// background image sizes
const backgroundSizes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Background Size', 'opry'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('auto', 'opry'),
  value: 'auto'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('cover', 'opry'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('contain', 'opry'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('initial', 'opry'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('inherit', 'opry'),
  value: 'inherit'
}];

// background image positions
const backgroundPositions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Position', 'opry'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('inherit', 'opry'),
  value: 'inherit'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('initial', 'opry'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bottom', 'opry'),
  value: 'bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center', 'opry'),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left', 'opry'),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right', 'opry'),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('top', 'opry'),
  value: 'top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('unset', 'opry'),
  value: 'unset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center center', 'opry'),
  value: 'center center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left top', 'opry'),
  value: 'left top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left center', 'opry'),
  value: 'left center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left bottom', 'opry'),
  value: 'left bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right top', 'opry'),
  value: 'right top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right center', 'opry'),
  value: 'right center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right bottom', 'opry'),
  value: 'right bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center top', 'opry'),
  value: 'center top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center bottom', 'opry'),
  value: 'center bottom'
}];
const backgroundBlendmodes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'opry'),
  value: 'normal'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multiply', 'opry'),
  value: 'multiply'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Screen', 'opry'),
  value: 'screen'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay', 'opry'),
  value: 'overlay'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darken', 'opry'),
  value: 'darken'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lighten', 'opry'),
  value: 'lighten'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Dodge', 'opry'),
  value: 'color-dodge'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color Burn', 'opry'),
  value: 'color-burn'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hard Light', 'opry'),
  value: 'hard-light'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Soft Light', 'opry'),
  value: 'soft-light'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Difference', 'opry'),
  value: 'difference'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Exclusion', 'opry'),
  value: 'exclusion'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hue', 'opry'),
  value: 'hue'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Saturation', 'opry'),
  value: 'saturation'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color', 'opry'),
  value: 'color'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Luminosity', 'opry'),
  value: 'luminosity'
}];

/***/ }),

/***/ "./src/blocks/audio-block/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/audio-block/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/audio-block/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/audio-block/style.scss ***!
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

/***/ "./src/blocks/audio-block/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/audio-block/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"opry/audio-block","version":"0.1.0","title":"Footer Audio Block","category":"opry","icon":"format-audio","description":"Footer Audio Block Section","keywords":["Footer","Audio","Block"],"supports":{"html":false},"textdomain":"opry","attributes":{"blockID":{"type":"string","default":""},"heading":{"type":"string","default":""},"headingColor":{"type":"string","default":""},"desc":{"type":"string","default":""},"descColor":{"type":"string","default":""},"btnText":{"type":"string","default":""},"mediaID":{"type":"string","default":""},"mediaURL":{"type":"string","default":""},"imageID":{"type":"number","default":""},"imageURL":{"type":"string","default":""},"imageWidth":{"type":"number","default":""},"imageHeight":{"type":"number","default":""},"imageAlt":{"type":"string","default":""},"bgColor":{"type":"string","default":""},"bgPosition":{"type":"string","default":""},"gradientColor":{"type":"string","default":"linear-gradient(-57deg, #364493 0%, #3b1c3d 100%)"},"audioID":{"type":"string","default":""},"audioURL":{"type":"string","default":""},"audioText":{"type":"string","default":""}},"editorScript":"file:./index.js","viewScript":"file:./view.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/audio-block/index": 0,
/******/ 			"blocks/audio-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/audio-block/style-index"], () => (__webpack_require__("./src/blocks/audio-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map