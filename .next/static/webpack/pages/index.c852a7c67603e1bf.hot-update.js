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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchProducts */ \"./utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products/Products */ \"./components/Products/Products.tsx\");\n/* harmony import */ var _components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search/SearchProducts */ \"./components/Search/SearchProducts.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sharedStyles */ \"./styles/sharedStyles.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result);\n                            setFilteredProducts(result);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_6__.StyledLoading, {\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 68,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_6__.StyledError, {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 72,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                query: query,\n                onChangeQuery: changeQueryHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            filteredProducts.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                productsAmount: filteredProducts.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginateHandler,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this),\n            filteredProducts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Nothing found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 41\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+sqdzu3DmxriabW5EoJvSW6KIdg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ2pCbUMsWUFBWUo7Z0JBQ1pqQyxhQUFhQTs7Ozs7O1lBR2hCRixpQkFBaUJnQixNQUFNLEtBQUssbUJBQUssOERBQUN3QjswQkFBSTs7Ozs7Ozs7QUFHN0M7R0FoRk0zQztLQUFBQTtBQWtGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgU2VhcmNoUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90eXBlcy9jb21wb25lbnRzLnR5cGVzXCI7XG5pbXBvcnQgeyBTdHlsZWRFcnJvciwgU3R5bGVkTG9hZGluZ30gZnJvbSBcIi4uL3N0eWxlcy9zaGFyZWRTdHlsZXNcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtwcm9kdWN0c1BlclBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPig2KTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoUHJvZHVjdHMoKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzdWx0KTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhyZXN1bHQpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgICAgIHNldEVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBsb2FkQWxsUHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHF1ZXJ5IHx8IHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgICAocHJvZHVjdCkgPT5cbiAgICAgICAgICAgIHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZEl0ZW1zKTtcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZGVudGlmaWVyKTtcbiAgICB9XG4gIH0sIFtxdWVyeSwgcHJvZHVjdHNdKTtcblxuICBjb25zdCBjaGFuZ2VRdWVyeUhhbmRsZXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBsYXN0SW5kZXhPZlByb2R1Y3RzID0gY3VycmVudFBhZ2UgKiBwcm9kdWN0c1BlclBhZ2U7XG4gIGNvbnN0IGZpcnN0SW5kZXhPZlByb2R1Y3RzID0gbGFzdEluZGV4T2ZQcm9kdWN0cyAtIHByb2R1Y3RzUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudFByb2R1Y3RzID0gZmlsdGVyZWRQcm9kdWN0cy5zbGljZShcbiAgICBmaXJzdEluZGV4T2ZQcm9kdWN0cyxcbiAgICBsYXN0SW5kZXhPZlByb2R1Y3RzXG4gICk7XG5cbiAgY29uc3Qgb25QYWdpbmF0ZUhhbmRsZXIgPSAocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XG4gIH07XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFN0eWxlZExvYWRpbmc+TG9hZGluZyBwcm9kdWN0cy4uPC9TdHlsZWRMb2FkaW5nPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8U3R5bGVkRXJyb3I+RXJyb3I6IHtlcnJvcn08L1N0eWxlZEVycm9yPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2hQcm9kdWN0cyBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlUXVlcnk9e2NoYW5nZVF1ZXJ5SGFuZGxlcn0gLz5cbiAgICAgIDxQcm9kdWN0cyBjdXJyZW50UHJvZHVjdHM9e2N1cnJlbnRQcm9kdWN0c30gLz5cbiAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+IDYgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIHByb2R1Y3RzQW1vdW50PXtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aH1cbiAgICAgICAgICBwcm9kdWN0c1BlclBhZ2U9e3Byb2R1Y3RzUGVyUGFnZX1cbiAgICAgICAgICBvblBhZ2luYXRlPXtvblBhZ2luYXRlSGFuZGxlcn1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID09PSAwICYmIDxkaXY+Tm90aGluZyBmb3VuZDwvZGl2Pn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwiUHJvZHVjdHMiLCJTZWFyY2hQcm9kdWN0cyIsIlBhZ2luYXRpb24iLCJTdHlsZWRFcnJvciIsIlN0eWxlZExvYWRpbmciLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwcm9kdWN0c1BlclBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibG9hZEFsbFByb2R1Y3RzIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwic2V0VGltZW91dCIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmFtZSIsImNsZWFyVGltZW91dCIsImNoYW5nZVF1ZXJ5SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsYXN0SW5kZXhPZlByb2R1Y3RzIiwiZmlyc3RJbmRleE9mUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdHMiLCJzbGljZSIsIm9uUGFnaW5hdGVIYW5kbGVyIiwicGFnZSIsIm9uQ2hhbmdlUXVlcnkiLCJwcm9kdWN0c0Ftb3VudCIsIm9uUGFnaW5hdGUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});