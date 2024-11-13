/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/opry-venue/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/opry-venue/edit.js ***!
  \***************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/opry-venue/editor.scss");

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
function Edit({
  attributes,
  setAttributes,
  clientId,
  className
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
    logos
  } = attributes;
  const initList = () => {
    setAttributes({
      venue: [...venue, {
        heading: '',
        title: '',
        desc: '',
        showHeadingText: '',
        showTitleText: ''
      }]
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
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
      showTitleText: ''
    };
    setAttributes({
      venue: [...venue, attr]
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...venue];
    arrayCopy[oldIndex] = venue[newIndex];
    arrayCopy[newIndex] = venue[oldIndex];
    setAttributes({
      venue: arrayCopy
    });
  };
  const initLogo = () => {
    setAttributes({
      logos: [...logos, {
        logoID: '',
        logoURL: '',
        logoAlt: '',
        logoWidth: '',
        logoHeight: '',
        logolink: '',
        logolinkTarget: ''
      }]
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
      logolinkTarget: ''
    };
    setAttributes({
      logos: [...logos, attr]
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
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
    setAttributes({
      logos: arrayCopy
    });
  };
  const [openCardIndex, setOpenCardIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [openLogoIndex, setOpenLogoIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  setAttributes({
    blockID: `footer-opry-venue-${clientId}`
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'footer-opry-venue-info');
  const blockStyle = {};
  bgColor && (blockStyle.backgroundColor = bgColor);
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const descStyle = {};
  descColor && (descStyle.color = descColor);
  const titleStyle = {};
  titleColor && (titleStyle.color = titleColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "opry-block-sidebar"
  }, venue.map((detail, index) => {
    const isCardOpen = openCardIndex === index;
    return isCardOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      key: index,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Venue ${index + 1} Settings`, 'opry'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Heading', 'opry'),
      checked: detail.showHeadingText,
      onChange: value => {
        let arrayCopy = [...venue];
        arrayCopy[index].showHeadingText = value;
        setAttributes({
          venue: arrayCopy
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Title', 'opry'),
      checked: detail.showTitleText,
      onChange: value => {
        let arrayCopy = [...venue];
        arrayCopy[index].showTitleText = value;
        setAttributes({
          venue: arrayCopy
        });
      }
    }));
  }), logos.map((logo, index) => {
    const isLogoOpen = openLogoIndex === index;
    return isLogoOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      key: index,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(`Logo ${index + 1} Settings`, 'opry'),
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      type: "url",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Logo URL', 'opry'),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('https://google.com', 'opry'),
      value: logo.logolink,
      onChange: value => {
        let arrayCopy = [...logos];
        arrayCopy[index].logolink = value;
        setAttributes({
          logos: arrayCopy
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Open in New Tab', 'opry'),
      checked: logo.logolinkTarget,
      onChange: value => {
        let arrayCopy = [...logos];
        arrayCopy[index].logolinkTarget = value;
        setAttributes({
          logos: arrayCopy
        });
      }
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
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
      value: titleColor,
      onChange: value => {
        setAttributes({
          titleColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color', 'opry')
    }, {
      value: descColor,
      onChange: value => {
        setAttributes({
          descColor: value
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description Color', 'opry')
    }]
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__first-section opry-footer-bottom"
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
    className: "footer-logo__img",
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
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-links"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ['core/social-links'],
    template: [['core/social-links']]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: telNum,
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Telephone Text', 'opry'),
    onChange: telNum => setAttributes({
      telNum
    }),
    className: "phone-container"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__second-section opry-footer-bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue__row"
  }, venue.map((detail, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `footer-opry-venue__item show-items-hover-wrap`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "item-action-wrap small-icons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move Down', 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-down-alt2 move-up",
      "aria-hidden": "true",
      onClick: () => {
        moveItem(index, index - 1);
        setOpenCardIndex(index - 1);
      }
    })), index + 1 < venue.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move UP', 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-up-alt2 move-down",
      onClick: () => {
        moveItem(index, index + 1);
        setOpenCardIndex(index + 1);
      }
    }))), 1 < venue.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        let toDelete = confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to delete this item?', 'opry'));
        if (true === toDelete) {
          let executiveArray = [...venue];
          setOpenCardIndex(index - 1);
          executiveArray.splice(index, 1);
          setAttributes({
            venue: executiveArray
          });
        }
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `footer-opry-venue__card`,
      onClick: () => setOpenCardIndex(index)
    }, detail.showHeadingText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: detail.heading,
      tagName: "h4",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter heading', 'opry'),
      onChange: heading => {
        let arrayCopy = [...venue];
        arrayCopy[index].heading = heading;
        setAttributes({
          venue: arrayCopy
        });
      },
      style: headingStyle,
      className: "footer-opry-venue-card__heading"
    }), detail.showTitleText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: detail.title,
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Title', 'opry'),
      onChange: title => {
        let arrayCopy = [...venue];
        arrayCopy[index].title = title;
        setAttributes({
          venue: arrayCopy
        });
      },
      style: titleStyle,
      className: "footer-opry-venue-card__title"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      value: detail.desc,
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter Descriptions', 'opry'),
      onChange: title => {
        let arrayCopy = [...venue];
        arrayCopy[index].desc = title;
        setAttributes({
          venue: arrayCopy
        });
      },
      style: descStyle,
      className: "footer-opry-venue-card__description"
    })));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      addNewItem();
    },
    className: "dashicons dashicons-plus add-new-item"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__third-section opry-footer-bottom contact-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-logos__row"
  }, logos.map((executiveData, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `footer-opry-venue-logos__item show-items-hover-wrap`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "item-action-wrap small-icons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move Up', 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-up-alt2 move-up",
      "aria-hidden": "true",
      onClick: () => {
        moveLogo(index, index - 1);
        setOpenLogoIndex(index - 1);
      }
    })), index + 1 < logos.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Move Down', 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-down-alt2 move-down",
      onClick: () => {
        moveLogo(index, index + 1);
        setOpenLogoIndex(index + 1);
      }
    }))), 1 < logos.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", 'opry')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        let toDelete = confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to delete this item?', 'opry'));
        if (true === toDelete) {
          let executiveArray = [...logos];
          setOpenLogoIndex(index - 1);
          executiveArray.splice(index, 1);
          setAttributes({
            logos: executiveArray
          });
        }
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `footer-opry-venue-logos__left`,
      onClick: () => setOpenLogoIndex(index)
    }, executiveData.logoURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-preview image-controle-visible-hover"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-controls small-icons icon-center-fixed"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: item => {
        let arrayCopy = [...logos];
        arrayCopy[index].logoID = item.id;
        arrayCopy[index].logoURL = item.url;
        arrayCopy[index].logoAlt = item.alt;
        arrayCopy[index].logoWidth = item.width;
        arrayCopy[index].logoHeight = item.height;
        setAttributes({
          logos: arrayCopy
        });
      },
      allowedTypes: ['image', 'gif'],
      value: executiveData.logoID,
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
          let arrayCopy = [...logos];
          arrayCopy[index].logoID = '';
          arrayCopy[index].logoURL = '';
          arrayCopy[index].logoAlt = '';
          arrayCopy[index].logoWidth = '';
          arrayCopy[index].logoHeight = '';
          setAttributes({
            logos: arrayCopy
          });
        }
      }
    })))), executiveData.logoURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "footer-opry-venue-logos__img",
      "data-img-id": executiveData.logoID,
      src: executiveData.logoURL,
      alt: executiveData.logoAlt,
      width: executiveData.logoWidth,
      height: executiveData.logoHeight
    }))), !executiveData.logoURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: item => {
        let arrayCopy = [...logos];
        arrayCopy[index].logoID = item.id;
        arrayCopy[index].logoURL = item.url;
        arrayCopy[index].logoAlt = item.alt;
        arrayCopy[index].logoWidth = item.width;
        arrayCopy[index].logoHeight = item.height;
        setAttributes({
          logos: arrayCopy
        });
      },
      allowedTypes: ['image'],
      value: executiveData.logoURL,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "upload-image"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image', 'opry')))
    }))));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      addNewLogo();
    },
    className: "dashicons dashicons-plus add-new-item"
  })))));
}

/***/ }),

/***/ "./src/blocks/opry-venue/index.js":
/*!****************************************!*\
  !*** ./src/blocks/opry-venue/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/opry-venue/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/opry-venue/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/opry-venue/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/opry-venue/style.scss");
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

/***/ "./src/blocks/opry-venue/save.js":
/*!***************************************!*\
  !*** ./src/blocks/opry-venue/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
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

function Save({
  attributes,
  className
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
    logos
  } = attributes;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'footer-opry-venue-info');
  const blockStyle = {};
  bgColor && (blockStyle.backgroundColor = bgColor);
  const headingStyle = {};
  headingColor && (headingStyle.color = headingColor);
  const descStyle = {};
  descColor && (descStyle.color = descColor);
  const titleStyle = {};
  titleColor && (titleStyle.color = titleColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classes,
    id: blockID,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__first-section opry-footer-bottom"
  }, imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "footer-logo__href",
    href: "/"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "footer-logo__img",
    "data-img-id": imageID,
    src: imageURL,
    alt: imageAlt,
    width: imageWidth,
    height: imageHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "social-links"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: telNum,
    tagName: "p",
    className: "phone-container"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__second-section opry-footer-bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue__row"
  }, venue.map((detail, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `footer-opry-venue__item show-items-hover-wrap`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `footer-opry-venue__card`
    }, detail.heading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: detail.heading,
      tagName: "h4",
      style: headingStyle,
      className: "footer-opry-venue-card__heading"
    }), detail.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: detail.title,
      tagName: "p",
      style: titleStyle,
      className: "footer-opry-venue-card__title"
    }), detail.desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: detail.desc,
      tagName: "p",
      style: descStyle,
      className: "footer-opry-venue-card__description"
    })));
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-info__third-section opry-footer-bottom contact-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "footer-opry-venue-logos__row"
  }, logos.map((executiveData, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `footer-opry-venue-logos__item`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `footer-opry-venue-logos__left`
    }, executiveData.logoURL && (executiveData.logolink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: executiveData.logolink,
      target: executiveData.logolinkTarget ? '_blank' : false,
      rel: "noopener"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "footer-opry-venue-logos__img",
      "data-img-id": executiveData.logoID,
      src: executiveData.logoURL,
      alt: executiveData.logoAlt,
      width: executiveData.logoWidth,
      height: executiveData.logoHeight
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "footer-opry-venue-logos__img",
      "data-img-id": executiveData.logoID,
      src: executiveData.logoURL,
      alt: executiveData.logoAlt,
      width: executiveData.logoWidth,
      height: executiveData.logoHeight
    }))));
  }))));
}

/***/ }),

/***/ "./src/blocks/opry-venue/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/opry-venue/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/opry-venue/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/opry-venue/style.scss ***!
  \******************************************/
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

/***/ "./src/blocks/opry-venue/block.json":
/*!******************************************!*\
  !*** ./src/blocks/opry-venue/block.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"opry/opry-venue","version":"0.1.0","title":"Footer Opry Venue","category":"opry","icon":"building","description":"Opry Venue block.","keywords":["Venue","Dynamic"],"supports":{"html":false},"textdomain":"opry","attributes":{"blockID":{"type":"string","default":""},"imageID":{"type":"number","default":""},"imageURL":{"type":"string","default":""},"imageWidth":{"type":"number","default":""},"imageHeight":{"type":"number","default":""},"imageAlt":{"type":"string","default":""},"telNum":{"type":"string","default":""},"venue":{"type":"array","default":[],"query":{"heading":{"type":"string","default":""},"showHeadingText":{"type":"boolean","default":false},"title":{"type":"string","default":""},"showTitleText":{"type":"boolean","default":false},"desc":{"type":"string","default":""}}},"headingColor":{"type":"string","default":""},"titleColor":{"type":"string","default":""},"descColor":{"type":"string","default":""},"bgColor":{"type":"string","default":""},"logos":{"type":"array","default":[],"query":{"logoID":{"type":"string","default":""},"logoURL":{"type":"string","default":""},"logoAlt":{"type":"string","default":""},"logoWidth":{"type":"string","default":""},"logoHeight":{"type":"string","default":""},"logolink":{"type":"string","default":""},"logolinkTarget":{"type":"string","default":""}}}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/opry-venue/index": 0,
/******/ 			"blocks/opry-venue/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/opry-venue/style-index"], () => (__webpack_require__("./src/blocks/opry-venue/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map