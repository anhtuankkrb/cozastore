module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/backToTop.js":
/*!*********************************!*\
  !*** ./components/backToTop.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackToTop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\backToTop.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function BackToTop() {
  return __jsx("div", {
    className: "btn-back-to-top",
    id: "myBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("span", {
    className: "symbol-btn-back-to-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-chevron-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })));
}

/***/ }),

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\cart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Cart() {
  return __jsx("div", {
    className: "wrap-header-cart js-panel-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "s-full js-hide-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("div", {
    className: "header-cart flex-col-l p-l-65 p-r-25",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "header-cart-title flex-w flex-sb-m p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: "mtext-103 cl2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Your Cart"), __jsx("div", {
    className: "fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), __jsx("div", {
    className: "header-cart-content flex-w js-pscroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("ul", {
    className: "header-cart-wrapitem w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("li", {
    className: "header-cart-item flex-w flex-t m-b-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "images/item-cart-01.jpg",
    alt: "IMG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "header-cart-item-txt p-t-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "header-cart-item-name m-b-18 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "White Shirt Pleat"), __jsx("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "1 x $19.00"))), __jsx("li", {
    className: "header-cart-item flex-w flex-t m-b-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: "images/item-cart-02.jpg",
    alt: "IMG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "header-cart-item-txt p-t-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "header-cart-item-name m-b-18 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Converse All Star"), __jsx("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "1 x $39.00"))), __jsx("li", {
    className: "header-cart-item flex-w flex-t m-b-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "header-cart-item-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "images/item-cart-03.jpg",
    alt: "IMG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    className: "header-cart-item-txt p-t-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "header-cart-item-name m-b-18 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Nixon Porter Leather"), __jsx("span", {
    className: "header-cart-item-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "1 x $17.00")))), __jsx("div", {
    className: "w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "header-cart-total w-full p-tb-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Total: $75.00"), __jsx("div", {
    className: "header-cart-buttons flex-w w-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    href: "shoping-cart.html",
    className: "flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "View Cart"), __jsx("a", {
    href: "shoping-cart.html",
    className: "flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Check Out"))))));
}

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Footer() {
  return __jsx("footer", {
    className: "bg3 p-t-75 p-b-32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-lg-3 p-b-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h4", {
    className: "stext-301 cl0 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Categories"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Women")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Men")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Shoes")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Watches")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 p-b-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h4", {
    className: "stext-301 cl0 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Help"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Track Order")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Returns")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Shipping")), __jsx("li", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "stext-107 cl7 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "FAQs")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 p-b-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("h4", {
    className: "stext-301 cl0 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("p", {
    className: "stext-107 cl7 size-201",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879"), __jsx("div", {
    className: "p-t-27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "fs-18 cl7 hov-cl1 trans-04 m-r-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "fs-18 cl7 hov-cl1 trans-04 m-r-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "fs-18 cl7 hov-cl1 trans-04 m-r-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })))), __jsx("div", {
    className: "col-sm-6 col-lg-3 p-b-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("h4", {
    className: "stext-301 cl0 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Newsletter"), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-input1 w-full p-b-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("input", {
    className: "input1 bg-none plh1 stext-107 cl7",
    type: "text",
    name: "email",
    placeholder: "email@example.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    className: "focus-input1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("div", {
    className: "p-t-18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("button", {
    className: "flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Subscribe"))))), __jsx("div", {
    className: "p-t-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "flex-c-m flex-w p-b-18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "m-all-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-pay-01.png",
    alt: "ICON-PAY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "m-all-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-pay-02.png",
    alt: "ICON-PAY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "m-all-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-pay-03.png",
    alt: "ICON-PAY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "m-all-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-pay-04.png",
    alt: "ICON-PAY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "m-all-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-pay-05.png",
    alt: "ICON-PAY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx("p", {
    className: "stext-107 cl6 txt-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Copyright \xA9 All rights reserved | This template is made with", " ", __jsx("i", {
    className: "fa fa-heart-o",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), " by", " ", __jsx("a", {
    href: "https://colorlib.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Colorlib")))));
}

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header() {
  return __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-menu-desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("nav", {
    className: "limiter-menu-desktop container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/logo-01.png",
    alt: "IMG-LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("div", {
    className: "menu-desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("ul", {
    className: "main-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("li", {
    className: "active-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Shop"))), __jsx("li", {
    className: "label1",
    "data-label1": "hot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: "shoping-cart.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Features")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "About"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Contact"))))), __jsx("div", {
    className: "wrap-icon-header flex-w flex-r-m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    className: "icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart",
    "data-notify": 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti",
    "data-notify": 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-favorite-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))))), __jsx("div", {
    className: "wrap-header-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "logo-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/logo-01.png",
    alt: "IMG-LOGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }))), __jsx("div", {
    className: "wrap-icon-header flex-w flex-r-m m-r-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("div", {
    className: "icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart",
    "data-notify": 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti",
    "data-notify": 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-favorite-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), __jsx("div", {
    className: "btn-show-menu-mobile hamburger hamburger--squeeze",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("span", {
    className: "hamburger-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("span", {
    className: "hamburger-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))), __jsx("div", {
    className: "menu-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("ul", {
    className: "main-menu-m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Home"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Shop"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("a", {
    href: "shoping-cart.html",
    className: "label1 rs1",
    "data-label1": "hot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Features")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Blog"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "About"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Contact"))))), __jsx("div", {
    className: "modal-search-header flex-c-m trans-04 js-hide-modal-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "container-search-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("button", {
    className: "flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-close2.png",
    alt: "CLOSE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx("form", {
    className: "wrap-search-header flex-w p-l-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("button", {
    className: "flex-c-m trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("input", {
    className: "plh3",
    type: "text",
    name: "search",
    placeholder: "Search...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./components/cart.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var _backToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backToTop */ "./components/backToTop.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_backToTop__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/layoutHasModal.js":
/*!**************************************!*\
  !*** ./components/layoutHasModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutHasModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./components/modal.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\layoutHasModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function LayoutHasModal(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children), __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}

/***/ }),

/***/ "./components/modal.js":
/*!*****************************!*\
  !*** ./components/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\components\\modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Modal() {
  return __jsx("div", {
    className: "wrap-modal1 js-modal1 p-t-60 p-b-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "overlay-modal1 js-hide-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("button", {
    className: "how-pos3 hov3 trans-04 js-hide-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: "images/icons/icon-close.png",
    alt: "CLOSE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6 col-lg-7 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "p-l-25 p-r-30 p-lr-0-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-slick3 flex-sb flex-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-slick3-dots",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "wrap-slick3-arrows flex-sb-m flex-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("div", {
    className: "slick3 gallery-lb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "item-slick3",
    "data-thumb": "images/product-detail-01.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-pic-w pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-detail-01.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("a", {
    className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
    href: "images/product-detail-01.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))), __jsx("div", {
    className: "item-slick3",
    "data-thumb": "images/product-detail-02.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-pic-w pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-detail-02.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("a", {
    className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
    href: "images/product-detail-02.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })))), __jsx("div", {
    className: "item-slick3",
    "data-thumb": "images/product-detail-03.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-pic-w pos-relative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-detail-03.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("a", {
    className: "flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04",
    href: "images/product-detail-03.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-expand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))))))), __jsx("div", {
    className: "col-md-6 col-lg-5 p-b-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "p-r-50 p-t-5 p-lr-0-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h4", {
    className: "mtext-105 cl2 js-name-detail p-b-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Lightweight Jacket"), __jsx("span", {
    className: "mtext-106 cl2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "$58.79"), __jsx("p", {
    className: "stext-102 cl3 p-t-23",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat."), __jsx("div", {
    className: "p-t-33",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "flex-w flex-r-m p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "size-203 flex-c-m respon6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Size"), __jsx("div", {
    className: "size-204 respon6-next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "rs1-select2 bor8 bg0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("select", {
    className: "js-select2",
    name: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Choose an option"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Size S"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Size M"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Size L"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Size XL")), __jsx("div", {
    className: "dropDownSelect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })))), __jsx("div", {
    className: "flex-w flex-r-m p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "size-203 flex-c-m respon6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Color"), __jsx("div", {
    className: "size-204 respon6-next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "rs1-select2 bor8 bg0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("select", {
    className: "js-select2",
    name: "time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Choose an option"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Red"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Blue"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "White"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Grey")), __jsx("div", {
    className: "dropDownSelect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })))), __jsx("div", {
    className: "flex-w flex-r-m p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "size-204 flex-w flex-m respon6-next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-num-product flex-w m-r-20 m-tb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("i", {
    className: "fs-16 zmdi zmdi-minus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx("input", {
    className: "mtext-104 cl3 txt-center num-product",
    type: "number",
    name: "num-product",
    defaultValue: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("div", {
    className: "btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("i", {
    className: "fs-16 zmdi zmdi-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), __jsx("button", {
    className: "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Add to cart")))), __jsx("div", {
    className: "flex-w flex-m p-l-100 p-t-40 respon7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: "flex-m bor9 p-r-10 m-r-11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100",
    "data-tooltip": "Add to Wishlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }))), __jsx("a", {
    href: "#",
    className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
    "data-tooltip": "Facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
    "data-tooltip": "Twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100",
    "data-tooltip": "Google Plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-google-plus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })))))))));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layoutHasModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layoutHasModal */ "./components/layoutHasModal.js");
var _jsxFileName = "C:\\Users\\pc\\Desktop\\cozastore\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layoutHasModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("section", {
    className: "section-slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-slick1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "slick1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "item-slick1",
    style: {
      backgroundImage: 'url(images/slide-01.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "flex-col-l-m h-full p-t-100 p-b-30 respon5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "fadeInDown",
    "data-delay": 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    className: "ltext-101 cl2 respon2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Women Collection 2018")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "fadeInUp",
    "data-delay": 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "ltext-201 cl2 p-t-19 p-b-43 respon1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "NEW SEASON")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "zoomIn",
    "data-delay": 1600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    href: "product.html",
    className: "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Shop Now"))))), __jsx("div", {
    className: "item-slick1",
    style: {
      backgroundImage: 'url(images/slide-02.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "container h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "flex-col-l-m h-full p-t-100 p-b-30 respon5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "rollIn",
    "data-delay": 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("span", {
    className: "ltext-101 cl2 respon2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Men New-Season")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "lightSpeedIn",
    "data-delay": 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "ltext-201 cl2 p-t-19 p-b-43 respon1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Jackets & Coats")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "slideInUp",
    "data-delay": 1600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "product.html",
    className: "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Shop Now"))))), __jsx("div", {
    className: "item-slick1",
    style: {
      backgroundImage: 'url(images/slide-03.jpg)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "container h-full",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "flex-col-l-m h-full p-t-100 p-b-30 respon5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "rotateInDownLeft",
    "data-delay": 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("span", {
    className: "ltext-101 cl2 respon2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Men Collection 2018")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "rotateInUpRight",
    "data-delay": 800,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h2", {
    className: "ltext-201 cl2 p-t-19 p-b-43 respon1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "New arrivals")), __jsx("div", {
    className: "layer-slick1 animated visible-false",
    "data-appear": "rotateIn",
    "data-delay": 1600,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    href: "product.html",
    className: "flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Shop Now")))))))), __jsx("div", {
    className: "sec-banner bg0 p-t-80 p-b-50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-6 col-xl-4 p-b-30 m-lr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "block1 wrap-pic-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("img", {
    src: "images/banner-01.jpg",
    alt: "IMG-BANNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("a", {
    href: "product.html",
    className: "block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "block1-txt-child1 flex-col-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("span", {
    className: "block1-name ltext-102 trans-04 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Women"), __jsx("span", {
    className: "block1-info stext-102 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Spring 2018")), __jsx("div", {
    className: "block1-txt-child2 p-b-4 trans-05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "block1-link stext-101 cl0 trans-09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Shop Now"))))), __jsx("div", {
    className: "col-md-6 col-xl-4 p-b-30 m-lr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "block1 wrap-pic-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("img", {
    src: "images/banner-02.jpg",
    alt: "IMG-BANNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), __jsx("a", {
    href: "product.html",
    className: "block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "block1-txt-child1 flex-col-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("span", {
    className: "block1-name ltext-102 trans-04 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Men"), __jsx("span", {
    className: "block1-info stext-102 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Spring 2018")), __jsx("div", {
    className: "block1-txt-child2 p-b-4 trans-05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("div", {
    className: "block1-link stext-101 cl0 trans-09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Shop Now"))))), __jsx("div", {
    className: "col-md-6 col-xl-4 p-b-30 m-lr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "block1 wrap-pic-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("img", {
    src: "images/banner-03.jpg",
    alt: "IMG-BANNER",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("a", {
    href: "product.html",
    className: "block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "block1-txt-child1 flex-col-l",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("span", {
    className: "block1-name ltext-102 trans-04 p-b-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Accessories"), __jsx("span", {
    className: "block1-info stext-102 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "New Trend")), __jsx("div", {
    className: "block1-txt-child2 p-b-4 trans-05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: "block1-link stext-101 cl0 trans-09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Shop Now")))))))), __jsx("section", {
    className: "bg0 p-t-23 p-b-140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: "p-b-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("h3", {
    className: "ltext-103 cl5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Product Overview")), __jsx("div", {
    className: "flex-w flex-sb-m p-b-52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "flex-w flex-l-m filter-tope-group m-tb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1",
    "data-filter": "*",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "All Products"), __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",
    "data-filter": ".women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Women"), __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",
    "data-filter": ".men",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Men"), __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",
    "data-filter": ".bag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Bag"), __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",
    "data-filter": ".shoes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Shoes"), __jsx("button", {
    className: "stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",
    "data-filter": ".watches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Watches")), __jsx("div", {
    className: "flex-w flex-c-m m-tb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: "flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("i", {
    className: "icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), __jsx("i", {
    className: "icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), "Filter"), __jsx("div", {
    className: "flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("i", {
    className: "icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx("i", {
    className: "icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), "Search")), __jsx("div", {
    className: "dis-none panel-search w-full p-t-10 p-b-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "bor8 dis-flex p-l-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("button", {
    className: "size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), __jsx("input", {
    className: "mtext-107 cl2 size-114 plh2 p-r-15",
    type: "text",
    name: "search-product",
    placeholder: "Search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }))), __jsx("div", {
    className: "dis-none panel-filter w-full p-t-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx("div", {
    className: "wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    className: "filter-col1 p-r-15 p-b-27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("div", {
    className: "mtext-102 cl2 p-b-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Sort By"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "Default")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Popularity")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Average rating")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04 filter-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Newness")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Price: Low to High")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Price: High to Low")))), __jsx("div", {
    className: "filter-col2 p-r-15 p-b-27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("div", {
    className: "mtext-102 cl2 p-b-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Price"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04 filter-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "All")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "$0.00 - $50.00")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "$50.00 - $100.00")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, "$100.00 - $150.00")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "$150.00 - $200.00")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "$200.00+")))), __jsx("div", {
    className: "filter-col3 p-r-15 p-b-27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("div", {
    className: "mtext-102 cl2 p-b-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, "Color"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#222'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Black")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#4272d7'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04 filter-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Blue")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#b3b3b3'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Grey")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#00ad5f'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Green")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#fa4251'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "Red")), __jsx("li", {
    className: "p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("span", {
    className: "fs-15 lh-12 m-r-6",
    style: {
      color: '#aaa'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("i", {
    className: "zmdi zmdi-circle-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  })), __jsx("a", {
    href: "#",
    className: "filter-link stext-106 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, "White")))), __jsx("div", {
    className: "filter-col4 p-b-27",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("div", {
    className: "mtext-102 cl2 p-b-15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "Tags"), __jsx("div", {
    className: "flex-w p-t-4 m-r--5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Fashion"), __jsx("a", {
    href: "#",
    className: "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Lifestyle"), __jsx("a", {
    href: "#",
    className: "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "Denim"), __jsx("a", {
    href: "#",
    className: "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "Streetstyle"), __jsx("a", {
    href: "#",
    className: "flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "Crafts")))))), __jsx("div", {
    className: "row isotope-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-01.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Esprit Ruffle Shirt"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "$16.64")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-02.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "Herschel supply"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "$35.31")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-03.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "Only Check Trouser"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, "$25.50")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-04.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, "Classic Trench Coat"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: this
  }, "$75.00")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-05.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, "Front Pocket Jumper"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, "$34.75")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-06.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "Vintage Inspired Classic"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, "$93.20")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-07.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, "Shirt in Stretch Cotton"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, "$52.66")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-08.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "Pieces Metallic Printed"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, "$18.96")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-09.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, "Converse All Star Hi Plimsolls"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, "$75.00")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-10.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, "Femme T-Shirt In Stripe"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611
    },
    __self: this
  }, "$25.85")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-11.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }, "Herschel supply"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }, "$63.16")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 645
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-12.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, "Herschel supply"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665
    },
    __self: this
  }, "$63.15")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-13.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689
    },
    __self: this
  }, "T-Shirt with Sleeve"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }, "$18.49")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-14.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716
    },
    __self: this
  }, "Pretty Little Thing"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719
    },
    __self: this
  }, "$54.79")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-15.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 737
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743
    },
    __self: this
  }, "Mini Silver Mesh Watch"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 746
    },
    __self: this
  }, "$86.85")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753
    },
    __self: this
  })))))), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  }, __jsx("div", {
    className: "block2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, __jsx("div", {
    className: "block2-pic hov-img0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: this
  }, __jsx("img", {
    src: "images/product-16.jpg",
    alt: "IMG-PRODUCT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }), __jsx("a", {
    href: "#",
    className: "block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }, "Quick View")), __jsx("div", {
    className: "block2-txt flex-w flex-t p-t-14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }, __jsx("div", {
    className: "block2-txt-child1 flex-col-l ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }, __jsx("a", {
    href: "product-detail.html",
    className: "stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }, "Square Neck Back"), __jsx("span", {
    className: "stext-105 cl3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: this
  }, "$29.64")), __jsx("div", {
    className: "block2-txt-child2 flex-r p-t-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "btn-addwish-b2 dis-block pos-relative js-addwish-b2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }, __jsx("img", {
    className: "icon-heart1 dis-block trans-04",
    src: "images/icons/icon-heart-01.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }), __jsx("img", {
    className: "icon-heart2 dis-block trans-04 ab-t-l",
    src: "images/icons/icon-heart-02.png",
    alt: "ICON",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }))))))), __jsx("div", {
    className: "flex-c-m flex-w w-full p-t-45",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789
    },
    __self: this
  }, "Load More"))))));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc\Desktop\cozastore\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map