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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchProducts */ \"./utils/fetchProducts.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/sharedStyles */ \"./styles/sharedStyles.tsx\");\n\n\n\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin: 0 auto;\\n  max-width: 900px;\\n  padding: 10px;\\n  background-color: #f5f5f5;\\n  border-radius: 15px;\\n\\n  @media (max-width: 991px) {\\n    max-width: 700px;\\n  }\\n\\n  @media (max-width: 767px) {\\n    max-width: 500px;\\n  }\\n\\n  @media (max-width: 414px) {\\n    max-width: 390px;\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar StyledProductDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.attrs(function() {\n    return {\n        // added for tests\n        role: \"product-details\"\n    };\n}).withConfig({\n    displayName: \"[productId]__StyledProductDetailsWrapper\",\n    componentId: \"sc-e8aa5906-0\"\n})(_templateObject());\n_c = StyledProductDetailsWrapper;\nvar StyledProductDescription = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n    displayName: \"[productId]__StyledProductDescription\",\n    componentId: \"sc-e8aa5906-1\"\n})(_templateObject1());\n_c1 = StyledProductDescription;\nvar ProductCard = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), productsDetails = _useState[0], setProductDetails = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), wrongIdError = _useState3[0], setWrongIdError = _useState3[1];\n    var productId = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)().query.productId;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var filterProductDetailsById = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                var result, parsedProductId, filteredProductDetails, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            return [\n                                4,\n                                (0,_utils_fetchProducts__WEBPACK_IMPORTED_MODULE_3__.fetchProducts)()\n                            ];\n                        case 1:\n                            result = _state.sent();\n                            if (productId) {\n                                parsedProductId = Number(productId);\n                                if (!isNaN(parsedProductId) && Number.isInteger(parsedProductId)) {\n                                    filteredProductDetails = result.find(function(item) {\n                                        return item.id === parsedProductId;\n                                    });\n                                    if (filteredProductDetails) {\n                                        setProductDetails(filteredProductDetails);\n                                    } else {\n                                        console.error(\"Product with id \".concat(parsedProductId, \" not found.\"));\n                                        setWrongIdError(\"Product with id \".concat(parsedProductId, \" not found.\"));\n                                    }\n                                } else {\n                                    // Handle case where productId is not a valid integer\n                                    console.log(\"Invalid productId: \".concat(productId));\n                                    setWrongIdError(\"Invalid productId: \".concat(productId));\n                                }\n                                setLoading(false);\n                            }\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error.message);\n                            setError(error.message);\n                            setLoading(false);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function filterProductDetailsById() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        filterProductDetailsById();\n    }, [\n        productId\n    ]);\n    var _ref = productsDetails || {}, category = _ref.category, name = _ref.name, price = _ref.price, currency = _ref.currency, description = _ref.description;\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: \"Loading product details..\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 87,\n            columnNumber: 12\n        }, _this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 91,\n            columnNumber: 12\n        }, _this);\n    }\n    if (wrongIdError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledError, {\n            children: [\n                \"Error: \",\n                wrongIdError\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 95,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductDetailsWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductCategory, {\n                    $fontSize: \"23px\",\n                    children: category\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductName, {\n                    $fontSize: \"23px\",\n                    children: [\n                        \" \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_sharedStyles__WEBPACK_IMPORTED_MODULE_5__.StyledProductPrice, {\n                    $margin: \"0 0 20px 0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: [\n                            currency,\n                            \" \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledProductDescription, {\n                    children: description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Vova\\\\Documents\\\\ChiliLabs_test\\\\chililabs_test\\\\pages\\\\card\\\\[productId].tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(ProductCard, \"arL2i7NYeXPpe0OfPtOvBgsnkvI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledProductDetailsWrapper\");\n$RefreshReg$(_c1, \"StyledProductDescription\");\n$RefreshReg$(_c2, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0VKOzRCQUFTOzRCQUFFRDs7Ozs7Ozs7Ozs7OzhCQUdoQiw4REFBQzVCOzhCQUEwQjhCOzs7Ozs7Ozs7Ozs7O0FBSW5DO0dBekVNNUI7O1FBS2tCWCxrREFBU0E7OztNQUwzQlc7QUEyRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC9bcHJvZHVjdElkXS50c3g/ZTEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZmV0Y2hQcm9kdWN0c1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBTdHlsZWRQcm9kdWN0Q2F0ZWdvcnksXHJcbiAgU3R5bGVkUHJvZHVjdE5hbWUsXHJcbiAgU3R5bGVkUHJvZHVjdFByaWNlLFxyXG4gIFN0eWxlZEVycm9yLFxyXG4gIFN0eWxlZExvYWRpbmdcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL3NoYXJlZFN0eWxlc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdHlwZXMvY29tcG9uZW50cy50eXBlc1wiO1xyXG5cclxuY29uc3QgU3R5bGVkUHJvZHVjdERldGFpbHNXcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycygoKSA9PiAoe1xyXG4gIC8vIGFkZGVkIGZvciB0ZXN0c1xyXG4gIHJvbGU6IFwicHJvZHVjdC1kZXRhaWxzXCIsXHJcbn0pKWBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAgIG1heC13aWR0aDogMzkwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUHJvZHVjdERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdENhcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzRGV0YWlscywgc2V0UHJvZHVjdERldGFpbHNdID0gdXNlU3RhdGU8UHJvZHVjdCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3dyb25nSWRFcnJvciwgc2V0V3JvbmdJZEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHsgcHJvZHVjdElkIH0gPSB1c2VSb3V0ZXIoKS5xdWVyeSBhcyB7IHByb2R1Y3RJZDogc3RyaW5nIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hQcm9kdWN0cygpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0SWQpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcnNlZFByb2R1Y3RJZCA9IE51bWJlcihwcm9kdWN0SWQpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VkUHJvZHVjdElkKSAmJiBOdW1iZXIuaXNJbnRlZ2VyKHBhcnNlZFByb2R1Y3RJZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0RGV0YWlscyA9IHJlc3VsdC5maW5kKFxyXG4gICAgICAgICAgICAgIChpdGVtOiBQcm9kdWN0KSA9PiBpdGVtLmlkID09PSBwYXJzZWRQcm9kdWN0SWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZFByb2R1Y3REZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgc2V0UHJvZHVjdERldGFpbHMoZmlsdGVyZWRQcm9kdWN0RGV0YWlscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUHJvZHVjdCB3aXRoIGlkICR7cGFyc2VkUHJvZHVjdElkfSBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgICAgICAgc2V0V3JvbmdJZEVycm9yKGBQcm9kdWN0IHdpdGggaWQgJHtwYXJzZWRQcm9kdWN0SWR9IG5vdCBmb3VuZC5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgcHJvZHVjdElkIGlzIG5vdCBhIHZhbGlkIGludGVnZXJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgcHJvZHVjdElkOiAke3Byb2R1Y3RJZH1gKTtcclxuICAgICAgICAgICAgc2V0V3JvbmdJZEVycm9yKGBJbnZhbGlkIHByb2R1Y3RJZDogJHtwcm9kdWN0SWR9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvcigoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbHRlclByb2R1Y3REZXRhaWxzQnlJZCgpO1xyXG4gIH0sIFtwcm9kdWN0SWRdKTtcclxuXHJcbiAgY29uc3QgeyBjYXRlZ29yeSwgbmFtZSwgcHJpY2UsIGN1cnJlbmN5LCBkZXNjcmlwdGlvbiB9ID1cclxuICAgIHByb2R1Y3RzRGV0YWlscyB8fCB7fTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8U3R5bGVkRXJyb3I+TG9hZGluZyBwcm9kdWN0IGRldGFpbHMuLjwvU3R5bGVkRXJyb3I+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPFN0eWxlZEVycm9yPkVycm9yOiB7ZXJyb3J9PC9TdHlsZWRFcnJvcj47XHJcbiAgfVxyXG5cclxuICBpZiAod3JvbmdJZEVycm9yKSB7XHJcbiAgICByZXR1cm4gPFN0eWxlZEVycm9yPkVycm9yOiB7d3JvbmdJZEVycm9yfTwvU3R5bGVkRXJyb3I+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRQcm9kdWN0RGV0YWlsc1dyYXBwZXI+XHJcbiAgICAgICAgPFN0eWxlZFByb2R1Y3RDYXRlZ29yeSAkZm9udFNpemU9XCIyM3B4XCI+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgPC9TdHlsZWRQcm9kdWN0Q2F0ZWdvcnk+XHJcbiAgICAgICAgPFN0eWxlZFByb2R1Y3ROYW1lICRmb250U2l6ZT1cIjIzcHhcIj4ge25hbWV9PC9TdHlsZWRQcm9kdWN0TmFtZT5cclxuICAgICAgICA8U3R5bGVkUHJvZHVjdFByaWNlICRtYXJnaW49XCIwIDAgMjBweCAwXCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge2N1cnJlbmN5fSB7cHJpY2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9TdHlsZWRQcm9kdWN0UHJpY2U+XHJcbiAgICAgICAgPFN0eWxlZFByb2R1Y3REZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9TdHlsZWRQcm9kdWN0RGVzY3JpcHRpb24+XHJcbiAgICAgIDwvU3R5bGVkUHJvZHVjdERldGFpbHNXcmFwcGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaFByb2R1Y3RzIiwic3R5bGVkIiwidXNlUm91dGVyIiwiU3R5bGVkUHJvZHVjdENhdGVnb3J5IiwiU3R5bGVkUHJvZHVjdE5hbWUiLCJTdHlsZWRQcm9kdWN0UHJpY2UiLCJTdHlsZWRFcnJvciIsIlN0eWxlZFByb2R1Y3REZXRhaWxzV3JhcHBlciIsImRpdiIsImF0dHJzIiwicm9sZSIsIlN0eWxlZFByb2R1Y3REZXNjcmlwdGlvbiIsInAiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RzRGV0YWlscyIsInNldFByb2R1Y3REZXRhaWxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwid3JvbmdJZEVycm9yIiwic2V0V3JvbmdJZEVycm9yIiwicHJvZHVjdElkIiwicXVlcnkiLCJmaWx0ZXJQcm9kdWN0RGV0YWlsc0J5SWQiLCJyZXN1bHQiLCJwYXJzZWRQcm9kdWN0SWQiLCJmaWx0ZXJlZFByb2R1Y3REZXRhaWxzIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0ludGVnZXIiLCJmaW5kIiwiaXRlbSIsImlkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJjYXRlZ29yeSIsIm5hbWUiLCJwcmljZSIsImN1cnJlbmN5IiwiZGVzY3JpcHRpb24iLCIkZm9udFNpemUiLCIkbWFyZ2luIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/card/[productId].tsx\n"));

/***/ })

});