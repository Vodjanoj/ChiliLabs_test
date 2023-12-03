/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/card/[productId]";
exports.ids = ["pages/card/[productId]"];
exports.modules = {

/***/ "./Utils/fetchProducts.tsx":
/*!*********************************!*\
  !*** ./Utils/fetchProducts.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts)\n/* harmony export */ });\nconst fetchProducts = async () => {\n  const response = await fetch(\"https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd\");\n  const result = await response.json();\n  return result;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VdGlscy9mZXRjaFByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBWTtFQUN2QyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQiw4REFDRixDQUFDO0VBQ0QsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDcEMsT0FBT0QsTUFBTTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsaWxhYnNfdGVzdC8uL1V0aWxzL2ZldGNoUHJvZHVjdHMudHN4P2M4YjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9ydW4ubW9ja3kuaW8vdjMvYjU0ZmU5M2YtZjVhMS00MjZiLWE3NmMtZTQzZDI0NjkwMWZkXCJcclxuICApO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuIFxyXG4iXSwibmFtZXMiOlsiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Utils/fetchProducts.tsx\n");

/***/ }),

/***/ "./components/Products/ProductItem/ProductItem.styles.tsx":
/*!****************************************************************!*\
  !*** ./components/Products/ProductItem/ProductItem.styles.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductCategory: () => (/* binding */ ProductCategory),\n/* harmony export */   ProductName: () => (/* binding */ ProductName),\n/* harmony export */   ProductPrice: () => (/* binding */ ProductPrice)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductCategory = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ProductItemstyles__ProductCategory\",\n  componentId: \"sc-1bb9ue8-0\"\n})([\"margin:0 0 10px 0;font-weight:600;text-decoration:none;font-size:\", \";\"], props => props.$fontSize || \"20px\");\nconst ProductName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ProductItemstyles__ProductName\",\n  componentId: \"sc-1bb9ue8-1\"\n})([\"font-style:italic;font-size:\", \";\"], props => props.$fontSize || \"20px\");\nconst ProductPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"ProductItemstyles__ProductPrice\",\n  componentId: \"sc-1bb9ue8-2\"\n})([\"margin:\", \";span{color:#ad5502;}\"], props => props.$margin || \"0\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLnN0eWxlcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUM7QUFjdkMsTUFBTUMsZUFBZSxHQUFHRCw0REFBVSxDQUFBRyxVQUFBO0VBQUFDLFdBQUE7RUFBQUMsV0FBQTtBQUFBLCtFQUlsQkMsS0FBSyxJQUFLQSxLQUFLLENBQUNDLFNBQVMsSUFBSSxNQUFNLENBQ2xEO0FBRUQsTUFBTUMsV0FBVyxHQUFHUiw0REFBVSxDQUFBRyxVQUFBO0VBQUFDLFdBQUE7RUFBQUMsV0FBQTtBQUFBLDBDQUVkQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsU0FBUyxJQUFJLE1BQU0sQ0FDbEQ7QUFFRCxNQUFNRSxZQUFZLEdBQUdULDREQUFVLENBQUFHLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEseUNBQ2xCQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0ksT0FBTyxJQUFJLEdBQUcsQ0FJMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsaWxhYnNfdGVzdC8uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdEl0ZW0vUHJvZHVjdEl0ZW0uc3R5bGVzLnRzeD9lNzc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdENhdGVnb3J5UHJvcHMge1xyXG4gICRmb250U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3ROYW1lUHJvcHMge1xyXG4gICRmb250U2l6ZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RQcmljZVByb3BzIHtcclxuICAkbWFyZ2luPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0Q2F0ZWdvcnkgPSBzdHlsZWQuZGl2PFByb2R1Y3RDYXRlZ29yeVByb3BzPmBcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMuJGZvbnRTaXplIHx8IFwiMjBweFwifTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3ROYW1lID0gc3R5bGVkLmRpdjxQcm9kdWN0TmFtZVByb3BzPmBcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMuJGZvbnRTaXplIHx8IFwiMjBweFwifTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RQcmljZSA9IHN0eWxlZC5kaXY8UHJvZHVjdFByaWNlUHJvcHM+YFxyXG4gIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLiRtYXJnaW4gfHwgXCIwXCJ9O1xyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICNhZDU1MDI7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IHsgUHJvZHVjdENhdGVnb3J5LCBQcm9kdWN0TmFtZSwgUHJvZHVjdFByaWNlIH07Il0sIm5hbWVzIjpbInN0eWxlZCIsIlByb2R1Y3RDYXRlZ29yeSIsImRpdiIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIiwicHJvcHMiLCIkZm9udFNpemUiLCJQcm9kdWN0TmFtZSIsIlByb2R1Y3RQcmljZSIsIiRtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products/ProductItem/ProductItem.styles.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\_app.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRUk7QUFBQTtBQUVmLFNBQVNHLEtBQUtBLENBQUM7RUFBRUMsU0FBUztFQUFFQztBQUFvQixDQUFDLEVBQUU7RUFDaEUsb0JBQU9ILDZEQUFBLENBQUNFLFNBQVMsRUFBQUUsYUFBQSxLQUFLRCxTQUFTO0lBQUFFLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUFHLENBQUM7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsaWxhYnNfdGVzdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwianN4REVWIiwiX2pzeERFViIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiX29iamVjdFNwcmVhZCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/card/[productId]/index.tsx":
