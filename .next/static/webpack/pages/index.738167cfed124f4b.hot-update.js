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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var _components_Products_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Products/Products */ \"./components/Products/Products.tsx\");\n/* harmony import */ var _components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Search/SearchProducts */ \"./components/Search/SearchProducts.tsx\");\n/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination/Pagination */ \"./components/Pagination/Pagination.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: block;\\n  width: 200px;\\n  margin: 0 auto;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar ErrorMessage = styled.p(_templateObject());\nvar HomePage = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), products = _useState[0], setProducts = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), filteredProducts = _useState1[0], setFilteredProducts = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), 2), currentPage = _useState2[0], setCurrentPage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(6), 1), productsPerPage = _useState3[0];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), 2), query = _useState4[0], setQuery = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState5[0], setLoading = _useState5[1];\n    var _useState6 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState6[0], setError = _useState6[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var loadAllProducts = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            setProducts(result);\n                            setFilteredProducts(result);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function loadAllProducts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadAllProducts();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (query || products.length > 0) {\n            var identifier = setTimeout(function() {\n                var filteredItems = products.filter(function(product) {\n                    return product.category.toLowerCase().includes(query.toLowerCase()) || product.name.toLowerCase().includes(query.toLowerCase());\n                });\n                setFilteredProducts(filteredItems);\n                setCurrentPage(1);\n            }, 1000);\n            return function() {\n                return clearTimeout(identifier);\n            };\n        }\n    }, [\n        query,\n        products\n    ]);\n    var changeQueryHandler = function(event) {\n        setQuery(event.target.value);\n    };\n    var lastIndexOfProducts = currentPage * productsPerPage;\n    var firstIndexOfProducts = lastIndexOfProducts - productsPerPage;\n    var currentProducts = filteredProducts.slice(firstIndexOfProducts, lastIndexOfProducts);\n    var onPaginateHandler = function(page) {\n        setCurrentPage(page);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"200px\",\n                margin: \"0 auto\"\n            },\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 74,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            style: {\n                display: \"block\",\n                width: \"400px\",\n                margin: \"0 auto\"\n            },\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n            lineNumber: 78,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Search_SearchProducts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                query: query,\n                onChangeQuery: changeQueryHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Products_Products__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentProducts: currentProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this),\n            filteredProducts.length > 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                productsAmount: filteredProducts.length,\n                productsPerPage: productsPerPage,\n                onPaginate: onPaginateHandler,\n                currentPage: currentPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, _this),\n            filteredProducts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: \"Nothing found\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\index.tsx\",\n                lineNumber: 93,\n                columnNumber: 41\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+sqdzu3DmxriabW5EoJvSW6KIdg=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3BDLHFFQUFRQTtnQkFBQzBDLGlCQUFpQkE7Ozs7OztZQUMxQmpDLGlCQUFpQmdCLE1BQU0sR0FBRyxtQkFDekIsOERBQUN2Qix5RUFBVUE7Z0JBQ1RpRCxnQkFBZ0IxQyxpQkFBaUJnQixNQUFNO2dCQUN2Q1osaUJBQWlCQTtnQkFDakJ1QyxZQUFZUjtnQkFDWmpDLGFBQWFBOzs7Ozs7WUFHaEJGLGlCQUFpQmdCLE1BQU0sS0FBSyxtQkFBSyw4REFBQzRCOzBCQUFJOzs7Ozs7OztBQUc3QztHQWhGTS9DO0tBQUFBO0FBa0ZOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmV0Y2hQcm9kdWN0cyB9IGZyb20gXCIuLi9VdGlscy9mZXRjaFByb2R1Y3RzXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdHMvUHJvZHVjdHNcIjtcbmltcG9ydCBTZWFyY2hQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoUHJvZHVjdHNcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3R5cGVzL2NvbXBvbmVudHMudHlwZXNcIjtcblxuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcbiAgY29uc3QgW2ZpbHRlcmVkUHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW3Byb2R1Y3RzUGVyUGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDYpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbG9hZEFsbFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hQcm9kdWN0cygpO1xuICAgICAgICBzZXRQcm9kdWN0cyhyZXN1bHQpO1xuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHJlc3VsdCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgICAgICAgc2V0RXJyb3IoKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvYWRBbGxQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVlcnkgfHwgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAgIChwcm9kdWN0KSA9PlxuICAgICAgICAgICAgcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgICBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGZpbHRlcmVkSXRlbXMpO1xuICAgICAgICBzZXRDdXJyZW50UGFnZSgxKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkZW50aWZpZXIpO1xuICAgIH1cbiAgfSwgW3F1ZXJ5LCBwcm9kdWN0c10pO1xuXG4gIGNvbnN0IGNoYW5nZVF1ZXJ5SGFuZGxlciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGxhc3RJbmRleE9mUHJvZHVjdHMgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZTtcbiAgY29uc3QgZmlyc3RJbmRleE9mUHJvZHVjdHMgPSBsYXN0SW5kZXhPZlByb2R1Y3RzIC0gcHJvZHVjdHNQZXJQYWdlO1xuICBjb25zdCBjdXJyZW50UHJvZHVjdHMgPSBmaWx0ZXJlZFByb2R1Y3RzLnNsaWNlKFxuICAgIGZpcnN0SW5kZXhPZlByb2R1Y3RzLFxuICAgIGxhc3RJbmRleE9mUHJvZHVjdHNcbiAgKTtcblxuICBjb25zdCBvblBhZ2luYXRlSGFuZGxlciA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgfTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8cCBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLCB3aWR0aDogXCIyMDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+TG9hZGluZyBwcm9kdWN0cy4uPC9wPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8cCBzdHlsZT17e2Rpc3BsYXk6XCJibG9ja1wiLCB3aWR0aDogXCI0MDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfX0+RXJyb3I6IHtlcnJvcn08L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaFByb2R1Y3RzIHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2VRdWVyeT17Y2hhbmdlUXVlcnlIYW5kbGVyfSAvPlxuICAgICAgPFByb2R1Y3RzIGN1cnJlbnRQcm9kdWN0cz17Y3VycmVudFByb2R1Y3RzfSAvPlxuICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RoID4gNiAmJiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgcHJvZHVjdHNBbW91bnQ9e2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RofVxuICAgICAgICAgIHByb2R1Y3RzUGVyUGFnZT17cHJvZHVjdHNQZXJQYWdlfVxuICAgICAgICAgIG9uUGFnaW5hdGU9e29uUGFnaW5hdGVIYW5kbGVyfVxuICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7ZmlsdGVyZWRQcm9kdWN0cy5sZW5ndGggPT09IDAgJiYgPGRpdj5Ob3RoaW5nIGZvdW5kPC9kaXY+fVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJQcm9kdWN0cyIsIlNlYXJjaFByb2R1Y3RzIiwiUGFnaW5hdGlvbiIsIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsInAiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwcm9kdWN0c1BlclBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibG9hZEFsbFByb2R1Y3RzIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwic2V0VGltZW91dCIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiY2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibmFtZSIsImNsZWFyVGltZW91dCIsImNoYW5nZVF1ZXJ5SGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsYXN0SW5kZXhPZlByb2R1Y3RzIiwiZmlyc3RJbmRleE9mUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdHMiLCJzbGljZSIsIm9uUGFnaW5hdGVIYW5kbGVyIiwicGFnZSIsInN0eWxlIiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luIiwib25DaGFuZ2VRdWVyeSIsInByb2R1Y3RzQW1vdW50Iiwib25QYWdpbmF0ZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});