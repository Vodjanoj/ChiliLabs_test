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

/***/ "./components/Pagination/Pagination.tsx":
/*!**********************************************!*\
  !*** ./components/Pagination/Pagination.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Products_PageButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Products/PageButton */ \"./components/Products/PageButton.tsx\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 130px;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\nvar StyledPagination = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Pagination__StyledPagination\",\n    componentId: \"sc-acc5155e-0\"\n})(_templateObject());\n_c = StyledPagination;\nvar StyledPaginationInner = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Pagination__StyledPaginationInner\",\n    componentId: \"sc-acc5155e-1\"\n})(_templateObject1());\n_c1 = StyledPaginationInner;\nvar Pagination = function(props) {\n    var productsAmount = props.productsAmount, productsPerPage = props.productsPerPage, currentPage = props.currentPage, onPaginate = props.onPaginate;\n    var pages = [];\n    for(var i = 1; i <= Math.ceil(productsAmount / productsPerPage); i++){\n        pages.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledPagination, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledPaginationInner, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Products_PageButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pages: pages,\n                currentPage: currentPage,\n                onPaginate: onPaginate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination\\\\Pagination.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\components\\\\Pagination\\\\Pagination.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledPagination\");\n$RefreshReg$(_c1, \"StyledPaginationInner\");\n$RefreshReg$(_c2, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1M7QUFFaEQsSUFBTUUsbUJBQW1CRiw2REFBVTs7OztLQUE3QkU7QUFJTixJQUFNRSx3QkFBd0JKLDZEQUFVOzs7O01BQWxDSTtBQWNOLElBQU1DLGFBQWEsU0FBQ0M7SUFDbEIsSUFBUUMsaUJBQTZERCxNQUE3REMsZ0JBQWdCQyxrQkFBNkNGLE1BQTdDRSxpQkFBaUJDLGNBQTRCSCxNQUE1QkcsYUFBYUMsYUFBZUosTUFBZkk7SUFFdEQsSUFBTUMsUUFBa0IsRUFBRTtJQUUxQixJQUFLLElBQUlDLElBQUksR0FBR0EsS0FBS0MsS0FBS0MsSUFBSSxDQUFDUCxpQkFBaUJDLGtCQUFrQkksSUFBSztRQUNyRUQsTUFBTUksSUFBSSxDQUFDSDtJQUNiO0lBRUEscUJBQ0UsOERBQUNWO2tCQUNDLDRFQUFDRTtzQkFDQyw0RUFBQ0gsNERBQVVBO2dCQUNUVSxPQUFPQTtnQkFDUEYsYUFBYUE7Z0JBQ2JDLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCO01BcEJNTDtBQXNCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvbi50c3g/MWFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUGFnZUJ1dHRvbiBmcm9tIFwiLi4vUHJvZHVjdHMvUGFnZUJ1dHRvblwiO1xyXG5cclxuY29uc3QgU3R5bGVkUGFnaW5hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQYWdpbmF0aW9uSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxudHlwZSBQYWdpbmF0aW9uUHJvcHMgPSB7XHJcbiAgcHJvZHVjdHNBbW91bnQ6IG51bWJlcjtcclxuICBwcm9kdWN0c1BlclBhZ2U6IG51bWJlcjtcclxuICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIG9uUGFnaW5hdGU6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHByb3BzOiBQYWdpbmF0aW9uUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RzQW1vdW50LCBwcm9kdWN0c1BlclBhZ2UsIGN1cnJlbnRQYWdlLCBvblBhZ2luYXRlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcGFnZXM6IG51bWJlcltdID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbChwcm9kdWN0c0Ftb3VudCAvIHByb2R1Y3RzUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZXMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkUGFnaW5hdGlvbj5cclxuICAgICAgPFN0eWxlZFBhZ2luYXRpb25Jbm5lcj5cclxuICAgICAgICA8UGFnZUJ1dHRvblxyXG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25QYWdpbmF0ZT17b25QYWdpbmF0ZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L1N0eWxlZFBhZ2luYXRpb25Jbm5lcj5cclxuICAgIDwvU3R5bGVkUGFnaW5hdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlBhZ2VCdXR0b24iLCJTdHlsZWRQYWdpbmF0aW9uIiwiZGl2IiwiU3R5bGVkUGFnaW5hdGlvbklubmVyIiwiUGFnaW5hdGlvbiIsInByb3BzIiwicHJvZHVjdHNBbW91bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJjdXJyZW50UGFnZSIsIm9uUGFnaW5hdGUiLCJwYWdlcyIsImkiLCJNYXRoIiwiY2VpbCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination/Pagination.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.tsx\");\n/* harmony import */ var _components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search/SearchProducts */ \"./components/Search/SearchProducts.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var result;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result.products);\n                            setFilteredProducts(result.products);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                query: query,\n                onChangeQuery: changeQueryHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            filteredProducts.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                productsAmount: products.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginateHandler,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"Mkq9cRARklGNkZP6F87wCtIW/oQ=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0M7QUFDVztBQUNUO0FBQ21CO0FBQ0o7QUFHN0QsSUFBTU8sV0FBVzs7SUFDZixJQUFnQ04sWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFZLEVBQUUsT0FBL0NPLFdBQXlCUCxjQUFmUSxjQUFlUjtJQUNoQyxJQUFnREEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFZLEVBQUUsT0FBL0RTLG1CQUF5Q1QsZUFBdkJVLHNCQUF1QlY7SUFDaEQsSUFBc0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxRQUFoRFcsY0FBK0JYLGVBQWxCWSxpQkFBa0JaO0lBQ3RDLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsUUFBcENhLGtCQUFtQmI7SUFDMUIsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUFwQ2MsUUFBbUJkLGVBQVplLFdBQVlmO0lBRTFCQyxnREFBU0EsQ0FBQztRQUNSLElBQU1lO3VCQUFrQjtvQkFDaEJDOzs7OzRCQUFTOztnQ0FBTWYsbUVBQWFBOzs7NEJBQTVCZSxTQUFTOzRCQUNmVCxZQUFZUyxPQUFPVixRQUFROzRCQUMzQkcsb0JBQW9CTyxPQUFPVixRQUFROzs7Ozs7WUFDckM7NEJBSk1TOzs7O1FBTU5BO0lBQ0YsR0FBRyxFQUFFO0lBRUxmLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWEsU0FBU1AsU0FBU1csTUFBTSxHQUFHLEdBQUc7WUFDaEMsSUFBTUMsYUFBYUMsV0FBVztnQkFDNUIsSUFBTUMsZ0JBQWdCZCxTQUFTZSxNQUFNLENBQ25DLFNBQUNDOzJCQUNDQSxRQUFRQyxRQUFRLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixNQUFNVyxXQUFXLE9BQ3pERixRQUFRSSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixNQUFNVyxXQUFXOztnQkFFekRmLG9CQUFvQlc7Z0JBQ3BCVCxlQUFlO1lBQ2pCLEdBQUc7WUFFSCxPQUFPO3VCQUFNZ0IsYUFBYVQ7O1FBQzVCO0lBQ0YsR0FBRztRQUFDTDtRQUFPUDtLQUFTO0lBRXBCLElBQU1zQixxQkFBcUIsU0FBQ0M7UUFDMUJmLFNBQVNlLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLElBQU1DLHNCQUFzQnRCLGNBQWNFO0lBQzFDLElBQU1xQix1QkFBdUJELHNCQUFzQnBCO0lBQ25ELElBQU1zQixrQkFBa0IxQixpQkFBaUIyQixLQUFLLENBQzVDRixzQkFDQUQ7SUFHRixJQUFNSSxvQkFBb0IsU0FBQ0M7UUFDekIxQixlQUFlMEI7SUFDakI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNsQyx5RUFBY0E7Z0JBQUNVLE9BQU9BO2dCQUFPeUIsZUFBZVY7Ozs7OzswQkFDN0MsOERBQUMxQiw0REFBUUE7Z0JBQUNnQyxpQkFBaUJBOzs7Ozs7WUFDMUIxQixpQkFBaUJTLE1BQU0sR0FBRyxtQkFDekIsOERBQUNiLHlFQUFVQTtnQkFDVG1DLGdCQUFnQmpDLFNBQVNXLE1BQU07Z0JBQy9CTCxpQkFBaUJBO2dCQUNqQjRCLFlBQVlKO2dCQUNaMUIsYUFBYUE7Ozs7Ozs7O0FBS3ZCO0dBOURNTDtLQUFBQTtBQWdFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vVXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgU2VhcmNoUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRzLnR5cGVzXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbcHJvZHVjdHNQZXJQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oNik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcbiAgICAgIHNldFByb2R1Y3RzKHJlc3VsdC5wcm9kdWN0cyk7XG4gICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHJlc3VsdC5wcm9kdWN0cyk7XG4gICAgfTtcblxuICAgIGxvYWRBbGxQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgfHwgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAgIChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGZpbHRlcmVkSXRlbXMpO1xuICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkZW50aWZpZXIpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5LCBwcm9kdWN0c10pO1xuXG4gIGNvbnN0IGNoYW5nZVF1ZXJ5SGFuZGxlciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGxhc3RJbmRleE9mUHJvZHVjdHMgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZTtcbiAgY29uc3QgZmlyc3RJbmRleE9mUHJvZHVjdHMgPSBsYXN0SW5kZXhPZlByb2R1Y3RzIC0gcHJvZHVjdHNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLnNsaWNlKFxuICAgIGZpcnN0SW5kZXhPZlByb2R1Y3RzLFxuICAgIGxhc3RJbmRleE9mUHJvZHVjdHNcbiAgKTtcblxuICBjb25zdCBvblBhZ2luYXRlSGFuZGxlciA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoUHJvZHVjdHMgcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZVF1ZXJ5PXtjaGFuZ2VRdWVyeUhhbmRsZXJ9IC8+XG4gICAgICA8UHJvZHVjdHMgY3VycmVudFByb2R1Y3RzPXtjdXJyZW50UHJvZHVjdHN9IC8+XG4gICAgICB7ZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPiA2ICYmIChcbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBwcm9kdWN0c0Ftb3VudD17cHJvZHVjdHMubGVuZ3RofVxuICAgICAgICAgIHByb2R1Y3RzUGVyUGFnZT17cHJvZHVjdHNQZXJQYWdlfVxuICAgICAgICAgIG9uUGFnaW5hdGU9e29uUGFnaW5hdGVIYW5kbGVyfVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0cyIsIlByb2R1Y3RzIiwiU2VhcmNoUHJvZHVjdHMiLCJQYWdpbmF0aW9uIiwiSG9tZVBhZ2UiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicHJvZHVjdHNQZXJQYWdlIiwicXVlcnkiLCJzZXRRdWVyeSIsImxvYWRBbGxQcm9kdWN0cyIsInJlc3VsdCIsImxlbmd0aCIsImlkZW50aWZpZXIiLCJzZXRUaW1lb3V0IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJuYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2hhbmdlUXVlcnlIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RJbmRleE9mUHJvZHVjdHMiLCJmaXJzdEluZGV4T2ZQcm9kdWN0cyIsImN1cnJlbnRQcm9kdWN0cyIsInNsaWNlIiwib25QYWdpbmF0ZUhhbmRsZXIiLCJwYWdlIiwib25DaGFuZ2VRdWVyeSIsInByb2R1Y3RzQW1vdW50Iiwib25QYWdpbmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});