/*!******************************************!*\
  !*** ./pages/card/[productId]/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Products/ProductItem/ProductItem.styles */ \"./components/Products/ProductItem/ProductItem.styles.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId]\\\\index.tsx\";\n\n\n\n\n\n\n\nconst ProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"productId__ProductDetailsWrapper\",\n  componentId: \"sc-1jovzsg-0\"\n})([\"padding:10px;background-color:#f5f5f5;border-radius:15px;\"]);\nconst ProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n  displayName: \"productId__ProductDescription\",\n  componentId: \"sc-1jovzsg-1\"\n})([\"font-size:16px;\"]);\nconst ProductCard = () => {\n  const {\n    0: productsDetails,\n    1: setProductDetails\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const {\n    productId\n  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)().query;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const filterProductDetailsById = async () => {\n      const result = await (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_1__.fetchProducts)();\n      if (productId) {\n        const filteredProductDetails = result.products.find(item => item.id === parseInt(productId));\n        setProductDetails(filteredProductDetails);\n      }\n    };\n    filterProductDetailsById();\n  }, [productId]);\n  const {\n    category,\n    name,\n    price,\n    currency,\n    description\n  } = productsDetails || {};\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: productsDetails ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ProductDetailsWrapper, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_4__.ProductCategory, {\n        $fontSize: \"23px\",\n        children: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_4__.ProductName, {\n        $fontSize: \"23px\",\n        children: [\" \", name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Products_ProductItem_ProductItem_styles__WEBPACK_IMPORTED_MODULE_4__.ProductPrice, {\n        $margin: \"0 0 20px 0\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: [currency, \" \", price]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ProductDescription, {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: \"Loading..\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsaUVBQWV2QixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hpbGlsYWJzX3Rlc3QvLi9wYWdlcy9jYXJkL1twcm9kdWN0SWRdL2luZGV4LnRzeD9hNGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9mZXRjaFByb2R1Y3RzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICBQcm9kdWN0Q2F0ZWdvcnksXHJcbiAgUHJvZHVjdE5hbWUsXHJcbiAgUHJvZHVjdFByaWNlLFxyXG59IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtLnN0eWxlc1wiO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBvbmVudHMudHlwZXNcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3REZXRhaWxzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0RGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RDYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0c0RldGFpbHMsIHNldFByb2R1Y3REZXRhaWxzXSA9IHVzZVN0YXRlPFByb2R1Y3QgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHVzZVJvdXRlcigpLnF1ZXJ5IGFzIHsgcHJvZHVjdElkOiBzdHJpbmcgfTtcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcclxuICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdERldGFpbHMgPSByZXN1bHQucHJvZHVjdHMuZmluZChcclxuICAgICAgICAgIChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBwYXJzZUludChwcm9kdWN0SWQpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0UHJvZHVjdERldGFpbHMoZmlsdGVyZWRQcm9kdWN0RGV0YWlscyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkKCk7XHJcbiAgfSwgW3Byb2R1Y3RJZF0pO1xyXG5cclxuICBjb25zdCB7IGNhdGVnb3J5LCBuYW1lLCBwcmljZSwgY3VycmVuY3ksIGRlc2NyaXB0aW9uIH0gPVxyXG4gICAgcHJvZHVjdHNEZXRhaWxzIHx8IHt9O1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwcm9kdWN0c0RldGFpbHMgPyAoXHJcbiAgICAgICAgPFByb2R1Y3REZXRhaWxzV3JhcHBlcj5cclxuICAgICAgICAgIDxQcm9kdWN0Q2F0ZWdvcnkgJGZvbnRTaXplPVwiMjNweFwiPntjYXRlZ29yeX08L1Byb2R1Y3RDYXRlZ29yeT5cclxuICAgICAgICAgIDxQcm9kdWN0TmFtZSAkZm9udFNpemU9XCIyM3B4XCI+IHtuYW1lfTwvUHJvZHVjdE5hbWU+XHJcbiAgICAgICAgICA8UHJvZHVjdFByaWNlICRtYXJnaW49XCIwIDAgMjBweCAwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIHtjdXJyZW5jeX0ge3ByaWNlfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1Byb2R1Y3RQcmljZT5cclxuICAgICAgICAgIDxQcm9kdWN0RGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUHJvZHVjdERlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvUHJvZHVjdERldGFpbHNXcmFwcGVyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0Q2F0ZWdvcnkiLCJQcm9kdWN0TmFtZSIsIlByb2R1Y3RQcmljZSIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIlByb2R1Y3REZXRhaWxzV3JhcHBlciIsImRpdiIsIndpdGhDb25maWciLCJkaXNwbGF5TmFtZSIsImNvbXBvbmVudElkIiwiUHJvZHVjdERlc2NyaXB0aW9uIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0c0RldGFpbHMiLCJzZXRQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RJZCIsInF1ZXJ5IiwiZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkIiwicmVzdWx0IiwiZmlsdGVyZWRQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RzIiwiZmluZCIsIml0ZW0iLCJpZCIsInBhcnNlSW50IiwiY2F0ZWdvcnkiLCJuYW1lIiwicHJpY2UiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCIkZm9udFNpemUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCIkbWFyZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/card/[productId]/index.tsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcard%2F%5BproductId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Ccard%5C%5BproductId%5D%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcard%2F%5BproductId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Ccard%5C%5BproductId%5D%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.tsx\");\n/* harmony import */ var _pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\card\\[productId]\\index.tsx */ \"./pages/card/[productId]/index.tsx\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/card/[productId]\",\n        pathname: \"/card/[productId]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_card_productId_index_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGY2FyZCUyRiU1QnByb2R1Y3RJZCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDY2FyZCU1QyU1QnByb2R1Y3RJZCU1RCU1Q2luZGV4LnRzeCZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUNrRTtBQUNsRTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsNERBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNERBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNERBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNERBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDREQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDREQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNERBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNERBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNERBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNERBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNERBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGlsaWxhYnNfdGVzdC8/ZjU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc1JvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCBEb2N1bWVudCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19kb2N1bWVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGNhcmRcXFxcW3Byb2R1Y3RJZF1cXFxcaW5kZXgudHN4XCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvY2FyZC9bcHJvZHVjdElkXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvY2FyZC9bcHJvZHVjdElkXVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcCxcbiAgICAgICAgRG9jdW1lbnRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcard%2F%5BproductId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Ccard%5C%5BproductId%5D%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fcard%2F%5BproductId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Ccard%5C%5BproductId%5D%5Cindex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();