exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 5631:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__Z8PUO",
	"containerImgL": "Header_containerImgL__ikvxo",
	"titleCenter": "Header_titleCenter__qD11x",
	"containerImgR": "Header_containerImgR__2LJtp"
};


/***/ }),

/***/ 6501:
/***/ ((module) => {

// Exports
module.exports = {
	"navLeft": "NavLeft_navLeft__5mnHd",
	"container": "NavLeft_container__mZXz_",
	"reseaux": "NavLeft_reseaux__ZauUW",
	"items_reseaux": "NavLeft_items_reseaux__cwJuj",
	"top": "NavLeft_top__NIduY"
};


/***/ }),

/***/ 3110:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__97eC3",
	"header": "Home_header__CyQ_T",
	"navLL": "Home_navLL__0FiuZ",
	"main": "Home_main__OVLM4",
	"navLR": "Home_navLR__qPnoT",
	"footer": "Home_footer__zed0_",
	"containerGame": "Home_containerGame__qGjR_",
	"mainTitle": "Home_mainTitle__WMsYv",
	"contenu": "Home_contenu__29ihF",
	"cardSide": "Home_cardSide__XbJDC",
	"container_main": "Home_container_main__BKxOG",
	"data": "Home_data__Lh3Am",
	"bitcoin": "Home_bitcoin__CLnIp"
};


/***/ }),

/***/ 2378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// UNUSED EXPORTS: getStaticProps

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(5631);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/img/olilettres.png
/* harmony default export */ const olilettres = ({"src":"/_next/static/media/olilettres.7ccc1f35.png","height":1049,"width":713,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAAAAAAUmmrnAAAAOUlEQVR42mMQn3hwFgND9Oz5q8MZgmeVzUtiYCgpL5ZnYBA3UWJgYGRIjGJgYGWwUWdgYGBmYGAGAE2jChIyJh4bAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Header/Header.js





function Header(props) {
    console.log(props);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).containerImgL,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: olilettres,
                    width: "713",
                    height: "1049"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).titleCenter,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "OLYGOOD"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).containerImgR,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Gamer"
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const quote = await fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
    const data = await quote.json();
    return {
        props: {
            data
        }
    };
} // https://goquotes-api.herokuapp.com/api/v1/random?count=1


/***/ }),

/***/ 4388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavLeft)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/NavLeft/NavLeft.module.scss
var NavLeft_module = __webpack_require__(6501);
var NavLeft_module_default = /*#__PURE__*/__webpack_require__.n(NavLeft_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/assets/img/codepen.svg
/* harmony default export */ const codepen = ({"src":"/_next/static/media/codepen.024fdfae.svg","height":1024,"width":1024});
;// CONCATENATED MODULE: ./public/assets/img/github.png
/* harmony default export */ const github = ({"src":"/_next/static/media/github.5438e198.png","height":225,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAU0lEQVR42gFIALf/AP/27evr7fb/APbpwGlnwOn2AO65WNbXb7juAOthmf//s13sAOpwc+7tRHLqAO6/AMy4AMPtAPbqvHmDwOn2AP/27uno7fb/+LQxP/iRBtEAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/NavLeft/NavLeft.js







function NavLeft() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NavLeft_module_default()).navLeft,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NavLeft_module_default()).container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/ui",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Ui"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/game",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Game"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Contact"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (NavLeft_module_default()).reseaux,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "R\xe9seaux"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://codepen.io/your-work?cursor=ZD0wJm89MSZwPTEmdj00OTM2NzU4Nw==",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: codepen,
                                    layout: "responsive",
                                    width: "10",
                                    height: "10"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://codepen.io/your-work?cursor=ZD0wJm89MSZwPTEmdj00OTM2NzU4Nw==",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Codepen"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "https://github.com/olygood",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    "  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: github,
                                        layout: "responsive",
                                        width: "10",
                                        height: "10"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://github.com/olygood",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Github"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ })

};
;