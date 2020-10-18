module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.mdx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @theme-ui/components */ \"@theme-ui/components\");\n/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @statickit/react */ \"@statickit/react\");\n/* harmony import */ var _statickit_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_statickit_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/mroads/Desktop/simple-blog-next/components/form.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Form = () => {\n  const [state, handleSubmit] = Object(_statickit_react__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])('newsletter');\n\n  if (state.succeeded) {\n    return __jsx(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 16\n      }\n    }, 'Thank you for signing up!');\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    mb: 3,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, 'Subscribe to my newsletter'), __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n    defaultValue: \"\",\n    label: \"First Name\",\n    mb: 2,\n    name: \"name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }), __jsx(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__[\"Field\"], {\n    defaultValue: \"\",\n    label: \"Email\",\n    mb: 3,\n    name: \"email\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }), __jsx(_theme_ui_components__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: state.submitting,\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, 'Submit')));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0uanM/N2ZmMSJdLCJuYW1lcyI6WyJGb3JtIiwic3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJ1c2VGb3JtIiwic3VjY2VlZGVkIiwic3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNLENBQUNDLEtBQUQsRUFBUUMsWUFBUixJQUF3QkMsZ0VBQU8sQ0FBQyxZQUFELENBQXJDOztBQUVBLE1BQUlGLEtBQUssQ0FBQ0csU0FBVixFQUFxQjtBQUNqQixXQUFPLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFVLDJCQUFWLENBQVA7QUFDSDs7QUFFRCxTQUNJLG1FQUNJLE1BQUMsNERBQUQ7QUFBUyxNQUFFLEVBQUUsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCLDRCQUFqQixDQURKLEVBRUk7QUFBTSxZQUFRLEVBQUVGLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQU8sZ0JBQVksRUFBQyxFQUFwQjtBQUF1QixTQUFLLEVBQUMsWUFBN0I7QUFBMEMsTUFBRSxFQUFFLENBQTlDO0FBQWlELFFBQUksRUFBQyxNQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDBEQUFEO0FBQU8sZ0JBQVksRUFBQyxFQUFwQjtBQUF1QixTQUFLLEVBQUMsT0FBN0I7QUFBcUMsTUFBRSxFQUFFLENBQXpDO0FBQTRDLFFBQUksRUFBQyxPQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLDJEQUFEO0FBQVEsWUFBUSxFQUFFRCxLQUFLLENBQUNJLFVBQXhCO0FBQW9DLFFBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssUUFETCxDQUhKLENBRkosQ0FESjtBQVlILENBbkJEOztBQXFCZUwsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hlYWRpbmcsIEZpZWxkLCBCdXR0b259IGZyb20gJ0B0aGVtZS11aS9jb21wb25lbnRzJztcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSAnQHN0YXRpY2tpdC9yZWFjdCc7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBoYW5kbGVTdWJtaXRdID0gdXNlRm9ybSgnbmV3c2xldHRlcicpO1xuXG4gICAgaWYgKHN0YXRlLnN1Y2NlZWRlZCkge1xuICAgICAgICByZXR1cm4gPEhlYWRpbmc+eydUaGFuayB5b3UgZm9yIHNpZ25pbmcgdXAhJ308L0hlYWRpbmc+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGluZyBtYj17M30+eydTdWJzY3JpYmUgdG8gbXkgbmV3c2xldHRlcid9PC9IZWFkaW5nPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPEZpZWxkIGRlZmF1bHRWYWx1ZT1cIlwiIGxhYmVsPVwiRmlyc3QgTmFtZVwiIG1iPXsyfSBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPEZpZWxkIGRlZmF1bHRWYWx1ZT1cIlwiIGxhYmVsPVwiRW1haWxcIiBtYj17M30gbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtzdGF0ZS5zdWJtaXR0aW5nfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIHsnU3VibWl0J31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/form.js\n");

/***/ }),

/***/ "./pages/index.mdx":
/*!*************************!*\
  !*** ./pages/index.mdx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form */ \"./components/form.js\");\nvar _jsxFileName = \"/Users/mroads/Desktop/simple-blog-next/pages/index.mdx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n/* @jsx mdx */\n\n\nconst layoutProps = {};\nconst MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, `Mastering Next.js`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, `Using MDX! More info `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://masteringnextjs.com\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 33\n    }\n  }), `here`), `.\nBla bla chakde phatte!`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(_components_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    mdxType: \"Form\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tZHg/YzQ0OCJdLCJuYW1lcyI6WyJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUdBLE1BQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BSGdDO0FBQ2pDQztBQURpQyxHQUdoQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGVBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sbUJBQU4sQ0FGSyxFQUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyx1QkFBTCxFQUE0QjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzlDLFlBQVE7QUFEc0MsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVyQixNQUZxQixDQUE1QixFQUVtQjtBQUN2Qix1QkFISSxDQUhLLEVBT0wsMERBQUMsd0RBQUQ7QUFBTSxXQUFPLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEssQ0FBUDtBQVNEO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgubWR4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtJztcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgxPntgTWFzdGVyaW5nIE5leHQuanNgfTwvaDE+XG4gICAgPHA+e2BVc2luZyBNRFghIE1vcmUgaW5mbyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9tYXN0ZXJpbmduZXh0anMuY29tXCJcbiAgICAgIH19PntgaGVyZWB9PC9hPntgLlxuQmxhIGJsYSBjaGFrZGUgcGhhdHRlIWB9PC9wPlxuICAgIDxGb3JtIG1keFR5cGU9XCJGb3JtXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.mdx\n");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "@statickit/react":
/*!***********************************!*\
  !*** external "@statickit/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@statickit/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RhdGlja2l0L3JlYWN0XCI/NWY2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc3RhdGlja2l0L3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN0YXRpY2tpdC9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@statickit/react\n");

/***/ }),

/***/ "@theme-ui/components":
/*!***************************************!*\
  !*** external "@theme-ui/components" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@theme-ui/components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiPzYxYjYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHRoZW1lLXVpL2NvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@theme-ui/components\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });