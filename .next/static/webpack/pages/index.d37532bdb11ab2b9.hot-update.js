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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products/Products */ \"./components/Products/Products.tsx\");\n/* harmony import */ var _components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search/SearchProducts */ \"./components/Search/SearchProducts.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var result, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_2__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result);\n                            setFilteredProducts(result);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                margin: \"0 auto\"\n            },\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 71,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                query: query,\n                onChangeQuery: changeQueryHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            filteredProducts.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                productsAmount: filteredProducts.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginateHandler,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+sqdzu3DmxriabW5EoJvSW6KIdg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07Z0JBQ3ZDWixpQkFBaUJBO2dCQUNqQnVDLFlBQVlSO2dCQUNaakMsYUFBYUE7Ozs7Ozs7O0FBS3ZCO0dBL0VNTDtLQUFBQTtBQWlGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vVXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgU2VhcmNoUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb25cIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRzLnR5cGVzXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbcHJvZHVjdHNQZXJQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oNik7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkQWxsUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaFByb2R1Y3RzKCk7XG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3VsdCk7XG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocmVzdWx0KTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgICAgICBzZXRFcnJvcigoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9hZEFsbFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChxdWVyeSB8fCBwcm9kdWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBwcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgICAgKHByb2R1Y3QpID0+XG4gICAgICAgICAgICBwcm9kdWN0LmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgIHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICk7XG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoZmlsdGVyZWRJdGVtcyk7XG4gICAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWRlbnRpZmllcik7XG4gICAgfVxuICB9LCBbcXVlcnksIHByb2R1Y3RzXSk7XG5cbiAgY29uc3QgY2hhbmdlUXVlcnlIYW5kbGVyID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgbGFzdEluZGV4T2ZQcm9kdWN0cyA9IGN1cnJlbnRQYWdlICogcHJvZHVjdHNQZXJQYWdlO1xuICBjb25zdCBmaXJzdEluZGV4T2ZQcm9kdWN0cyA9IGxhc3RJbmRleE9mUHJvZHVjdHMgLSBwcm9kdWN0c1BlclBhZ2U7XG4gIGNvbnN0IGN1cnJlbnRQcm9kdWN0cyA9IGZpbHRlcmVkUHJvZHVjdHMuc2xpY2UoXG4gICAgZmlyc3RJbmRleE9mUHJvZHVjdHMsXG4gICAgbGFzdEluZGV4T2ZQcm9kdWN0c1xuICApO1xuXG4gIGNvbnN0IG9uUGFnaW5hdGVIYW5kbGVyID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxwIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5Mb2FkaW5nIHByb2R1Y3RzLi48L3A+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3J9PC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWFyY2hQcm9kdWN0cyBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlUXVlcnk9e2NoYW5nZVF1ZXJ5SGFuZGxlcn0gLz5cbiAgICAgIDxQcm9kdWN0cyBjdXJyZW50UHJvZHVjdHM9e2N1cnJlbnRQcm9kdWN0c30gLz5cbiAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aCA+IDYgJiYgKFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIHByb2R1Y3RzQW1vdW50PXtmaWx0ZXJlZFByb2R1Y3RzLmxlbmd0aH1cbiAgICAgICAgICBwcm9kdWN0c1BlclBhZ2U9e3Byb2R1Y3RzUGVyUGFnZX1cbiAgICAgICAgICBvblBhZ2luYXRlPXtvblBhZ2luYXRlSGFuZGxlcn1cbiAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJQcm9kdWN0cyIsIlNlYXJjaFByb2R1Y3RzIiwiUGFnaW5hdGlvbiIsIkhvbWVQYWdlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJzZXRGaWx0ZXJlZFByb2R1Y3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInByb2R1Y3RzUGVyUGFnZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJsb2FkQWxsUHJvZHVjdHMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImxlbmd0aCIsImlkZW50aWZpZXIiLCJzZXRUaW1lb3V0IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsInByb2R1Y3QiLCJjYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJuYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2hhbmdlUXVlcnlIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxhc3RJbmRleE9mUHJvZHVjdHMiLCJmaXJzdEluZGV4T2ZQcm9kdWN0cyIsImN1cnJlbnRQcm9kdWN0cyIsInNsaWNlIiwib25QYWdpbmF0ZUhhbmRsZXIiLCJwYWdlIiwicCIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsIm9uQ2hhbmdlUXVlcnkiLCJwcm9kdWN0c0Ftb3VudCIsIm9uUGFnaW5hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});