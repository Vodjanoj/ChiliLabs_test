"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Utils/fetchProducts.tsx":
/*!*********************************!*\
  !*** ./Utils/fetchProducts.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchProducts: function() { return /* binding */ fetchProducts; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n\n\nvar fetchProducts = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, result;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    if (!response.ok) {\n                        throw new Error(\"Failed to fetch products. Status: \".concat(response.status));\n                    }\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    result = _state.sent();\n                    return [\n                        2,\n                        result.products\n                    ];\n            }\n        });\n    });\n    return function fetchProducts() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VdGlscy9mZXRjaFByb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVPLElBQU1BO2VBQWdCO1lBQ3JCQyxVQVFBQzs7OztvQkFSVzs7d0JBQU1DLE1BQ3JCOzs7b0JBRElGLFdBQVc7b0JBSWpCLElBQUksQ0FBQ0EsU0FBU0csRUFBRSxFQUFFO3dCQUNoQixNQUFNLElBQUlDLE1BQU0scUNBQXFELE9BQWhCSixTQUFTSyxNQUFNO29CQUN0RTtvQkFFZTs7d0JBQU1MLFNBQVNNLElBQUk7OztvQkFBNUJMLFNBQVM7b0JBQ2Y7O3dCQUFPQSxPQUFPTSxRQUFROzs7O0lBQ3hCO29CQVhhUjs7O0lBV1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVXRpbHMvZmV0Y2hQcm9kdWN0cy50c3g/YzhiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdHlwZXMvY29tcG9uZW50cy50eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKTogUHJvbWlzZTxQcm9kdWN0W10+ID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgXCJodHRwczovL3J1bi5tb2NreS5pby92My9iNTRmZTkzZi1mNWExLTQyNmItYTc2Yy1lNDNkMjQ2OTAxZmRcIlxyXG4gICk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIHByb2R1Y3RzLiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiByZXN1bHQucHJvZHVjdHM7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Utils/fetchProducts.tsx\n"));

/***/ }),

