"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card/[productId]",{

/***/ "./pages/card/[productId].tsx":
/*!************************************!*\
  !*** ./pages/card/[productId].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utils/fetchProducts */ \"./Utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/sharedStyles */ \"./styles/sharedStyles.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 auto;\\n  max-width: 900px;\\n  padding: 10px;\\n  background-color: #f5f5f5;\\n  border-radius: 15px;\\n\\n  @media (max-width: 991px) {\\n    max-width: 700px;\\n  }\\n\\n  @media (max-width: 767px) {\\n    max-width: 500px;\\n  }\\n\\n  @media (max-width: 414px) {\\n    grid-template-columns: repeat(1, 1fr);\\n    grid-gap: 20px 0;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.attrs(function() {\n    return {\n        // added for tests\n        role: \"product-details\"\n    };\n}).withConfig({\n    displayName: \"[productId]__StyledProductDetailsWrapper\",\n    componentId: \"sc-b29acb6b-0\"\n})(_templateObject());\n_c = StyledProductDetailsWrapper;\nvar StyledProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"[productId]__StyledProductDescription\",\n    componentId: \"sc-b29acb6b-1\"\n})(_templateObject1());\n_c1 = StyledProductDescription;\nvar ProductCard = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), productsDetails = _useState[0], setProductDetails = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), wrongIdError = _useState3[0], setWrongIdError = _useState3[1];\n    var productId = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query.productId;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var filterProductDetailsById = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, parsedProductId, filteredProductDetails, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_Utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            if (productId) {\n                                parsedProductId = Number(productId);\n                                if (!isNaN(parsedProductId) && Number.isInteger(parsedProductId)) {\n                                    filteredProductDetails = result.find(function(item) {\n                                        return item.id === parsedProductId;\n                                    });\n                                    if (filteredProductDetails) {\n                                        setProductDetails(filteredProductDetails);\n                                    } else {\n                                        console.error(\"Product with id \".concat(parsedProductId, \" not found.\"));\n                                        setWrongIdError(\"Product with id \".concat(parsedProductId, \" not found.\"));\n                                    }\n                                } else {\n                                    // Handle case where productId is not a valid integer\n                                    console.log(\"Invalid productId: \".concat(productId));\n                                    setWrongIdError(\"Invalid productId: \".concat(productId));\n                                }\n                                setLoading(false);\n                            }\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function filterProductDetailsById() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        filterProductDetailsById();\n    }, [\n        productId\n    ]);\n    var _ref = productsDetails || {}, category = _ref.category, name = _ref.name, price = _ref.price, currency = _ref.currency, description = _ref.description;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: \"Loading products..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 87,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 91,\n            columnNumber: 12\n        }, _this);\n    }\n    if (wrongIdError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: [\n                \"Error: \",\n                wrongIdError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 95,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductDetailsWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductCategory, {\n                    $fontSize: \"23px\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductName, {\n                    $fontSize: \"23px\",\n                    children: [\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductPrice, {\n                    $margin: \"0 0 20px 0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            currency,\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductDescription, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductCard, \"arL2i7NYeXPpe0OfPtOvBgsnkvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledProductDetailsWrapper\");\n$RefreshReg$(_c1, \"StyledProductDescription\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Sjs0QkFBUzs0QkFBRUQ7Ozs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUMzQjs4QkFBMEI2Qjs7Ozs7Ozs7Ozs7OztBQUluQztHQXpFTTVCOztRQUtrQlYsa0RBQVNBOzs7TUFMM0JVO0FBMkVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmQvW3Byb2R1Y3RJZF0udHN4P2UxMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmZXRjaFByb2R1Y3RzIH0gZnJvbSBcIi4uLy4uL1V0aWxzL2ZldGNoUHJvZHVjdHNcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkUHJvZHVjdENhdGVnb3J5LFxyXG4gIFN0eWxlZFByb2R1Y3ROYW1lLFxyXG4gIFN0eWxlZFByb2R1Y3RQcmljZSxcclxuICBTdHlsZWRFcnJvcixcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL3NoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHlwZXMvY29tcG9uZW50cy50eXBlc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkUHJvZHVjdERldGFpbHNXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycygoKSA9PiAoe1xyXG4gIC8vIGFkZGVkIGZvciB0ZXN0c1xyXG4gIHJvbGU6IFwicHJvZHVjdC1kZXRhaWxzXCIsXHJcbn0pKWBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMjBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFByb2R1Y3REZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzRGV0YWlscywgc2V0UHJvZHVjdERldGFpbHNdID0gdXNlU3RhdGU8UHJvZHVjdCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3dyb25nSWRFcnJvciwgc2V0V3JvbmdJZEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSB1c2VSb3V0ZXIoKS5xdWVyeSBhcyB7IHByb2R1Y3RJZDogc3RyaW5nIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0SWQpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcnNlZFByb2R1Y3RJZCA9IE51bWJlcihwcm9kdWN0SWQpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkUHJvZHVjdElkKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHBhcnNlZFByb2R1Y3RJZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0RGV0YWlscyA9IHJlc3VsdC5maW5kKFxyXG4gICAgICAgICAgICAgIChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBwYXJzZWRQcm9kdWN0SWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZFByb2R1Y3REZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdERldGFpbHMoZmlsdGVyZWRQcm9kdWN0RGV0YWlscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUHJvZHVjdCB3aXRoIGlkICR7cGFyc2VkUHJvZHVjdElkfSBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgICAgICAgc2V0V3JvbmdJZEVycm9yKGBQcm9kdWN0IHdpdGggaWQgJHtwYXJzZWRQcm9kdWN0SWR9IG5vdCBmb3VuZC5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgcHJvZHVjdElkIGlzIG5vdCBhIHZhbGlkIGludGVnZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgcHJvZHVjdElkOiAke3Byb2R1Y3RJZH1gKTtcclxuICAgICAgICAgICAgc2V0V3JvbmdJZEVycm9yKGBJbnZhbGlkIHByb2R1Y3RJZDogJHtwcm9kdWN0SWR9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvcigoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbHRlclByb2R1Y3REZXRhaWxzQnlJZCgpO1xyXG4gIH0sIFtwcm9kdWN0SWRdKTtcclxuXHJcbiAgY29uc3QgeyBjYXRlZ29yeSwgbmFtZSwgcHJpY2UsIGN1cnJlbmN5LCBkZXNjcmlwdGlvbiB9ID1cclxuICAgIHByb2R1Y3RzRGV0YWlscyB8fCB7fTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8U3R5bGVkRXJyb3I+TG9hZGluZyBwcm9kdWN0cy4uPC9TdHlsZWRFcnJvcj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8U3R5bGVkRXJyb3I+RXJyb3I6IHtlcnJvcn08L1N0eWxlZEVycm9yPjtcclxuICB9XHJcblxyXG4gIGlmICh3cm9uZ0lkRXJyb3IpIHtcclxuICAgIHJldHVybiA8U3R5bGVkRXJyb3I+RXJyb3I6IHt3cm9uZ0lkRXJyb3J9PC9TdHlsZWRFcnJvcj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZFByb2R1Y3REZXRhaWxzV3JhcHBlcj5cclxuICAgICAgICA8U3R5bGVkUHJvZHVjdENhdGVnb3J5ICRmb250U2l6ZT1cIjIzcHhcIj5cclxuICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICA8L1N0eWxlZFByb2R1Y3RDYXRlZ29yeT5cclxuICAgICAgICA8U3R5bGVkUHJvZHVjdE5hbWUgJGZvbnRTaXplPVwiMjNweFwiPiB7bmFtZX08L1N0eWxlZFByb2R1Y3ROYW1lPlxyXG4gICAgICAgIDxTdHlsZWRQcm9kdWN0UHJpY2UgJG1hcmdpbj1cIjAgMCAyMHB4IDBcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Y3VycmVuY3l9IHtwcmljZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1N0eWxlZFByb2R1Y3RQcmljZT5cclxuICAgICAgICA8U3R5bGVkUHJvZHVjdERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1N0eWxlZFByb2R1Y3REZXNjcmlwdGlvbj5cclxuICAgICAgPC9TdHlsZWRQcm9kdWN0RGV0YWlsc1dyYXBwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoUHJvZHVjdHMiLCJzdHlsZWQiLCJ1c2VSb3V0ZXIiLCJTdHlsZWRQcm9kdWN0Q2F0ZWdvcnkiLCJTdHlsZWRQcm9kdWN0TmFtZSIsIlN0eWxlZFByb2R1Y3RQcmljZSIsIlN0eWxlZEVycm9yIiwiU3R5bGVkUHJvZHVjdERldGFpbHNXcmFwcGVyIiwiZGl2IiwiYXR0cnMiLCJyb2xlIiwiU3R5bGVkUHJvZHVjdERlc2NyaXB0aW9uIiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0c0RldGFpbHMiLCJzZXRQcm9kdWN0RGV0YWlscyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIndyb25nSWRFcnJvciIsInNldFdyb25nSWRFcnJvciIsInByb2R1Y3RJZCIsInF1ZXJ5IiwiZmlsdGVyUHJvZHVjdERldGFpbHNCeUlkIiwicmVzdWx0IiwicGFyc2VkUHJvZHVjdElkIiwiZmlsdGVyZWRQcm9kdWN0RGV0YWlscyIsIk51bWJlciIsImlzTmFOIiwiaXNJbnRlZ2VyIiwiZmluZCIsIml0ZW0iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiY2F0ZWdvcnkiLCJuYW1lIiwicHJpY2UiLCJjdXJyZW5jeSIsImRlc2NyaXB0aW9uIiwiJGZvbnRTaXplIiwiJG1hcmdpbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/card/[productId].tsx\n"));

/***/ })

});