/***/ "./components/Products/Products.tsx":
/*!******************************************!*\
  !*** ./components/Products/Products.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductItem/ProductItem */ \"./components/Products/ProductItem/ProductItem.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 0 30px 0;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 50px 200px;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar ProductsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"Products__ProductsWrapper\",\n    componentId: \"sc-75b4b22-0\"\n})(_templateObject());\n_c = ProductsWrapper;\nvar Products = function(props) {\n    var currentProducts = props.currentProducts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductsWrapper, {\n            children: currentProducts.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ProductItem_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: item.id,\n                    name: item.name,\n                    category: item.category,\n                    price: item.price,\n                    currency: item.currency\n                }, item.id + index, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Products\\\\Products.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c1 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductsWrapper\");\n$RefreshReg$(_c1, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBQzBCO0FBR3BELElBQU1HLGtCQUFrQkgsNkRBQVU7Ozs7S0FBNUJHO0FBV04sSUFBTUUsV0FBVyxTQUFDQztJQUNoQixJQUFNLGtCQUFzQkEsTUFBcEJDO0lBRVIscUJBQ0U7a0JBQ0UsNEVBQUNKO3NCQUNFSSxnQkFBZ0JDLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztxQ0FDMUIsOERBQUNSLGdFQUFXQTtvQkFFVlMsSUFBSUYsS0FBS0UsRUFBRTtvQkFDWEMsTUFBTUgsS0FBS0csSUFBSTtvQkFDZkMsVUFBVUosS0FBS0ksUUFBUTtvQkFDdkJDLE9BQU9MLEtBQUtLLEtBQUs7b0JBQ2pCQyxVQUFVTixLQUFLTSxRQUFRO21CQUxsQk4sS0FBS0UsRUFBRSxHQUFHRDs7Ozs7Ozs7Ozs7O0FBVzNCO01BbkJNTDtBQXFCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeD84YzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL1Byb2R1Y3RJdGVtL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vdHlwZXMvY29tcG9uZW50cy50eXBlc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA1MHB4IDIwMHB4O1xyXG5gO1xyXG5cclxudHlwZSBQcm9kdWN0c1Byb3BzID0ge1xyXG4gIGN1cnJlbnRQcm9kdWN0czogUHJvZHVjdFtdO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHM6IFByb2R1Y3RzUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGN1cnJlbnRQcm9kdWN0cyB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvZHVjdHNXcmFwcGVyPlxyXG4gICAgICAgIHtjdXJyZW50UHJvZHVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3RJdGVtXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5pZCArIGluZGV4fVxyXG4gICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgIGN1cnJlbmN5PXtpdGVtLmN1cnJlbmN5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c1dyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsIlByb2R1Y3RJdGVtIiwiUHJvZHVjdHNXcmFwcGVyIiwiZGl2IiwiUHJvZHVjdHMiLCJwcm9wcyIsImN1cnJlbnRQcm9kdWN0cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIiwibmFtZSIsImNhdGVnb3J5IiwicHJpY2UiLCJjdXJyZW5jeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products/Products.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products/Products */ \"./components/Products/Products.tsx\");\n/* harmony import */ var _components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search/SearchProducts */ \"./components/Search/SearchProducts.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var result, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result);\n                            setFilteredProducts(result);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"200px\",\n                margin: \"0 auto\"\n            },\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"400px\",\n                margin: \"0 auto\"\n            },\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 71,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                query: query,\n                onChangeQuery: changeQueryHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            filteredProducts.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                productsAmount: filteredProducts.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginateHandler,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, _this),\n            filteredProducts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Nothing found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 41\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+sqdzu3DmxriabW5EoJvSW6KIdg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmdCLE1BQU0sR0FBRyxtQkFDekIsOERBQUNwQix5RUFBVUE7Z0JBQ1QrQyxnQkFBZ0IzQyxpQkFBaUJnQixNQUFNO2dCQUN2Q1osaUJBQWlCQTtnQkFDakJ3QyxZQUFZVDtnQkFDWmpDLGFBQWFBOzs7Ozs7WUFHaEJGLGlCQUFpQmdCLE1BQU0sS0FBSyxtQkFBSyw4REFBQzZCOzBCQUFJOzs7Ozs7OztBQUc3QztHQWhGTWhEO0tBQUFBO0FBa0ZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi9VdGlscy9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBTZWFyY2hQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoUHJvZHVjdHNcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3R5cGVzL2NvbXBvbmVudHMudHlwZXNcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtwcm9kdWN0c1BlclBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPig2KTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzdWx0KTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgICAgIHNldEVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQWxsUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5IHx8IHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgICAocHJvZHVjdCkgPT5cbiAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZEl0ZW1zKTtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZGVudGlmaWVyKTtcbiAgICB9XG4gIH0sIFtxdWVyeSwgcHJvZHVjdHNdKTtcblxuICBjb25zdCBjaGFuZ2VRdWVyeUhhbmRsZXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBsYXN0SW5kZXhPZlByb2R1Y3RzID0gY3VycmVudFBhZ2UgKiBwcm9kdWN0c1BlclBhZ2U7XG4gIGNvbnN0IGZpcnN0SW5kZXhPZlByb2R1Y3RzID0gbGFzdEluZGV4T2ZQcm9kdWN0cyAtIHByb2R1Y3RzUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5zbGljZShcbiAgICBmaXJzdEluZGV4T2ZQcm9kdWN0cyxcbiAgICBsYXN0SW5kZXhPZlByb2R1Y3RzXG4gICk7XG5cbiAgY29uc3Qgb25QYWdpbmF0ZUhhbmRsZXIgPSAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHAgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIiwgd2lkdGg6IFwiMjAwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PkxvYWRpbmcgcHJvZHVjdHMuLjwvcD47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPHAgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIiwgd2lkdGg6IFwiNDAwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PkVycm9yOiB7ZXJyb3J9PC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2hQcm9kdWN0cyBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlUXVlcnk9e2NoYW5nZVF1ZXJ5SGFuZGxlcn0gLz5cbiAgICAgIDxQcm9kdWN0cyBjdXJyZW50UHJvZHVjdHM9e2N1cnJlbnRQcm9kdWN0c30gLz5cbiAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+IDYgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIHByb2R1Y3RzQW1vdW50PXtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aH1cbiAgICAgICAgICBwcm9kdWN0c1BlclBhZ2U9e3Byb2R1Y3RzUGVyUGFnZX1cbiAgICAgICAgICBvblBhZ2luYXRlPXtvblBhZ2luYXRlSGFuZGxlcn1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID09PSAwICYmIDxkaXY+Tm90aGluZyBmb3VuZDwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwiUHJvZHVjdHMiLCJTZWFyY2hQcm9kdWN0cyIsIlBhZ2luYXRpb24iLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwcm9kdWN0c1BlclBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibG9hZEFsbFByb2R1Y3RzIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwic2V0VGltZW91dCIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmFtZSIsImNsZWFyVGltZW91dCIsImNoYW5nZVF1ZXJ5SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsYXN0SW5kZXhPZlByb2R1Y3RzIiwiZmlyc3RJbmRleE9mUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdHMiLCJzbGljZSIsIm9uUGFnaW5hdGVIYW5kbGVyIiwicGFnZSIsInAiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm1hcmdpbiIsIm9uQ2hhbmdlUXVlcnkiLCJwcm9kdWN0c0Ftb3VudCIsIm9uUGFnaW5hdGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});